import { useParams } from 'react-router-dom';
import CampaignDetailPage from './CampaignDetailPage';

const CampaignDetail = () => {
  const { campaignId } = useParams();

  return <CampaignDetailPage campaignId={campaignId} PageBreadcrumb={true} />;
};

export default CampaignDetail;
