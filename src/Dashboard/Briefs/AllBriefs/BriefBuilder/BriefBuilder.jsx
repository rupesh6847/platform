// // // // // // // import { useRef, useState } from 'react';
// // // // // // // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // // // // // // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // // // // // // import 'jsuites/dist/jsuites.css';

// // // // // // // export const BriefBuilder = () => {
// // // // // // //   const spreadsheet = useRef(null);
// // // // // // //   const [instance, setInstance] = useState(null);

// // // // // // //   return (
// // // // // // //     <div className="mt-6 border rounded-2xl bg-white p-6">
// // // // // // //       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

// // // // // // //       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             name
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             arrivedOn
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             due
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             status
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             type
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             type
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>
// // // // // // //         <div>
// // // // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // // //             type
// // // // // // //           </label>
// // // // // // //           <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <section>
// // // // // // //         <Spreadsheet
// // // // // // //           ref={spreadsheet}
// // // // // // //           tabs={true}
// // // // // // //           onload={(jspreadsheetInstance) => {
// // // // // // //             console.log('✅ Spreadsheet instance ready:', jspreadsheetInstance);
// // // // // // //             setInstance(jspreadsheetInstance);
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <Worksheet title="Sheet 1" minDimensions={[10, 5]} />
// // // // // // //         </Spreadsheet>

// // // // // // //         <button
// // // // // // //           className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
// // // // // // //           onClick={() => {
// // // // // // //             if (!instance) {
// // // // // // //               console.warn('Spreadsheet not ready');
// // // // // // //               return;
// // // // // // //             }

// // // // // // //             const activeIndex = instance.getWorksheetActive();
// // // // // // //             const totalSheets = instance.worksheets.length;

// // // // // // //             console.log(
// // // // // // //               `Deleting sheet at index: ${activeIndex}. Total sheets: ${totalSheets}`
// // // // // // //             );

// // // // // // //             if (totalSheets > 1) {
// // // // // // //               const activeWorksheet = instance.worksheets[activeIndex];

// // // // // // //               activeWorksheet.deleteWorksheet(activeIndex);
// // // // // // //             } else {
// // // // // // //               alert('Cannot delete the last worksheet.');
// // // // // // //             }
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Delete Active Sheet
// // // // // // //         </button>
// // // // // // //       </section>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };
// // // // // // import { useRef, useState } from 'react';
// // // // // // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // // // // // import ReactQuill from 'react-quill';

// // // // // // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // // // // // import 'jsuites/dist/jsuites.css';
// // // // // // import 'react-quill/dist/quill.snow.css';

// // // // // // export const BriefBuilder = () => {
// // // // // //   const spreadsheet = useRef(null);
// // // // // //   const [instance, setInstance] = useState(null);

// // // // // //   const [form, setForm] = useState({
// // // // // //     name: '',
// // // // // //     arrivedOn: '',
// // // // // //     due: '',
// // // // // //     status: '',
// // // // // //     type: '',
// // // // // //     remark: '',
// // // // // //     briefHyperlink: '',
// // // // // //   });

// // // // // //   const [leadDetails, setLeadDetails] = useState([
// // // // // //     {
// // // // // //       clientCode: '',
// // // // // //       priority: '',
// // // // // //       assignedTo: '',
// // // // // //       regions: '',
// // // // // //       audiences: '',
// // // // // //       leadType: '',
// // // // // //       qualifiers: '',
// // // // // //       profilers: '',
// // // // // //       deadline: '',
// // // // // //       fileAttached: '',
// // // // // //       leadCountDetails: '',
// // // // // //     },
// // // // // //   ]);

// // // // // //   const handleForm = (field, value) => {
// // // // // //     setForm({ ...form, [field]: value });
// // // // // //   };

// // // // // //   const updateLead = (index, field, value) => {
// // // // // //     const updated = [...leadDetails];
// // // // // //     updated[index][field] = value;
// // // // // //     setLeadDetails(updated);
// // // // // //   };

// // // // // //   const addLeadDetail = () => {
// // // // // //     setLeadDetails([
// // // // // //       ...leadDetails,
// // // // // //       {
// // // // // //         clientCode: '',
// // // // // //         priority: '',
// // // // // //         assignedTo: '',
// // // // // //         regions: '',
// // // // // //         audiences: '',
// // // // // //         leadType: '',
// // // // // //         qualifiers: '',
// // // // // //         profilers: '',
// // // // // //         deadline: '',
// // // // // //         fileAttached: '',
// // // // // //         leadCountDetails: '',
// // // // // //       },
// // // // // //     ]);
// // // // // //   };

// // // // // //   const removeLeadDetail = (index) => {
// // // // // //     if (leadDetails.length === 1) return;
// // // // // //     setLeadDetails(leadDetails.filter((_, i) => i !== index));
// // // // // //   };

// // // // // //   const generateJSON = () => {
// // // // // //     const formattedLeadDetails = leadDetails.map((ld) => ({
// // // // // //       clientCode: ld.clientCode,
// // // // // //       priority: ld.priority,
// // // // // //       assignedTo: ld.assignedTo.split(',').map((v) => v.trim()),
// // // // // //       regions: ld.regions.split(',').map((v) => v.trim()),
// // // // // //       audiences: ld.audiences.split(',').map((v) => v.trim()),
// // // // // //       leadType: ld.leadType || null,
// // // // // //       qualifiers: JSON.parse(ld.qualifiers || '{}'),
// // // // // //       profilers: ld.profilers,
// // // // // //       deadline: ld.deadline,
// // // // // //       fileAttached: ld.fileAttached,
// // // // // //       leadCountDetails: JSON.parse(ld.leadCountDetails || '{}'),
// // // // // //     }));

// // // // // //     const output = {
// // // // // //       ...form,
// // // // // //       leadDetails: formattedLeadDetails,
// // // // // //       quotes: [],
// // // // // //     };

// // // // // //     console.log(output);
// // // // // //     alert('JSON generated. Check console.');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="mt-6 border rounded-2xl bg-white p-6">
// // // // // //       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

// // // // // //       {/* BASIC FIELDS */}
// // // // // //       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
// // // // // //         {['name', 'arrivedOn', 'due', 'status', 'type', 'briefHyperlink'].map(
// // // // // //           (field) => (
// // // // // //             <div key={field}>
// // // // // //               <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // // //                 {field}
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // // //                 value={form[field]}
// // // // // //                 onChange={(e) => handleForm(field, e.target.value)}
// // // // // //               />
// // // // // //             </div>
// // // // // //           )
// // // // // //         )}
// // // // // //       </section>

// // // // // //       {/* LEAD DETAILS SECTION */}
// // // // // //       {/* <h3 className="text-lg font-semibold mt-10 mb-3">Lead Details</h3> */}

// // // // // //       {/* {leadDetails.map((ld, index) => (
// // // // // //         <>
// // // // // //           <div key={index} className="border rounded-xl p-4 mb-6 bg-gray-50">
// // // // // //             <div className="flex justify-between mb-2">
// // // // // //               <p className="font-medium">Lead {index + 1}</p>
// // // // // //               {leadDetails.length > 1 && (
// // // // // //                 <button
// // // // // //                   className="text-red-600 text-sm"
// // // // // //                   onClick={() => removeLeadDetail(index)}
// // // // // //                 >
// // // // // //                   Remove
// // // // // //                 </button>
// // // // // //               )}
// // // // // //             </div>

// // // // // //              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// // // // // //             {[
// // // // // //               'clientCode',
// // // // // //               'priority',
// // // // // //               'assignedTo',
// // // // // //               'regions',
// // // // // //               'audiences',
// // // // // //               'leadType',
// // // // // //               'profilers',
// // // // // //               'deadline',
// // // // // //               'fileAttached',
// // // // // //             ].map((field) => (
// // // // // //               <div key={field}>
// // // // // //                 <label className="block text-xs font-medium text-gray-600 capitalize mb-1">
// // // // // //                   {field}
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   className="w-full border rounded px-2 py-1"
// // // // // //                   value={ld[field]}
// // // // // //                   onChange={(e) => updateLead(index, field, e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //             <div className="mt-3">
// // // // // //               <label className="block text-xs mb-1 font-medium">
// // // // // //                 qualifiers (JSON)
// // // // // //               </label>
// // // // // //               <ReactQuill
// // // // // //                 theme="snow"
// // // // // //                 value={ld.qualifiers}
// // // // // //                 onChange={(v) => updateLead(index, 'qualifiers', v)}
// // // // // //                 className="bg-white"
// // // // // //               />
// // // // // //             </div>

