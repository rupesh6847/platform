// import { useState } from 'react';
// import { Coffee, Heart, UserCheck, Users } from 'lucide-react';
// import ApplyLeave from './ApplyLeave';
// import ViewAttendance from './ViewAttendance';
// import LeaveSummary from './LeaveSummary';
// import MonthCalendar from './MonthCalendar';

// const stats = [
//   {
//     title: 'Total Present Today',
//     value: '253',
//     subtext: 'out of 257 employees',
//     icon: UserCheck,
//     color: 'text-green-600',
//     bgColor: 'bg-green-50',
//   },
//   {
//     title: 'On Casual Leave',
//     value: '8',
//     subtext: '2 pending approval',
//     icon: Users,
//     color: 'text-blue-600',
//     bgColor: 'bg-blue-50',
//   },
//   {
//     title: 'On Sick Leave',
//     value: '4',
//     subtext: '1 pending approval',
//     icon: Heart,
//     color: 'text-red-600',
//     bgColor: 'bg-red-50',
//   },
//   {
//     title: 'On Break',
//     value: '12',
//     subtext: 'Currently active',
//     icon: Coffee,
//     color: 'text-orange-600',
//     bgColor: 'bg-orange-50',
//   },
// ];

// const quickActions = [
//   { label: 'Apply Leave', id: 'apply-leave' },
//   { label: 'View My Attendance', id: 'view-attendance' },
//   { label: 'Leave Summary', id: 'leave-summary' },
//   { label: 'Calendar', id: 'calendar' },
// ];

// const AttendanceLayout = () => {
//   const [activeSection, setActiveSection] = useState('apply-leave');

//   const handleQuickAction = (actionId) => {
//     setActiveSection(activeSection === actionId ? null : actionId);
//   };

//   const renderActiveSection = () => {
//     switch (activeSection) {
//       case 'apply-leave':
//         return <ApplyLeave />;
//       case 'view-attendance':
//         return <ViewAttendance />;
//       case 'leave-summary':
//         return <LeaveSummary />;
//       case 'calendar':
//         return <MonthCalendar />;

//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div key={index} className="border rounded-2xl bg-white">
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
//     </div>
//   );
// };

// export default AttendanceLayout;


import { useEffect, useState } from 'react';
import { Coffee, Heart, UserCheck, Users } from 'lucide-react';
import ApplyLeave from './ApplyLeave';
import ViewAttendance from './ViewAttendance';
import LeaveSummary from './LeaveSummary';
import MonthCalendar from './MonthCalendar';

const AttendanceLayout = () => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('apply-leave');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch('http://localhost:3000/leaves/summary');
        const data = await res.json();
        setStatsData(data);
      } catch (error) {
        console.error('Error fetching attendance summary:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const quickActions = [
    { label: 'Apply Leave', id: 'apply-leave' },
    { label: 'View My Attendance', id: 'view-attendance' },
    { label: 'Leave Summary', id: 'leave-summary' },
    { label: 'Calendar', id: 'calendar' },
  ];

  const handleQuickAction = (actionId) => {
    setActiveSection(activeSection === actionId ? null : actionId);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'apply-leave':
        return <ApplyLeave />;
      case 'view-attendance':
        return <ViewAttendance />;
      case 'leave-summary':
        return <LeaveSummary />;
      case 'calendar':
        return <MonthCalendar />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading attendance summary...
      </div>
    );
  }

  if (!statsData) {
    return (
      <div className="text-center py-10 text-red-600">
        Failed to load summary.
      </div>
    );
  }

  const stats = [
    {
      title: 'Total Present Today',
      value: statsData.totalPresent,
      subtext: `out of ${statsData.totalEmployees} employees`,
      icon: UserCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'On Casual Leave',
      value: statsData.onCasualLeave,
      subtext: '',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'On Sick Leave',
      value: statsData.onSickLeave,
      subtext: '',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'On Break',
      value: statsData.onBreak,
      subtext: 'Currently active',
      icon: Coffee,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="border rounded-2xl bg-white">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-gray-500">{stat.subtext}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions Section */}
      <div className="border rounded-2xl border-gray-200 bg-white px-5 py-6 mb-10">
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Quick Actions</h1>
        </div>
        <div className="flex gap-3 flex-wrap">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.id)}
              className={`rounded-2xl border px-6 py-3 transition-colors ${
                activeSection === action.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Section Content */}
      {renderActiveSection()}
    </div>
  );
};

export default AttendanceLayout;


