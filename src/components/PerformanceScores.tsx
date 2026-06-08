import { useState } from "react";
import data from "../data/FleetData.json";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
const PerformanceScores = () => {
  const [minimize, setMinimize] = useState(true);
  const { drivers } = data;

  const scores = drivers.slice(0, 6).map((driver) => ({
    name: driver.name.split(" ")[0],
    score: driver.score,
  }));

  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 border-1  rounded-lg   text-text">
            <div
              className={`flex gap-4 bg-card2 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none rounded-b-lg"}`}
            >
              <h2 className="uppercase text-text font-bold" id="heading">
                Performance Scores
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
              <div className="p-4 rounded-lg ">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  aria-labelledby="heading"
                >
                  <BarChart data={scores} layout="vertical">
                    <CartesianGrid horizontal={false} strokeWidth={0.1} />
                    <XAxis
                      type="number"
                      dataKey="score"
                      axisLine={false}
                      tickLine={{ strokeWidth: 0.1 }}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={false}
                      contentStyle={{ backgroundColor: "#000" }}
                    />
                    <Bar dataKey="score" fill="#4da6ff" radius={[0, 6, 6, 0]} />
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
export default PerformanceScores;
