import { useState } from "react";
import data from "../data/FleetData.json";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";
const DriverPerformanceDistribution = () => {
  const [minimize, setMinimize] = useState(true);
  console.log(data);
  const { charts } = data;
  const distribution = charts.driver_perf_dist;
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1 rounded-lg  text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">
                Driver Performance Distribution
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
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={distribution}>
                    <CartesianGrid vertical={false} strokeWidth={0.3} />
                    <XAxis dataKey="range" tickLine={false} />
                    <YAxis tickLine={false} domain={[0, 12]} axisLine={false} />
                    <Tooltip
                      cursor={false}
                      contentStyle={{
                        backgroundColor: "#000",
                        border: "none",
                        borderRadius: "6px",
                      }}
                    />
                    <Bar
                      dataKey="count"
                      fill=" #4da6ff"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default DriverPerformanceDistribution;
