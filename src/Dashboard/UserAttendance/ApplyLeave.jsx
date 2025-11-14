// import { CalendarIcon } from 'lucide-react';
// import { useState } from 'react';

// const ApplyLeave = () => {
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);
//   const [leaveType, setLeaveType] = useState('');
//   const [duration, setDuration] = useState('');
//   const [reason, setReason] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert('Leave application submitted!');
//   };

//   return (
//     <div className="mt-6 border rounded-2xl bg-white p-6">
//       <h2 className="text-xl font-semibold mb-6">Apply for Leave</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700">Leave Type</label>
//             <select
//               value={leaveType}
//               onChange={(e) => setLeaveType(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select leave type</option>
//               <option value="casual">Casual Leave</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700">Duration</label>
//             <select
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select duration</option>
//               <option value="full">Full Day</option>
//               <option value="multiple">Multiple Days</option>
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700">From Date</label>
//             <div className="relative">
//               <input
//                 type="date"
//                 onChange={(e) => setFromDate(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <CalendarIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700">To Date</label>
//             <div className="relative">
//               <input
//                 type="date"
//                 onChange={(e) => setToDate(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <CalendarIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//             </div>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium text-gray-700">Reason</label>
//           <textarea
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             placeholder="Please provide a reason for your leave request..."
//             rows={4}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex gap-3">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Submit Request
//           </button>
//           <button
//             type="button"
//             className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default ApplyLeave;



import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const ApplyLeave = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [duration, setDuration] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/leaves/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 4, // ✅ temporary hardcoded user
          leaveType,
          fromDate,
          toDate,
          duration,
          reason,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage('✅ Leave application submitted successfully!');
        setLeaveType('');
        setFromDate('');
        setToDate('');
        setDuration('');
        setReason('');
      } else {
        setMessage(result.message || '❌ Failed to submit leave application.');
      }
    } catch (error) {
      console.error('Error applying for leave:', error);
      setMessage('⚠️ Error submitting leave request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 border rounded-2xl bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Apply for Leave</h2>

      {message && (
        <div
          className={`mb-4 px-4 py-2 rounded-lg text-sm ${
            message.startsWith('✅')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Leave Type</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select leave type</option>
              <option value="CASUAL">Casual Leave</option>
              <option value="SICK">Sick Leave</option>
              <option value="EARNED">Earned Leave</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select duration</option>
              <option value="FULL_DAY">Full Day</option>
              <option value="HALF_DAY">Half Day</option>
              <option value="MULTI_DAY">Multiple Days</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">From Date</label>
            <div className="relative">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CalendarIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">To Date</label>
            <div className="relative">
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CalendarIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            placeholder="Please provide a reason for your leave request..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
          <button
            type="button"
            onClick={() => {
              setLeaveType('');
              setFromDate('');
              setToDate('');
              setDuration('');
              setReason('');
              setMessage('');
            }}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyLeave;
