import { Edit, SquarePen, Trash } from "lucide-react";

export const Activity = ({ data }) => {
  return (



   <>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-700 dark:text-white mb-4">Activity</h4>
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
      {data?.map((item, index) => (
        <div key={item.id || index} className="flex gap-x-3">
          {/* Timeline Dot + Line */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-600">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-500"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-gray-200 text-[13px] leading-snug">
              {item.date}
            </h3>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{item.title}</p>
            {item.description && (
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
