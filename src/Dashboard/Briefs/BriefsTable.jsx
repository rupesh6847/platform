import { useState } from 'react';
import { Clock, Download, FileText, Globe, Watch } from 'lucide-react';
import AppTooltip from '../../lib/Tooltip';

import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
import { Slicestring } from '../../lib/Slicestring';

const tableData = [
  {
    id: '1',
    clientCode: 'PH',
    briefName: 'Q1 Lead Generation Campaign',
    arrivedOn: '2025-01-15',
    arrivedOnIST: 'Jun 17, 2025, 14:49',
    dueAt: 'Due 1pm (UK)',
    dueDate: '2025-10-31T13:00:00',
    lastUpdated: 'Sept 30, 2025, 21:09 PM',
    status: 'Completed',
    priority: 'High',
    assignedTo: 'Sarah Johnson',
    type: 'Lead Gen',

    // Lead Details
    leadType: '—',
    regions: ['APAC', 'LATAM'],
    audiences: ['E-Commerce', 'Product'],
    qualifierJobTitle: 'Manager+',
    qualifierEmployeeSize: 'N/A',
    qualifierIndustrySector: 'All',
    qualifierOthers: '10-CPC',
    profilers: 'N/A',
    deadline: '12 weeks',
    fileAttached: 'TAL',

    // Quote Timeline
    quoteUpdates: [
      {
        date: 'Jun 17, 2025, 2:49 PM',
        volume: 3300,
        leadCounts: {
          st: 1200,
          stPlusQ: 800,
          stPlusQQ: 600,
          dt: 450,
          dtPlusQ: 300,
          dtPlusQQ: 200,
          bant: 150,
        },
      },
      {
        date: 'July 8, 2025, 22:05 PM',
        volume: 5000,
        note: "New TALs for this, attached, including TAL's for DACH. Can I get a volume per TAL for ST and DT?",
        leadCounts: {
          st: 1400,
          stPlusQ: 950,
          stPlusQQ: 710,
          dt: 520,
          dtPlusQ: 350,
          dtPlusQQ: 240,
          bant: 180,
        },
      },
      {
        date: 'Aug 7, 2025, 21:25 PM',
        volume: 1515,
        note: "We've been given updated TALs for APAC and DACH, can I get fresh volumes?",
        leadCounts: {
          st: 1600,
          stPlusQ: 1100,
          stPlusQQ: 820,
          dt: 600,
          dtPlusQ: 410,
          dtPlusQQ: 280,
          bant: 210,
        },
      },
      {
        date: 'Sept 30, 2025, 21:09 PM',
        volume: 200,
        note: "We've been given a TAL for UK, can I get a volume vs this.",
      },
    ],

    leadTypes: ['Email', 'BANT', 'MQL'],
    segmentQuotes: [
      { segment: 'Healthcare', leadsQuoted: 500 },
      { segment: 'Technology', leadsQuoted: 750 },
      { segment: 'Finance', leadsQuoted: 250 },
    ],
    campaign: 'Spring 2025',
    remarks: 'Client approved final quote',
    briefLink: 'https://example.com/brief/1',
  },
];

