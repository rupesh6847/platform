import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import AppTooltip from '../../lib/Tooltip';
import { Slicestring } from '../../lib/Slicestring';
import BriefDetail from './BriefDetail';
import { Drawer } from '../../lib/Drawer';

export default function BriefsTable() {
  const [briefs, setBriefs] = useState([]);
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    fetchBriefs();
  }, []);

  const fetchBriefs = async () => {
    try {
      const res = await fetch('http://192.168.29.121:3000/briefs');
      const response = await res.json();
      setBriefs(response.data || []);
    } catch (err) {
      console.error('Error fetching briefs:', err);
    }
  };

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

      <div className="overflow-x-auto rounded border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50">
        <table className="min-w-full text-xs">
          <thead className="border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50">
            <tr>
              {['Client Code', 'Brief Name', 'Arrived On', 'Due Date', 'Status', 'Priority', 'Assigned To', 'Type'].map(
                (header) => (
                  <th key={header} className="p-4 text-left font-semibold text-gray-700 dark:text-gray-300">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-white/10">
            {briefs.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/70 dark:hover:bg-gray-800/60 cursor-pointer py-4"
                onClick={() => handleRowClick(row)}
              >
                <td className="p-2 text-center">{row.leadDetails?.[0]?.clientCode}</td>
                <td className="p-2 w-[200px] truncate">
                  <AppTooltip message={row.name}>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {Slicestring(row.name, 1, 25)}
                      {row.name.length > 25 && '...'}
                    </span>
                  </AppTooltip>
                </td>
                <td className="p-2 text-center">{new Date(row.arrivedOn).toLocaleDateString()}</td>
                <td className="p-2 text-center">{new Date(row.due).toLocaleDateString()}</td>
                <td className="p-2 text-center">{row.status}</td>
                <td className="p-2 text-center">{row.leadDetails?.[0]?.priority}</td>
                <td className="p-2 text-center">{row.leadDetails?.[0]?.assignedTo?.join(', ')}</td>
                <td className="p-2 text-center">{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDrawerOpen && (
        <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
          <BriefDetail brief={selectedBrief} />
        </Drawer>
      )}
    </>
  );
}