// // // // // //           </div>
// // // // // //           <section>
// // // // // //             <Spreadsheet
// // // // // //               ref={spreadsheet}
// // // // // //               tabs={true}
// // // // // //               onload={(jspreadsheetInstance) => {
// // // // // //                 console.log(
// // // // // //                   '✅ Spreadsheet instance ready:',
// // // // // //                   jspreadsheetInstance
// // // // // //                 );
// // // // // //                 setInstance(jspreadsheetInstance);
// // // // // //               }}
// // // // // //             >
// // // // // //               <Worksheet title="Sheet 1" minDimensions={[10, 5]} />
// // // // // //             </Spreadsheet>

// // // // // //             <button
// // // // // //               className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
// // // // // //               onClick={() => {
// // // // // //                 if (!instance) {
// // // // // //                   console.warn('Spreadsheet not ready');
// // // // // //                   return;
// // // // // //                 }

// // // // // //                 const activeIndex = instance.getWorksheetActive();
// // // // // //                 const totalSheets = instance.worksheets.length;

// // // // // //                 console.log(
// // // // // //                   `Deleting sheet at index: ${activeIndex}. Total sheets: ${totalSheets}`
// // // // // //                 );

// // // // // //                 if (totalSheets > 1) {
// // // // // //                   const activeWorksheet = instance.worksheets[activeIndex];

// // // // // //                   activeWorksheet.deleteWorksheet(activeIndex);
// // // // // //                 } else {
// // // // // //                   alert('Cannot delete the last worksheet.');
// // // // // //                 }
// // // // // //               }}
// // // // // //             >
// // // // // //               Delete Active Sheet
// // // // // //             </button>
// // // // // //           </section>
// // // // // //         </>
// // // // // //       ))} */}

// // // // // //       {/* <button
// // // // // //         className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
// // // // // //         onClick={addLeadDetail}
// // // // // //       >
// // // // // //         Add Lead Detail
// // // // // //       </button> */}

// // // // // //       {/* <section>
// // // // // //         <Spreadsheet
// // // // // //           ref={spreadsheet}
// // // // // //           tabs={true}
// // // // // //           onload={(jspreadsheetInstance) => {
// // // // // //             console.log('✅ Spreadsheet instance ready:', jspreadsheetInstance);
// // // // // //             setInstance(jspreadsheetInstance);
// // // // // //           }}
// // // // // //         >
// // // // // //           <Worksheet title="Sheet 1" minDimensions={[10, 5]} />
// // // // // //         </Spreadsheet>

// // // // // //         <button
// // // // // //           className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
// // // // // //           onClick={() => {
// // // // // //             if (!instance) {
// // // // // //               console.warn('Spreadsheet not ready');
// // // // // //               return;
// // // // // //             }

// // // // // //             const activeIndex = instance.getWorksheetActive();
// // // // // //             const totalSheets = instance.worksheets.length;

// // // // // //             console.log(
// // // // // //               `Deleting sheet at index: ${activeIndex}. Total sheets: ${totalSheets}`
// // // // // //             );

// // // // // //             if (totalSheets > 1) {
// // // // // //               const activeWorksheet = instance.worksheets[activeIndex];

// // // // // //               activeWorksheet.deleteWorksheet(activeIndex);
// // // // // //             } else {
// // // // // //               alert('Cannot delete the last worksheet.');
// // // // // //             }
// // // // // //           }}
// // // // // //         >
// // // // // //           Delete Active Sheet
// // // // // //         </button>
// // // // // //       </section> */}

// // // // // //       {/* GENERATE JSON */}
// // // // // //       <button
// // // // // //         className="mt-6 rounded bg-green-600 text-white px-5 py-2 hover:bg-green-700"
// // // // // //         onClick={generateJSON}
// // // // // //       >
// // // // // //         Generate JSON
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };
// // // // // import { useRef, useState } from 'react';
// // // // // import ReactQuill from 'react-quill';
// // // // // import 'react-quill/dist/quill.snow.css';

// // // // // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // // // // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // // // // import 'jsuites/dist/jsuites.css';

// // // // // export const BriefBuilder = () => {
// // // // //   const spreadsheet = useRef(null);
// // // // //   const quotesSpreadsheet = useRef(null);
// // // // //   const [instance, setInstance] = useState(null);
// // // // //   const [quotesInstance, setQuotesInstance] = useState(null);

// // // // //   const [formData, setFormData] = useState({
// // // // //     name: 'Q1 Lead Generation Campaign',
// // // // //     arrivedOn: '2025-06-17T14:49:00.000Z',
// // // // //     due: '2025-10-29T13:00:00.000Z',
// // // // //     status: 'New',
// // // // //     type: 'LEADGEN',
// // // // //     remark: '',
// // // // //     briefHyperlink: '',
// // // // //     leadDetails: [],
// // // // //     quotes: [],
// // // // //   });

// // // // //   const handleInputChange = (field, value) => {
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [field]: value,
// // // // //     }));
// // // // //   };

// // // // //   const generateJSON = () => {
// // // // //     // Convert spreadsheet data to leadDetails array
// // // // //     const leadDetails = leadDetailsData.map((row) => ({
// // // // //       clientCode: row[0] || 'PH',
// // // // //       priority: row[1] || 'High',
// // // // //       assignedTo: row[2]
// // // // //         ? row[2]
// // // // //             .split(',')
// // // // //             .map((item) => item.trim())
// // // // //             .filter((item) => item)
// // // // //         : [''],
// // // // //       regions: row[3]
// // // // //         ? row[3]
// // // // //             .split(',')
// // // // //             .map((item) => item.trim())
// // // // //             .filter((item) => item)
// // // // //         : [''],
// // // // //       audiences: row[4]
// // // // //         ? row[4]
// // // // //             .split(',')
// // // // //             .map((item) => item.trim())
// // // // //             .filter((item) => item)
// // // // //         : [''],
// // // // //       leadType: row[5] || null,
// // // // //       qualifiers: {
// // // // //         JobTitle: row[6] || '',
// // // // //         EmployeeSize: row[7] || '',
// // // // //         Industry: row[8] || '',
// // // // //         Other: row[9] || '',
// // // // //       },
// // // // //       profilers: row[10] || 'N/A',
// // // // //       deadline: row[11] || '',
// // // // //       fileAttached: row[12] || '',
// // // // //       leadCountDetails: {
// // // // //         ST: Number(row[13]) || 0,
// // // // //         'ST+ PQ': Number(row[14]) || 0,
// // // // //         'ST+ QQ': Number(row[15]) || 0,
// // // // //         BANT: Number(row[16]) || 0,
// // // // //         DT: Number(row[17]) || 0,
// // // // //         'DT+ PQ': Number(row[18]) || 0,
// // // // //         'DT+ QQ': Number(row[19]) || 0,
// // // // //       },
// // // // //     }));

// // // // //     // Convert spreadsheet data to quotes array
// // // // //     const quotes = quotesData.map((row) => ({
// // // // //       quotedOn: row[0] || '',
// // // // //       volume: Number(row[1]) || 0,
// // // // //       remark: row[2] || '',
// // // // //       leadCountDetails: {
// // // // //         ST: Number(row[3]) || 0,
// // // // //         'ST+ PQ': Number(row[4]) || 0,
// // // // //         'ST+ QQ': Number(row[5]) || 0,
// // // // //         BANT: Number(row[6]) || 0,
// // // // //         DT: Number(row[7]) || 0,
// // // // //         'DT+ PQ': Number(row[8]) || 0,
// // // // //         'DT+ QQ': Number(row[9]) || 0,
// // // // //       },
// // // // //     }));

