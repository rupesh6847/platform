import { Download, Edit, SquarePen, Trash } from "lucide-react";

export const FilesAttached = ({ data }) => {
  return (




   <>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Files Attached</h4>
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


    <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6">
      <ul className="space-y-3 text-sm">
        {data?.map((f, i) => (
          <li
            key={f.id || i}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-gray-900 dark:text-white break-all">{f.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">{f.date}</span>
            </div>

            <a
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-2 justify-end mt-2 sm:mt-0"
            >
              <Download size={16} /> Download
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
