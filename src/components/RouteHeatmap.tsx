import { useState } from "react";
// import data from "../data/FleetData.json";
const RouteHeatMap = () => {
  const [minimize, setMinimize] = useState(true);

  // const { charts } = data;
  // const delayFrequency = charts.on_time_hourly.map((frequency) => ({}));
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 border-1 max-w-xs rounded-lg   text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none border-gray-800 bg-card2 border-muted p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">Route HeatMap</h2>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {/*HEATMAP*/}
            <div className="grid grid-cols-7 gap-2 rounded-lg ">
              {<div className="h-10 w-10 rounded"></div>}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default RouteHeatMap;