// // // // //     const jsonData = {
// // // // //       name: formData.name,
// // // // //       arrivedOn: formData.arrivedOn,
// // // // //       due: formData.due,
// // // // //       status: formData.status,
// // // // //       type: formData.type,
// // // // //       leadDetails: leadDetails,
// // // // //       quotes: quotes,
// // // // //       remark: formData.remark,
// // // // //       briefHyperlink: formData.briefHyperlink,
// // // // //     };

// // // // //     console.log('Generated JSON:', jsonData);

// // // // //     // Create a downloadable JSON file
// // // // //     const dataStr = JSON.stringify(jsonData, null, 2);
// // // // //     const dataBlob = new Blob([dataStr], { type: 'application/json' });
// // // // //     const url = URL.createObjectURL(dataBlob);
// // // // //     const link = document.createElement('a');
// // // // //     link.href = url;
// // // // //     link.download = 'campaign-data.json';
// // // // //     document.body.appendChild(link);
// // // // //     link.click();
// // // // //     document.body.removeChild(link);
// // // // //     URL.revokeObjectURL(url);

// // // // //     return jsonData;
// // // // //   };

// // // // //   const quillModules = {
// // // // //     toolbar: [
// // // // //       [{ header: '1' }, { header: '2' }, { font: [] }],
// // // // //       [{ size: [] }],
// // // // //       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
// // // // //       [
// // // // //         { list: 'ordered' },
// // // // //         { list: 'bullet' },
// // // // //         { indent: '-1' },
// // // // //         { indent: '+1' },
// // // // //       ],
// // // // //       ['link', 'image', 'video'],
// // // // //       ['clean'],
// // // // //     ],
// // // // //   };

// // // // //   return (
// // // // //     <div className="mt-6 border rounded-2xl bg-white p-6">
// // // // //       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

// // // // //       {/* Basic Information Section - Only these fields have inputs */}
// // // // //       <section className="mb-8">
// // // // //         <h3 className="text-lg font-semibold mb-4">Campaign Information</h3>
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //               Campaign Name
// // // // //             </label>
// // // // //             <input
// // // // //               value={formData.name}
// // // // //               onChange={(e) => handleInputChange('name', e.target.value)}
// // // // //               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //               placeholder="Q1 Lead Generation Campaign"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //               Arrived On
// // // // //             </label>
// // // // //             <input
// // // // //               type="datetime-local"
// // // // //               value={
// // // // //                 formData.arrivedOn
// // // // //                   ? new Date(formData.arrivedOn).toISOString().slice(0, 16)
// // // // //                   : ''
// // // // //               }
// // // // //               onChange={(e) =>
// // // // //                 handleInputChange(
// // // // //                   'arrivedOn',
// // // // //                   new Date(e.target.value).toISOString()
// // // // //                 )
// // // // //               }
// // // // //               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //               Due Date
// // // // //             </label>
// // // // //             <input
// // // // //               type="datetime-local"
// // // // //               value={
// // // // //                 formData.due
// // // // //                   ? new Date(formData.due).toISOString().slice(0, 16)
// // // // //                   : ''
// // // // //               }
// // // // //               onChange={(e) =>
// // // // //                 handleInputChange('due', new Date(e.target.value).toISOString())
// // // // //               }
// // // // //               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //               Status
// // // // //             </label>
// // // // //             <select
// // // // //               value={formData.status}
// // // // //               onChange={(e) => handleInputChange('status', e.target.value)}
// // // // //               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //             >
// // // // //               <option value="New">New</option>
// // // // //               <option value="In Progress">In Progress</option>
// // // // //               <option value="Completed">Completed</option>
// // // // //               <option value="Cancelled">Cancelled</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //               Type
// // // // //             </label>
// // // // //             <select
// // // // //               value={formData.type}
// // // // //               onChange={(e) => handleInputChange('type', e.target.value)}
// // // // //               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //             >
// // // // //               <option value="LEADGEN">LEADGEN</option>
// // // // //               <option value="OTHER">OTHER</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           <div>
// // // // //             <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //               Brief Hyperlink
// // // // //             </label>
// // // // //             <input
// // // // //               value={formData.briefHyperlink}
// // // // //               onChange={(e) =>
// // // // //                 handleInputChange('briefHyperlink', e.target.value)
// // // // //               }
// // // // //               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //               placeholder="https://example.com/briefs/q1-leadgen"
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="mt-4">
// // // // //           <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
// // // // //             Remark
// // // // //           </label>
// // // // //           <textarea
// // // // //             value={formData.remark}
// // // // //             onChange={(e) => handleInputChange('remark', e.target.value)}
// // // // //             rows={2}
// // // // //             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
// // // // //             placeholder="Client approved final quote"
// // // // //           />
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* leadCountDetails Spreadsheet */}
// // // // //       <section className="my-8">
// // // // //         <h3 className="text-lg font-semibold my-10">leadCountDetails</h3>
// // // // //         <section>
// // // // //           <Spreadsheet
// // // // //             ref={spreadsheet}
// // // // //             tabs={true}
// // // // //             onload={(jspreadsheetInstance) => {
// // // // //               console.log(
// // // // //                 '✅ Spreadsheet instance ready:',
// // // // //                 jspreadsheetInstance
// // // // //               );
// // // // //               setInstance(jspreadsheetInstance);
// // // // //             }}
// // // // //           >
// // // // //             <Worksheet title="Sheet 1" minDimensions={[10, 5]} />
// // // // //           </Spreadsheet>

// // // // //           <button
// // // // //             className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
// // // // //             onClick={() => {
// // // // //               if (!instance) {
// // // // //                 console.warn('Spreadsheet not ready');
// // // // //                 return;
// // // // //               }

// // // // //               const activeIndex = instance.getWorksheetActive();
// // // // //               const totalSheets = instance.worksheets.length;

// // // // //               console.log(
// // // // //                 `Deleting sheet at index: ${activeIndex}. Total sheets: ${totalSheets}`
// // // // //               );

// // // // //               if (totalSheets > 1) {
// // // // //                 const activeWorksheet = instance.worksheets[activeIndex];

// // // // //                 activeWorksheet.deleteWorksheet(activeIndex);
// // // // //               } else {
// // // // //                 alert('Cannot delete the last worksheet.');
// // // // //               }
// // // // //             }}
// // // // //           >
// // // // //             Delete Active Sheet
// // // // //           </button>
// // // // //         </section>
// // // // //       </section>

// // // // //       {/* leadDetails */}
// // // // //       <section className="mb-8">
// // // // //         <h3 className="text-lg font-semibold mb-4">Lead Details</h3>

// // // // //         <ReactQuill
// // // // //           theme="snow"
// // // // //           value={formData.leadDetails}
// // // // //           onChange={(value) => handleInputChange('leadDetails', value)}
// // // // //           className="bg-white rounded"
// // // // //           placeholder="Type or paste formatted content..."
// // // // //         />
// // // // //       </section>

// // // // //       {/* Quotes Spreadsheet */}
// // // // //       <section className="my-8">
// // // // //         <h3 className="text-lg font-semibold my-10">Quotes Data</h3>

// // // // //         <section>
// // // // //           <Spreadsheet
// // // // //             ref={spreadsheet}
// // // // //             tabs={true}
// // // // //             onload={(jspreadsheetInstance) => {
// // // // //               console.log(
// // // // //                 '✅ Spreadsheet instance ready:',
// // // // //                 jspreadsheetInstance
// // // // //               );
// // // // //               setInstance(jspreadsheetInstance);
// // // // //             }}
// // // // //           >
// // // // //             <Worksheet title="Sheet 1" minDimensions={[10, 5]} />
// // // // //           </Spreadsheet>

// // // // //           <button
// // // // //             className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
// // // // //             onClick={() => {
// // // // //               if (!instance) {
// // // // //                 console.warn('Spreadsheet not ready');
// // // // //                 return;
// // // // //               }

// // // // //               const activeIndex = instance.getWorksheetActive();
// // // // //               const totalSheets = instance.worksheets.length;

