import { useState } from "react";
import {
  ResponsiveContainer,
  Pie,
  Cell,
  PieChart,
  Tooltip,
  Legend,
} from "recharts";
import data from "../data/FleetData.json";
const DelayReasons = () => {
  const [minimize, setMinimize] = useState(true);

  const { charts } = data;
  const reasons = charts.delay_reasons.map((delay) => ({
    reason: delay.reason,
    percentage: delay.percentage,
  }));
  const COLORS: Record<string, string> = {
    Traffic: "#10b981",
    Weather: "#f59e0b",
    Mechanical: "#ef4444",
    Other: " #8892a4",
  };
  return (
    <>
      <article>
        <div className="mt-4 ">
          <div className="bg-card2 border-gray-800 border-1 rounded-lg   text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none  border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold" id="heading">
                Delay Reasons
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
                  <PieChart>
                    <Tooltip contentStyle={{ backgroundColor: "#000" }} />
                    <Legend />
                    <Pie
                      data={reasons}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="percentage"
                      nameKey="reason"
                    >
                      {reasons.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[entry.reason] || "#8884d8"}
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
export default DelayReasons;
