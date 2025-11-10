// import React, { useState } from 'react';
// import Spreadsheet from 'react-spreadsheet';
// import axios from 'axios';
// import "jsuites/dist/jsuites.css";
// import "jspreadsheet-ce/dist/jspreadsheet.css";


// Updated BriefBuilder.jsx with the robust delete logic
import { useRef, useState } from 'react';
import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';

import 'jspreadsheet-ce/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

export const BriefBuilder = () => {
  const spreadsheet = useRef(null);
  const [instance, setInstance] = useState(null);




  return (
    <div className="mt-6 border rounded-2xl bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

      <Spreadsheet
        ref={spreadsheet}
        tabs={true}
        onload={(jspreadsheetInstance) => {
          console.log('✅ Spreadsheet instance ready:', jspreadsheetInstance);
          setInstance(jspreadsheetInstance);
        }}
      >
        <Worksheet title="Sheet 1" minDimensions={[6, 6]} />
      </Spreadsheet>

      <button
        className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
        onClick={() => {
          if (!instance) {
            console.warn('Spreadsheet not ready');
            return;
          }

          // 1. Get the index of the active sheet
          const activeIndex = instance.getWorksheetActive();
          const totalSheets = instance.worksheets.length;

          console.log(`Deleting sheet at index: ${activeIndex}. Total sheets: ${totalSheets}`);

          if (totalSheets > 1) {
            // 2. Access the specific worksheet instance
            const activeWorksheet = instance.worksheets[activeIndex];

            // 3. Call the deleteWorksheet function on the main spreadsheet instance.
            //    This is the most common fix when the direct call fails.
            //    It uses the index on the primary instance.
            activeWorksheet.deleteWorksheet(activeIndex);

            // 💡 If the above line still fails, uncomment this alternative:
            // activeWorksheet.deleteWorksheet(); 

          } else {
            alert('Cannot delete the last worksheet.');
          }
        }}
      >
        Delete Active Sheet
      </button>
     
    </div>
  );
};




// {/* Campaign Info */}
// <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//   {Object.keys(campaignInfo).map((key) => (
//     <div key={key}>
//       <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
//         {key}
//       </label>
//       <input
//         type={
//           key.toLowerCase().includes('on') || key === 'due'
//             ? 'date'
//             : 'text'
//         }
//         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//         value={
//           key.toLowerCase().includes('on') || key === 'due'
//             ? campaignInfo[key].slice(0, 10)
//             : campaignInfo[key]
//         }
//         onChange={(e) =>
//           setCampaignInfo({ ...campaignInfo, [key]: e.target.value })
//         }
//       />
//     </div>
//   ))}
// </section>

// {/* Lead Sheet */}
// <section>
//   <div className="flex items-center justify-between mb-2">
//     <h2 className="text-lg font-semibold text-gray-800">
//       Lead Count Sheet
//     </h2>
//     <button
//       onClick={() => addColumn(setLeadSheet, leadSheet)}
//       className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
//     >
//       ➕ Add Column
//     </button>
//   </div>
//   <div className="overflow-x-auto border border-gray-200 rounded-lg">
//     <Spreadsheet data={leadSheet} onChange={setLeadSheet} />
//   </div>
// </section>

// {/* Quotes Sheet */}
// <section>
//   <div className="flex items-center justify-between mb-2">
//     <h2 className="text-lg font-semibold text-gray-800">
//       Quotes Sheet (optional)
//     </h2>
//     <button
//       onClick={() => addColumn(setQuoteSheet, quoteSheet)}
//       className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
//     >
//       ➕ Add Column
//     </button>
//   </div>
//   <div className="overflow-x-auto border border-gray-200 rounded-lg">
//     <Spreadsheet data={quoteSheet} onChange={setQuoteSheet} />
//   </div>
//   <p className="text-xs text-gray-500 mt-1">
//     Leave blank if no quotes are provided.
//   </p>
// </section>

// {/* Buttons */}
// <div className="flex flex-wrap gap-4">
//   <button
//     onClick={handleGenerateJSON}
//     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-sm"
//   >
//     ⚙️ Generate JSON
//   </button>
//   <button
//     disabled={loading}
//     onClick={handleSubmit}
//     className={`px-6 py-2.5 rounded-lg font-medium text-white shadow-sm ${
//       loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
//     }`}
//   >
//     {loading ? 'Submitting...' : '🚀 Submit to API'}
//   </button>
// </div>

// {/* JSON Preview */}
// {Object.keys(payload).length > 0 && (
//   <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-h-96 overflow-y-auto">
//     <h3 className="font-semibold text-gray-700 mb-2">
//       Generated Payload:
//     </h3>
//     <pre className="text-xs text-gray-800 whitespace-pre-wrap">
//       {JSON.stringify(payload, null, 2)}
//     </pre>
//   </div>
// )}
