// // // import { Watch } from 'lucide-react';
// // // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // // import 'jsuites/dist/jsuites.css';
// // // import { useRef, useState } from 'react';

// // // export const QuotesUpload = ({ brief }) => {
// // //   const leadSheetRef = useRef(null);

// // //   const [leadSheetInstance, setLeadSheetInstance] = useState(null);
// // //   const [quotesDetailsCount, setquotesDetailsCount] = useState(1);
// // //   const [loading, setLoading] = useState(false);

// // //   const buildDynamicObject = (headers, row) => {
// // //     const obj = {};
// // //     headers.forEach((header, i) => {
// // //       if (i === 0) return;
// // //       const val = row[i];
// // //       obj[header] = val === '' || val === null || val === undefined ? '' : isNaN(val) ? val : Number(val);
// // //     });
// // //     return obj;
// // //   };

// // //   const handleUploadJSON = async () => {
// // //     setLoading(true);

// // //     const allLeadCountDetails = [];

// // //     try {
// // //       if (leadSheetInstance) {
// // //         const sheet = leadSheetInstance.worksheets[0];
// // //         const rawData = sheet.getData();

// // //         if (rawData.length > 1) {
// // //           const headers = rawData[0];
// // //           const rows = rawData.slice(1);

// // //           rows.forEach((row) => {
// // //             if (row[0]) {
// // //               const region = row[0];
// // //               allLeadCountDetails.push({
// // //                 [region]: buildDynamicObject(headers, row),
// // //               });
// // //             }
// // //           });
// // //         }
// // //       }

// // //       const quotesDetails = [];
// // //       for (let i = 0; i < quotesDetailsCount; i++) {
// // //         quotesDetails.push({
// // //           quotes: allLeadCountDetails[i] || {},
// // //         });
// // //       }

// // //       const jsonData = {
// // //         ...formData,
// // //         quotesDetails,
// // //       };

// // //       const response = await fetch('http://localhost:3000/briefs', {
// // //         method: 'PUT',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(jsonData),
// // //       });

// // //       if (!response.ok) throw new Error('Upload failed');
// // //     } catch (error) {
// // //       console.error('Upload failed:', error);
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-6">
// // //       <h1 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2 text-lg">
// // //         <Watch /> Quotes Timeline
// // //       </h1>

// // //       <h3 className="mt-10 mb-2 font-semibold text-lg">Lead Count Details</h3>
// // //       <div className="  p-3">
// // //         <Spreadsheet ref={leadSheetRef} tabs={false} onload={(i) => setLeadSheetInstance(i)}>
// // //           <Worksheet title="LeadCount" minDimensions={[5, 3]} />
// // //         </Spreadsheet>
// // //       </div>

// // //       <button
// // //         onClick={handleUploadJSON}
// // //         disabled={loading}
// // //         className={`mt-10 px-6 py-3 rounded-lg text-white w-full sm:w-auto ${
// // //           loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600'
// // //         }`}
// // //       >
// // //         {loading ? 'Updating...' : 'Update'}
// // //       </button>

// // //       {brief.quotes?.map((q, i) => (
// // //         <div key={i} className="space-y-4 border-b dark:border-gray-700 pb-4">
// // //           <p className="text-gray-700 dark:text-gray-300">
// // //             <span className="bg-gray-800 text-white px-3 py-1 rounded-md mr-2 text-sm">{q.remark}</span>
// // //             {new Date(q.quotedOn).toLocaleString()}
// // //           </p>

// // //           <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
// // //             Volume: <span className="text-indigo-600 font-bold">{q.volume.toLocaleString()}</span>
// // //           </h1>

