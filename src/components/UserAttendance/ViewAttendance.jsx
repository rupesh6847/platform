import { Clock } from "lucide-react";

const attendanceData = [
  { day: "Mon", hours: 8.5 },
  { day: "Tue", hours: 9.0 },
  { day: "Wed", hours: 8.0 },
  { day: "Thu", hours: 8.5 },
  { day: "Fri", hours: 7.5 },
  { day: "Sat", hours: 4.0 },
  { day: "Sun", hours: 0.0 },
];
const ViewAttendance = () => {
  const SimpleBarChart = () => {
    const maxHours = Math.max(...attendanceData.map((d) => d.hours));

    return (
      <div className="space-y-4">
        {attendanceData.map((day, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 text-sm text-gray-600">{day.day}</div>
            <div className="flex-1">
              <div
                className="bg-blue-500 h-6 rounded-lg transition-all duration-500"
                style={{ width: `${(day.hours / maxHours) * 100}%` }}
              />
            </div>
            <div className="w-12 text-sm font-medium text-gray-900">
              {day.hours}h
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="hover:shadow-md transition-shadow border rounded-2xl bg-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600">Login Time</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">9:05 AM</h3>
          <p className="text-xs text-gray-500 mt-1">Today, Oct 23, 2025</p>
        </div>

        <div className="hover:shadow-md transition-shadow border rounded-2xl bg-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <p className="text-sm text-gray-600">Logout Time</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">6:15 PM</h3>
          <p className="text-xs text-gray-500 mt-1">Expected</p>
        </div>

        <div className="hover:shadow-md transition-shadow border rounded-2xl bg-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Break Duration</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">45 min</h3>
          <p className="text-xs text-gray-500 mt-1">Total today</p>
        </div>
      </div>

      <div className="border rounded-2xl bg-white p-6">
        <h2 className="text-xl font-semibold mb-6">Weekly Attendance Trend</h2>
        <SimpleBarChart />
      </div>
    </div>
  );
};

export default ViewAttendance;
