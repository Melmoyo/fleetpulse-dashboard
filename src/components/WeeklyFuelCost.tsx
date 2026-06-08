import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState } from "react";
import data from "../data/FleetData.json";
const WeeklyFuelCost = () => {
  const [minimize, setMinimize] = useState(true);
  const { charts } = data;
  const weeklyfuel = charts.fuel_weekly.map((week) => {
    return {
      day: week.day,
      value: week.cost_usd,
    };
  });
  const weeklyTotal = charts.fuel_weekly.reduce((sum, cost) => {
    const fuel = cost.cost_usd;

    return fuel + sum;
  }, 0);

  return (
    <>
      <article>
        <div className="mt-4">
          <div className=" bg-card border-gray-800 border-1 max-w-xs rounded-lg  text-text">
            <div
              className={`flex gap-4 bg-card2 border-gray-800 rounded-lg rounded-b-none p-4 ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold" id="heading">
                Weekly Fuel Costs
              </h2>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            <div>
              {/*CHART*/}
              {minimize && (
                <div className="bg-card rounded-lg ">
                  <div>
                    <ResponsiveContainer
                      width="100%"
                      height={300}
                      aria-labelledby="heading"
                    >
                      <BarChart data={weeklyfuel}>
                        <XAxis
                          dataKey="day"
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis axisLine={false} tickLine={false} />
                        <CartesianGrid
                          stroke="#e0e0e0"
                          vertical={false}
                          horizontal={true}
                          strokeWidth={0.1}
                        />
                        <Tooltip
                          cursor={false}
                          contentStyle={{
                            backgroundColor: "#000",
                            border: "none",
                            borderRadius: "6px",
                          }}
                        />
                        <Bar
                          dataKey="value"
                          fill=" #4da6ff"
                          radius={[8, 8, 8, 8]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  {/*DISPLAY*/}
                  <div className="p-4">
                    <div className="p-2 rounded-lg bg-card2">
                      <h3 className="uppercase text-sm">Weekly total</h3>
                      <p className="font-syne text-lg">${weeklyTotal}</p>
                      <p className="text-xs">4.2 from last month</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default WeeklyFuelCost;