// // //           <div className="grid grid-cols-12 gap-4 md:gap-6">
// // //             {Object.entries(q.leadCountDetails || {}).map(([label, value], j) => (
// // //               <div
// // //                 key={j}
// // //                 className="col-span-6 md:col-span-4 xl:col-span-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-center bg-gray-50 dark:bg-gray-800"
// // //               >
// // //                 <p className="font-medium">{label}</p>
// // //                 <p className="text-lg font-semibold">{value}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // "quotes": [
// // //     {
// // //       "quotedOn": "2025-06-17T14:49:00.000Z",
// // //       "volume": 3300,
// // //       "remark": "1st Quoted",
// // //       "leadCountDetails": {
// // //         "ST": 1200,
// // //         "ST+ PQ": 800,
// // //         "ST+ QQ": 600,
// // //         "BANT": 150,
// // //         "DT": 450,
// // //         "DT+ PQ": 300,
// // //         "DT+ QQ": 200
// // //       }
// // //     },
// // //     {
// // //       "quotedOn": "2025-07-05T09:30:00.000Z",
// // //       "volume": 3500,
// // //       "remark": "Revised Quote - Client Adjusted Volume",
// // //       "leadCountDetails": {
// // //         "ST": 1300,
// // //         "ST+ PQ": 850,
// // //         "ST+ QQ": 700,
// // //         "BANT": 180,
// // //         "DT": 500,
// // //         "DT+ PQ": 320,
// // //         "DT+ QQ": 220
// // //       }
// // //     }
// // //   ],

// // import { Watch } from 'lucide-react';
// // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // import 'jsuites/dist/jsuites.css';
// // import { useRef, useState } from 'react';

// // export const QuotesUpload = ({ brief }) => {
// //   const leadSheetRef = useRef(null);
// //   const [leadSheetInstance, setLeadSheetInstance] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   // ✅ Build leadCountDetails object from spreadsheet row
// //   const buildLeadCountDetailsFromRow = (headers, row) => {
// //     const result = {};
// //     headers.forEach((header, colIndex) => {
// //       if (colIndex > 0 && header) {
// //         // Skip first empty header and ensure header exists
// //         const val = row[colIndex];
// //         result[header] = val === '' || val === null || val === undefined ? '' : isNaN(val) ? val : Number(val);
// //       }
// //     });
// //     return result;
// //   };

// //   const handleUploadJSON = async () => {
// //     setLoading(true);

// //     try {
// //       if (!leadSheetInstance) {
// //         throw new Error('Spreadsheet not loaded');
// //       }

// //       const sheet = leadSheetInstance.worksheets[0];
// //       const rawData = sheet.getData();

// //       if (rawData.length < 2) {
// //         throw new Error('Please add data to the spreadsheet');
// //       }

// //       const headers = rawData[0];
// //       const dataRows = rawData.slice(1);

// //       // Process all data rows as quotes
// //       const quotes = dataRows
// //         .filter((row) => row.some((cell) => cell !== '' && cell !== null && cell !== undefined)) // Filter out empty rows
// //         .map((row, index) => {
// //           const leadCountDetails = buildLeadCountDetailsFromRow(headers, row);
// //           const volume = Object.values(leadCountDetails).reduce((sum, val) => sum + (Number(val) || 0), 0);

// //           return {
// //             quotedOn: new Date().toISOString(),
// //             volume: volume,
// //             remark: row[0] || `Quote ${index + 1}`,
// //             leadCountDetails: leadCountDetails,
// //           };
// //         });

// //       if (quotes.length === 0) {
// //         throw new Error('No valid data found in spreadsheet');
// //       }

// //       const jsonData = {
// //         ...brief,
// //         quotes: [...(brief.quotes || []), ...quotes],
// //       };

// //       console.log('Uploading JSON:', jsonData);

// //       const response = await fetch('http://localhost:3000/briefs', {
// //         method: 'PUT',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(jsonData),
// //       });

// //       if (!response.ok) throw new Error('Upload failed');

// //       alert('Quotes updated successfully!');
// //     } catch (error) {
// //       console.error('Upload failed:', error);
// //       alert('Upload failed: ' + error.message);
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-6">
// //       <h1 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2 text-lg">
// //         <Watch /> Quotes Timeline
// //       </h1>

// //       {/* ✅ QUOTES SPREADSHEET */}
// //       <div className="space-y-4">
// //         <h3 className="font-semibold text-lg">Add New Quote</h3>
// //         <p className="text-sm text-gray-600">
// //           Enter lead counts in the spreadsheet. First row: headers (ST, ST+ PQ, etc.), subsequent rows: quote values.
// //           First column is for quote remarks.
// //         </p>

