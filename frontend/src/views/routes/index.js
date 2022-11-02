import { Route, Routes } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// import{ isMobile}
import Menu from "../pages/Menu/Menu";
import "../../styles/output.css";
import "antd/dist/antd.css";
import { LoginPage } from "../pages/Login";
import Detailjob from "../pages/DetailJob";
// import "antd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/detail/:id" element={<Detailjob />} />
    </Routes>
  );
}

export default App;