// // // // //               console.log(
// // // // //                 `Deleting sheet at index: ${activeIndex}. Total sheets: ${totalSheets}`
// // // // //               );

// // // // //               if (totalSheets > 1) {
// // // // //                 const activeWorksheet = instance.worksheets[activeIndex];

// // // // //                 activeWorksheet.deleteWorksheet(activeIndex);
// // // // //               } else {
// // // // //                 alert('Cannot delete the last worksheet.');
// // // // //               }
// // // // //             }}
// // // // //           >
// // // // //             Delete Active Sheet
// // // // //           </button>
// // // // //         </section>

// // // // //         {/* <Spreadsheet
// // // // //           ref={quotesSpreadsheet}
// // // // //           data={quotesData}
// // // // //           columns={quotesColumns}
// // // // //           onupdate={(instance, cell, col, row, value) => {
// // // // //             const newData = [...quotesData];
// // // // //             if (!newData[row]) newData[row] = [];
// // // // //             newData[row][col] = value;
// // // // //             setQuotesData(newData);
// // // // //           }}
// // // // //           oninsertrow={(instance, row) => {
// // // // //             const newData = [...quotesData];
// // // // //             newData.splice(row, 0, Array(quotesColumns.length).fill(''));
// // // // //             setQuotesData(newData);
// // // // //           }}
// // // // //           ondeleterow={(instance, row) => {
// // // // //             const newData = quotesData.filter((_, index) => index !== row);
// // // // //             setQuotesData(newData);
// // // // //           }}
// // // // //           onload={(jspreadsheetInstance) => {
// // // // //             console.log('✅ Quotes Spreadsheet ready:', jspreadsheetInstance);
// // // // //             setQuotesInstance(jspreadsheetInstance);
// // // // //           }}
// // // // //         /> */}

// // // // //         <div className="mt-4 flex gap-2">
// // // // //           {/* <button
// // // // //             onClick={() => {
// // // // //               if (quotesInstance) {
// // // // //                 quotesInstance.insertRow();
// // // // //               }
// // // // //             }}
// // // // //             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // // // //           >
// // // // //             Add Quote Row
// // // // //           </button> */}

// // // // //           {/* <button
// // // // //             onClick={() => {
// // // // //               if (quotesInstance && quotesData.length > 1) {
// // // // //                 const activeRow = quotesInstance.getSelectedRow();
// // // // //                 if (activeRow !== null) {
// // // // //                   quotesInstance.deleteRow(activeRow);
// // // // //                 }
// // // // //               }
// // // // //             }}
// // // // //             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // // // //           >
// // // // //             Delete Selected Quote
// // // // //           </button> */}
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Generate JSON Button */}
// // // // //       <div className="flex mt-8">
// // // // //         <button
// // // // //           onClick={generateJSON}
// // // // //           className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
// // // // //         >
// // // // //           Generate & Download JSON
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Preview Section */}
// // // // //       <section className="mt-8 p-4 bg-gray-50 rounded-lg">
// // // // //         <h3 className="text-lg font-semibold mb-4">JSON Preview</h3>
// // // // //         <pre className="bg-white p-4 rounded border text-sm overflow-auto max-h-64">
// // // // //           {JSON.stringify(
// // // // //             {
// // // // //               name: formData.name,
// // // // //               arrivedOn: formData.arrivedOn,
// // // // //               due: formData.due,
// // // // //               status: formData.status,
// // // // //               type: formData.type,
// // // // //               leadDetails: [],
// // // // //               quotes: [],
// // // // //               remark: formData.remark,
// // // // //               briefHyperlink: formData.briefHyperlink,
// // // // //             },
// // // // //             null,
// // // // //             2
// // // // //           )}
// // // // //         </pre>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // import { useRef, useState } from 'react';
// // // // import ReactQuill from 'react-quill';
// // // // import 'react-quill/dist/quill.snow.css';

// // // // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // // // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // // // import 'jsuites/dist/jsuites.css';

// // // // export const BriefBuilder = () => {
// // // //   // Independent spreadsheet refs
// // // //   const leadSheetRef = useRef(null);
// // // //   const quoteSheetRef = useRef(null);

// // // //   // Independent instances
// // // //   const [leadSheetInstance, setLeadSheetInstance] = useState(null);
// // // //   const [quoteSheetInstance, setQuoteSheetInstance] = useState(null);

// // // //   const [formData, setFormData] = useState({
// // // //     name: 'Q1 Lead Generation Campaign',
// // // //     arrivedOn: '2025-06-17T14:49:00.000Z',
// // // //     due: '2025-10-29T13:00:00.000Z',
// // // //     status: 'New',
// // // //     type: 'LEADGEN',
// // // //     remark: 'Client approved final quote',
// // // //     briefHyperlink: 'https://example.com/briefs/q1-leadgen',
// // // //   });

// // // //   const handleInputChange = (field, value) => {
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [field]: value,
// // // //     }));
// // // //   };

// // // //   // ✅ JSON generation using two separate spreadsheets
// // // //   // const generateJSON = () => {
// // // //   //   const leadRaw = leadSheetInstance?.worksheets[0].getData() || [];
// // // //   //   const quoteRaw = quoteSheetInstance?.worksheets[0].getData() || [];

// // // //   //   // ✅ leadDetails mapped with SMALL leadCountDetails
// // // //   //   const leadDetails = leadRaw.map((row) => ({
// // // //   //     clientCode: row[0] || 'PH',
// // // //   //     priority: row[1] || 'High',
// // // //   //     assignedTo: row[2] ? row[2].split(',').map((i) => i.trim()) : [],
// // // //   //     regions: row[3] ? row[3].split(',').map((i) => i.trim()) : [],
// // // //   //     audiences: row[4] ? row[4].split(',').map((i) => i.trim()) : [],
// // // //   //     leadType: row[5] || null,
// // // //   //     qualifiers: {
// // // //   //       JobTitle: row[6] || '',
// // // //   //       EmployeeSize: row[7] || '',
// // // //   //       Industry: row[8] || '',
// // // //   //       Other: row[9] || '',
// // // //   //     },
// // // //   //     profilers: row[10] || '',
// // // //   //     deadline: row[11] || '',
// // // //   //     fileAttached: row[12] || '',
// // // //   //     leadCountDetails: {
// // // //   //       ST: Number(row[13]) || 0,
// // // //   //       'ST+ PQ': Number(row[14]) || 0,
// // // //   //       BANT: Number(row[15]) || 0,
// // // //   //     },
// // // //   //   }));

// // // //   //   // ✅ quotes mapped with FULL leadCountDetails
// // // //   //   const quotes = quoteRaw.map((row) => ({
// // // //   //     quotedOn: row[0] || '',
// // // //   //     volume: Number(row[1]) || 0,
// // // //   //     remark: row[2] || '',
// // // //   //     leadCountDetails: {
// // // //   //       ST: Number(row[3]) || 0,
// // // //   //       'ST+ PQ': Number(row[4]) || 0,
// // // //   //       'ST+ QQ': Number(row[5]) || 0,
// // // //   //       BANT: Number(row[6]) || 0,
// // // //   //       DT: Number(row[7]) || 0,
// // // //   //       'DT+ PQ': Number(row[8]) || 0,
// // // //   //       'DT+ QQ': Number(row[9]) || 0,
// // // //   //     },
// // // //   //   }));

// // // //   //   const jsonData = {
// // // //   //     name: formData.name,
// // // //   //     arrivedOn: formData.arrivedOn,
// // // //   //     due: formData.due,
// // // //   //     status: formData.status,
// // // //   //     type: formData.type,
// // // //   //     leadDetails,
// // // //   //     quotes,
// // // //   //     remark: formData.remark,
// // // //   //     briefHyperlink: formData.briefHyperlink,
// // // //   //   };

// // // //   //   console.log('✅ FINAL JSON:', jsonData);

// // // //   //   const dataStr = JSON.stringify(jsonData, null, 2);
// // // //   //   const blob = new Blob([dataStr], { type: 'application/json' });
// // // //   //   const url = URL.createObjectURL(blob);
// // // //   //   const a = document.createElement('a');
// // // //   //   a.href = url;
// // // //   //   a.download = 'campaign-data.json';
// // // //   //   a.click();
// // // //   //   URL.revokeObjectURL(url);
// // // //   // };

