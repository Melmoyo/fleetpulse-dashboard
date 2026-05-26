import { useState } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  AreaChart,
  Tooltip,
} from "recharts";
import data from "../data/FleetData.json";
const FuelCostTrend = () => {
  const [minimize, setMinimize] = useState(true);
  const { charts } = data;
  const monthlyDeliveries = charts.monthly_fuel.map((fuel) => ({
    month: fuel.month,
    Cost: fuel.cost_usd,
  }));
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1 rounded-lg text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">Fuel Cost Trend</h2>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>

            {/*CHART*/}
            {minimize && (
              <div className="p-4 bg-card rounded-lg ">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyDeliveries}>
                    <XAxis
                      dataKey="month"
                      interval={1}
                      axisLine={false}
                      tickLine={{ strokeWidth: 0.2 }}
                      tick={{ fontSize: 12 }}
                    />
                    <CartesianGrid strokeWidth={0.1} />
                    <YAxis
                      axisLine={false}
                      tickLine={{ strokeWidth: 0.2 }}
                      domain={[54000, 66000]}
                      ticks={[54000, 56000, 58000, 60000, 62000, 64000, 66000]}
                    />
                    <Tooltip
                      cursor={false}
                      contentStyle={{ backgroundColor: "#000" }}
                      itemStyle={{
                        color: "##4da6ff",
                      }}
                    />
                    <Area
                      dataKey="Cost"
                      type="natural"
                      fill="#4da6ff"
                      stroke="#4da6ff"
                      strokeWidth={2}
                      dot={{
                        r: 2,
                        fill: "#4da6ff",
                      }}
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default FuelCostTrend;
