import LiveRouteMap from "../components/LiveRouteMap";
import StatCards from "../components/StatCards";
import AlertsEvents from "../components/Alerts&Events";
import OnTimePerformance from "../components/OnTimePerformance";
import DriverStatus from "../components/DriverStatus";
import WeeklyFuelCost from "../components/WeeklyFuelCost";

const Overview = () => {
  return (
    <>
      <section className="px-6 py-8">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <StatCards
            title="Active Drivers"
            value={34}
            subtitle="from yesterday"
          />
          <StatCards title="ON-time rate" value={34} subtitle="vs avg" />
          <StatCards title="Deliveries today" value={34} subtitle="target" />
          <StatCards title="Avg fuel cost/km" value={34} subtitle="this week" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-4">
          <LiveRouteMap />
          <AlertsEvents />
          <OnTimePerformance />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
          <DriverStatus />
          <WeeklyFuelCost />
        </div>
      </section>
    </>
  );
};
export default Overview;
