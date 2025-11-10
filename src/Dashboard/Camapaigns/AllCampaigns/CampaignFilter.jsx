// import { ListFilter, Search, SlidersHorizontal, X } from 'lucide-react';
// import CampaignTable from './CampaignTable';

// export default function CampaignFilter() {
//   return (
//     <div className="mt-4 space-y-4">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-3">
//         <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
//           <SlidersHorizontal className="text-gray-500 h-4 w-4" />
//           <span className="font-medium">Overdue</span>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//         <div className="relative">
//           <input
//             className="appearance-none   pl-10   hover:border-gray-400 transition-colors       leading-tight   focus:border-gray-600  w-full sm:w-80 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 p-3 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
//             id="username"
//             type="text"
//             placeholder="Search..."
//           />
//           <div className="absolute right-0 inset-y-0 flex items-center">
//             <X className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" />
//           </div>

//           <div className="absolute left-0 inset-y-0 flex items-center">
//             <Search className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t pt-3 text-sm">
//         <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
//           <ListFilter className="text-gray-500 h-4 w-4" />
//           <span className="font-medium">Filters:</span>
//           <span className="text-gray-500 dark:text-gray-400">
//             No filters currently active
//           </span>
//         </div>

//         <button
//           type="button"
//           className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
//         >
//           Clear all
//         </button>
//       </div>
//       <CampaignTable />
//     </div>
//   );
// }