// //         <div className="border rounded-lg p-3 bg-gray-50">
// //           <Spreadsheet ref={leadSheetRef} tabs={false} onload={(i) => setLeadSheetInstance(i)}>
// //             <Worksheet
// //               title="Quotes"
// //               minDimensions={[8, 2]} // Minimum 8 columns, 2 rows (header + 1 data)
// //             />
// //           </Spreadsheet>
// //         </div>
// //       </div>

// //       {/* ✅ UPDATE BUTTON */}
// //       <button
// //         onClick={handleUploadJSON}
// //         disabled={loading}
// //         className={`mt-4 px-6 py-3 rounded-lg text-white w-full sm:w-auto ${
// //           loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
// //         }`}
// //       >
// //         {loading ? 'Updating...' : 'Add New Quote'}
// //       </button>

// //       {/* ✅ EXISTING QUOTES DISPLAY */}
// //       <div className="mt-8">
// //         <h3 className="font-semibold text-lg mb-4">Existing Quotes</h3>
// //         {brief.quotes?.length > 0 ? (
// //           brief.quotes.map((q, i) => (
// //             <div key={i} className="space-y-4 border-b dark:border-gray-700 pb-6 mb-6 last:border-b-0">
// //               <div className="flex justify-between items-start">
// //                 <p className="text-gray-700 dark:text-gray-300">
// //                   <span className="bg-gray-800 text-white px-3 py-1 rounded-md mr-2 text-sm">{q.remark}</span>
// //                   {new Date(q.quotedOn).toLocaleString()}
// //                 </p>
// //                 <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
// //                   Volume: <span className="text-indigo-600 font-bold">{q.volume?.toLocaleString()}</span>
// //                 </h1>
// //               </div>

// //               <div className="grid grid-cols-12 gap-4 md:gap-6">
// //                 {Object.entries(q.leadCountDetails || {}).map(([label, value], j) => (
// //                   <div
// //                     key={j}
// //                     className="col-span-6 md:col-span-4 xl:col-span-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-center bg-gray-50 dark:bg-gray-800"
// //                   >
// //                     <p className="font-medium text-sm text-gray-600 dark:text-gray-400">{label}</p>
// //                     <p className="text-lg font-semibold text-gray-800 dark:text-white">{value}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-gray-500 text-center py-4">No quotes added yet</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// //   const leadSheetRef = useRef(null);
// //   const [leadSheetInstance, setLeadSheetInstance] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const buildLeadCountDetailsFromRow = (headers, row) => {
// //     const result = {};
// //     headers.forEach((header, colIndex) => {
// //       if (colIndex > 0) {
// //         const val = row[colIndex];
// //         result[header] =
// //           val === '' || val === null || val === undefined
// //             ? ''
// //             : isNaN(val)
// //             ? val
// //             : Number(val);
// //       }
// //     });
// //     return result;
// //   };

// //   const handleUploadJSON = async () => {
// //     setLoading(true);

// //     try {
// //       if (!leadSheetInstance) throw new Error('Spreadsheet not loaded');

// //       const sheet = leadSheetInstance.worksheets[0];
// //       const rawData = sheet.getData();

// //       if (rawData.length < 1) {
// //         throw new Error('Please add data in spreadsheet before uploading');
// //       }

// //       const headers = rawData[0];          // example: ["Quote", "ST", "ST+PQ"]
// //       const firstRow = rawData[0];         // header row
// //       const dataRows = rawData.slice(1);   // actual values

// //       let quotes = [];

// //       dataRows.forEach((row, index) => {
// //         if (!row[0] || !row[0].trim()) return;

// //         const remark = row[0];
// //         const leadCountDetails = buildLeadCountDetailsFromRow(headers, row);

// //         const volume = Object.values(leadCountDetails).reduce(
// //           (sum, val) => sum + (Number(val) || 0),
// //           0
// //         );

// //         quotes.push({
// //           quotedOn: new Date().toISOString(),
// //           volume,
// //           remark,
// //           leadCountDetails,
// //         });
// //       });

// //       // If no rows: fail
// //       if (quotes.length === 0) {
// //         throw new Error('Add at least 1 row with quote data');
// //       }

// //       // Merge with previous quotes
// //       const jsonData = {
// //         ...brief,
// //         quotes: [...(brief.quotes || []), ...quotes],
// //       };

