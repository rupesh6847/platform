// export default function BriefsFilter() {
//   return (
//     <div className="rounded border border-gray-200 bg-white p-2   dark:border-gray-800 dark:bg-white/5 sm:p-3">
//       {/* === Header === */}
//       <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//         <h3 className=" font-semibold text-gray-800 dark:text-white/90">Filters</h3>
//         <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
//           Clear
//         </button>
//       </div>

//       {/* === Filter Inputs === */}
//       <div className="space-y-4">
//         {/* Client Code */}
//         <div className="flex flex-col gap-1">
//           <label className="text-xs font-medium text-gray-600 dark:text-gray-300">Client Code</label>
//           <select className="rounded-lg border border-gray-300 bg-white p-2 text-xs text-gray-800   focus:ring-1 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ">
//             <option value="all">All Clients</option>
//             <option value="PH">PH</option>
//             <option value="LPM">LPM</option>
//             <option value="CRJ">CRJ</option>
//           </select>
//         </div>

//         {/* Status */}
//         <div className="flex flex-col gap-1">
//           <label className="text-xs font-medium text-gray-600 dark:text-gray-300">Status</label>
//           <select className="rounded-lg border border-gray-300 bg-white p-2 text-xs text-gray-800   focus:ring-1 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ">
//             <option value="all">All Status</option>
//             <option value="pending">Pending</option>
//             <option value="inprogress">In Progress</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         {/* Priority */}
//         <div className="flex flex-col gap-1">
//           <label className="text-xs font-medium text-gray-600 dark:text-gray-300">Priority</label>
//           <select className="rounded-lg border border-gray-300 bg-white p-2 text-xs text-gray-800   focus:ring-1 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ">
//             <option value="all">All Priorities</option>
//             <option value="high">High</option>
//             <option value="medium">Medium</option>
//             <option value="low">Low</option>
//           </select>
//         </div>

//         {/* Assigned To */}
//         <div className="flex flex-col gap-1">
//           <label className="text-xs font-medium text-gray-600 dark:text-gray-300">Assigned To</label>
//           <select className="rounded-lg border border-gray-300 bg-white p-2 text-xs text-gray-800   focus:ring-1 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ">
//             <option value="all">All Team Members</option>
//             <option value="user1">User 1</option>
//             <option value="user2">User 2</option>
//             <option value="user3">User 3</option>
//           </select>
//         </div>

//         {/* Date By */}
//         <div className="flex flex-col gap-1">
//           <label className="text-xs font-medium text-gray-600 dark:text-gray-300">Date By</label>
//           <select className="rounded-lg border border-gray-300 bg-white p-2 text-xs text-gray-800   focus:ring-1 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ">
//             <option value="today">Today</option>
//             <option value="thisweek">This Week</option>
//             <option value="thismonth">This Month</option>
//             <option value="custom">Custom</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }
