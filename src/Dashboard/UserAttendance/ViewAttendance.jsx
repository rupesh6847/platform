import { Clock } from "lucide-react";
import Chart from "react-apexcharts";

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
  const options = {
    colors: ["#3b82f6"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 3, colors: ["transparent"] },
    xaxis: {
      categories: attendanceData.map((d) => d.day),
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      title: { text: "Hours" },
      min: 0,
      max: 10,
      tickAmount: 5,
    },
    grid: {
      yaxis: { lines: { show: true } },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (val) => `${val} hrs`,
      },
    },
  };

  const series = [
    {
      name: "Hours Worked",
      data: attendanceData.map((d) => d.hours),
    },
  ];

  return (
    <div className="mt-6 space-y-6">
      {/* Top Summary Cards */}
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
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
            <Chart options={options} series={series} type="bar" height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAttendance;
