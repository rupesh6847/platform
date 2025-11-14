import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../../components/ui/table';
import AppTooltip from '../../../lib/Tooltip';
import { Slicestring } from '../../../lib/Slicestring';
import { StatusBadge } from '../../../components/ui/badge/StatusBadge';

export default function BriefTable({ tableData }) {
  return (
    <div className="overflow-x-auto rounded border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50">
      <Table className="min-w-full">
        {/* Header */}
        <TableHeader className="border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50">
          <TableRow>
            {[
              'Client Code',
              'Brief Name',
              'Arrived On',
              'Due Date',
              'Status',
              'Priority',
              'Assigned To',
              'Type',
              'Action',
            ].map((header) => (
              <th
                key={header}
                className="p-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap cursor-pointer"
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
          {tableData?.length > 0 ? (
            tableData.map((row, i) => (
              <TableRow key={i} className="hover:bg-gray-50/70 dark:hover:bg-gray-800/60">
                <TableCell className="p-2">{row.leadDetails?.[0]?.clientCode || '-'}</TableCell>

                <TableCell className="p-2">
                  <AppTooltip message={row.name}>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {Slicestring(row.name, 1, 25)}
                      {row.name?.length > 25 && '...'}
                    </span>
                  </AppTooltip>
                </TableCell>

                <TableCell className="p-2">
                  {row.arrivedOn ? new Date(row.arrivedOn).toLocaleDateString() : '-'}
                </TableCell>

                <TableCell className="p-2">{row.due ? new Date(row.due).toLocaleDateString() : '-'}</TableCell>

                <TableCell className="p-2">
                  <StatusBadge status={row.status} />
                </TableCell>

                <TableCell className="p-2">{row.leadDetails?.[0]?.priority || '-'}</TableCell>

                <TableCell className="p-2">{row.leadDetails?.[0]?.assignedTo?.join(', ') || '-'}</TableCell>

                <TableCell className="p-2">{row.type || '-'}</TableCell>

                <TableCell className="p-2">
                  <Link to={`/briefs/${row.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} className="text-center p-4 text-gray-500 dark:text-gray-400">
                No briefs found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
