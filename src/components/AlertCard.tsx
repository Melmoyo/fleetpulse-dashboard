type AlertLevel = "warn" | "ok" | "info" | "critical";
type AlertProps = {
  id: string;
  level: AlertLevel;
  msg: string;

  time: string;
};
const AlertCard = ({ alert }: { alert: AlertProps }) => {
  const borderColors = {
    warn: "border-l-warn",
    ok: "border-l-accent",
    info: "border-l-info",
    critical: "border-l-crit",
  };
  const borderColorClass = borderColors[alert.level] || "border-gray-500";
  return (
    <>
      <article>
        <div className="w-full">
          <div
            className={`bg-card2 rounded-lg text-sm p-4 border-l-2 ${borderColorClass} `}
          >
            <h3 className="font-mono">{alert.msg}</h3>
            <p className="text-muted">{alert.time}</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default AlertCard;
