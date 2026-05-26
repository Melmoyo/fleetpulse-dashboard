import { useState } from "react";
import ActiveRouteCard from "./ActiveRouteCard";
import data from "../data/FleetData.json";
const ActiveRoutes = () => {
  const [minimize, setMinimize] = useState(true);
  const { routes } = data;

  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1 rounded-lg   text-text">
            <div
              className={`flex gap-4  border-gray-800 rounded-lg rounded-b-none p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">Active Routes</h2>
              <span className="bg-accent/20 text-accent text-xs text-center flex justify-center items-center w-fit p-1 rounded-lg">
                {routes.length} running{" "}
              </span>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {minimize && (
              <div className="flex bg-card flex-col justify-between gap-4 rounded-lg   p-4 rounded-lg">
                {routes.map((route) => (
                  <ActiveRouteCard key={route.id} route={route} />
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default ActiveRoutes;
