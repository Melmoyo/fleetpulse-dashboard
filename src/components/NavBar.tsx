import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
const NavBar = () => {
  const [time, setTime] = useState("");
  const { toggleTheme, setToggleTheme } = useThemeContext();
  useEffect(() => {
    function getTime() {
      const now = new Date();

      const hour = String(now.getHours()).padStart(2, "0");

      const minute = String(now.getMinutes()).padStart(2, "0");

      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hour}: ${minute}: ${seconds}`);
    }
    getTime();
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="flex border-b-1 border-border p-4">
          <div className="border-r-1 border-border pr-4">
            <a
              href=""
              className="uppercase text-accent font-bold text-xl text-sans"
            >
              <span className="text-white">Fleet</span>Pulse
            </a>
          </div>
          <nav className="ml-4 flex gap-4 text-sm ">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                ` uppercase  ${isActive ? "text-accent border-b-2 border-accent " : "text-muted"}`
              }
            >
              Overview
            </NavLink>
            <NavLink
              to="/routes"
              end
              className={({ isActive }) =>
                ` uppercase ${isActive ? "text-accent border-b-2 border-accent " : "text-muted"}`
              }
            >
              Routes
            </NavLink>
            <NavLink
              to="/drivers"
              end
              className={({ isActive }) =>
                `  uppercase  ${isActive ? "text-accent border-b-2 border-accent " : "text-muted"}`
              }
            >
              Drivers
            </NavLink>
            <NavLink
              to="/analytics"
              end
              className={({ isActive }) =>
                `  uppercase ${isActive ? "text-accent border-b-2 border-accent " : "text-muted"}`
              }
            >
              Analytics
            </NavLink>
          </nav>
          <div className="flex text-white ml-auto justify-center items-center gap-4">
            <p className="text-muted text-sm">{time}</p>
            <div className="w-3 h-3 bg-accent shadow-[0_0_8px_#ffffff] rounded-full" />
            <p className="text-accent uppercase text-sm">Live</p>
            <button
              onClick={() =>
                setToggleTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
              className="rounded-full bg-nav p-2 text-sm w-20 text-uppercase text-muted"
            >
              {toggleTheme === "dark" ? <span>Dark</span> : <span>Light</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
