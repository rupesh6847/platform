// const tabs = [
//   'New',
//   'Due Today',
//   'Overdue',
//   'Upcoming',
//   'Recently Update',
//   'Active',
//   'Completed',
//   'Paused',
//   'All',
//   'Retouch',
// ];

// export default function CampaignTabs({ selected, onSelect }) {
//   return (
//     <div>
//       <div
//         className="flex flex-wrap items-center gap-2 px-3 
//                     sm:gap-3 sm:px-4   md:gap-4 md:px-3 border-b border-gray-200 dark:border-gray-700"
//       >
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => onSelect(tab)}
//             className={`pb-3 text-xs sm:text-sm font-medium transition-colors duration-150 
//               ${
//                 selected === tab
//                   ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
//                   : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
//               }`}
//           >
//             <div className="flex items-center whitespace-nowrap">
//               <span>{tab}</span>
//               <span
//                 className={`ml-1 rounded-full px-2 text-[10px] sm:text-xs
//                   ${
//                     selected === tab
//                       ? 'bg-gray-200 text-black dark:bg-gray-600 dark:text-white'
//                       : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
//                   }`}
//               >
//                 0
//               </span>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
