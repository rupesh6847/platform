import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../components/ui/table';
import AppTooltip from '../../../lib/Tooltip';
import { Slicestring } from '../../../lib/slicestring';
import { StatusBadge } from '../../../components/ui/badge/StatusBadge';
import { useEffect, useState } from 'react';

// const tableData = [
//   {
//     program: 'Legrand Cabinets & Containment | Q4 Campaign',
//     programType: 'Email Campaign',
//     reference: 'LPM/NA/16107',
//     status: 'Active',
//     total: 75,
//     accepted: 0,
//     remaining: 0,
//     working: 0,
//     assignTo: 'John Doe',
//     pocs: 1,
//     overdueBy: '0 days',
//   },
//   {
//     program: 'Legrand Cabinets & Containment | Q4 Campaign',
//     programType: 'Email Campaign',
//     reference: 'LPM/NA/16108',
//     status: 'Paused',
//     total: 50,
//     accepted: 10,
//     remaining: 20,
//     working: 5,
//     assignTo: 'Jane Smith',
//     pocs: 2,
//     overdueBy: '2 days',
//   },
//   {
//     program: 'Legrand Cabinets & Containment | Q4 Campaign',
//     programType: 'Email Campaign',
//     reference: 'LPM/NA/16109',
//     status: 'Active',
//     total: 100,
//     accepted: 25,
//     remaining: 60,
//     working: 10,
//     assignTo: 'John Doe',
//     pocs: 1,
//     overdueBy: '0 days',
//   },
// ];

export default function CampaignTable() {



  const [allCampaigns, setAllCamapigns] = useState([])


  useEffect(() => {
    fetchData()
  }, [])



  const fetchData = async () => {
    const res = await fetch("http://192.168.29.121:3000/campaigns");
    const response = await res.json();

    console.log(response.data, "allCampaigns")
    setAllCamapigns(response.data)
  }















  // useEffect(()=>{







  //   fetch("http://localhost:3000/campaigns").then((res)=>{
  //     const data = req.json().then((res) =>{
  //       setAllCamapigns(res.data)
  //     })
  //   })
  // },[])






  return (
    <>
      {/* Table Container */}
      <div className="overflow-x-auto rounded  border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50">
        <Table className="min-w-full">
          {/* Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800/50">
            <TableRow>
              {[
                'Program',
                // 'Type',
                'Reference',
                'Status',
                'Total',
                'Accepted',
                'Remaining',
                // 'Working',
                'Assign To',
                // 'POCs',
                'Overdue',
                'Action',
              ].map((header) => (
                <th
                  key={header}
                  className="p-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
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
            {allCampaigns?.map((row, i) => (
              <TableRow
                key={i}
                className="hover:bg-gray-50/70 dark:hover:bg-gray-800/60"
              >
                <TableCell className="p-2 w-[200px]">
                  <AppTooltip message={row.name}>
                    <p className="font-medium text-gray-800 dark:text-white truncate">
                      {Slicestring(row.name, 1, 25)}
                      {row.name.length > 25 && '...'}
                    </p>
                  </AppTooltip>
                </TableCell>

                {/* <TableCell className="p-2 ">{row.programType}</TableCell> */}

                <TableCell className="p-2 ">
                  <AppTooltip message={`${row.client.name}/${row.code}`}>
                    <span>{row.client.name}/{row.code}</span>
                  </AppTooltip>
                </TableCell>

                <TableCell className="p-2 ">
                  <StatusBadge status={row.status} />
                </TableCell>

                <TableCell className="p-2 ">{row.leadgoal}</TableCell>
                <TableCell className="p-2 ">{row.completed}</TableCell>
                <TableCell className="p-2 ">{row.pending}</TableCell>
                {/* <TableCell className="p-2 ">{row.working}</TableCell> */}
                <TableCell className="p-2 "> {row.assignTo?.length
                  ? row.assignTo.join(", ")
                  : "-"}</TableCell>
                {/* <TableCell className="p-2 ">{row.pocs}</TableCell> */}
                <TableCell className="p-2 ">{row.duedate}</TableCell>

                <TableCell className="p-2 ">
                  <Link
                    to={`/campaigns/${row.id}`}
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

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-400 gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="pageSize">Page Size:</label>
          <select
            id="pageSize"
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400 dark:focus:ring-blue-600"
          >
            <option>10</option>
            <option>20</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled
            className="border rounded-md px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
          >
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
