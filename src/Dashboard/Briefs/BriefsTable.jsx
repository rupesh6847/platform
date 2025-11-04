import { useState } from 'react';
import { Clock, Download, FileText, Globe, Watch } from 'lucide-react';
import AppTooltip from '../../lib/Tooltip';
import { Slicestring } from '../../lib/slicestring';
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

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
            className="absolute right-0 top-0 h-full w-full max-w-4xl overflow-hidden bg-white dark:bg-neutral-900 shadow-xl"
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
            <div className="relative z-0 h-full overflow-y-scroll p-3 pt-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {brief?.briefName}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Client Code:{' '}
                    <span className="px-2 py-1 border rounded-lg">
                      {brief?.clientCode}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Last Updated: {brief.lastUpdated}</span>
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-6">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-4 mb-10">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Basic Information
                    </h1>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Arrived On (IST):
                        </span>
                        <span className="text-sm">
                          {brief.arrivedOnIST || brief.arrivedOn}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Due At (UK Time):
                        </span>
                        <span className="text-sm">{brief.dueAt || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Status:</span>
                        {brief.status}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Priority:</span>
                        {brief.status}
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-600">
                          Assigned To:
                        </span>
                        <span className="text-sm">{brief.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xl:col-span-6">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-4 mb-10">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Lead Details
                    </h1>

                    <div className="space-y-2">
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Lead Type:
                        </span>
                        <span className="text-sm text-right">
                          {brief.leadType || '—'}
                        </span>
                      </div>
                      {brief.regions && brief.regions.length > 0 && (
                        <div className="flex justify-between items-start py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600 flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            Regions:
                          </span>
                          <span className="text-sm text-right">
                            {brief.regions.join(', ')}
                          </span>
                        </div>
                      )}
                      {brief.audiences && brief.audiences.length > 0 && (
                        <div className="flex justify-between items-start py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">
                            Audience(s):
                          </span>
                          <span className="text-sm text-right">
                            {brief.audiences.join(', ')}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Qualifier (MQL): Job Title:
                        </span>
                        <span className="text-sm text-right">
                          {brief.qualifierJobTitle || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Qualifier (MQL): Employee Size:
                        </span>
                        <span className="text-sm text-right">
                          {brief.qualifierEmployeeSize || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Qualifier (MQL): Industry:
                        </span>
                        <span className="text-sm text-right">
                          {brief.qualifierIndustrySector || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Qualifier: Other(s):
                        </span>
                        <span className="text-sm text-right">
                          {brief.qualifierOthers || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Profiler(s):
                        </span>
                        <span className="text-sm text-right">
                          {brief.profilers || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">
                          Deadline / Timeframe:
                        </span>
                        <span className="text-sm text-right">
                          {brief.deadline || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between items-start py-2">
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          File attached:
                        </span>
                        <span className="text-sm text-right">
                          {brief.fileAttached || 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 mb-10 ">
                    <h1 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-8 text-lg">
                      <Watch /> Quotes Timeline
                    </h1>

                    <div className="space-y-6">
                      {/* Timeline Info */}
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

                      {/* Lead Count Section */}
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
                            label: 'AB',
                            value: '900',
                            color: 'bg-green-50 text-green-800',
                          },
                          {
                            label: 'CD',
                            value: '600',
                            color: 'bg-pink-50 text-pink-800',
                          },
                          {
                            label: 'EF',
                            value: '400',
                            color: 'bg-yellow-50 text-yellow-800',
                          },
                          {
                            label: 'GH',
                            value: '300',
                            color: 'bg-blue-50 text-blue-800',
                          },
                          {
                            label: 'IJ',
                            value: '200',
                            color: 'bg-purple-50 text-purple-800',
                          },
                          {
                            label: 'KL',
                            value: '150',
                            color: 'bg-rose-50 text-rose-800',
                          },
                          {
                            label: 'MN',
                            value: '100',
                            color: 'bg-teal-50 text-teal-800',
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className={`col-span-12 xl:col-span-3 p-2 border  transition-all ${item.color}`}
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

                <div className="col-span-12">
                  <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-4 mb-10">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      Additional Information
                    </h1>

                    <div className="space-y-6">
                      {brief.campaign && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">
                            Campaign
                          </div>
                          <div className="text-sm">{brief.campaign}</div>
                        </div>
                      )}
                      {brief.remarks && (
                        <div>
                          <div className="text-sm text-gray-600 mb-1">
                            Remarks
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg text-sm">
                            {brief.remarks}
                          </div>
                        </div>
                      )}
                      {brief.briefLink && (
                        <div>
                          <div className="text-sm text-gray-600 mb-2">
                            Brief Link
                          </div>
                          <button
                            className="border p-2 border-gray-400 flex items-center gap-2 rounded-lg"
                            onClick={() =>
                              window.open(brief.briefLink, '_blank')
                            }
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Open Brief
                          </button>
                        </div>
                      )}
                    </div>
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
