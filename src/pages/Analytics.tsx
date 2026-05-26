import DelayReasons from "../components/DelayReasons";
import DriverPerformanceDistribution from "../components/DriverPerformanceDistribution";
import FuelCostTrend from "../components/FuelCostTrend";
import HourlyDeliveryVolume from "../components/HourlyDeliveryVolume";
import MonthlyDeliveryTrend from "../components/MonthlyDeliveryTrend";
import StatCards from "../components/StatCards";
import data from "../data/FleetData.json";
const Analytics = () => {
  console.log(data);
  return (
    <>
      <section className="px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          <StatCards
            title="Total Deliveries (MTD)"
            value={34}
            subtitle="vs last month"
          />
          <StatCards title="Fuel Spend (MTD)" value={34} subtitle="vs budget" />
          <StatCards
            title="Avg On-Time Rate"
            value={34}
            subtitle="vs last month"
          />
          <StatCards
            title="Cost per Delivery"
            value={34}
            subtitle="vs last month"
          />
        </div>
        <div className="grid grid-cols-[1fr_1fr_0.6fr] gap-4">
          <MonthlyDeliveryTrend />
          <FuelCostTrend />
          <DelayReasons />
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          <HourlyDeliveryVolume />
          <DriverPerformanceDistribution />
        </div>
      </section>
    </>
  );
};
export default Analytics;
