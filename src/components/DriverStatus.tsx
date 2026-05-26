import { useState } from "react";
import { DRIVERS } from "../data/AllData";

const DriverStatus = () => {
  const [minimize, setMinimize] = useState(true);

  const getStatusColor = (status: string) => {
    if (status === "on-route") {
      return "text-accent";
    } else if (status === "delayed") {
      return "text-warn";
    } else {
      return "text-muted";
    }
  };

  return (
    <>
      <article>
        <div className="mt-4">
          <div className=" bg-card border-gray-800  rounded-lg   text-text">
            <div
              className={`flex gap-4 bg-card2 rounded-lg rounded-b-none rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">Driver Status</h2>
              <span className="bg-accent/20 text-accent text-xs text-center flex justify-center items-center w-fit p-1 rounded-lg">
                {DRIVERS.length} active
              </span>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {/*TABLE*/}
            {minimize && (
              <div className="p-4 rounded-lg font-syne text-text ">
                <table className="w-full  ">
                  <tr className="border-b-1 border-muted ">
                    <th className="uppercase text-text text-left pr-12 py-3">
                      ID
                    </th>
                    <th className="uppercase text-text text-left pr-6 py-3">
                      Driver
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Status
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Route
                    </th>
                    <th className="uppercase text-text text-left  pr-12 py-3">
                      Eta
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Load
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Score
                    </th>
                    <th className="uppercase text-text text-left pr124 py-3">
                      Deliveries
                    </th>
                  </tr>
                  {DRIVERS.map((driver) => {
                    const currentColor = getStatusColor(driver.status);
                    return (
                      <tr key={driver.id} className="even:bg-card2 odd:bg-card">
                        <td className="text-left font-sans">{driver.id}</td>
                        <td className="text-left">{driver.name}</td>

                        <td
                          className={`text-left  font-mono py-3 flex items-center gap-2 ${currentColor}`}
                        >
                          <div className="w-2 h-2  rounded-full bg-accent" />
                          <span> {driver.status}</span>
                        </td>
                        <td className="text-left font-sans">{driver.route}</td>
                        <td className="text-left font-mono">{driver.eta}</td>
                        <td className="text-left font-sans">
                          <div>
                            <div className="w-20 bg-gray-700/50 rounded-lg  h-2 overflow-hidden">
                              <div
                                style={{ width: `${driver.load}%` }}
                                className=" h-full bg-accent rounded-lg"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-left font-sans">{driver.score}</td>
                        <td className="text-left font-sans">
                          {driver.deliveries}
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
export default DriverStatus;
