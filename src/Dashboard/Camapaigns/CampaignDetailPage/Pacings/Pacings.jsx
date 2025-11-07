import { Link, useParams } from 'react-router-dom';
import PageBreadcrumb from '../../../../components/common/PageBreadCrumb';
import PageMeta from '../../../../components/common/PageMeta';
import { useMemo } from 'react';
import { Calendar, ChartLine } from 'lucide-react';

const STATUS_COLORS = {
  Scheduled:
    'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-800',
  Active:
    'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800',
  Completed:
    'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800',
};

function generateDummyPacings() {
  const statuses = ['Scheduled', 'Active', 'Completed'];

  return Array.from({ length: 10 }, (_, i) => {
    const goal = Math.floor(Math.random() * 50) + 20;
    const completed = Math.floor(Math.random() * goal);
    return {
      id: i + 1,
      status: statuses[Math.floor(Math.random() * 3)],
      scheduledFor: new Date(
        Date.now() - Math.random() * 1_000_000_000
      ).toISOString(),
      leadGoal: goal,
      actualLeads: completed,
    };
  });
}

const Pacings = ({selectedVolumeId,onBack}) => {

  const pacings = useMemo(() => generateDummyPacings(), []);

  const groupedPacings = useMemo(() => {
    const groups = {
      Scheduled: [],
      Active: [],
      Completed: [],
    };
    pacings.forEach((pacing) => {
      groups[pacing.status].push(pacing);
    });
    return groups;
  }, [pacings]);

  return (
    <>
      <PageMeta title="Pacings" description="This is Pacings page." />
      <PageBreadcrumb pageTitle="" />
     
   
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        {/* STATUS GROUP BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Object.entries(groupedPacings).map(([status, pacingList]) => (
            <div key={status} className="flex flex-col">
              {/* Header */}
              <div
                className={`flex items-center justify-between px-3 py-2 rounded-t-md text-sm font-medium ${STATUS_COLORS[status]}`}
              >
                <span>{status}</span>
                <span className="font-semibold">{pacingList.length}</span>
              </div>

              {/* Body */}
              <div className="min-h-[180px] border border-gray-200 dark:border-gray-700 rounded-b-md p-3">
                {pacingList.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-sm text-gray-400 dark:text-gray-500">
                    No pacings
                  </div>
                ) : (
                  <div className="space-y-3">
                    {pacingList.map((pacing) => {
                      const completed = pacing.actualLeads;
                      const goal = pacing.leadGoal;
                      const pending = Math.max(0, goal - completed);
                      const progressPercentage = Math.round(
                        Math.min(100, (completed / goal) * 100)
                      );

                      return (
                        <Link
                          to={`${pacing.id}/data`}
                          key={pacing.id}
                          className="block"
                        >
                          <div className="p-3 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700  transition">
                            {/* Date */}
                            <div className="flex items-center mb-2">
                              <Calendar className="text-gray-400 mr-2 text-xs" />
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {new Date(
                                  pacing.scheduledFor
                                ).toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>

                            {/* Progress */}
                            <div className="mt-2">
                              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                <span>Goal: {goal}</span>
                                <span>Pending: {pending}</span>
                              </div>

                              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                                <div
                                  className="h-2 rounded-full"
                                  style={{
                                    width: `${progressPercentage}%`,
                                    backgroundColor:
                                      status === 'Completed'
                                        ? '#10B981'
                                        : status === 'Active'
                                          ? '#3B82F6'
                                          : '#F59E0B',
                                  }}
                                />
                              </div>

                              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span>Completed: {completed}</span>
                                <span>{progressPercentage}%</span>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                              <span className="text-xs text-gray-400 dark:text-gray-500">
                                View Details
                              </span>
                              <ChartLine className="text-gray-400 text-xs" />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pacings;
