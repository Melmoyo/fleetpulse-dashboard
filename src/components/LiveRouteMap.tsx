import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import data from "../data/FleetData.json";

import { useState } from "react";
const LiveRouteMap = () => {
  const [minimize, setMinimize] = useState(true);
  // console.log(data);
  const { charts } = data;
  const positions = charts.gps_positions.map((position) => ({
    id: position.driver_id,
    x: position.lng,
    y: position.lat,
  }));
  console.log(positions);
  return (
    <>
      <article>
        <div className="mt-4 ">
          <div className=" bg-card border-gray-800 rounded-lg text-text">
            <div
              className={`flex gap-4 bg-card2 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b rounded-b-lg" : "border-b-none"}`}
            >
              <h2 className="uppercase font-bold">Live Route Map</h2>
              <span className="bg-accent/20 text-accent text-xs text-center flex justify-center items-center w-fit p-1 rounded-lg">
                34 active
              </span>
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
                <div>
                  <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart
                      margin={{ top: 20, right: 50, bottom: 20, left: -10 }}
                    >
                      <CartesianGrid stroke="#fff" fill="#000000" />
                      <XAxis
                        dataKey="x"
                        type="number"
                        domain={["auto", "auto"]}
                        tick={false}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        dataKey="y"
                        type="number"
                        domain={["auto", "auto"]}
                        tick={false}
                        axisLine={false}
                        tickLine={false}
                      />

                      <Scatter
                        data={positions}
                        lineJointType="monotoneX"
                        line
                        stroke="#00e5a0"
                        strokeDasharray="6 4"
                        fill="#00e5a0"
                      />
                    </ScatterChart>
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
export default LiveRouteMap;
