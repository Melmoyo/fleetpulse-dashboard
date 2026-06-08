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
const MonthlyDeliveryTrend = () => {
  const [minimize, setMinimize] = useState(true);
  const { charts } = data;
  const monthlyDeliveries = charts.monthly_deliveries.map((deliveries) => ({
    month: deliveries.month,
    Deliveries: deliveries.deliveries,
  }));
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1  rounded-lg  text-text">
            <div
              className={`flex gap-4  rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold" id="heading">
                Monthly Delivery Trends
              </h2>
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
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  aria-labelledby="heading"
                >
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
                      tickCount={15}
                      axisLine={false}
                      tickLine={{ strokeWidth: 0.2 }}
                      domain={[28000, 37000]}
                      ticks={[
                        28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000,
                        36000, 37000,
                      ]}
                    />
                    <Tooltip
                      cursor={false}
                      contentStyle={{ backgroundColor: "#000" }}
                      itemStyle={{
                        color: "#00e5a0",
                      }}
                    />
                    <Area
                      dataKey="Deliveries"
                      type="natural"
                      fill="#00e5a0"
                      stroke="#00e5a0"
                      strokeWidth={2}
                      dot={{
                        r: 2,
                        fill: "#00e5a0",
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
export default MonthlyDeliveryTrend;
