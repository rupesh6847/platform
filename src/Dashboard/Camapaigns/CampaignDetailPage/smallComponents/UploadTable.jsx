import AppTooltip from '../../../../lib/Tooltip';
import { Slicestring } from '../../../../lib/Slicestring';
import { CircleCheckBig } from 'lucide-react';
import { useState } from 'react';
// DeliveryView.jsx
export const DeliveryView = ({ campaignId, deliveryData, onBack }) => {
  let tableData = [];
  try {
    tableData = JSON.parse(deliveryData.data);
  } catch (e) {
    console.error("Invalid JSON in deliveryData.data", e);
  }

  // Determine columns from the first object
  const columns =
    Array.isArray(tableData) && tableData.length > 0
      ? Object.keys(tableData[0])
      : [];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900 overflow-y-auto">
      {/* Header / Back Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 sticky top-0 z-10">
        <button
          onClick={onBack}
          className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          ← Back
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Delivery Details
        </h2>
        <span className="text-sm text-gray-400 dark:text-gray-500">
          Campaign #{campaignId}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          {deliveryData.fileName}
        </h3>

        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-800 shadow-sm space-y-3 mb-6">
          <p>
            <strong>Submitted:</strong> {deliveryData.submitted}
          </p>
          <p>
            <strong>Accepted:</strong> {deliveryData.accepted}
          </p>
          <p>
            <strong>Errors:</strong> {deliveryData.errors}
          </p>
          <p>
            <strong>Rejections:</strong> {deliveryData.rejections}
          </p>
          <p>
            <strong>Date:</strong> {deliveryData.date}
          </p>
        </div>

        {/* Table view */}
       {Array.isArray(tableData) && tableData.length > 0 ? (
  <div className="overflow-x-auto mx-auto mt-6 max-w-8xl rounded-lg border border-gray-200 dark:border-gray-700">
    <table className="w-full text-xs text-left border-collapse">
      <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-semibold whitespace-nowrap"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, idx) => (
          <tr
            key={idx}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            {columns.map((col) => (
              <td
                key={col}
                className="px-2 py-1 text-gray-800 dark:text-gray-200 truncate max-w-[150px]"
              >
                {typeof row[col] === 'object'
                  ? JSON.stringify(row[col])
                  : row[col] ?? '—'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <p className="text-gray-500 dark:text-gray-400 mt-6 text-sm text-center">
    No valid table data available.
  </p>
)}

      </div>
    </div>
  );
};




// export const UploadTable = ({ data,campaignId }) => {
//   return (
//     <div className="rounded-lg border border-gray-200 dark:border-gray-700  dark:bg-gray-800 text-sm p-4 lg:p-6">
//       <div className="overflow-x-auto">
//         <table className="w-full rounded-lg   dark:border-gray-700 text-left text-sm">
//           <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
//             <tr>
//               <th className="p-3 font-medium">UPLOADS</th>
//               <th className="p-3 font-medium"></th>
//               <th className="p-3 font-medium">SUBMITTED</th>
//               <th className="p-3 font-medium">ACCEPTED</th>
//               <th className="p-3 font-medium">ERRORS</th>
//               <th className="p-3 font-medium">REJECTIONS</th>
//               <th className="p-3 font-medium">VIEW</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.map((u) => (
//               <tr
//                 key={u.id}
//                 className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
//               >
//                 <td className="p-3">
//                   <div className="flex flex-col">
//                     <AppTooltip message={u.name}>
//                       <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
//                         {/* {task.program} */}
//                         {Slicestring(u.fileName, 1, 25)}
//                         {u.fileName.length > 25 && '...'}
//                       </p>
//                     </AppTooltip>
//                     <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">{u.date}</span>
//                   </div>
//                 </td>
//                 <td className="p-3 text-center text-gray-400">
//                   <CircleCheckBig color="#00D100" />
//                 </td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.submitted}</td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.accepted}</td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.errors}</td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.rejections}</td>
//                 <td className="p-3 text-center text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
//                   View
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

export const UploadTable = ({ data, campaignId }) => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  // ✅ When a delivery is selected, show DeliveryView full-page
  if (selectedDelivery) {
    return (
      <DeliveryView
        campaignId={campaignId}
        deliveryData={selectedDelivery}
        onBack={() => setSelectedDelivery(null)}
      />
    );
  }

  // ✅ Default uploads table view
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm p-4 lg:p-6">
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg text-left text-sm">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
            <tr>
              <th className="p-3 font-medium">UPLOADS</th>
              <th className="p-3 font-medium"></th>
              <th className="p-3 font-medium">SUBMITTED</th>
              <th className="p-3 font-medium">ACCEPTED</th>
              <th className="p-3 font-medium">ERRORS</th>
              <th className="p-3 font-medium">REJECTIONS</th>
              <th className="p-3 font-medium">VIEW</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((u) => (
              <tr
                key={u.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-3">
                  <div className="flex flex-col">
                    <AppTooltip message={u.name}>
                      <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                        {Slicestring(u.fileName, 1, 25)}
                        {u.fileName.length > 25 && '...'}
                      </p>
                    </AppTooltip>
                    <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                      {u.date}
                    </span>
                  </div>
                </td>
                <td className="p-3 text-center text-gray-400">
                  <CircleCheckBig color="#00D100" />
                </td>
                <td className="p-3 text-center text-gray-900 dark:text-white">
                  {u.submitted}
                </td>
                <td className="p-3 text-center text-gray-900 dark:text-white">
                  {u.accepted}
                </td>
                <td className="p-3 text-center text-gray-900 dark:text-white">
                  {u.errors}
                </td>
                <td className="p-3 text-center text-gray-900 dark:text-white">
                  {u.rejections}
                </td>
                <td
                  className="p-3 text-center text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                  onClick={() => setSelectedDelivery(u)}
                >
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};




// import { useState } from "react";
// import AppTooltip from "../../../../lib/Tooltip";
// import { Slicestring } from "../../../../lib/Slicestring";
// import { CircleCheckBig } from "lucide-react";

// export const UploadTable = ({ data, campaignId }) => {
//   const [selectedUpload, setSelectedUpload] = useState(null);
//   const [deliveryData, setDeliveryData] = useState(null);
//   const [rejectionFile, setRejectionFile] = useState(null);
//   const [uploadingRejection, setUploadingRejection] = useState(false);
//   const [message, setMessage] = useState("");

//   // 📥 View button click → load delivery data
//   const handleView = async (upload) => {
//     try {
//       const res = await fetch(
//         `http://localhost:3000/campaigns/${campaignId}/deliveries/${upload.id}`
//       );
//       const result = await res.json();
//       if (res.ok) {
//         setSelectedUpload(upload);
//         setDeliveryData(result.data); // expecting "data": [ ... ]
//       } else {
//         setMessage(result.error || "Failed to fetch delivery data ❌");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Something went wrong while loading data.");
//     }
//   };

//   // 📤 Upload rejections
//   const handleRejectionUpload = async (e) => {
//     e.preventDefault();
//     if (!rejectionFile) {
//       setMessage("Please choose a CSV file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", rejectionFile);

//     try {
//       setUploadingRejection(true);
//       const res = await fetch(
//         `http://localhost:3000/campaigns/${campaignId}/deliveries/${selectedUpload.id}/rejections`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const result = await res.json();
//       if (res.ok) {
//         setMessage("Rejections uploaded successfully ✅");
//         setRejectionFile(null);
//       } else {
//         setMessage(result.error || "Upload failed ❌");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Something went wrong while uploading rejections.");
//     } finally {
//       setUploadingRejection(false);
//     }
//   };

//   // 🔙 Back to main table
//   const handleBack = () => {
//     setSelectedUpload(null);
//     setDeliveryData(null);
//     setMessage("");
//     setRejectionFile(null);
//   };

//   // ------------------------------------------------------
//   // 🔍 DETAIL VIEW (when user clicks "View")
//   // ------------------------------------------------------
//   if (selectedUpload && deliveryData) {
//     return (
//       <div className="rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm p-4 lg:p-6">
//         <button
//           onClick={handleBack}
//           className="mb-4 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-3 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
//         >
//           ← Back
//         </button>

//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//           Delivery Data — {selectedUpload.fileName}
//         </h3>

//         <div className="overflow-auto border rounded max-h-[400px]">
//           <table className="min-w-full border-collapse text-sm">
//             <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
//               <tr>
//                 {Object.keys(deliveryData[0] || {}).map((key) => (
//                   <th key={key} className="border px-3 py-2 text-left">
//                     {key}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {deliveryData.map((row, i) => (
//                 <tr key={i} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
//                   {Object.values(row).map((val, j) => (
//                     <td key={j} className="border px-3 py-1 text-gray-900 dark:text-gray-100">
//                       {val || "-"}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Upload Rejections */}
//         <form onSubmit={handleRejectionUpload} className="mt-5 flex flex-col gap-3">
//           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//             Upload Rejections (CSV):
//           </label>
//           <input
//             type="file"
//             accept=".csv"
//             onChange={(e) => setRejectionFile(e.target.files[0])}
//             className="border px-3 py-1 rounded w-64"
//           />
//           <button
//             type="submit"
//             disabled={uploadingRejection}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
//           >
//             {uploadingRejection ? "Uploading..." : "Upload Rejections"}
//           </button>
//         </form>

//         {message && (
//           <p className="text-sm mt-3 text-gray-700 dark:text-gray-300">{message}</p>
//         )}
//       </div>
//     );
//   }

//   // ------------------------------------------------------
//   // 📋 MAIN UPLOADS TABLE VIEW
//   // ------------------------------------------------------
//   return (
//     <div className="rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm p-4 lg:p-6">
//       <div className="overflow-x-auto">
//         <table className="w-full rounded-lg dark:border-gray-700 text-left text-sm">
//           <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
//             <tr>
//               <th className="p-3 font-medium">UPLOADS</th>
//               <th className="p-3 font-medium"></th>
//               <th className="p-3 font-medium">SUBMITTED</th>
//               <th className="p-3 font-medium">ACCEPTED</th>
//               <th className="p-3 font-medium">ERRORS</th>
//               <th className="p-3 font-medium">REJECTIONS</th>
//               <th className="p-3 font-medium">VIEW</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.map((u) => (
//               <tr
//                 key={u.id}
//                 className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
//               >
//                 <td className="p-3">
//                   <div className="flex flex-col">
//                     <AppTooltip message={u.fileName}>
//                       <p className="font-semibold text-gray-800 dark:text-white/90">
//                         {Slicestring(u.fileName, 1, 25)}
//                         {u.fileName.length > 25 && "..."}
//                       </p>
//                     </AppTooltip>
//                     <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">
//                       {u.date}
//                     </span>
//                   </div>
//                 </td>

//                 <td className="p-3 text-center text-gray-400">
//                   <CircleCheckBig color="#00D100" />
//                 </td>

//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.submitted}</td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.accepted}</td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.errors}</td>
//                 <td className="p-3 text-center text-gray-900 dark:text-white">{u.rejections}</td>

//                 {/* 👇 VIEW ACTION */}
//                 <td
//                   onClick={() => handleView(u)}
//                   className="p-3 text-center text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
//                 >
//                   View
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {message && (
//         <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{message}</p>
//       )}
//     </div>
//   );
// };


