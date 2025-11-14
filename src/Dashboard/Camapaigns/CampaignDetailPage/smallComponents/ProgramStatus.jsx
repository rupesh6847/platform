import { CirclePause, Edit, SquarePen, Trash } from 'lucide-react';

function formatDueDate(dateString) {
  const date = new Date(dateString);

  // Day name (e.g., Wednesday)
  const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' });

  // Day number + ordinal suffix (1st, 2nd, 3rd, 4th...)
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';

  // Month and Year
  const month = date.toLocaleDateString('en-GB', { month: 'long' });
  const year = date.getFullYear();

  return `${weekday}, ${day}${suffix} ${month} ${year}`;
}

export const ProgramStatus = ({ data, volumes }) => {
  return (
    <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 text-sm space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Info</h4>
        {/* <div className="flex items-center gap-4">
          <button>
            <Edit size={16} />
          </button>
          <button>
            <Trash size={16} />
          </button>
          <button>
            <SquarePen size={16} />
          </button>
        </div> */}
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Program Status</h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
          <CirclePause size={16} strokeWidth={0.5} /> {data.status}
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Lead Volumes</h3>
        {volumes.map((v) => (
          <p key={v.name} className="text-sm text-gray-600 dark:text-gray-400 mt-1 first:mt-0">
            {v.name}: {v.leadGoal}
          </p>
        ))}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Program Type</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Double Touch // example</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">First Upload</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Wednesday, 27th August 2025 // example</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Deadline</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{formatDueDate(data.duedate)}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Weekly Upload Day</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tuesday & Thursday // example</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Pacing</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">23 leads per split, per upload //example</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">CPC</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">7 // example</p>
      </div>
    </div>
  );
};
