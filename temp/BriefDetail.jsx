// import { Clock, FileText, Watch } from 'lucide-react';
// import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// import 'jspreadsheet-ce/dist/jspreadsheet.css';
// import 'jsuites/dist/jsuites.css';
// import { useRef } from 'react';
// import { QuotesUpload } from './QuotesUpload';

// const BriefDetail = ({ brief }) => {
//   const leadSheetRef = useRef(null);
//   return (
//     <div className="relative z-0 h-full overflow-y-auto p-6 space-y-6">
//       <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{brief.name}</h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//             Client Code:{' '}
//             <span className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
//               {brief.leadDetails?.[0]?.clientCode}
//             </span>
//           </p>
//         </div>

//         <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//           <Clock className="h-4 w-4" />
//           <span>Last Updated: {brief.arrivedOn}</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-12 gap-6">
//         {/* Basic Information */}
//         <div className="col-span-12 xl:col-span-6 space-y-4">
//           <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-4">
//             <h1 className="font-semibold text-gray-800 dark:text-white text-lg mb-4">Basic Information</h1>

//             <div className="divide-y divide-gray-100 dark:divide-gray-700">
//               {[
//                 {
//                   label: 'Arrived On:',
//                   value: new Date(brief.arrivedOn).toLocaleString(),
//                 },
//                 {
//                   label: 'Due Date:',
//                   value: new Date(brief.due).toLocaleString(),
//                 },
//                 { label: 'Status:', value: brief.status },
//                 { label: 'Priority:', value: brief.leadDetails?.[0]?.priority },
//                 {
//                   label: 'Assigned To:',
//                   value: brief.leadDetails?.[0]?.assignedTo?.join(', ') || 'N/A',
//                 },
//                 { label: 'Type:', value: brief.type },
//               ].map((item, i) => (
//                 <div key={i} className="flex justify-between items-center py-3">
//                   <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
//                   <span className="text-sm text-gray-800 dark:text-gray-200">{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ✅ Lead Count Details with Data Loaded */}
//           <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-4">
//             {brief.leadDetails?.map((ld, index) => {
//               const lcd = ld.leadCountDetails || {};
//               const regions = Object.keys(lcd);

//               const allHeaders = new Set();
//               regions.forEach((r) => {
//                 Object.keys(lcd[r] || {}).forEach((h) => allHeaders.add(h));
//               });

//               const headers = ['Region', ...Array.from(allHeaders)];

//               const data = regions.map((region) => {
//                 const row = [region, ...headers.slice(1).map((h) => lcd[region]?.[h] || '')];
//                 return row;
//               });

//               const columns = headers.map((h) => ({
//                 title: h,
//                 width: 120,
//               }));

//               return (
//                 <div key={index} className="py-4 space-y-2">
//                   <h3 className="font-semibold text-lg">Lead Count Details</h3>

//                   <Spreadsheet ref={leadSheetRef} tabs={false}>
//                     <Worksheet data={data} columns={columns} minDimensions={[2, 2]} />
//                   </Spreadsheet>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Lead Details HTML */}
//         <div className="col-span-12 xl:col-span-6">
//           <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-4">
//             <h1 className="font-semibold text-gray-800 dark:text-white text-lg mb-4">Lead Details</h1>

//             {brief.leadDetails?.map((ld, i) => (
//               <div key={i} className="py-4 space-y-2">
//                 <div dangerouslySetInnerHTML={{ __html: ld.detailsHtml }} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quotes Timeline */}
//         <div className="col-span-12">
//           <QuotesUpload brief={brief} />
//         </div>

//         {/* Additional Info */}
//         <div className="col-span-12">
//           <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-6">
//             {brief.remark && (
//               <div className="space-y-1">
//                 <div className="text-sm text-gray-500">Remarks</div>
//                 <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm text-gray-800 dark:text-gray-200">
//                   {brief.remark}
//                 </div>
//               </div>
//             )}

//             {brief.briefHyperlink && (
//               <div className="space-y-2">
//                 <div className="text-sm text-gray-500">Brief Link</div>
//                 <button
//                   className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-gray-800 dark:text-gray-200"
//                   onClick={() => window.open(brief.briefHyperlink, '_blank')}
//                 >
//                   <FileText className="h-4 w-4" />
//                   Open Brief
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BriefDetail;
