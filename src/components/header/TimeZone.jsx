// import { useEffect, useState } from "react";

// const timezones = [
//   { label: "United Kingdom (London)", tz: "Europe/London" },
//   { label: "United States (Washington)", tz: "America/New_York" },
//   { label: "India (Maharashtra)", tz: "Asia/Kolkata" },
// ];

// const TimeZone = () => {
//   const [times, setTimes] = useState({});

//   const fetchTime = (tz) => {
//     const date = new Date();
//     const options = {
//       timeZone: tz,
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//       weekday: "short",
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     };
//     const localeString = date.toLocaleString("en-GB", options);
//     const [datePart, timePart] = localeString.split(", ").slice(-2);
//     return `${datePart} | ${timePart}`;
//   };

//   const updateTimes = () => {
//     const newTimes = {};
//     for (const t of timezones) {
//       newTimes[t.tz] = fetchTime(t.tz);
//     }
//     setTimes(newTimes);
//   };

//   useEffect(() => {
//     updateTimes();
//     const interval = setInterval(updateTimes, 60 * 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 text-start divide-y md:divide-y-0 md:divide-x divide-gray-300 overflow-hidden">
//       {timezones.map((t, index) => (
//         <div key={index} className="p-4">
//           <div className="text-xs font-medium text-gray-600 mb-1">
//             {t.label}
//           </div>
//           <div className="text-xs text-gray-500">
//             {times[t.tz] ? (
//               <>
//                 {times[t.tz].split(" | ")[0]}{" "}
//                 <span className="font-bold text-gray-900">
//                   {times[t.tz].split(" | ")[1]}
//                 </span>
//               </>
//             ) : (
//               "Loading..."
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TimeZone;
import { useEffect, useState } from "react";

const timezones = [
  { label: "UK (London)", tz: "Europe/London", shortLabel: "LON" },
  { label: "US (NY)", tz: "America/New_York", shortLabel: "NY" },
  { label: "India (Mumbai)", tz: "Asia/Kolkata", shortLabel: "MUM" },
];

const TimeZone = ({ mobile = false }) => {
  const [times, setTimes] = useState({});

  const fetchTime = (tz) => {
    const date = new Date();
    const options = {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      weekday: mobile ? undefined : "short",
      day: mobile ? undefined : "numeric",
      month: mobile ? undefined : "short",
      year: mobile ? undefined : "numeric",
    };

    let localeString = date
      .toLocaleString("en-GB", options)
      .replace(/\b(am|pm)\b/g, (m) => m.toUpperCase());

    if (mobile) {
      return localeString.split(" ")[0]; // Just time for mobile
    }

    const [datePart, timePart] = localeString.split(", ").slice(-2);
    return `${datePart} | ${timePart}`;
  };

  const updateTimes = () => {
    const newTimes = {};
    for (const t of timezones) {
      newTimes[t.tz] = fetchTime(t.tz);
    }
    setTimes(newTimes);
  };

  useEffect(() => {
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [mobile]);

  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        {timezones.map((t, index) => (
          <div key={index} className="text-xs">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {t.shortLabel}:
            </span>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              {times[t.tz] || "..."}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-start divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-gray-700 overflow-hidden rounded-lg  border-gray-200 dark:border-gray-700 dark:bg-gray-800 ">
      {timezones.map((t, index) => (
        <div key={index} className="p-2">
          <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            {t.label}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {times[t.tz] ? (
              <>
                {times[t.tz].split(" | ")[0]}{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {times[t.tz].split(" | ")[1]}
                </span>
              </>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeZone;