// //       const response = await fetch(
// //         `http://localhost:3000/briefs/${brief.id}`,
// //         {
// //           method: 'PUT',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(jsonData),
// //         }
// //       );

// //       if (!response.ok) throw new Error('Upload failed');

// //       alert('Quote added successfully');
// //     } catch (err) {
// //       alert('Upload failed: ' + err.message);
// //       console.error(err);
// //     }

// //     setLoading(false);
// //   };

// //   // ---------------------------------------------------------------------
// //   // ✅ BUILD DYNAMIC SPREADSHEET HEADERS
// //   // ---------------------------------------------------------------------
// //   const buildDynamicSheet = () => {
// //     let headerSet = new Set();

// //     // ✅ If previous quotes exist → use their structure
// //     if (brief.quotes?.length > 0) {
// //       const latest = brief.quotes[brief.quotes.length - 1].leadCountDetails;
// //       Object.keys(latest || {}).forEach((k) => headerSet.add(k));
// //     }

// //     // ✅ else use leadDetails → leadCountDetails
// //     else if (brief.leadDetails?.length > 0) {
// //       const lcd = brief.leadDetails[0]?.leadCountDetails || {};
// //       Object.values(lcd).forEach((obj) => {
// //         Object.keys(obj || {}).forEach((k) => headerSet.add(k));
// //       });
// //     }

// //     // ✅ Spreadsheet headers
// //     const headers = ['Quote', ...Array.from(headerSet)];

// //     // ✅ New empty row
// //     const emptyRow = ['New Quote', ...Array(headers.length - 1).fill('')];

// //     // ✅ JSpreadsheet columns
// //     const columns = headers.map((h) => ({
// //       title: h,
// //       width: 120,
// //     }));

// //     return { headers, emptyRow, columns };
// //   };

// //   const { headers, emptyRow, columns } = buildDynamicSheet();
// import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// import 'jspreadsheet-ce/dist/jspreadsheet.css';
// import 'jsuites/dist/jsuites.css';
// import { useRef, useState } from 'react';

// export const QuotesUpload = ({ brief }) => {
//   const leadSheetRef = useRef(null);

//   const [leadSheetInstance, setLeadSheetInstance] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     quotedOn: '',
//     volume: '',
//     remark: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // ✅ Build flat leadCountDetails object
//   const parseLeadCountDetails = (rawData) => {
//     if (!rawData || rawData.length < 2) return {};

//     const headers = rawData[0]; // Example: ["ST","ST+ PQ","BANT"]
//     const row = rawData[1];     // Example: [1200, 800, 150]

//     const obj = {};
//     headers.forEach((header, i) => {
//       if (!header) return;

//       const val = row[i];
//       obj[header] =
//         val === '' || val === null || val === undefined
//           ? ''
//           : isNaN(val)
//           ? val
//           : Number(val);
//     });

//     return obj;
//   };

//   const handleUploadJSON = async () => {
//     setLoading(true);

//     try {
//       if (!leadSheetInstance) {
//         throw new Error('Spreadsheet not loaded');
//       }

//       const sheet = leadSheetInstance.worksheets[0];
//       const rawData = sheet.getData();

//       const leadCountDetails = parseLeadCountDetails(rawData);

//       const jsonData = {
//         quotedOn: formData.quotedOn,
//         volume: Number(formData.volume) || 0,
//         remark: formData.remark,
//         leadCountDetails,
//       };

//       console.log('📤 Upload JSON:', jsonData);

//       const response = await fetch(
//         `http://localhost:3000/briefs/${brief.id}`,
//         {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(jsonData),
//         }
//       );

//       if (!response.ok) throw new Error('Upload failed');

//       alert('Quote uploaded successfully!');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed: ' + error.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="mt-6 border rounded-2xl p-6">
//       <h2 className="text-xl font-semibold mb-6">Quote Builder</h2>

//       {/* ✅ Quote meta info */}
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         <input
//           type="date"
//           className="border p-2 rounded w-full"
//           value={formData.quotedOn}
//           onChange={(e) => handleInputChange('quotedOn', e.target.value)}
//         />

//         <input
//           className="border p-2 rounded w-full"
//           placeholder="volume"
//           value={formData.volume}
//           onChange={(e) => handleInputChange('volume', e.target.value)}
//         />

