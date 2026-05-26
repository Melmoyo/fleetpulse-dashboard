import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <section>
        <div>
          <NavBar />
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
};
export default MainPage;
