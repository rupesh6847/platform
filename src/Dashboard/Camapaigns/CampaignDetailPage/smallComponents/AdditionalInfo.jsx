import { Edit, SquarePen, Trash } from "lucide-react";

export const AdditionalInfo = ({ data }) => {
  return (


   <>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Additional Information</h4>
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


    <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 text-sm space-y-4">
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>

    </>
  );
};
