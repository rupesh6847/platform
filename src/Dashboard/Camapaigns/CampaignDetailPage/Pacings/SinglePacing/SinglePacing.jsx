import { ArrowLeft, Download, Upload } from 'lucide-react';
import PageBreadcrumb from '../../../../../components/common/PageBreadCrumb';
import PageMeta from '../../../../../components/common/PageMeta';

import { useEffect, useState } from 'react';
import LeadsTable from './LeadsTable';
import UploadDrawer from './UploadDrawer';
import { Drawer } from '../../../../../lib/Drawer';
// import { useParams } from 'react-router-dom';

export default function SinglePacing({ pacingId, onBack }) {
  //   const { pacingId } = useParams();

  const [activeTab, setActiveTab] = useState('phase1');
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [flags, setFlags] = useState({
    assignedProfileFlag: false,
    unassignedProfileFlag: false,
  });
  const [volumeName, setVolumeName] = useState('VolumeName');
  const [pacingDate, setPacingDate] = useState('date');
  const [tableZoom, setTableZoom] = useState(1);
  const [phase1Data, setPhase1Data] = useState({ leads: [] });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchValidations = async () => {
      try {
        setLoading(true);
        setError('');

        if (!pacingId) return;

        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/volumes/available-validations?pacingId=${pacingId}`
          //   { headers: { Authorization: `Bearer ${user.token}` } }
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        if (data?.data) {
          setFlags(data.data);
          setVolumeName(data.data.volumeName || 'VolumeName');
          setPacingDate(data.data.pacingDate || 'date');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch validation flags.');
      } finally {
        setLoading(false);
      }
    };

    // if (user?.token)
    fetchValidations();
  }, [pacingId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/leads/assigned/pacing/${pacingId}`,
          {
            // headers: {
            //   Authorization: `Bearer ${user.token}`,
            // },
          }
        );

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const res = await response.json();

        setPhase1Data(res.data || []);
      } catch (e) {
        console.error('Fetch error:', e);
      }
    };
    fetchData();
  }, [pacingId]);

  const headers = phase1Data?.headers || [];
  const leads = phase1Data?.leads || [];

  return (
    <>
      <PageMeta title="SinglePacing" />
      <PageBreadcrumb pageTitle="SinglePacing" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        {/* BACK */}
        <button
          onClick={onBack}
          className="flex items-center px-3 py-1.5 text-sm rounded-md text-gray-600 hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2" /> Back
        </button>

        {/* TITLE */}
        <div className="mt-4 flex items-center gap-3">
          <h2 className="text-lg font-medium">{volumeName}</h2>
          <h3 className="text-xl font-semibold">{pacingDate.slice(0, 10)}</h3>
        </div>

        {/* TABS */}
        <div className="flex gap-2 border-b mt-4"></div>

        {/* TAB CONTENT */}
        <div className="pt-4">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="bg-white shadow p-3 rounded-lg">
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="flex items-center bg-blue-600 text-white px-3 py-1 rounded"
                >
                  <Upload className="mr-1" /> Upload
                </button>

                <button
                  //   onClick={() => setIsDrawerOpen(true)}
                  className="flex items-center bg-green-600 text-white px-3 py-1 rounded"
                >
                  <Download className="mr-1" /> Export
                </button>
              </div>

              <LeadsTable headers={headers} leads={leads} />
            </div>
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
          <UploadDrawer />
        </Drawer>
      )}
    </>
  );
}
