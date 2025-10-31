import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import PageMeta from '../../components/common/PageMeta';

export default function UserProfiles() {
  return (
    <>
      <PageMeta title="Profile" description="This is Dashboard page." />
      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        Coming soon...
      </div>
    </>
  );
}
