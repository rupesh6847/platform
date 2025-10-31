import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import PageMeta from '../../components/common/PageMeta';

export default function BriefsPage() {
  return (
    <>
      <PageMeta title="Briefs" description="This is Briefs page." />
      <PageBreadcrumb pageTitle="Briefs" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        Coming soon...
      </div>
    </>
  );
}
