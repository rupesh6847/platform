// import { useRef, useState } from 'react';
// import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';

// import 'jspreadsheet-ce/dist/jspreadsheet.css';
// import 'jsuites/dist/jsuites.css';

// export const Content = () => {
//       const spreadsheet = useRef(null);
//       const [instance, setInstance] = useState(null);
//   return (
//       <div>
//           <div className="flex justify-between items-center">
//             <h3 className="font-medium">Content</h3>
//             <button
//               type="button"
//               onClick={() => addField('Content')}
//               className="text-blue-500 text-sm"
//             >
//               + Add
//             </button>
//           </div>

//           {campaign.Content.map((c, i) => (
//             <div key={i} className="border p-3 rounded mt-2 space-y-2">
//               <input
//                 placeholder="Category (e.g. AI)"
//                 value={c.category}
//                 className="border p-2 rounded w-full"
//                 onChange={(e) =>
//                   handleContentChange(i, 'category', e.target.value)
//                 }
//               />

//               {c.titles.map((t, ti) => (
//                 <div key={ti} className="flex gap-2">
//                   <input
//                     placeholder="Title"
//                     value={t}
//                     className="border p-2 rounded w-full"
//                     onChange={(e) => handleTitleChange(i, ti, e.target.value)}
//                   />
//                   {ti > 0 && (
//                     <button
//                       type="button"
//                       onClick={() => removeTitle(i, ti)}
//                       className="text-red-500"
//                     >
//                       ✕
//                     </button>
//                   )}
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() => addTitle(i)}
//                 className="text-blue-500 text-sm"
//               >
//                 + Add Title
//               </button>

//               {i > 0 && (
//                 <button
//                   type="button"
//                   onClick={() => removeField('Content', i)}
//                   className="text-red-500 text-sm ml-2"
//                 >
//                   Remove Category
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//     <div className="mt-6 border rounded-2xl bg-white p-6">
//       <h2 className="text-xl font-semibold mb-6">Brief Builder</h2>

//       <Spreadsheet
//         ref={spreadsheet}
//         tabs={true}
//         onload={(jspreadsheetInstance) => {
//           setInstance(jspreadsheetInstance);
//         }}
//       >
//         <Worksheet title="Sheet 1" minDimensions={[6, 6]} />
//       </Spreadsheet>

//       <button
//         className="mt-4 rounded bg-red-500 text-white px-4 py-2 hover:bg-red-600"
//         onClick={() => {
//           if (!instance) {
//             console.warn('Spreadsheet not ready');
//             return;
//           }

//           // 1. Get the index of the active sheet
//           const activeIndex = instance.getWorksheetActive();
//           const totalSheets = instance.worksheets.length;

//           if (totalSheets > 1) {
//             // 2. Access the specific worksheet instance
//             const activeWorksheet = instance.worksheets[activeIndex];

//             // 3. Call the deleteWorksheet function on the main spreadsheet instance.
//             //    This is the most common fix when the direct call fails.
//             //    It uses the index on the primary instance.
//             activeWorksheet.deleteWorksheet(activeIndex);

//             // 💡 If the above line still fails, uncomment this alternative:
//             // activeWorksheet.deleteWorksheet();
//           } else {
//             alert('Cannot delete the last worksheet.');
//           }
//         }}
//       >
//         Delete Active Sheet
//       </button>
//     </div>

//   )
// }
import { useRef, useState, useCallback, useEffect } from 'react';
import { Spreadsheet, Worksheet } from '@jspreadsheet-ce/react';

// Import the required CSS files
import 'jspreadsheet-ce/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

export const Content = ({ content, setContent }) => {
  const spreadsheet = useRef(null);
  const [instance, setInstance] = useState(null);

  // The column headers must match the uppercase keys used in conversion
  const initialData = [
    ['TITLE', 'TYPE', 'APPROVEDATE', 'OPTINTYPE', 'CATEGORY'], // Header Row
    // You can add an initial data row here if needed
  ];

  // Using useCallback for the conversion function is a good practice for performance
  const convertSheetToContentJSON = useCallback((data) => {
    if (!data || data.length < 2) return [];

    const rows = data.map((row) => {
      return {
        TITLE: row[0] || '',
        TYPE: row[1] || '',
        APPROVEDATE: row[2] || '',
        OPTINTYPE: row[3] || '',
        CATEGORY: row[4] || '',
      };
    });

    // Remove the header row (the first row)
    rows.shift();

    const grouped = {};

    rows.forEach((row) => {
      const categoryKey = row.CATEGORY.trim();

      if (!categoryKey) return;

      if (!grouped[categoryKey]) {
        grouped[categoryKey] = [];
      }

      grouped[categoryKey].push({
        id: Date.now() + Math.floor(Math.random() * 100000),
        title: row.TITLE,
        type: row.TYPE,
        approveDate: row.APPROVEDATE,
        optinType: row.OPTINTYPE,
      });
    });

    return Object.keys(grouped).map((category) => ({
      categoryName: category,
      content: grouped[category],
    }));
  }, []);

  /**
   * Centralized function to get data, convert it, and update the state.
   * This is called by both onload and onchanges.
   * @param {object} currentInstance - The jspreadsheet instance.
   */
  const updateContent = useCallback(
    (currentInstance) => {
      if (!currentInstance) return;

      // Get the current active sheet (even though you only have one)
      const activeSheetIndex = currentInstance.getWorksheetActive();
      const sheet = currentInstance.worksheets[activeSheetIndex];

      // Get the raw data
      const data = sheet.getData();

      // Convert and update state
      const json = convertSheetToContentJSON(data);

      setContent(json);
    },
    [convertSheetToContentJSON, setContent]
  );

  return (
    <div className="mt-6 border rounded-2xl bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Content</h2>

      <Spreadsheet
        ref={spreadsheet}
        tabs={false}
        onload={(jspreadsheetInstance) => {
          setInstance(jspreadsheetInstance);

          // Initialize content state on load
          updateContent(jspreadsheetInstance);
        }}
      >
        <Worksheet
          title="Content Input"
          minDimensions={[6, 6]}
          data={initialData}
          columnHeaders={['TITLE', 'TYPE', 'APPROVEDATE', 'OPTINTYPE', 'CATEGORY']}
        />
      </Spreadsheet>

      {/* 🚀 FIXED: Call updateContent and pass the spreadsheet instance from state */}
      <button
        className="mt-4 rounded bg-green-500 text-white px-4 py-2 hover:bg-green-600"
        onClick={() => updateContent(instance)}
      >
        Save Content
      </button>

      {/* <pre className="mt-4 bg-gray-100 text-sm p-3 rounded h-72 overflow-auto">
        {JSON.stringify(content, null, 2)}
      </pre> */}
    </div>
  );
};
