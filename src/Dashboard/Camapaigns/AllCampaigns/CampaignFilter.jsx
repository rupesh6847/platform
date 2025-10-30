import { ListFilter, SlidersHorizontal } from "lucide-react";
import CampaignTable from "./CampaignTable";

export default function CampaignFilter() {
  return (
    <div className="mt-4 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-3">
        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <SlidersHorizontal className="text-gray-500 h-4 w-4" />
          <span className="font-medium">Overdue</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="Search Campaign"
          className="w-full sm:w-80 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t pt-3 text-sm">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <ListFilter className="text-gray-500 h-4 w-4" />
          <span className="font-medium">Filters:</span>
          <span className="text-gray-500 dark:text-gray-400">
            No filters currently active
          </span>
        </div>

        <button
          type="button"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          Clear all
        </button>
      </div>
      {/* <CampaignTable/> */}
    </div>
  );
}
