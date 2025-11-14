import { Edit, SquarePen, Trash } from 'lucide-react';
import { useState } from 'react';

// export const UploadDeliverySection = ({ campaignId }) => {
//   const [date, setDate] = useState('');
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file || !date) {
//       setMessage('Please select both date and file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('date', date);
//     formData.append('file', file);

//     try {
//       setUploading(true);
//       setMessage('');

//       const res = await fetch(`http://localhost:3000/campaigns/deliveries/${campaignId}`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await res.json();

//       if (res.ok) {
//         setMessage('Upload successful ✅');
//       } else {
//         setMessage(result.error || 'Upload failed ❌');
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage('Something went wrong.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (






//   <>
//       <div className="flex items-center justify-between">
//         <h4 className="text-lg font-medium text-gray-900 dark:text-white">Uploads</h4>
//         {/* <div className="flex items-center gap-4">
//           <button>
//             <Edit size={16} />
//           </button>
//           <button>
//             <Trash size={16} />
//           </button>
//           <button>
//             <SquarePen size={16} />
//           </button>
//         </div> */}
//       </div>



//     <div className="p-3     ">
//       <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-4">
//         {/* DATE */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-700 mb-1">Delivery Date:</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="border px-3 py-1 rounded w-48"
//           />
//         </div>

//         {/* FILE */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-700 mb-1">Upload CSV File:</label>
//           <input
//             type="file"
//             accept=".csv"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="border px-3 py-1 rounded w-64"
//           />
//         </div>

//         {/* BUTTON */}
//         <button
//           type="submit"
//           disabled={uploading}
//           className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {uploading ? 'Uploading...' : 'Upload'}
//         </button>
//       </form>

//       {message && <p className="text-sm mt-3 text-gray-700">{message}</p>}
//     </div>
//     </>
//   );
// };



export const UploadDeliverySection = ({ campaignId }) => {
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);
  const [rejectionFile, setRejectionFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [rejectionMessage, setRejectionMessage] = useState('');

  const handleDeliveryUpload = async (e) => {
    e.preventDefault();
    if (!file || !date) {
      setMessage('Please select both date and file.');
      return;
    }

    const formData = new FormData();
    formData.append('date', date);
    formData.append('file', file);

    try {
      setUploading(true);
      setMessage('');
      const res = await fetch(`http://localhost:3000/campaigns/deliveries/${campaignId}`, {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      setMessage(res.ok ? '✅ Delivery upload successful' : result.error || '❌ Delivery upload failed');
    } catch (err) {
      console.error(err);
      setMessage('❌ Something went wrong during delivery upload.');
    } finally {
      setUploading(false);
    }
  };

  const handleRejectionUpload = async (e) => {
    e.preventDefault();
    if (!rejectionFile) {
      setRejectionMessage('Please select a CSV file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', rejectionFile);

    try {
      setUploading(true);
      setRejectionMessage('');
      const res = await fetch(`http://localhost:3000/campaigns/${campaignId}/deliveries/rejections`, {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      setRejectionMessage(res.ok ? '✅ Rejection upload successful' : result.error || '❌ Rejection upload failed');
    } catch (err) {
      console.error(err);
      setRejectionMessage('❌ Something went wrong during rejection upload.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Deliveries</h3>
      <div className="flex flex-row gap-6 w-full">
        {/* ======================== DELIVERY UPLOAD ======================== */}
        <div className="flex-1 flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Upload Delivery
          </h4>

          <form onSubmit={handleDeliveryUpload} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Delivery Date:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Upload CSV File:
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setFile(e.target.files[0])}
                className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200"
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="self-start bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload Delivery'}
            </button>

            {message && <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{message}</p>}
          </form>
        </div>

        {/* ======================== REJECTION UPLOAD ======================== */}
        <div className="flex-1 flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Upload Rejections
          </h4>

          <form onSubmit={handleRejectionUpload} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Rejections CSV File:
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setRejectionFile(e.target.files[0])}
                className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Expected format: <code>email,rejection</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="self-start bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload Rejections'}
            </button>

            {rejectionMessage && (
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{rejectionMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
