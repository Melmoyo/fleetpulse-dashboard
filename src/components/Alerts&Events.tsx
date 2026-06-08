import AlertCard from "./AlertCard";
import { useState } from "react";
import data from "../data/FleetData.json";

const AlertsEvents = () => {
  const [minimize, setMinimize] = useState(true);
  const { alerts } = data;

  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 max-w-xs rounded-lg   text-text">
            <div
              className={`flex gap-4 bg-card2 rounded-lg rounded-b-none  border-gray-800 p-4  ${minimize === true ? " border-b " : "border-b-none "}`}
            >
              <h2 className="uppercase text-text font-bold">Alerts & Events</h2>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {/*Alert Card*/}
            {minimize && (
              <div
                aria-live="polite"
                aria-atomic="true"
                className="flex bg-card flex-col justify-between gap-4  p-4 rounded-lg"
              >
                {alerts.slice(0, 5).map((alert) => (
                  <AlertCard
                    key={alert.id}
                    alert={{ ...alert, level: alert.level as any }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default AlertsEvents;
