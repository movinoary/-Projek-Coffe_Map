import { Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Detail from "./pages/detail";
import SpesialContent from "./pages/spesialContent";
import Map from "./pages/map";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagi-ngopi" element={<SpesialContent />} />
        <Route path="/coffe-shop/:key" element={<Detail />} />
        <Route path="/pagi-ngopi/:key" element={<Detail />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </>
  );
}

export default App;