//         <input
//           className="border p-2 rounded w-full"
//           placeholder="remark"
//           value={formData.remark}
//           onChange={(e) => handleInputChange('remark', e.target.value)}
//         />
//       </div>

//       {/* ✅ Spreadsheet */}
//       <div className="p-3">
//         <Spreadsheet
//           ref={leadSheetRef}
//           tabs={false}
//           onload={(i) => setLeadSheetInstance(i)}
//         >
//           <Worksheet
//             title="LeadCount"
//             minDimensions={[5, 2]} // 5 headers, 1 data row
//             // No hardcoded data — user fills manually
//           />
//         </Spreadsheet>
//       </div>

//       {/* ✅ Submit */}
//       <button
//         onClick={handleUploadJSON}
//         disabled={loading}
//         className={`mt-10 px-6 py-3 rounded-lg text-white w-full sm:w-auto ${
//           loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600'
//         }`}
//       >
//         {loading ? 'Uploading...' : 'Submit'}
//       </button>
//     </div>
//   );
// };


// // <div className="border rounded-2xl border-gray-200 bg-white dark:bg-gray-800 p-6 space-y-6">
// //   <h1 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2 text-lg">
// //     <Watch /> Quotes Timeline
// //   </h1>

// //   {/* ✅ NEW QUOTE SPREADSHEET */}
// //   <div className="space-y-4">
// //     <h3 className="font-semibold text-lg">Add New Quote</h3>

// //     <div className="border rounded-lg p-3 bg-gray-50">
// //       <Spreadsheet
// //         ref={leadSheetRef}
// //         tabs={false}
// //         onload={(i) => setLeadSheetInstance(i)}
// //       >
// //         <Worksheet
// //           title="Quotes"
// //           data={[headers, emptyRow]}
// //           columns={columns}
// //         />
// //       </Spreadsheet>
// //     </div>
// //   </div>

// //   {/* ✅ UPDATE BUTTON */}
// //   <button
// //     onClick={handleUploadJSON}
// //     disabled={loading}
// //     className={`mt-4 px-6 py-3 rounded-lg text-white w-full sm:w-auto ${
// //       loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'
// //     }`}
// //   >
// //     {loading ? 'Updating…' : 'Add New Quote'}
// //   </button>

// //   {/* ✅ EXISTING QUOTES DISPLAY */}
// //   <div className="mt-8">
// //     <h3 className="font-semibold text-lg mb-4">Existing Quotes</h3>

// //     {brief.quotes?.length > 0 ? (
// //       brief.quotes.map((q, i) => (
// //         <div
// //           key={i}
// //           className="space-y-4 border-b dark:border-gray-700 pb-6 mb-6 last:border-b-0"
// //         >
// //           <div className="flex justify-between items-start">
// //             <p className="text-gray-700 dark:text-gray-300">
// //               <span className="bg-gray-800 text-white px-3 py-1 rounded-md mr-2 text-sm">
// //                 {q.remark}
// //               </span>
// //               {new Date(q.quotedOn).toLocaleString()}
// //             </p>

// //             <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
// //               Volume:{' '}
// //               <span className="text-indigo-600 font-bold">
// //                 {q.volume?.toLocaleString()}
// //               </span>
// //             </h1>
// //           </div>

// //           <div className="grid grid-cols-12 gap-4 md:gap-6">
// //             {Object.entries(q.leadCountDetails || {}).map(
// //               ([label, value], j) => (
// //                 <div
// //                   key={j}
// //                   className="col-span-6 md:col-span-4 xl:col-span-3 p-3 rounded-xl border bg-gray-50 dark:bg-gray-800"
// //                 >
// //                   <p className="font-medium text-sm text-gray-600 dark:text-gray-400">
// //                     {label}
// //                   </p>
// //                   <p className="text-lg font-semibold text-gray-800 dark:text-white">
// //                     {value}
// //                   </p>
// //                 </div>
// //               )
// //             )}
// //           </div>
// //         </div>
// //       ))
// //     ) : (
// //       <p className="text-gray-500 text-center py-4">
// //         No quotes added yet
// //       </p>
// //     )}
// //   </div>
// // </div>