// // // //   const generateJSON = () => {
// // // //   const leadCountRows = leadSheetInstance?.worksheets[0].getData() || [];
// // // //   const quoteRows = quoteSheetInstance?.worksheets[0].getData() || [];

// // // //   // Parse Quill content as JSON (ARRAY OF LEADS)
// // // //   let quillLeadDetails = [];
// // // //   try {
// // // //     quillLeadDetails = JSON.parse(formData.leadDetails || "[]");
// // // //   } catch (e) {
// // // //     alert("Invalid JSON in Lead Details Quill box");
// // // //     return;
// // // //   }

// // // //   // Merge quill lead details + spreadsheet leadCountDetails
// // // //   const mergedLeadDetails = quillLeadDetails.map((lead, index) => {
// // // //     const row = leadCountRows[index] || [];

// // // //     return {
// // // //       ...lead,

// // // //       leadCountDetails: {
// // // //         ST: Number(row[0]) || 0,
// // // //         "ST+ PQ": Number(row[1]) || 0,
// // // //         "ST+ QQ": Number(row[2]) || 0,
// // // //         BANT: Number(row[3]) || 0,
// // // //         DT: Number(row[4]) || 0,
// // // //         "DT+ PQ": Number(row[5]) || 0,
// // // //         "DT+ QQ": Number(row[6]) || 0,
// // // //       }
// // // //     };
// // // //   });

// // // //   // Quotes spreadsheet → full structure
// // // //   const quotes = quoteRows.map(row => ({
// // // //     quotedOn: row[0] || "",
// // // //     volume: Number(row[1]) || 0,
// // // //     remark: row[2] || "",
// // // //     leadCountDetails: {
// // // //       ST: Number(row[3]) || 0,
// // // //       "ST+ PQ": Number(row[4]) || 0,
// // // //       "ST+ QQ": Number(row[5]) || 0,
// // // //       BANT: Number(row[6]) || 0,
// // // //       DT: Number(row[7]) || 0,
// // // //       "DT+ PQ": Number(row[8]) || 0,
// // // //       "DT+ QQ": Number(row[9]) || 0
// // // //     }
// // // //   }));

// // // //   const jsonData = {
// // // //     name: formData.name,
// // // //     arrivedOn: formData.arrivedOn,
// // // //     due: formData.due,
// // // //     status: formData.status,
// // // //     type: formData.type,
// // // //     leadDetails: mergedLeadDetails,
// // // //     quotes,
// // // //     remark: formData.remark,
// // // //     briefHyperlink: formData.briefHyperlink
// // // //   };

// // // //   console.log("✅ FINAL JSON:", jsonData);

// // // //   const dataStr = JSON.stringify(jsonData, null, 2);
// // // //   const blob = new Blob([dataStr], { type: "application/json" });
// // // //   const url = URL.createObjectURL(blob);
// // // //   const a = document.createElement("a");
// // // //   a.href = url;
// // // //   a.download = "campaign-data.json";
// // // //   a.click();
// // // //   URL.revokeObjectURL(url);
// // // // };

// // // //   return (
// // // //     <div className="mt-6 border rounded-2xl bg-white p-6">
// // // //       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

// // // //       {/* BASIC INFO */}
// // // //       <section className="mb-8">
// // // //         <h3 className="text-lg font-semibold mb-4">Campaign Information</h3>

// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
// // // //           {/* Replace with your input fields */}
// // // //           <input
// // // //             value={formData.name}
// // // //             onChange={(e) => handleInputChange('name', e.target.value)}
// // // //             className="border p-2 rounded"
// // // //             placeholder="Campaign Name"
// // // //           />

// // // //           <input
// // // //             type="datetime-local"
// // // //             value={
// // // //               formData.arrivedOn
// // // //                 ? new Date(formData.arrivedOn).toISOString().slice(0, 16)
// // // //                 : ''
// // // //             }
// // // //             onChange={(e) =>
// // // //               handleInputChange(
// // // //                 'arrivedOn',
// // // //                 new Date(e.target.value).toISOString()
// // // //               )
// // // //             }
// // // //             className="border p-2 rounded"
// // // //           />

// // // //           <input
// // // //             type="datetime-local"
// // // //             value={
// // // //               formData.due
// // // //                 ? new Date(formData.due).toISOString().slice(0, 16)
// // // //                 : ''
// // // //             }
// // // //             onChange={(e) =>
// // // //               handleInputChange('due', new Date(e.target.value).toISOString())
// // // //             }
// // // //             className="border p-2 rounded"
// // // //           />

// // // //           <input
// // // //             value={formData.status}
// // // //             onChange={(e) => handleInputChange('status', e.target.value)}
// // // //             className="border p-2 rounded"
// // // //             placeholder="status"
// // // //           />
// // // //           <input
// // // //             value={formData.type}
// // // //             onChange={(e) => handleInputChange('type', e.target.value)}
// // // //             className="border p-2 rounded"
// // // //             placeholder="type"
// // // //           />
// // // //           <input
// // // //             value={formData.briefHyperlink}
// // // //             onChange={(e) =>
// // // //               handleInputChange('briefHyperlink', e.target.value)
// // // //             }
// // // //             className="border p-2 rounded"
// // // //             placeholder="briefHyperlink"
// // // //           />
// // // //         </div>

// // // //         {/* Remarks */}
// // // //         <textarea
// // // //           value={formData.remark}
// // // //           onChange={(e) => handleInputChange('remark', e.target.value)}
// // // //           className="border w-full p-3 rounded mt-4"
// // // //           placeholder="Remarks"
// // // //         />
// // // //       </section>

// // // //       {/* ✅ LEAD COUNT DETAILS SPREADSHEET */}
// // // //       <section className="my-8">
// // // //         <h3 className="text-lg font-semibold my-10">Lead Count Details</h3>

// // // //         <Spreadsheet
// // // //           ref={leadSheetRef}
// // // //           tabs={true}
// // // //           onload={(i) => setLeadSheetInstance(i)}
// // // //         >
// // // //           <Worksheet title="Leads" minDimensions={[5, 5]} />
// // // //         </Spreadsheet>

// // // //         <button
// // // //           className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
// // // //           onClick={() => {
// // // //             if (!leadSheetInstance) return;
// // // //             const idx = leadSheetInstance.getWorksheetActive();
// // // //             if (leadSheetInstance.worksheets.length > 1) {
// // // //               leadSheetInstance.worksheets[idx].deleteWorksheet(idx);
// // // //             }
// // // //           }}
// // // //         >
// // // //           Delete Active Lead Sheet
// // // //         </button>
// // // //       </section>

// // // //       {/* ✅ LEAD DETAILS RICH TEXT */}
// // // //       <section className="mb-8">
// // // //         <h3 className="text-lg font-semibold mb-4">Lead Details Notes</h3>

// // // //         <ReactQuill
// // // //           theme="snow"
// // // //           value={formData.leadDetails}
// // // //           onChange={(value) => handleInputChange('leadDetails', value)}
// // // //           className="bg-white rounded"
// // // //         />
// // // //       </section>

// // // //       {/* ✅ QUOTES SPREADSHEET */}
// // // //       <section className="my-8">
// // // //         <h3 className="text-lg font-semibold my-10">Quotes</h3>

// // // //         <Spreadsheet
// // // //           ref={quoteSheetRef}
// // // //           tabs={true}
// // // //           onload={(i) => setQuoteSheetInstance(i)}
// // // //         >
// // // //           <Worksheet title="Quotes" minDimensions={[5, 5]} />
// // // //         </Spreadsheet>

// // // //         <button
// // // //           className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
// // // //           onClick={() => {
// // // //             if (!quoteSheetInstance) return;
// // // //             const idx = quoteSheetInstance.getWorksheetActive();
// // // //             if (quoteSheetInstance.worksheets.length > 1) {
// // // //               quoteSheetInstance.worksheets[idx].deleteWorksheet(idx);
// // // //             }
// // // //           }}
// // // //         >
// // // //           Delete Active Quote Sheet
// // // //         </button>
// // // //       </section>

