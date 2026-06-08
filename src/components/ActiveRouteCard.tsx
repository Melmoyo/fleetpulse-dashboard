import data from "../data/FleetData.json";

type RouteProps = {
  id: string;
  name: string;
  zone_from: string;
  zone_to: string;
  distance_km: number;
  eta: string;
  stops_done: number;
  stops: number;
  driver_id: string;
  status: string;
};

const ActiveRouteCard = ({ route }: { route: RouteProps }) => {
  const { drivers } = data;
  const driverName = drivers.find((driver) => driver.id === route.driver_id);
  const name = driverName ? driverName.name : "Unknown Driver";
  const getStatusColor = (status: string) => {
    if (status === "active") {
      return "text-accent bg-accent/20";
    } else if (status === "delayed") {
      return "text-info bg-info/20";
    } else {
      return "text-muted bg-muted/20";
    }
  };
  const currentColor = getStatusColor(route.status);
  const percentage = (route.stops_done / route.stops) * 100;
  return (
    <>
      <article className="">
        <div className="w-full bg-card2 p-4 border border-card2 rounded-lg hover:border hover:border-accent rounded-lg">
          <div className="flex flex-col">
            <div className="flex gap-4">
              <h4>{route.name}</h4>
              <span className={`${currentColor} rounded-lg w-20 text-center`}>
                {route.status}
              </span>
              <p className="ml-auto text-muted">ETA</p>
            </div>
          </div>
          <div className="flex space-y-2 gap-4 text-muted">
            <span>{route.id}</span>
            <span>{name} </span>
            <span>{route.distance_km}km</span>

            <p className="ml-auto text-text">{route.eta}</p>
          </div>
          <div className="flex max-w-lg">
            <p>Progress</p>
            <p className="ml-auto">
              {route.stops_done}/{route.stops}
            </p>
          </div>
          <div>
            <div className="max-w-lg overflow-hidden h-2 bg-gray-700/50 rounded-lg">
              <div
                style={{ width: `${percentage}%` }}
                className="h-full bg-accent w-full rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default ActiveRouteCard;
