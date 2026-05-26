import { Routes, Route } from "react-router-dom";
import R from "./pages/Routes";
import "./index.css";
import MainPage from "./pages/MainPage";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Drivers from "./pages/Drivers";

import { ThemeContextProvider } from "./context/ThemeContext";
function App() {
  return (
    <>
      <ThemeContextProvider>
        {" "}
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Overview />} />
            <Route path="/routes" element={<R />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/drivers" element={<Drivers />} />
          </Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