// // // //       {/* ✅ GENERATE JSON */}
// // // //       <div className="flex mt-8">
// // // //         <button
// // // //           onClick={generateJSON}
// // // //           className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
// // // //         >
// // // //           Generate & Download JSON
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // import { useRef, useState } from 'react';
// // // import ReactQuill from 'react-quill';
// // // import 'react-quill/dist/quill.snow.css';

// // // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // // import 'jsuites/dist/jsuites.css';

// // // export const BriefBuilder = () => {
// // //   const leadSheetRef = useRef(null);

// // //   const [leadSheetInstance, setLeadSheetInstance] = useState(null);

// // //   const [quillText, setQuillText] = useState('');

// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     arrivedOn: '',
// // //     due: '',
// // //     status: '',
// // //     type: '',
// // //     remark: '',
// // //     briefHyperlink: '',
// // //   });

// // //   const handleInputChange = (field, value) => {
// // //     setFormData((prev) => ({ ...prev, [field]: value }));
// // //   };

// // //   // ✅ converts Quill text into { key: [values] } dynamically
// // //   const parseQuillToObject = (html) => {
// // //     const text = html.replace(/<[^>]+>/g, '').trim();
// // //     const lines = text
// // //       .split('\n')
// // //       .map((l) => l.trim())
// // //       .filter(Boolean);

// // //     let result = {};
// // //     let currentKey = null;

// // //     lines.forEach((line) => {
// // //       if (/^[A-Za-z0-9() ]+$/.test(line)) {
// // //         currentKey = line.replace(/[:()]/g, '').trim();
// // //         result[currentKey] = [];
// // //       } else if (currentKey) {
// // //         result[currentKey].push(...line.split(',').map((i) => i.trim()));
// // //       }
// // //     });

// // //     return result;
// // //   };

// // //   // ✅ universal row → object builder (no hardcoding)
// // //   const buildDynamicObject = (headers, row) => {
// // //     const obj = {};
// // //     headers.forEach((header, col) => {
// // //       const val = row[col];
// // //       obj[header] = val === '' ? '' : isNaN(val) ? val : Number(val);
// // //     });
// // //     return obj;
// // //   };

// // //   // ✅ FULL JSON GENERATION WITH 0 HARDCODE
// // //   const generateJSON = () => {
// // //     // ----------- LEAD COUNT DETAILS ------------
// // //     let leadCountDetails = {};

// // //     if (leadSheetInstance) {
// // //       const sheet = leadSheetInstance.worksheets[0];
// // //       const data = sheet.getData();

// // //       const headers = data[0] || [];
// // //       const firstDataRow = data[1] || [];

// // //       leadCountDetails = buildDynamicObject(headers, firstDataRow);
// // //     }

// // //     const leadDetails = [
// // //       {
// // //         ...parseQuillToObject(quillText),
// // //         leadCountDetails,
// // //       },
// // //     ];

// // //     const jsonData = {
// // //       ...formData,
// // //       leadDetails,
// // //     };

// // //     console.log('✅ FINAL JSON:', jsonData);

// // //     const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
// // //       type: 'application/json',
// // //     });
// // //     const url = URL.createObjectURL(blob);
// // //     const a = document.createElement('a');
// // //     a.href = url;
// // //     a.download = 'campaign-data.json';
// // //     a.click();
// // //     URL.revokeObjectURL(url);
// // //   };

// // //   return (
// // //     <div className="mt-6 border rounded-2xl bg-white p-6">
// // //       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

// // //       {/* ✅ BASIC FORM */}
// // //       <div className="grid grid-cols-3 gap-4 mb-6">
// // //         <input
// // //           className="border p-2"
// // //           placeholder="Campaign Name"
// // //           value={formData.name}
// // //           onChange={(e) => handleInputChange('name', e.target.value)}
// // //         />

// // //         <input
// // //           type="date"
// // //           className="border p-2"
// // //           value={formData.arrivedOn}
// // //           onChange={(e) => handleInputChange('arrivedOn', e.target.value)}
// // //         />

// // //         <input
// // //           type="date"
// // //           className="border p-2"
// // //           value={formData.due}
// // //           onChange={(e) => handleInputChange('due', e.target.value)}
// // //         />

// // //         <input
// // //           className="border p-2"
// // //           placeholder="Status"
// // //           value={formData.status}
// // //           onChange={(e) => handleInputChange('status', e.target.value)}
// // //         />

// // //         <input
// // //           className="border p-2"
// // //           placeholder="Type"
// // //           value={formData.type}
// // //           onChange={(e) => handleInputChange('type', e.target.value)}
// // //         />

// // //         <input
// // //           className="border p-2"
// // //           placeholder="Brief Hyperlink"
// // //           value={formData.briefHyperlink}
// // //           onChange={(e) => handleInputChange('briefHyperlink', e.target.value)}
// // //         />
// // //       </div>

// // //       <textarea
// // //         className="border w-full p-3 rounded mt-4"
// // //         placeholder="Remarks"
// // //         value={formData.remark}
// // //         onChange={(e) => handleInputChange('remark', e.target.value)}
// // //       />

// // //       {/* ✅ QUILL (Dynamic Fields) */}
// // //       <h3 className="mt-10 mb-2 font-semibold text-lg">Lead Detail Sections</h3>
// // //       <ReactQuill value={quillText} onChange={setQuillText} />

// // //       {/* ✅ LEAD COUNT SPREADSHEET */}
// // //       <h3 className="mt-10 mb-2 font-semibold text-lg">Lead Count Details</h3>
// // //       <Spreadsheet
// // //         ref={leadSheetRef}
// // //         tabs={false}
// // //         onload={(i) => setLeadSheetInstance(i)}
// // //       >
// // //         <Worksheet title="LeadCount" minDimensions={[7, 2]} />
// // //       </Spreadsheet>

// // //       {/* ✅ GENERATE JSON */}
// // //       <button
// // //         onClick={generateJSON}
// // //         className="mt-10 bg-green-600 px-6 py-3 text-white rounded-lg"
// // //       >
// // //         Generate JSON
// // //       </button>
// // //     </div>
// // //   );
// // // };
// // import { useRef, useState } from 'react';
// // import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css';

// // import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// // import 'jspreadsheet-ce/dist/jspreadsheet.css';
// // import 'jsuites/dist/jsuites.css';

// // export const BriefBuilder = () => {
// //   const [leadBlocks, setLeadBlocks] = useState([
// //     {
// //       quillText: '',
// //       sheetRef: null,
// //       sheetInstance: null,
// //     },
// //   ]);

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     arrivedOn: '',
// //     due: '',
// //     status: '',
// //     type: '',
// //     remark: '',
// //     briefHyperlink: '',
// //   });

// //   const handleInputChange = (field, value) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }));
// //   };

// //   // ✅ Parse Quill → Dynamic Object
// //   const parseQuillToObject = (html) => {
// //     const text = html.replace(/<[^>]+>/g, '').trim();
// //     const lines = text
// //       .split('\n')
// //       .map((l) => l.trim())
// //       .filter(Boolean);

// //     const result = {};
// //     let currentKey = null;

// //     lines.forEach((line) => {
// //       // If line looks like a key (no commas)
// //       if (/^[A-Za-z0-9() \-+]+:?$/.test(line)) {
// //         currentKey = line.replace(/[:()]/g, '').trim();

// //         if (!currentKey) return;
// //         result[currentKey] = [];
// //       } else if (currentKey) {
// //         result[currentKey].push(
// //           ...line
// //             .split(',')
// //             .map((v) => v.trim())
// //             .filter(Boolean)
// //         );
// //       }
// //     });

// //     return result;
// //   };

// //   // ✅ builds an object from headers + row
// //   const buildDynamicObject = (headers, row) => {
// //     const obj = {};
// //     headers.forEach((h, c) => {
// //       const val = row[c];
// //       obj[h] = val === undefined || val === null ? '' : val;
// //     });
// //     return obj;
// //   };

