import { useState } from "react";
import data from "../data/FleetData.json";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";
const HourlyDeliveryVolume = () => {
  const [minimize, setMinimize] = useState(true);
  const { charts } = data;
  console.log(charts);
  const hourlyDeliveries = charts.on_time_hourly.map((delivery) => ({
    hour: delivery.hour.slice(0, 2),
    deliveries: delivery.on_time,
  }));
  return (
    <>
      <article>
        <div className="mt-4">
          <div className="bg-card2 border-gray-800 border-1  rounded-lg  text-text">
            <div
              className={`flex gap-4 rounded-lg rounded-b-none border-gray-800 p-4  ${minimize === true ? " border-b" : "border-b-none"}`}
            >
              <h2 className="uppercase text-text font-bold" id="heading">
                Hourly Delivery Volume
              </h2>
              <div
                role="button"
                onClick={() => setMinimize(!minimize)}
                className="ml-auto w-6 bg-card rounded-lg flex justify-center cursor-pointer"
              >
                {minimize ? <span>+</span> : <span> -</span>}
              </div>
            </div>
            {/*CHART*/}
            {minimize && (
              <div className="p-4 bg-card rounded-lg ">
                <ResponsiveContainer
                  width="100%"
                  height={300}
                  aria-labelledby="heading"
                >
                  <BarChart data={hourlyDeliveries}>
                    <CartesianGrid vertical={false} strokeWidth={0.3} />
                    <XAxis dataKey="hour" tickLine={false} />
                    <YAxis tickLine={false} domain={[0, 80]} axisLine={false} />
                    <Tooltip
                      cursor={false}
                      contentStyle={{
                        backgroundColor: "#000",
                        border: "none",
                        borderRadius: "6px",
                      }}
                    />
                    <Bar
                      dataKey="deliveries"
                      fill="#00e5a0"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default HourlyDeliveryVolume;
