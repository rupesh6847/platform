import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AppLayout from "./layout/AppLayout";
import CheckUpdate from "./components/CheckUpdate";
import HomePage from "./Dashboard/Home";
import UserProfiles from "./Dashboard/UserProfile";
import Attendance from "./Dashboard/UserAttendance";
import Traning from "./Dashboard/Traning";
import Signin from "./components/auth/Signin";
import NotFound from "./components/NotFound";
import Process from "./Dashboard/Process";
import BriefsPage from "./Dashboard/Briefs";
import CampaignsPage from "./Dashboard/Camapaigns/AllCampaigns";
import CampaignLayout from "./Dashboard/Camapaigns/AllCampaigns/CampaignLayout";
import CampaignDetailPage from "./Dashboard/Camapaigns/CampaignDetailPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          {/* <Route element={<AuthRequired />}> */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<HomePage />} />

            <Route path="campaigns" element={<CampaignsPage />}>
              <Route index element={<CampaignLayout />} />
              <Route path=":campaignId" element={<CampaignDetailPage />} />
            </Route>

            <Route path="/briefs" element={<BriefsPage />} />
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/checkupdate" element={<CheckUpdate />} />
            <Route path="/training" element={<Traning />} />
            <Route path="/process" element={<Process />} />
          </Route>
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
