import { useParams } from 'react-router-dom';
import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';
import { useEffect, useState } from 'react';
import CampaignDetailPage from '../../Camapaigns/CampaignDetailPage/CampaignDetailPage';
import BriefDetailPage from '../../Briefs/BriefDetailPage/BriefDetailPage';

export default function Task() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [assignedBy, setAssignedBy] = useState('');
  const userId = 3; // Replace with dynamic user if available

  // Fetch task details on mount or when taskId changes
  useEffect(() => {
    if (taskId) {
      fetchData();
      updateStatus("In Progress")
    }
  }, [taskId]);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/user-tasks?userId=${userId}&taskId=${taskId}`);
      const response = await res.json();

      if (response?.data) {
        setAssignedBy(response.data.assignee?.name || 'Unknown');
        setTask(response.data.task);
      }
    } catch (err) {
      console.error('Error fetching task:', err);
    }
  };

  // const updateStatus = async (selectedStatus) => {
  //   try {
  //     const res = await fetch(
  //       `http://localhost:3000/tasks/user-tasks?userId=${userId}&taskId=${taskId}`,
  //       {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ status: selectedStatus }),
  //       }
  //     );

  //     if (res.ok) {
  //       setTask((prev) => ({ ...prev, status: selectedStatus }));
  //     }
  //   } catch (err) {
  //     console.error("Error updating task status:", err);
  //   }
  // };


  const updateStatus = async (selectedStatus) => {
  try {
    const res = await fetch("http://localhost:3000/tasks/update-status", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskId: taskId,     // from params
        userId: userId,     // your logged-in user
        status: selectedStatus,
      }),
    });

    if (res.ok) {
      setTask((prev) => ({ ...prev, status: selectedStatus }));
    } else {
      const errData = await res.json();
      console.error("Failed:", errData.message);
    }
  } catch (err) {
    console.error("Error updating task status:", err);
  }
};


  if (!task) {
    return (
      <>
        <PageMeta title="Task" description="This is Task page." />
        <PageBreadcrumb pageTitle="Task" />
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
          <p>Loading task details...</p>
        </div>
      </>
    );
  }

  console.log(task, 'tasktye');
  return (
    <>
      <PageMeta title="Task" description="This is Task page." />
      <PageBreadcrumb pageTitle="Task" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-6 space-y-6 xl:col-span-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Type */}
                  <div>
                    <p className="text-gray-500 text-sm">Type</p>
                    <p className="text-gray-800 dark:text-gray-200">{task.type}</p>
                  </div>

                  {/* Assigned By */}
                  <div>
                    <p className="text-gray-500 text-sm">Assigned By</p>
                    <p className="text-gray-800 dark:text-gray-200">{assignedBy}</p>
                  </div>

                  {/* Status Toggle */}
                  {/* <div>
                    <p className="text-gray-500 text-sm">Status</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        onChange={handleToggleStatus}
                        type="checkbox"
                        checked={task.status === 'Completed'}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                    </label>
                    <p className="text-sm text-gray-700 mt-1">{task.status || 'Not Started'}</p>
                  </div> */}

                  {/* Status */}
                  <div className="sm:col-span-1">
                    <p className="text-gray-500 text-sm mb-1">Status</p>

                    <div className="space-y-1">
                      {["In Progress", "Paused", "Completed"].map((s) => (
                        <label key={s} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="taskStatus"
                            value={s}
                            checked={task.status === s}
                            onChange={() => updateStatus(s)}
                            className="text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="text-gray-800 dark:text-gray-200 text-sm">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Level */}
                  <div>
                    <p className="text-gray-500 text-sm">Level</p>
                    <p className="text-gray-800 dark:text-gray-200">{task.level}</p>
                  </div>

                  {/* Remark */}
                  <div className="sm:col-span-2">
                    <p className="text-gray-500 text-sm">Remark</p>
                    <p className="text-gray-800 dark:text-gray-200">{task.remark || '—'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign details */}
          {task?.type === 'Campaign' && (
            <div className="col-span-12 xl:col-span-12">
              <CampaignDetailPage campaignId={task.typeId} PageBreadcrumb={false} />
            </div>
          )}
          {/* Campaign details */}
          {task?.type === 'Brief' && (
            <div className="col-span-12 xl:col-span-12">
              <BriefDetailPage briefId={task.typeId} PageBreadcrumb={false} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
