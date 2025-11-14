import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadTotals } from './smallComponents/LeadTotals';
import { DeliverySchedule } from './smallComponents/DeliverySchedule';
import { FilesAttached } from './smallComponents/FilesAttached';
import { Content } from './smallComponents/Content';
import { AdditionalInfo } from './smallComponents/AdditionalInfo';
import { UploadTable } from './smallComponents/UploadTable';
import { Activity } from './smallComponents/Activity';
import { UploadDeliverySection } from './smallComponents/UploadDeliverySection';
import { ProgramStatus } from './smallComponents/ProgramStatus';

const CampaignDetailPage = ({ campaignId, PageBreadcrumb }) => {
  const [campaign, setCamapign] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [filesInfo, setFilesInfo] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [content, setContent] = useState([]);
  const [campaignDeliveries, setCamapignDeliveries] = useState([]);
  const [additionalinfo, setadditionalinfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/campaigns/${campaignId}`);
    const response = await res.json();

    setCamapign(response.data);
    setVolumes(response.data.volumes);
    setContent(response.data.content);
    setFilesInfo(response.data.filesInfo);
    setContent(response.data.content);
    setUpdates(response.data.updates);
    setadditionalinfo(response.data.additionalInfo);
    setCamapignDeliveries(response.data.campaignDeliveries);
  };

  console.log(campaign, 'campaign');

  return (
    <>
      <div className=" dark:bg-gray-900 min-h-screen">
        {PageBreadcrumb && (
          <div className="flex justify-between items-center mb-8 p-4 lg:p-0">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Link to="/campaigns" className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                Campaigns <ChevronRight size={20} strokeWidth={1} />
              </Link>

              <span className="font-medium text-gray-700 dark:text-gray-300">{campaign.name}</span>
            </div>
          </div>
        )}

        <div className="px-4 lg:px-0">
          <h2 className="text-xl font-normal mb-2 text-gray-900 dark:text-white">{campaign?.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Total Leads:
            <span className="font-semibold text-gray-700 dark:text-gray-300">{campaign?.leadgoal}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-0">
          <div className="lg:col-span-3 space-y-6 p-4 lg:p-6 min-h-screen rounded-2xl border border-gray-200 dark:border-gray-700  dark:bg-gray-800">
            <LeadTotals data={campaign} campaignId={campaignId} />

            <DeliverySchedule data={volumes} campaignId={campaignId} />

            <FilesAttached data={filesInfo} campaignId={campaignId} />

            <Content data={content} campaignId={campaignId} />

            <AdditionalInfo data={additionalinfo} campaignId={campaignId} />
             
            <UploadDeliverySection campaignId={campaignId} />
            <UploadTable data={campaignDeliveries} campaignId={campaignId} />
          </div>

          <div className="space-y-6 sticky">
            <ProgramStatus data={campaign} volumes={volumes} campaignId={campaignId} />

            <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 text-sm">
              <Activity data={updates} campaignId={campaignId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetailPage;
