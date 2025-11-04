import { CheckCircle2, XCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

const leaveHistory = [
  {
    id: 1,
    type: 'Casual Leave',
    from: 'Oct 15, 2025',
    to: 'Oct 16, 2025',
    status: 'Approved',
    reason: 'Personal work',
  },
  {
    id: 2,
    type: 'Sick Leave',
    from: 'Oct 5, 2025',
    to: 'Oct 5, 2025',
    status: 'Approved',
    reason: 'Flu',
  },
  {
    id: 3,
    type: 'Casual Leave',
    from: 'Sep 20, 2025',
    to: 'Sep 22, 2025',
    status: 'Rejected',
    reason: 'Family vacation',
    rejectionReason: 'Peak project period',
  },
];
const LeaveSummary = () => {
  const leaveTypes = [
    {
      label: 'Casual Leave',
      available: 8,
      total: 12,
      color: 'bg-blue-500',
    },
    {
      label: 'Sick Leave',
      available: 10,
      total: 12,
      color: 'bg-red-500',
    },
    // {
    //   label: 'Annual Leave',
    //   available: 15,
    //   total: 20,
    //   color: 'bg-green-500',
    // },
    {
      label: 'Unpaid Leave',
      available: 5,
      total: 5,
      color: 'bg-gray-500',
    },
  ];

  const ProgressBar = ({ percentage }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-blue-500 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );

  const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
      switch (status) {
        case 'Approved':
          return 'bg-green-100 text-green-800 border-green-200';
        case 'Rejected':
          return 'bg-red-100 text-red-800 border-red-200';
        default:
          return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles()}`}
      >
        {status === 'Approved' && (
          <CheckCircle2 className="w-3 h-3 inline mr-1" />
        )}
        {status === 'Rejected' && <XCircle className="w-3 h-3 inline mr-1" />}
        {status}
      </span>
    );
  };

  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {leaveTypes.map((leave, index) => {
          const percentage = (leave.available / leave.total) * 100;
          return (
            <div
              key={index}
              className="hover:shadow-md transition-shadow border rounded-2xl bg-white p-6"
            >
              <p className="text-sm text-gray-600 mb-3">{leave.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {leave.available}/{leave.total}
              </h3>
              <ProgressBar percentage={percentage} />
              <p className="text-xs text-gray-500 mt-2">
                {leave.available} days remaining
              </p>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/5">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Type
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  From
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  To
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Reason
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
              {leaveHistory.map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {leave.type}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {leave.from}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {leave.to}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {leave.reason}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <StatusBadge status={leave.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LeaveSummary;
