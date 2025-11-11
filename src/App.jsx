import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AuthRequired } from './lib/AuthRequired';
import AppLayout from './layout/AppLayout';
import HomePage from './Dashboard/Home';
import UserProfiles from './Dashboard/UserProfile';
import Attendance from './Dashboard/UserAttendance';
import Traning from './Dashboard/Traning';
import NotFound from './components/NotFound';
import Process from './Dashboard/Process';
import BriefsPage from './Dashboard/Briefs';
import CampaignsPage from './Dashboard/Camapaigns/AllCampaigns';
import CampaignLayout from './Dashboard/Camapaigns/AllCampaigns/CampaignLayout';
import Signin from './Dashboard/auth/Signin';
import CheckUpdate from './Dashboard/CheckUpdate';

import HomeLayout from './Dashboard/Home/HomeLayout';
import Task from './Dashboard/Home/Tasks';

// import BriefCreator from './Dashboard/Briefs/CreateBreif';
import CampaignDetail from './Dashboard/Camapaigns/CampaignDetailPage';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          {/* <Route element={<AuthRequired />}> */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HomeLayout />} />
              <Route path="/tasks/:taskId" element={<Task />} />
            </Route>

            <Route path="campaigns" element={<CampaignsPage />}>
              <Route index element={<CampaignLayout />} />

              <Route path=":campaignId" element={<CampaignDetail />} />
            </Route>

            {/* <Route path="/demo" element={<SinglePacing />} /> */}

            <Route path="/briefs" element={<BriefsPage />} />
            {/* <Route path="/add-brief" element={<BriefCreator />} /> */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/checkupdate" element={<CheckUpdate />} />
            <Route path="/training" element={<Traning />} />
            <Route path="/process" element={<Process />} />
            {/* </Route> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
