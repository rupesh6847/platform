import { Slicestring } from "../../lib/slicestring";
import AppTooltip from "../../lib/Tooltip";

const tableData = [
  {
    id: 1,
    program: "Legrand Cabinets & Containment | Q4 Campaign",
    type: "Campaign",
    assignedto: "You & Rahul",
    level: "urgent",
    remark: "35 leads by 5.00 PM (IST)",
    progress: "Not Started",
  },
  {
    id: 2,
    program: "29846592635926",
    type: "Brief",
    assignedto: "You & Vijay",
    level: "Very Urgent",
    remark: "Completed by 5.30 PM (IST)",
    progress: "Completed",
  },
  {
    id: 2,
    program: "29846592635926",
    type: "Brief",
    assignedto: "You & Vijay",
    level: "Very Urgent",
    remark: "Completed by 5.30 PM (IST)",
    progress: "Completed",
  },
];

export default function CompletedTasks() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 sm:p-6">
      {/* === Header === */}
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Task Completed:
        </h3>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3">
            See all
          </button>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {tableData.map((task) => {
          return (
            <div className="flex items-center justify-between" key={task.id}>
              <div className="flex items-center gap-3">
                <div>
                  <AppTooltip message={task.program}>
                    <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                      {/* {task.program} */}
                      {Slicestring(task.program, 1, 40)}
                      {task.program.length > 40 && "..."}
                    </p>
                  </AppTooltip>
                  <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                    {task.type}
                  </span>
                </div>
              </div>

              <div className="flex w-full max-w-[140px] items-center gap-3">
                <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                  <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
                </div>
                <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  79%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
