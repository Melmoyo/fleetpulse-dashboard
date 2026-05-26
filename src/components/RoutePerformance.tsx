import { useState } from "react";
import data from "../data/FleetData.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const RoutePerformance = () => {
  const [minimize, setMinimize] = useState(true);

  const { routes } = data;
  const r = routes.slice(0, 7).map((route) => {
    return {
      id: route.id,
      ontime: route.on_time_rate,
      delayed: 100 - route.on_time_rate,
    };
  });

  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 max-w-xs rounded-lg   text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none bg-card2 border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">
                Route Performance
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
              <div>
                <div className="p-4 rounded-lg">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={r}
                      margin={{ top: 20, left: -20, right: 0 }}
                    >
                      <CartesianGrid vertical={false} strokeWidth={0.2} />
                      <XAxis
                        dataKey="id"
                        tick={{ fontSize: 10 }}
                        interval={0}
                        tickLine={{ strokeWidth: 0.2 }}
                        axisLine={false}
                      />
                      <YAxis axisLine={false} tickLine={{ strokeWidth: 0.2 }} />
                      <Legend />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#000" }}
                        cursor={false}
                      />
                      <Bar dataKey="ontime" stackId="a" fill="#00e5a0" />
                      <Bar
                        dataKey="delayed"
                        stackId="a"
                        fill="#ff6b35"
                        radius={[6, 6, 6, 6]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default RoutePerformance;
