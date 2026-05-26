import ActiveRoutes from "../components/ActiveRoutes";
import AllRoutes from "../components/AllRoutes";
import RouteHeatMap from "../components/RouteHeatmap";
import RoutePerformance from "../components/RoutePerformance";
import StatCards from "../components/StatCards";
const R = () => {
  return (
    <>
      <section className="px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          <StatCards
            title="Active Routes"
            value={34}
            subtitle="more than yesterday"
          />
          <StatCards
            title="Completed Today"
            value={34}
            subtitle="completion rate"
          />
          <StatCards
            title="Avg Route duration"
            value={34}
            subtitle="same as last week"
          />
          <StatCards
            title="Delayed routes"
            value={34}
            subtitle="from morning"
          />
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
          <ActiveRoutes />
          <RoutePerformance />
          <RouteHeatMap />
        </div>
        <div className=" w-full">
          <AllRoutes />
        </div>
      </section>
    </>
  );
};
export default R;