// //   // ✅ Generate JSON with multiple leadDetails blocks
// //   const generateJSON = () => {
// //     const allLeadDetails = leadBlocks.map((block) => {
// //       let leadCountDetails = [];

// //       if (block.sheetInstance) {
// //         const sheet = block.sheetInstance.worksheets[0];
// //         const data = sheet.getData();

// //         const headers = data[0] || [];
// //         const rows = data.slice(1);

// //         leadCountDetails = rows
// //           .filter((r) => r.some((x) => x !== ''))
// //           .map((row) => buildDynamicObject(headers, row));
// //       }

// //       const parsedQuill = parseQuillToObject(block.quillText);

// //       return {
// //         ...parsedQuill,
// //         leadCountDetails,
// //       };
// //     });

// //     const jsonData = {
// //       ...formData,
// //       leadDetails: allLeadDetails,
// //     };

// //     console.log('✅ FINAL JSON:', jsonData);

// //     const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
// //       type: 'application/json',
// //     });

// //     const url = URL.createObjectURL(blob);
// //     const a = document.createElement('a');
// //     a.href = url;
// //     a.download = 'campaign-data.json';
// //     a.click();
// //     URL.revokeObjectURL(url);
// //   };

// //   // ✅ Add new Lead Detail block
// //   const addLeadDetail = () => {
// //     setLeadBlocks((prev) => [
// //       ...prev,
// //       {
// //         quillText: '',
// //         sheetRef: null,
// //         sheetInstance: null,
// //       },
// //     ]);
// //   };

// //   // =======================================================================
// //   // ✅ UI
// //   // =======================================================================
// //   return (
// //     <div className="mt-6 border rounded-2xl bg-white p-6">
// //       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

// //       {/* BASIC FORM */}
// //       <div className="grid grid-cols-3 gap-4 mb-6">
// //         <input
// //           className="border p-2"
// //           placeholder="Campaign Name"
// //           value={formData.name}
// //           onChange={(e) => handleInputChange('name', e.target.value)}
// //         />

// //         <input
// //           type="date"
// //           className="border p-2"
// //           value={formData.arrivedOn}
// //           onChange={(e) => handleInputChange('arrivedOn', e.target.value)}
// //         />

// //         <input
// //           type="date"
// //           className="border p-2"
// //           value={formData.due}
// //           onChange={(e) => handleInputChange('due', e.target.value)}
// //         />

// //         <input
// //           className="border p-2"
// //           placeholder="Status"
// //           value={formData.status}
// //           onChange={(e) => handleInputChange('status', e.target.value)}
// //         />

// //         <input
// //           className="border p-2"
// //           placeholder="Type"
// //           value={formData.type}
// //           onChange={(e) => handleInputChange('type', e.target.value)}
// //         />

// //         <input
// //           className="border p-2"
// //           placeholder="Brief Hyperlink"
// //           value={formData.briefHyperlink}
// //           onChange={(e) => handleInputChange('briefHyperlink', e.target.value)}
// //         />
// //       </div>

// //       <textarea
// //         className="border w-full p-3 rounded mt-4"
// //         placeholder="Remarks"
// //         value={formData.remark}
// //         onChange={(e) => handleInputChange('remark', e.target.value)}
// //       />

// //       {/* LEAD DETAIL BLOCKS */}
// //       {leadBlocks.map((block, index) => (
// //         <div key={index} className="mt-10 p-4 border rounded-xl bg-gray-50">
// //           <div className="flex items-center justify-between mb-10">
// //             <h3 className="font-semibold text-lg mb-2">
// //               Lead Detail #{index + 1}
// //             </h3>
// //             <button
// //               className="mt-6 bg-blue-600 px-4 py-2 text-white rounded"
// //               onClick={addLeadDetail}
// //             >
// //               + Add Lead Detail
// //             </button>
// //           </div>

// //           {/* QUILL */}
// //           <ReactQuill
// //             value={block.quillText}
// //             onChange={(val) => {
// //               const updated = [...leadBlocks];
// //               updated[index].quillText = val;
// //               setLeadBlocks(updated);
// //             }}
// //           />

// //           {/* SPREADSHEET */}
// //           <h4 className="font-medium mt-6 mb-2">Lead Count Details</h4>

// //           <Spreadsheet
// //             ref={(ref) => {
// //               const updated = [...leadBlocks];
// //               updated[index].sheetRef = ref;
// //               setLeadBlocks(updated);
// //             }}
// //             tabs={false}
// //             onload={(instance) => {
// //               const updated = [...leadBlocks];
// //               updated[index].sheetInstance = instance;
// //               setLeadBlocks(updated);
// //             }}
// //           >
// //             <Worksheet title="LeadCount" minDimensions={[5, 3]} />
// //           </Spreadsheet>
// //         </div>
// //       ))}

// //       <button
// //         onClick={generateJSON}
// //         className="mt-10 bg-green-600 px-6 py-3 text-white rounded-lg"
// //       >
// //         Generate JSON
// //       </button>
// //     </div>
// //   );
// // };
// import { useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
// import 'jspreadsheet-ce/dist/jspreadsheet.css';
// import 'jsuites/dist/jsuites.css';

// export const BriefBuilder = () => {
//   const leadSheetRef = useRef(null);

//   const [leadSheetInstance, setLeadSheetInstance] = useState(null);
//   const [quillText, setQuillText] = useState('');
//   const [leadDetailsCount, setLeadDetailsCount] = useState(1);

//   const [formData, setFormData] = useState({
//     name: '',
//     arrivedOn: '',
//     due: '',
//     status: '',
//     type: '',
//     remark: '',
//     briefHyperlink: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // ✅ Improved Quill parser that handles the actual structure
//   const parseQuillToObject = (html) => {
//     const text = html.replace(/<[^>]+>/g, '').trim();
//     const lines = text
//       .split('\n')
//       .map((l) => l.trim())
//       .filter(Boolean);

//     let result = {};

//     lines.forEach((line) => {
//       // Look for key-value pairs separated by colon
//       const colonIndex = line.indexOf(':');
//       if (colonIndex > 0) {
//         const key = line.substring(0, colonIndex).trim();
//         const value = line.substring(colonIndex + 1).trim();

//         // Handle array values (comma-separated)
//         if (value.includes(',')) {
//           result[key] = value
//             .split(',')
//             .map((item) => item.trim())
//             .filter((item) => item);
//         } else {
//           result[key] = value;
//         }
//       }
//     });

//     return result;
//   };

//   // ✅ Build dynamic object from spreadsheet rows
//   const buildDynamicObject = (headers, rows) => {
//     const result = {};

//     rows.forEach((row, rowIndex) => {
//       if (rowIndex === 0) return; // Skip header row

//       const region = row[0];
//       if (region && region.trim()) {
//         result[region] = {};
//         headers.forEach((header, colIndex) => {
//           if (colIndex > 0) {
//             // Skip first column (region names)
//             const val = row[colIndex];
//             result[region][header] =
//               val === '' || val === null || val === undefined
//                 ? ''
//                 : isNaN(val)
//                   ? val
//                   : Number(val);
//           }
//         });
//       }
//     });

//     return result;
//   };

//   // ✅ Generate JSON with multiple leadDetails
//   const generateJSON = () => {
//     // Get data from all spreadsheets
//     const allLeadCountDetails = [];

//     if (leadSheetInstance) {
//       const sheet = leadSheetInstance.worksheets[0];
//       const data = sheet.getData();

//       if (data.length > 1) {
//         const headers = data[0] || [];
//         const leadCountDetails = buildDynamicObject(headers, data);
//         allLeadCountDetails.push(leadCountDetails);
//       } else {
//         allLeadCountDetails.push({});
//       }
//     }

//     // Parse Quill content for each lead detail
//     const parsedQuillData = parseQuillToObject(quillText);

//     // Create leadDetails array
//     const leadDetails = [];

//     for (let i = 0; i < leadDetailsCount; i++) {
//       leadDetails.push({
//         ...parsedQuillData,
//         leadCountDetails: allLeadCountDetails[i] || {},
//       });
//     }

