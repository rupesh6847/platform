import { useParams } from 'react-router-dom';
import CampaignDetailPage from './CampaignDetailPage';

const CamapignDetail = () => {
  const { campaignId } = useParams();

  return <CampaignDetailPage campaignId={campaignId} />;
};

export default CamapignDetail;
