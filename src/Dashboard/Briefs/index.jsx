import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import PageMeta from '../../components/common/PageMeta';
import BriefsLayout from './BriefsLayout';

export default function BriefsPage() {
  return (
    <>
      <PageMeta title="Briefs" description="This is Briefs page." />
      <PageBreadcrumb pageTitle="Briefs" />
      <div className="min-h-screen px-5 py-7 xl:px-10 xl:py-12 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        <BriefsLayout />
      </div>
    </>
  );
}
