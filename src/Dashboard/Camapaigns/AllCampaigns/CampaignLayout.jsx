import { useEffect, useState } from 'react';
import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';
import { Plus, ListFilter, Search, SlidersHorizontal, X } from 'lucide-react';
import CampaignBuilder from './CampaignBuilder/CampaignBuilder';
import { Drawer } from '../../../lib/Drawer';
import CampaignTable from './CampaignTable';

const tabs = [
  'New',
  'Due Today',
  'Overdue',
  'Upcoming',
  'Recently Update',
  'Active',
  'Completed',
  'Paused',
  'All',
  'Retouch',
];

export default function CampaignLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [allCampaigns, setAllCamapigns] = useState([]);
  // const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [filterNameCount, setFilterNameCount] = useState({
    name: '',
    count: 0,
  });

  useEffect(() => {
    fetchData();
  }, [filterNameCount.name, search]);

  const fetchData = async () => {
    const res = await fetch(
      `http://192.168.29.121:3000/campaigns?filter=${encodeURIComponent(filterNameCount.name)}&search=${search}`
    );

    const response = await res.json();

    setAllCamapigns(response.data);

    setFilterNameCount({
      name: filterNameCount.name,
      count: response.data.length,
    });
  };

  const handleCreateCampaignClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <PageMeta title="Programs" description="This is Programs page." />
      <PageBreadcrumb pageTitle="Programs" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/5 lg:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Program Queue</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Here you can explore the status of your programs with Revknew Media
            </p>
          </div>

          <div>
            <button
              onClick={handleCreateCampaignClick}
              className="flex items-center gap-2 rounded-lg border p-3 text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <Plus size={14} /> Create Program
            </button>
          </div>
        </div>

        {/* <CampaignTabs selected={selectedTab} onSelect={setSelectedTab} /> */}

        <div>
          <div
            className="flex flex-wrap items-center gap-2 px-3 
                    sm:gap-3 sm:px-4   md:gap-4 md:px-3 border-b border-gray-200 dark:border-gray-700"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  // setFilter(tab)
                  setFilterNameCount({ name: tab, count: 0 });
                }}
                className={`pb-3 text-xs sm:text-sm font-medium transition-colors duration-150 
      ${
        filterNameCount.name === tab
          ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
          : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
      }`}
              >
                <div className="flex items-center whitespace-nowrap">
                  <span>{tab}</span>
                  <span
                    className={`ml-1 rounded-full px-2 text-[10px] sm:text-xs
          ${
            filterNameCount.name === tab
              ? 'bg-gray-200 text-black dark:bg-gray-600 dark:text-white'
              : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
          }`}
                  >
                    {/* {filterNameCount.count} */}
                    {filterNameCount.name === tab ? filterNameCount.count : 0}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <SlidersHorizontal className="text-gray-500 h-4 w-4" />
              <span className="font-medium">{filterNameCount.name}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="relative">
              <input
                className="appearance-none   pl-10   hover:border-gray-400 transition-colors       leading-tight   focus:border-gray-600  w-full sm:w-80 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 p-3 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
              {/* <div className="absolute right-0 inset-y-0 flex items-center">
                <X className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" />
              </div> */}

              <div className="absolute left-0 inset-y-0 flex items-center">
                <Search className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t pt-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <ListFilter className="text-gray-500 h-4 w-4" />
              <span className="font-medium">Filters:</span>
              <span className="text-gray-500 dark:text-gray-400">No filters currently active</span>
            </div>

            <button
              type="button"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Clear all
            </button>
          </div>

          <CampaignTable tableData={allCampaigns} />

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-400 gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="pageSize">Page Size:</label>
              <select
                id="pageSize"
                className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 dark:focus:ring-blue-600"
              >
                <option>10</option>
                <option>20</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled
                className="border rounded-md px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                «
              </button>
              <span>Page 1 of 2</span>
              <button className="border rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">»</button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
          <CampaignBuilder />
        </Drawer>
      )}
    </>
  );
}
