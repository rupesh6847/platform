import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';

export default function Task() {
  return (
    <>
      <PageMeta title="Task" description="This is Task page." />
      <PageBreadcrumb pageTitle="Task" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        {/* <Board /> */}

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-6 space-y-6 xl:col-span-8">
            <div className="bg-blue-400 p-10">Task...</div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="bg-green-400 p-10">Session...</div>
          </div>

          <div className="col-span-12 xl:col-span-12">
            <div className="bg-red-400 p-10">Task Detail...</div>
          </div>
        </div>
      </div>
    </>
  );
}
