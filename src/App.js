import { Route, Routes } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffe-shop/:key" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
