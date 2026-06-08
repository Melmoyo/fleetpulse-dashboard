import { useState } from "react";
import data from "../data/FleetData.json";
const AllRoutes = () => {
  const [minimize, setMinimize] = useState(true);
  const { routes } = data;

  const getStatusColor = (status: string) => {
    if (status === "active") {
      return "text-accent bg-accent/20";
    } else if (status === "delayed") {
      return "text-warn bg-warn/20";
    } else {
      return "text-info bg-info/20";
    }
  };

  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card border-gray-800 border-1  rounded-lg  text-text">
            <div
              className={`flex gap-4 bg-card2 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold">All Routes</h2>
              <span className="bg-accent/20 text-accent text-xs text-center flex justify-center items-center w-fit p-1 rounded-lg">
                {routes.length} total
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
              <div className="p-4 rounded-lg overflow-x-auto">
                <table className="w-full ">
                  <tr className="border-b-1 border-muted ">
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Route ID
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Name
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Driver
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      stops
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Progress
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Status
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      ETA
                    </th>
                    <th className="uppercase text-text text-left pr-12 py-3">
                      Distance
                    </th>
                  </tr>
                  {routes.map((route) => {
                    const currentColor = getStatusColor(route.status);

                    return (
                      <tr key={route.id}>
                        <td>{route.id}</td>
                        <td>{route.name}</td>
                        <td>{route.name}</td>
                        <td>
                          {route.stops_done}/{route.stops}
                        </td>
                        <td>{route.on_time_rate}</td>
                        <td className="flex  items-center  py-3">
                          <span
                            className={`${currentColor} rounded-lg w-22 text-center`}
                          >
                            {" "}
                            {route.status}
                          </span>
                        </td>
                        <td>{route.eta}</td>
                        <td>{route.distance_km}km</td>
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
export default AllRoutes;
