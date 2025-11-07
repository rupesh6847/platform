import { useParams } from 'react-router-dom';
import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';
import useSWR from 'swr';
import { fetcher } from '../../../lib/Fetcher';
import { useEffect, useState } from 'react';
import CampaignDetailPage from '../../Camapaigns/CampaignDetailPage/CampaignDetailPage';

export default function Task() {
  const { taskId } = useParams();
  const [task, setTask] = useState({});
  const [assignedBy, setAssignedBy] = useState('');
  useEffect(() => {
    fetchData();
    handleToggleStatus();
    console.log(task, 'campaign task fetcj');
  }, [taskId]);
  const fetchData = async () => {
    const res = await fetch(
      `http://192.168.29.121:3000/tasks/user-tasks?userId=3&taskId=1`
    );
    const response = await res.json();
    // console.log(response.data, 'task');

    setAssignedBy(response.data.assignee.name);
    setTask(response.data.task);
  };

  const handleToggleStatus = async () => {

let currentStatus = "In Progress"

// if(task.status == "Not Started"){
  
// }


    const res = await fetch(
      `http://192.168.29.121:3000/tasks/user-tasks?userId=3&taskId=1`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: currentStatus }),
      }
    );
    //  const response = await res.json();
  };

  return (
    <>
      <PageMeta title="Task" description="This is Task page." />
      <PageBreadcrumb pageTitle="Task" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        {/* <Board /> */}

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-6 space-y-6 xl:col-span-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
              <div key={task.id} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Task Type */}
                  <div>
                    <p className="text-gray-500 text-sm">Type</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {task.type}
                    </p>
                  </div>

                  {/* Assigned By */}
                  <div>
                    <p className="text-gray-500 text-sm">Assigned By</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {assignedBy}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">InProgress/Completed</p>

                    {/* Toggle Switch */}
                    {/* <label className="inline-flex items-center cursor-pointer"> */}
                    {/* <input
                        type="checkbox"
                        className="sr-only peer"
                        // checked={task.status === 'Completed'}
                        onChange={handleToggleStatus}
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 
      after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full 
      after:transition-all peer-checked:after:translate-x-5 after:translate-x-1 relative"
                      ></div>
                    </label> */}

                    <label class="relative inline-flex items-center cursor-pointer">
                      <input
                        onChange={handleToggleStatus}
                        // checked={task.status === 'Not Started'}
                        type="checkbox"
                        value=""
                        class="sr-only peer"
                      />
                      <div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                    </label>
                  </div>
                  {/* Level */}
                  <div>
                    <p className="text-gray-500 text-sm">Level</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {task.level}
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-gray-500 text-sm">Status</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {task.status}
                    </p>
                    {/* Toggle Switch */}
                    {/* <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={task.status === 'Completed'}
                        onChange={handleToggleStatus}
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 
      after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full 
      after:transition-all peer-checked:after:translate-x-5 after:translate-x-1 relative"
                      ></div>
                    </label> */}
                  </div>

                  {/* Remark */}
                  <div className="sm:col-span-2">
                    <p className="text-gray-500 text-sm">Remark</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {task.remark}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 xl:col-span-4">
            <div className="bg-green-400 p-10">Session Timer...</div>
          </div> */}

          <div className="col-span-12 xl:col-span-12">
            {/* <div className="bg-red-400 p-10">Task Detail...</div> */}
            {task?.typeId && <CampaignDetailPage campaignId={task.typeId} />}
          </div>
        </div>
      </div>
    </>
  );
}