function BriefDrawer({ brief, open, setOpen }) {
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();

  const x = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] });
    const xStart = typeof x.get() === 'number' ? x.get() : 0;
    await animate('#drawer', { x: [xStart, width] });
    setOpen(false);
  };
  console.log(brief);
  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-100 bg-black/60"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-full w-full max-w-4xl overflow-hidden bg-white dark:bg-neutral-900 "
            style={{ x }}
            drag="x"
            dragControls={controls}
            onDragEnd={() => {
              if (x.get() >= 100) handleClose();
            }}
            dragListener={false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0.5, right: 0 }}
          >
            {/* Drag Handle */}
            <div className="absolute left-0 top-[50%] z-10 flex justify-center bg-neutral-900/10 p-3">
              <button
                onPointerDown={(e) => controls.start(e)}
                className="h-10 w-2 cursor-grab rounded-full bg-neutral-400 active:cursor-grabbing"
              ></button>
            </div>

            {/* Drawer Content */}
            {/* Drawer Content */}
            <div className="relative z-0 h-full overflow-y-auto p-6 space-y-6">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {brief?.briefName}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Client Code:{' '}
                    <span className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {brief?.clientCode}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>Last Updated: {brief.lastUpdated}</span>
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid grid-cols-12 gap-6">
                {/* Basic Information */}
                <div className="col-span-12 xl:col-span-6">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6  space-y-4">
                    <h1 className="font-semibold text-gray-800 dark:text-white text-lg mb-4">
                      Basic Information
                    </h1>

                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                      {[
                        {
                          label: 'Arrived On (IST):',
                          value: brief.arrivedOnIST || brief.arrivedOn,
                        },
                        {
                          label: 'Due At (UK Time):',
                          value: brief.dueAt || 'N/A',
                        },
                        { label: 'Status:', value: brief.status },
                        { label: 'Priority:', value: brief.priority },
                        { label: 'Assigned To:', value: brief.assignedTo },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-3"
                        >
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {item.label}
                          </span>
                          <span className="text-sm text-gray-800 dark:text-gray-200">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lead Details */}
                <div className="col-span-12 xl:col-span-6">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6  space-y-4">
                    <h1 className="font-semibold text-gray-800 dark:text-white text-lg mb-4">
                      Lead Details
                    </h1>

                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                      {[
                        { label: 'Lead Type:', value: brief.leadType || '—' },
                        {
                          label: 'Qualifier (MQL): Job Title:',
                          value: brief.qualifierJobTitle || 'N/A',
                        },
                        {
                          label: 'Qualifier (MQL): Employee Size:',
                          value: brief.qualifierEmployeeSize || 'N/A',
                        },
                        {
                          label: 'Qualifier (MQL): Industry:',
                          value: brief.qualifierIndustrySector || 'N/A',
                        },
                        {
                          label: 'Qualifier: Other(s):',
                          value: brief.qualifierOthers || 'N/A',
                        },
                        {
                          label: 'Profiler(s):',
                          value: brief.profilers || 'N/A',
                        },
                        {
                          label: 'Deadline / Timeframe:',
                          value: brief.deadline || 'N/A',
                        },
                        {
                          label: 'File attached:',
                          value: brief.fileAttached || 'N/A',
                          icon: <FileText className="h-3 w-3" />,
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-start py-3"
                        >
                          <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            {item.icon}
                            {item.label}
                          </span>
                          <span className="text-sm text-right text-gray-800 dark:text-gray-200">
                            {item.value}
                          </span>
                        </div>
                      ))}

                      {brief.regions?.length > 0 && (
                        <div className="flex justify-between items-start py-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            <Globe className="h-3 w-3" /> Regions:
                          </span>
                          <span className="text-sm text-right text-gray-800 dark:text-gray-200">
                            {brief.regions.join(', ')}
                          </span>
                        </div>
                      )}

                      {brief.audiences?.length > 0 && (
                        <div className="flex justify-between items-start py-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Audience(s):
                          </span>
                          <span className="text-sm text-right text-gray-800 dark:text-gray-200">
                            {brief.audiences.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quotes Timeline */}
                <div className="col-span-12">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6  space-y-6">
                    <h1 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2 text-lg">
                      <Watch /> Quotes Timeline
                    </h1>

                    <div className="space-y-6">
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-md mr-2 text-sm">
                          1st Quoted
                        </span>
                        Jun 17, 2025, 2:49 PM
                      </p>

                      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Volume:{' '}
                        <span className="text-indigo-600 font-bold">3,300</span>
                      </h1>

                      <div className="space-y-3">
                        <h4 className="text-md font-medium text-gray-700 dark:text-gray-200">
                          Lead Count Details:
                        </h4>

                        <div className="grid grid-cols-12 gap-4 md:gap-6">
                          {[
                            {
                              label: 'ST',
                              value: '1,200',
                              color: 'bg-indigo-50 text-indigo-800',
                            },
                            {
                              label: 'ST+ PQ',
                              value: '800',
                              color: 'bg-green-50 text-green-800',
                            },
                            {
                              label: 'ST+ QQ',
                              value: '600',
                              color: 'bg-pink-50 text-pink-800',
                            },
                            {
                              label: 'BANT',
                              value: '150',
                              color: 'bg-yellow-50 text-yellow-800',
                            },
                            {
                              label: 'DT',
                              value: '450',
                              color: 'bg-blue-50 text-blue-800',
                            },
                            {
                              label: 'DT+ PQ',
                              value: '300',
                              color: 'bg-purple-50 text-purple-800',
                            },
                            {
                              label: 'DT+ QQ',
                              value: '200',
                              color: 'bg-rose-50 text-rose-800',
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className={`col-span-6 md:col-span-4 xl:col-span-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-center ${item.color}`}
                            >
                              <p className="font-medium">{item.label}</p>
                              <p className="text-lg font-semibold">
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="col-span-12">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-6">
                    <h1 className="font-semibold text-gray-800 dark:text-white text-lg mb-4">
                      Additional Information
                    </h1>

                    {brief.campaign && (
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">Campaign</div>
                        <div className="text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                          {brief.campaign}
                        </div>
                      </div>
                    )}

                    {brief.remarks && (
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">Remarks</div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                          {brief.remarks}
                        </div>
                      </div>
                    )}

                    {brief.briefLink && (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Brief Link</div>
                        <button
                          className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-gray-800 dark:text-gray-200"
                          onClick={() => window.open(brief.briefLink, '_blank')}
                        >
                          <FileText className="h-4 w-4" />
                          Open Brief
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default function BriefsTable() {
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleRowClick = (brief) => {
    setSelectedBrief(brief);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button className="flex items-center gap-2 rounded-lg text-xs border p-2">
          <Download size={14} />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50">
        <table className="min-w-full text-xs">
          <thead className="border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50">
            <tr>
              {[
                'Client Code',
                'Brief Name',
                'Arrived On',
                'Due Date',
                'Last Updated',
                'Status',
                'Priority',
                'Assigned To',
                'Type',
              ].map((header) => (
                <th
                  key={header}
                  className="p-4 text-left font-semibold text-gray-700 dark:text-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-white/10 ">
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/70 dark:hover:bg-gray-800/60 cursor-pointer py-4 "
                onClick={() => handleRowClick(row)}
              >
                <td className="p-2 text-center">{row.clientCode}</td>
                <td className="p-2 w-[200px] truncate">
                  <AppTooltip message={row.briefName}>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {Slicestring(row.briefName, 1, 25)}
                      {row.briefName.length > 25 && '...'}
                    </span>
                  </AppTooltip>
                </td>
                <td className="p-2 text-center">{row.arrivedOn}</td>
                <td className="p-2 text-center">{row.dueDate}</td>
                <td className="p-2 text-center">{row.lastUpdated}</td>
                <td className="p-2 text-center">{row.status}</td>
                <td className="p-2 text-center">{row.priority}</td>
                <td className="p-2 text-center">{row.assignedTo}</td>
                <td className="p-2 text-center">{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drawer (Framer Motion) */}
      <BriefDrawer
        brief={selectedBrief}
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
      />
    </>
  );
}