//     const jsonData = {
//       ...formData,
//       leadDetails,
//     };

//     console.log('✅ FINAL JSON:', jsonData);

//     // Download JSON file
//     const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
//       type: 'application/json',
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'campaign-data.json';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // ✅ Add new lead details section
//   const addLeadDetails = () => {
//     setLeadDetailsCount((prev) => prev + 1);
//   };

//   // ✅ Remove lead details section
//   const removeLeadDetails = () => {
//     if (leadDetailsCount > 1) {
//       setLeadDetailsCount((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="mt-6 border rounded-2xl bg-white p-6">
//       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

//       {/* ✅ BASIC FORM */}
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         <input
//           className="border p-2"
//           placeholder="Campaign Name"
//           value={formData.name}
//           onChange={(e) => handleInputChange('name', e.target.value)}
//         />

//         <input
//           type="date"
//           className="border p-2"
//           value={formData.arrivedOn}
//           onChange={(e) => handleInputChange('arrivedOn', e.target.value)}
//         />

//         <input
//           type="date"
//           className="border p-2"
//           value={formData.due}
//           onChange={(e) => handleInputChange('due', e.target.value)}
//         />

//         <input
//           className="border p-2"
//           placeholder="Status"
//           value={formData.status}
//           onChange={(e) => handleInputChange('status', e.target.value)}
//         />

//         <input
//           className="border p-2"
//           placeholder="Type"
//           value={formData.type}
//           onChange={(e) => handleInputChange('type', e.target.value)}
//         />

//         <input
//           className="border p-2"
//           placeholder="Brief Hyperlink"
//           value={formData.briefHyperlink}
//           onChange={(e) => handleInputChange('briefHyperlink', e.target.value)}
//         />
//       </div>

//       <textarea
//         className="border w-full p-3 rounded mt-4"
//         placeholder="Remarks"
//         value={formData.remark}
//         onChange={(e) => handleInputChange('remark', e.target.value)}
//       />

//       {/* ✅ QUILL (Dynamic Fields) */}
//       <h3 className="mt-10 mb-2 font-semibold text-lg">Lead Detail Sections</h3>
//       <div className="mb-4">
//         <p className="text-sm text-gray-600 mb-2">
//           Enter data in format: <code>key: value</code> or{' '}
//           <code>key: value1, value2, value3</code>
//         </p>
//         <ReactQuill value={quillText} onChange={setQuillText} theme="snow" />
//       </div>

//       {/* ✅ LEAD COUNT SPREADSHEET */}
//       <div className="flex justify-between items-center mt-10 mb-2">
//         <h3 className="font-semibold text-lg">Lead Count Details</h3>
//         <div className="flex gap-2">
//           <button
//             onClick={addLeadDetails}
//             className="bg-blue-600 px-4 py-2 text-white rounded-lg text-sm"
//           >
//             + Add Lead Details
//           </button>
//           {leadDetailsCount > 1 && (
//             <button
//               onClick={removeLeadDetails}
//               className="bg-red-600 px-4 py-2 text-white rounded-lg text-sm"
//             >
//               - Remove
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="mb-4">
//         <p className="text-sm text-gray-600 mb-2">
//           Currently showing data for {leadDetailsCount} lead detail section(s)
//         </p>
//       </div>

//       <Spreadsheet
//         ref={leadSheetRef}
//         tabs={false}
//         onload={(i) => setLeadSheetInstance(i)}
//       >
//         <Worksheet
//           title="LeadCount"
//           minDimensions={[5, 3]}
//           // data={[
//           //   ['Region:', 'LD', 'RPO', 'A&S', 'S&S'],
//           //   ['US', '', '', '', ''],
//           //   ['UK', '', '', '', ''],
//           // ]}
//         />
//       </Spreadsheet>

//       {/* ✅ GENERATE JSON */}
//       <button
//         onClick={generateJSON}
//         className="mt-10 bg-green-600 px-6 py-3 text-white rounded-lg"
//       >
//         Generate JSON
//       </button>

//       {/* ✅ Preview current Quill parsing */}
//       <div className="mt-6 p-4 border rounded bg-gray-50">
//         <h4 className="font-semibold mb-2">Quill Parsing Preview:</h4>
//         <pre className="text-sm">
//           {JSON.stringify(parseQuillToObject(quillText), null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// };
import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';
import 'jspreadsheet-ce/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

export const BriefBuilder = () => {
  const leadSheetRef = useRef(null);

  const [leadSheetInstance, setLeadSheetInstance] = useState(null);
  const [quillText, setQuillText] = useState('');
  const [leadDetailsCount, setLeadDetailsCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    arrivedOn: '',
    due: '',
    status: 'New',
    type: 'LEADGEN',
    remark: '',
    briefHyperlink: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const buildDynamicObject = (headers, row) => {
    const obj = {};
    headers.forEach((header, i) => {
      if (i === 0) return;
      const val = row[i];
      obj[header] = val === '' || val === null || val === undefined ? '' : isNaN(val) ? val : Number(val);
    });
    return obj;
  };

  const handleUploadJSON = async () => {
    setLoading(true);

    const allLeadCountDetails = [];

    try {
      if (leadSheetInstance) {
        const sheet = leadSheetInstance.worksheets[0];
        const rawData = sheet.getData();

        if (rawData.length > 1) {
          const headers = rawData[0];
          const rows = rawData.slice(1);

          rows.forEach((row) => {
            if (row[0]) {
              const region = row[0];
              allLeadCountDetails.push({
                [region]: buildDynamicObject(headers, row),
              });
            }
          });
        }
      }

      const leadDetails = [];
      for (let i = 0; i < leadDetailsCount; i++) {
        leadDetails.push({
          detailsHtml: quillText,
          leadCountDetails: allLeadCountDetails[i] || {},
        });
      }

      const jsonData = {
        ...formData,
        leadDetails,
      };

      const response = await fetch('http://localhost:3000/briefs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) throw new Error('Upload failed');
    } catch (error) {
      console.error('Upload failed:', error);
    }

    setLoading(false);
  };

  return (
    <div className="mt-6 border rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <input
          className="border p-2 rounded w-full"
          placeholder="Campaign Name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded w-full"
          value={formData.arrivedOn}
          onChange={(e) => handleInputChange('arrivedOn', e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded w-full"
          value={formData.due}
          onChange={(e) => handleInputChange('due', e.target.value)}
        />

        <select
          value={formData.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="New">New</option>
          <option value="InProgress">InProgress</option>
          <option value="Quoted">Quoted</option>
          <option value="NewUpdate">NewUpdate</option>
        </select>

        <select
          value={formData.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="LEADGEN">LEADGEN</option>
          <option value="HTML">HTML</option>
        </select>

        <input
          className="border p-2 rounded w-full"
          placeholder="Brief Hyperlink"
          value={formData.briefHyperlink}
          onChange={(e) => handleInputChange('briefHyperlink', e.target.value)}
        />
      </div>

      <textarea
        className="border w-full p-3 rounded mt-4"
        placeholder="Remarks"
        value={formData.remark}
        onChange={(e) => handleInputChange('remark', e.target.value)}
      />

      <h3 className="mt-10 mb-2 font-semibold text-lg">Lead Detail Sections</h3>
      <ReactQuill
        value={quillText}
        onChange={setQuillText}
        theme="snow"
        placeholder="Enter lead details. HTML gets saved."
      />

      <h3 className="mt-10 mb-2 font-semibold text-lg">Lead Count Details</h3>
      <div className="  p-3">
        <Spreadsheet ref={leadSheetRef} tabs={false} onload={(i) => setLeadSheetInstance(i)}>
          <Worksheet title="LeadCount" minDimensions={[5, 3]} />
        </Spreadsheet>
      </div>

      <button
        onClick={handleUploadJSON}
        disabled={loading}
        className={`mt-10 px-6 py-3 rounded-lg text-white w-full sm:w-auto ${
          loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600'
        }`}
      >
        {loading ? 'Uploading...' : 'Submit'}
      </button>
    </div>
  );
};
