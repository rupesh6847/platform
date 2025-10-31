import { useState } from 'react';
import CampaignTabs from './CampaignTabs';
import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';
import CampaignFilter from './CampaignFilter';

export default function CampaignLayout() {
  const [selectedTab, setSelectedTab] = useState('Overdue');

  return (
    <>
      <PageMeta title="Campaigns" description="This is Campaigns page." />
      <PageBreadcrumb pageTitle="Campaigns" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Program Queue</h2>
          <p className="text-sm text-gray-500">
            Here you can explore the status of your programs with Revknew Media
          </p>
        </div>

        <CampaignTabs selected={selectedTab} onSelect={setSelectedTab} />
        <CampaignFilter />
      </div>
    </>
  );
}
