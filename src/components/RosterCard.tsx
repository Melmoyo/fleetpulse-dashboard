type DriverProps = {
  id: string;
  name: string;
  status: string;
  score: number;
  route: string;
  deliveries: number;
  eta: string;
  load: number;
};
const RosterCard = ({ drivers }: { drivers: DriverProps }) => {
  const status = drivers.status;
  const getStatusColor = (status: string) => {
    if (status === "on-route") {
      return "text-accent bg-accent/20";
    } else if (status === "delayed") {
      return "text-warn bg-warn/20";
    } else if (status === "complete") {
      return "text-info bg-info/20";
    } else {
      return "text-muted bg-muted/20";
    }
  };
  const currentColor = getStatusColor(drivers.status);
  return (
    <>
      <article className="p-4">
        <div className="bg-card2 p-4 text-xs text-muted rounded-lg border border-transparent hover:border hover:border-accent">
          <div className="flex space-y-2">
            <div>
              <h3 className="text-text">{drivers.name}</h3>
              <p>{drivers.id}</p>
            </div>
            <p className={`ml-auto ${currentColor} rounded-lg h-fit w-fit p-1`}>
              {drivers.status}
            </p>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <h4>Score</h4>
              <p>{drivers.score}</p>
            </div>
            <div>
              <h4>Route</h4>
              <p className="text-text">{drivers.route}</p>
            </div>
            <div>
              <h4>Deliveries</h4>
              <p className="text-text">{drivers.deliveries}</p>
            </div>
            <div>
              <h4>ETA</h4>
              <p className="text-text">{drivers.eta}</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex gap-2">
              <h3 className="uppercase">Load </h3>
              <span>{drivers.load}%</span>
            </div>
            <div className="w-40 overflow-hidden h-2 bg-gray-700/50 rounded-lg">
              <div
                style={{ width: `${drivers.score}%` }}
                className="h-full rounded-lg bg-accent"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default RosterCard;
