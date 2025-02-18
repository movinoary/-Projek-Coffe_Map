import { Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Detail from "./pages/detail";
import SpesialContent from "./pages/spesialContent";
import MapCoffe from "./pages/mapCoffe";
import Menu from "./pages/menu";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagi-ngopi" element={<SpesialContent />} />
        <Route path="/coffe-shop/:key" element={<Detail />} />
        <Route path="/detail/pagi-ngopi/:key" element={<Detail />} />
        <Route path="/menu/:key" element={<Menu />} />
        <Route path="/map" element={<MapCoffe />} />
      </Routes>
    </>
  );
}

export default App;
