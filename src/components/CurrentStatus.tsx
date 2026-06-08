import { useState } from "react";
import data from "../data/FleetData.json";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
const CurrentStatus = () => {
  const [minimize, setMinimize] = useState(true);
  const { drivers } = data;
  const currentStatus = drivers.reduce(
    (sum, driver) => {
      sum[driver.status] = (sum[driver.status] || 0) + 1;
      return sum;
    },
    {} as Record<string, number>,
  );

  const pieData = Object.entries(currentStatus).map(([key, val]) => ({
    name: key,
    value: val,
  }));

  const COLORS: Record<string, string> = {
    "on-route": "#10b981",
    delayed: "#f59e0b",
    idle: "#ef4444",
  };
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 border-1  rounded-lg   text-text">
            <div
              className={`flex gap-4 bg-card2 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold" id="heading">
                Current Status{" "}
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
              <div className="p-4 rounded-lg">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  aria-labelledby="heading"
                >
                  <PieChart>
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[entry.name] || "#8884d8"}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default CurrentStatus;
