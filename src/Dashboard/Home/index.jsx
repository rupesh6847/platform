import PageMeta from "../../components/common/PageMeta";
import CompletedTasks from "./CompletedTasks";
import MonthlyTasks from "./MonthlyTasks";
import RandomQuote from "./RandomQuote";
import TodayTasks from "./TodayTasks";

export default function HomePage() {
  return (
    <>
      <PageMeta title="Dashboard" description="This is Home page." />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <RandomQuote />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <TodayTasks />

          {/* <MonthlySalesChart /> */}

          <MonthlyTasks />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <CompletedTasks />
        </div>

        <div className="col-span-12">{/* <StatisticsChart /> */}</div>

        <div className="col-span-12 xl:col-span-5">
          {/* <DemographicCard /> */}
        </div>

        <div className="col-span-12 xl:col-span-7">
          {/* <RecentOrders /> */}
        </div>
      </div>
    </>
  );
}
