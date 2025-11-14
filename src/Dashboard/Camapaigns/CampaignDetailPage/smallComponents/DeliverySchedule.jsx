import { Edit, SquarePen, Trash, Upload } from 'lucide-react';
import AppTooltip from '../../../../lib/Tooltip';
import { Slicestring } from '../../../../lib/Slicestring';
import Pacings from '../Pacings/Pacings';
import { useState } from 'react';

export const DeliverySchedule = ({ data }) => {
  const [selectedVolumeId, setSelectedVolumeId] = useState(null);
  if (selectedVolumeId) {
    return (
      <Pacings
        volumeId={selectedVolumeId}
        onBack={() => {
          setSelectedVolumeId(null);
        }}
      />
    );
  }
  return (








   <>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Delivery Schedule</h4>
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






    <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 space-y-4">
      {data?.map((delivery, i) => (
        <div
          key={i}
          className="border-b border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4"
        >
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-gray-900 dark:text-white mb-2 lg:mb-0  ">
              <AppTooltip message={delivery}>
                <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                  {Slicestring(delivery.name, 1, 25)}
                  {delivery.length > 25 && '...'}
                </p>
              </AppTooltip>
            </p>
            <div className="grid grid-cols-4 gap-2 lg:gap-4 text-sm text-center    mt-2">
              <div className="border-x border-gray-200 dark:border-gray-700 px-2">
                <p className="text-gray-500 dark:text-gray-400 text-xs">VALID</p>
                <p className="font-semibold text-gray-900 dark:text-white">{delivery.completed}</p>
              </div>
              <div className="border-r border-gray-200 dark:border-gray-700 px-2">
                <p className="text-gray-500 dark:text-gray-400 text-xs">PENDING</p>
                <p className="font-semibold text-gray-900 dark:text-white">{delivery.pending}</p>
              </div>
              <div className="border-r border-gray-200 dark:border-gray-700 px-2">
                <p className="text-gray-500 dark:text-gray-400 text-xs">TOTAL</p>
                <p className="font-semibold text-gray-900 dark:text-white">{delivery.leadGoal}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setSelectedVolumeId(delivery.id)}
            className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-xs bg-[#5B5B5B] text-white hover:bg-[#5B5B5B]/80 w-full lg:w-auto"
          >
            <Upload size={14} /> Upload File
          </button>
        </div>
      ))}
    </div>
    </>
  );
};
