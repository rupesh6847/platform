import { useState } from 'react';
import CampaignTabs from './CampaignTabs';
import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';
import CampaignFilter from './CampaignFilter';
import { Plus } from 'lucide-react';
import CampaignBuilder from './CampaignBuilder/CampaignBuilder';
import { Drawer } from '../../../lib/Drawer';

export default function CampaignLayout() {
  const [selectedTab, setSelectedTab] = useState('Overdue');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCreateCampaignClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <PageMeta title="Programs" description="This is Programs page." />
      <PageBreadcrumb pageTitle="Programs" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/5 lg:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Program Queue
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Here you can explore the status of your programs with Revknew
              Media
            </p>
          </div>

          <div>
            <button
              onClick={handleCreateCampaignClick}
              className="flex items-center gap-2 rounded-lg border p-3 text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <Plus size={14} /> Create Program
            </button>
          </div>
        </div>

        <CampaignTabs selected={selectedTab} onSelect={setSelectedTab} />
        <CampaignFilter />
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
          <CampaignBuilder />
        </Drawer>
      )}
    </>
  );
}
