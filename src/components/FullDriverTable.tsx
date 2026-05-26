import { useState } from "react";
import data from "../data/FleetData.json";
const FullDriverTable = () => {
  const [minimize, setMinimize] = useState(true);
  const { drivers } = data;
  const getStatusColor = (status: string) => {
    if (status === "on-route") {
      return "text-accent ";
    } else if (status === "delayed") {
      return "text-warn ";
    } else {
      return "text-muted";
    }
  };

  function formatDate(date: string) {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 border-1  rounded-lg   text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none bg-card2 border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">
                Full Driver Table
              </h2>
              <span className="bg-accent/20 text-accent text-xs text-center flex justify-center items-center w-fit p-1 rounded-lg">
                {drivers.length} drivers{" "}
              </span>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {/*DRIVER TABLE*/}

            {minimize && (
              <div className="p-4 rounded-lg">
                <table className="w-full ">
                  <tr className="border-b-1 border-muted ">
                    <th className="uppercase text-text text-left pr-12 py-3">
                      ID
                    </th>
                    <th className="uppercase text-text text-left pr-6 py-3">
                      Name
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Status
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Route
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      ETA
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Load
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Score
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Deliveries
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Incidents
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Joined
                    </th>
                  </tr>
                  {drivers.slice(0, 6).map((driver) => {
                    const currentColor = getStatusColor(driver.status);
                    return (
                      <tr className="even:bg-card odd:bg-card2" key={driver.id}>
                        <td className="  text-left text-muted text-sm">
                          {driver.id}{" "}
                        </td>
                        <td className="text-left">{driver.name} </td>
                        <td className={`text-left ${currentColor}`}>
                          {driver.status}{" "}
                        </td>
                        <td className="text-left py-3">{driver.route} </td>
                        <td className="text-left">{driver.eta} </td>
                        <td className="text-left">{driver.load} </td>
                        <td className="text-left">{driver.score} </td>
                        <td className="text-left">{driver.deliveries} </td>
                        <td className="text-left">{driver.incidents} </td>
                        <td className="text-left">
                          {formatDate(driver.joined)}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default FullDriverTable;
