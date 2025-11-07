import { Link } from 'react-router-dom';
import { StatusBadge } from '../../components/ui/badge/StatusBadge';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Slicestring } from '../../lib/slicestring';
import AppTooltip from '../../lib/Tooltip';

const tableData = [
  {
    id: 1,
    program: 'Legrand Cabinets & Containment | Q4 Campaign',
    type: 'Campaign',
    assignedto: 'You & Rahul',
    level: 'urgent',
    remark: '35 leads by 5.00 PM (IST)',
    progress: 'Not Started',
  },
  {
    id: 2,
    program: '29846592635926',
    type: 'Brief',
    assignedto: 'You & Vijay',
    level: 'Very Urgent',
    remark: 'Completed by 5.30 PM (IST)',
    progress: 'Completed',
  },
];

export default function TodayTasks() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/3 sm:px-6">
      {/* === Header === */}
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Task for today:
        </h3>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3">
            Filter
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-theme-sm font-medium text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3">
            See all
          </button>
        </div>
      </div>

      {/* === Table === */}
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-y border-gray-100 dark:border-gray-800">
            <TableRow>
              {[
                'Task',
                'Type',
                'Assign To',
                'Level',
                'Remark',
                'Progress',
                'Action',
              ].map((header) => (
                <TableCell
                  key={header}
                  isHeader
                  className="py-3 font-medium text-gray-800 text-start text-theme-xs dark:text-gray-400"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="py-3 w-[250px] max-w-[250px] text-gray-700 text-xs dark:text-gray-300 truncate">
                  <AppTooltip message={task.program}>
                    <div className="truncate cursor-pointer text-sm font-medium text-zinc-800 dark:text-gray-200">
                      {Slicestring(task.program, 1, 25)}
                      {task.program.length > 25 && '...'}
                    </div>
                  </AppTooltip>
                </TableCell>

                <TableCell className="py-3 text-gray-500 text-xs dark:text-gray-400">
                  {task.type}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-xs dark:text-gray-400">
                  {task.assignedto}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-xs dark:text-gray-400">
                  <StatusBadge status={task.level} />
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-xs dark:text-gray-400">
                  {/* {task.remark} */}

                  <AppTooltip message={task.remark}>
                    <div className="truncate cursor-pointer text-sm font-medium text-zinc-800 dark:text-gray-200">
                      {Slicestring(task.remark, 1, 25)}
                      {task.remark.length > 25 && '...'}
                    </div>
                  </AppTooltip>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-xs dark:text-gray-400">
                  {task.progress}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-xs dark:text-gray-400">
                  <Link
                    to={`/tasks/1`}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Work
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
