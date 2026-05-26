import { useState } from "react";
import RosterCard from "./RosterCard";
import data from "../data/FleetData.json";
const DriverRoster = () => {
  const [minimize, setMinimize] = useState(true);
  const { drivers } = data;

  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1  rounded-lg  text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none  border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">Driver Roster</h2>
              <span className="bg-accent/20 text-accent text-xs text-center flex justify-center items-center w-fit p-1 rounded-lg">
                5 shown{" "}
              </span>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {/*DRIVER ROSTER CARDS*/}
            {minimize && (
              <div className="grid grid-cols-2  bg-card rounded-lg ">
                {drivers.map((driver) => (
                  <RosterCard key={driver.id} drivers={driver} />
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default DriverRoster;
