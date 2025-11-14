// import { useState } from 'react';
// import { Coffee, Heart, Plus, UserCheck, Users } from 'lucide-react';
// import BriefsFilterTableLayout from './BriefsFilterTableLayout';
// import { Drawer } from '../../lib/Drawer';
// import { BriefBuilder } from './AllBriefs/BriefBuilder/BriefBuilder';

// const stats = [
//   {
//     title: 'Total Briefs',
//     value: '120',
//     subtext: '',
//     icon: UserCheck,
//     color: 'text-green-600',
//     bgColor: 'bg-green-50',
//   },
//   {
//     title: 'Pending',
//     value: '36',
//     subtext: '',
//     icon: Users,
//     color: 'text-blue-600',
//     bgColor: 'bg-blue-50',
//   },
//   {
//     title: 'In Progress',
//     value: '36',
//     subtext: '',
//     icon: Heart,
//     color: 'text-red-600',
//     bgColor: 'bg-red-50',
//   },
//   {
//     title: 'Completed',
//     value: '36',
//     subtext: '',
//     icon: Coffee,
//     color: 'text-orange-600',
//     bgColor: 'bg-orange-50',
//   },
// ];

// const quickActions = [
//   { label: 'Total Briefs', id: 'total-briefs' },
//   { label: 'Pending Briefs', id: 'pending-briefs' },
//   { label: 'In Progress', id: 'in-progress' },
//   { label: 'Complete', id: 'complete' },
//   { label: 'Recent Update', id: 'recent-update' },
// ];

// const BriefsLayout = () => {
//   const [activeSection, setActiveSection] = useState('total-briefs');
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleQuickAction = (actionId) => {
//     setActiveSection(activeSection === actionId ? null : actionId);
//   };

//   const renderActiveSection = () => {
//     switch (activeSection) {
//       case 'total-briefs':
//         return <BriefsFilterTableLayout />;

//       case 'pending-briefs':
//         return <BriefsFilterTableLayout />;

//       case 'in-progress':
//         return <BriefsFilterTableLayout />;

//       case 'complete':
//         return <BriefsFilterTableLayout />;

//       case 'recent-update':
//         return <BriefsFilterTableLayout />;

//       default:
//         return null;
//     }
//   };
//   const handleCreateBriefClick = () => {
//     setIsDrawerOpen(true);
//   };
//   return (
//     <div>
//       <div className="mb-6 flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Brief Queue</h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Here you can explore the status of your Brief with Revknew Media
//           </p>
//         </div>

//         <div>
//           <button
//             onClick={handleCreateBriefClick}
//             className="flex items-center gap-2 rounded-lg border p-3 text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition"
//           >
//             <Plus size={14} /> Create Brief
//           </button>
//         </div>
//       </div>
//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div key={index} className=" border rounded-2xl bg-white">
//               <div className="p-6">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
//                     <p className="text-xs text-gray-500">{stat.subtext}</p>
//                   </div>
//                   <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
//                     <Icon className="w-6 h-6" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Quick Actions Section */}
//       <div className="border rounded-2xl border-gray-200 bg-white px-5 py-6 mb-10">
//         <div className="mb-4">
//           <h1 className="text-xl font-semibold text-gray-900">Quick Actions</h1>
//         </div>
//         <div>
//           <div className="flex gap-3 flex-wrap">
//             {quickActions.map((action, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleQuickAction(action.id)}
//                 className={`rounded-2xl border px-6 py-3 transition-colors ${
//                   activeSection === action.id
//                     ? 'border-blue-500 bg-blue-50 text-blue-700'
//                     : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
//                 }`}
//               >
//                 {action.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Dynamic Section Content */}
//       {renderActiveSection()}

//       {/* Drawer */}
//       {isDrawerOpen && (
//         <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
//           <BriefBuilder />
//         </Drawer>
//       )}
//     </div>
//   );
// };

// export default BriefsLayout;
