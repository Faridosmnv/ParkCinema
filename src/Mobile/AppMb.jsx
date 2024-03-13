import React, { useContext, useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Kinoteatrlar from "./Components/Kinoteatrlar/Kinoteatrlar";
import Main from "./Components/Home/Main";
import Errror from "./Components/Errror";
import Footer from "./Footer/Footer";
import Imax from "./Components/IMAX/Imax";
import Lazer from "./Components/LazeR/Lazer";
import VIP from "./Components/VIP/VIP";
import About from "./Components/About/About";
import Aksiyalar from "./Components/Aksiyalar/Aksiyalar";
import Azn from "./Components/Aksiyalar/Azn";
import Adgunu from "./Components/Aksiyalar/Adgunu";
import Supergun from "./Components/Aksiyalar/Supergun";
import Xowbext from "./Components/Aksiyalar/Xowbext";
import Aile from "./Components/Aksiyalar/Aile";
import Telebe from "./Components/Aksiyalar/Telebe";
import Bonussimo from "./Components/Aksiyalar/Bonussimo";
import Bilet from "./Components/BiletAlmaq/Bilet";
import YerNovleri from "./Components/BiletAlmaq/YerNovleri";
import YerSecimi from "./Components/BiletAlmaq/YerSecimi";
import { HeaderContext } from "../data/context";
import Odenis from "./Components/BiletAlmaq/Odenis";
import Teatr from "./Components/Kinoteatrlar/Teatr";
import SelectedFIlm from "./Components/Home/MainComp/SelectedFIlm";
import SelectedSoon from "./Components/Home/MainComp/SelectedSoon";

function App() {
  const {navbar, setNavbar} = useContext(HeaderContext);
  return (
    <div>
      <Header />
      {navbar ? (
        <div className="">
          <Navbar />
        </div>
      ) : (
        <>
          <div className="overflow-hidden">
            <Routes>
              <Route path="/aksiyalar/adgunu" element={<Adgunu />} />
              <Route path="/aksiyalar/imax" element={<Azn />} />
              <Route path="/aksiyalar/supergun" element={<Supergun />} />
              <Route path="/aksiyalar/xowbext" element={<Xowbext />} />
              <Route path="/aksiyalar/aile" element={<Aile />} />
              <Route path="/aksiyalar/telebe" element={<Telebe />} />
              <Route path="/aksiyalar/bonussimo" element={<Bonussimo />} />
              <Route path="/bilet/step1" element={<Bilet />} />
              <Route path="/bilet/step2" element={<YerNovleri />} />
              <Route path="/bilet/step3" element={<YerSecimi />} />
              <Route path="/bilet/step4" element={<Odenis />} />
              <Route path="/" element={<Main />} />
              <Route path="/selectedmovie" element={<SelectedFIlm />} />
              <Route path="/selectedsoon" element={<SelectedSoon />} />
              <Route path="/kinoteatrlar" element={<Kinoteatrlar />} />
              <Route path="/kinoteatrlar/selectedpark" element={<Teatr />} />
              <Route path="/imax" element={<Imax />} />
              <Route path="/laser" element={<Lazer />} />
              <Route path="/vip" element={<VIP />} />
              <Route path="/aksiyalar" element={<Aksiyalar />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Errror />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
