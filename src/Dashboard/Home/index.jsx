import PageMeta from "../../components/common/PageMeta";
import CompletedTasks from "./CompletedTasks";
import MonthlyTasks from "./MonthlyTasks";
import RandomQuote from "./RandomQuote";
import TempCampaignBuilder from "./TempCampaignBuilder";
import TodayTasks from "./TodayTasks";

export default function HomePage() {
  return (
    <>
      <PageMeta title="Dashboard" description="This is Home page." />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <RandomQuote />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <TodayTasks />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <CompletedTasks />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <MonthlyTasks />
        </div>

        {/* <div className="col-span-12">
          <TempCampaignBuilder />
        </div> */}
      </div>
    </>
  );
}
