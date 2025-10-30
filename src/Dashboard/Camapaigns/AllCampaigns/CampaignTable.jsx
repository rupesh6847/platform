import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const tableData = [
  {
    program: "Legrand Cabinets & Containment | Q4 Campaign",
    programType: "Email Campaign",
    reference: "LPM/NA/16107",
    status: "Active",
    total: 75,
    accepted: 0,
    remaining: 0,
    working: 0,
    assignTo: "John Doe",
    pocs: 1,
    overdueBy: "0 days",
  },
];

export default function CampaignTable() {
  return (
    <>
      <div className="overflow-  rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-gray-800/20">
              <TableRow>
                {[
                  "Program",
                  "Type",
                  "Reference",
                  "Status",
                  "Total",
                  "Accepted",
                  "Remaining",
                  "Working",
                  "Assign To",
                  "POCs",
                  "Overdue",
                  "Action",
                ].map((header) => (
                  <TableCell
                    key={header}
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-xs uppercase dark:text-gray-400"
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
              {tableData.map((row, i) => (
                <TableRow key={row.reference || i}>
                  <TableCell className="px-5 py-3 text-gray-700 dark:text-gray-300 font-medium">
                    {row.program}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">
                    {row.programType}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">
                    {row.reference}
                  </TableCell>
                  <TableCell className="px-5 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-3">{row.total}</TableCell>
                  <TableCell className="px-5 py-3">{row.accepted}</TableCell>
                  <TableCell className="px-5 py-3">{row.remaining}</TableCell>
                  <TableCell className="px-5 py-3">{row.working}</TableCell>
                  <TableCell className="px-5 py-3">{row.assignTo}</TableCell>
                  <TableCell className="px-5 py-3">{row.pocs}</TableCell>
                  <TableCell className="px-5 py-3">{row.overdueBy}</TableCell>
                  <TableCell className="px-5 py-3">
                    <Link
                      to={`/campaigns/1`}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-400 gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="pageSize">Page Size:</label>
          <select
            id="pageSize"
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
          >
            <option>10</option>
            <option>20</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button className="border rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            «
          </button>
          <span>Page 1 of 2</span>
          <button className="border rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            »
          </button>
        </div>
      </div>
    </>
  );
}
