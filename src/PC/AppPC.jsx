import React from "react";
import HomePC from "./Components/Home/HomePC";
import Kino from "./Components/Kinoteatr/Kino";
import IMAX from "./Components/IMAX/IMAX";
import Laser from "./Components/Laser/Laser";
import VIP from "./Components/VIP/VIP";
import About from "./Components/About/About";
import Errror from "./Components/Errror";
import { Route, Routes } from "react-router-dom";
import KinoSelected from "./Components/Kinoteatr/KinoSelected";
import SelectedFilm from "./Components/SelectedMovie/SelectedFilm";

function AppPC() {
  return (
    <Routes>
      <Route path="/" element={<HomePC />} />
      <Route path="/selectedMovie" element={<SelectedFilm />} />
      <Route path="/kinoteatrlar" element={<Kino />} />
      <Route path="/kinoteatrlar/selected" element={<KinoSelected />} />
      <Route path="/imax" element={<IMAX />} />
      <Route path="/laser" element={<Laser />} />
      <Route path="/vip" element={<VIP />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Errror />} />{" "}
    </Routes>
  );
}

export default AppPC;
