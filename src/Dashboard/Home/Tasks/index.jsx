import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';

export default function Task() {
  return (
    <>
      <PageMeta title="Task" description="This is Task page." />
      <PageBreadcrumb pageTitle="Task" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        Coming soon...
      </div>
    </>
  );
}
