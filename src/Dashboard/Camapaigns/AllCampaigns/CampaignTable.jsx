import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../../components/ui/table';
import AppTooltip from '../../../lib/Tooltip';
import { StatusBadge } from '../../../components/ui/badge/StatusBadge';
import { Slicestring } from '../../../lib/Slicestring';

export default function CampaignTable({ tableData }) {
  return (
    <>
      <div className="overflow-x-auto rounded  border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50">
        <Table className="min-w-full">
          {/* Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50">
            <TableRow>
              {[
                'Program',
                'Reference',
                'Status',
                'Total',
                'Accepted',
                'Remaining',
                'Assign To',
                'Overdue',
                'Action',
              ].map((header) => (
                <th
                  key={header}
                  className="p-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap cursor-pointer"
                  onClick={() => filterChange(header)}
                >
                  <AppTooltip message={header}>
                    <span>{header}</span>
                  </AppTooltip>
                </th>
              ))}
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/10 text-xs">
            {tableData?.map((row, i) => (
              <TableRow key={i} className="hover:bg-gray-50/70 dark:hover:bg-gray-800/60">
                <TableCell className="p-2 w-[200px]">
                  <AppTooltip message={row.name}>
                    <p className="font-medium text-gray-800 dark:text-white truncate">
                      {Slicestring(row.name, 1, 25)}
                      {row.name.length > 25 && '...'}
                    </p>
                  </AppTooltip>
                </TableCell>

                <TableCell className="p-2 ">
                  <AppTooltip message={`${row.client.name}/${row.code}`}>
                    <span>
                      {row.client.name}/{row.code}
                    </span>
                  </AppTooltip>
                </TableCell>

                <TableCell className="p-2 ">
                  <StatusBadge status={row.status} />
                </TableCell>

                <TableCell className="p-2 ">{row.leadgoal}</TableCell>
                <TableCell className="p-2 ">{row.completed}</TableCell>
                <TableCell className="p-2 ">{row.pending}</TableCell>
                <TableCell className="p-2 "> {row.assignTo?.length ? row.assignTo.join(', ') : '-'}</TableCell>
                <TableCell className="p-2 ">{row.duedate}</TableCell>

                <TableCell className="p-2 ">
                  <Link to={`/campaigns/${row.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
