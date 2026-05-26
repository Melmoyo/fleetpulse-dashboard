import {
  ResponsiveContainer,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import data from "../data/FleetData.json";
const { charts } = data;
const performance = charts.on_time_hourly.map((data) => ({
  hour: data.hour,
  ontime: data.on_time,
  delayed: data.delayed,
}));
const OnTimePerformance = () => {
  const [minimize, setMinimize] = useState(true);
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1  rounded-lg   text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">
                On-Time Performance
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
              <div className="bg-card rounded-lg ">
                <div style={{ width: "100%", height: 250 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={performance}
                      margin={{ top: 20, right: 20, left: -20 }}
                    >
                      <XAxis
                        dataKey="hour"
                        tickLine={{ strokeWidth: 0.3 }}
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickCount={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={{ strokeWidth: 0.3 }}
                        domain={[0, 100]}
                        tick={{ fontSize: 10 }}
                        ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                        tickCount={10}
                        interval={0}
                      />
                      <CartesianGrid strokeWidth={0.1} />
                      <defs>
                        <linearGradient
                          id="fadeFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#00e5a0"
                            stopOpacity={0.7}
                          />
                          <stop
                            offset="100%"
                            stopColor="#00e5a0"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="ontime"
                        fill="url(#fadeFill)"
                        type="monotone"
                        strokeWidth={2}
                        stroke="#00e5a0"
                        fillOpacity={0.4}
                        activeDot={false}
                      />
                      <Line
                        dataKey="delayed"
                        type="monotone"
                        strokeWidth={2}
                        strokeDasharray="6 4"
                        stroke="#f5a623"
                        dot={false}
                        activeDot={false}
                      />
                    </AreaChart>
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
export default OnTimePerformance;
