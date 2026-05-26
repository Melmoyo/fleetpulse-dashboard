import CurrentStatus from "../components/CurrentStatus";
import DriverRoster from "../components/DriverRoster";
import FullDriverTable from "../components/FullDriverTable";
import PerformanceScores from "../components/PerformanceScores";
import StatCards from "../components/StatCards";
import data from "../data/FleetData.json";
const Drivers = () => {
  const { drivers } = data;

  const onShift = drivers.filter((driver) => driver.status === "idle").length;
  const incidents = drivers.filter((driver) => driver.incidents > 0).length;
  const deliveries = drivers.filter((driver) => driver.deliveries).length;
  const totaldeliveries = drivers.reduce((sum, driver) => {
    const deliveries = driver.deliveries;
    return sum + deliveries;
  }, 0);
  return (
    <>
      <section className="px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          <StatCards
            title="Total Drivers"
            value={drivers.length}
            subtitle={`${drivers.length - onShift} on shift today`}
          />
          <StatCards title="Avg performance" value={34} subtitle="this month" />
          <StatCards
            title="incidents (30D)"
            value={incidents}
            subtitle="vs last month"
          />
          <StatCards
            title="Avg deliveries/day"
            value={Math.round(totaldeliveries / deliveries)}
            subtitle="vs last week"
          />
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
          <DriverRoster />
          <PerformanceScores />
          <CurrentStatus />
        </div>
        <div className="">
          <FullDriverTable />
        </div>
      </section>
    </>
  );
};
export default Drivers;
