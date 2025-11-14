import { useParams } from 'react-router-dom';
import BriefDetailPage from './BriefDetailPage';

const BriefDetail = () => {
  const { briefId } = useParams();

  return <BriefDetailPage briefId={briefId} PageBreadcrumb={true} />;
};

export default BriefDetail;
