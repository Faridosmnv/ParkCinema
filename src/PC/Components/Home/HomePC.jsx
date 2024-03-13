import React from "react";
import { Carousel } from "antd";
import HeaderPC from "../Header/HeaderPC";
import FooterPC from "../Footer/FooterPC";
import MainPC from "./MainPC";
import "../../../App.css";
const contentStyle = {
  height: "600px",
  width: "100%",
  color: "#fff",
  objectFit: "cover",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <div className="overflow-x-hidden">
    <div className="absolute top-1 left-1 z-50 w-full">
      <HeaderPC />
    </div>
    <Carousel autoplay>
      <div className="image-container">
        <div className="gradient-overlay"></div>
        <img className="image" src="/wolt-cover-key.png" style={contentStyle} />
      </div>
      <div className="image-container">
        <div className="containercss relative">
          <div className="w-full absolute z-50 left-2 top-[300px]">
            <h1 className="font-Helvetica text-[66px] text-[#f4f4f4] shadoww">
              Arqayil. Supercasus
            </h1>
            <h2 className="font-Helvetica text-[36px] text-[#f4f4f4] shadoww">
              1 Fevral
            </h2>
          </div>
        </div>
        <div className="gradient-overlay"></div>
        <img
          className="image"
          src="/imgonline-com-ua-Resize-TWMDvEsTrri8rh.jpg"
          style={contentStyle}
        />
      </div>
      <div className="image-container">
        <div className="gradient-overlay"></div>
        <img className="image" src="/mms-sayt-cover.jpg" style={contentStyle} />
      </div>
      <div className="image-container">
        <div className="containercss relative">
          <div className="w-full absolute z-50 left-2 top-[300px]">
            <h1 className="font-Helvetica text-[66px] text-[#f4f4f4] shadoww">
              Duna 2
            </h1>
            <h2 className="font-Helvetica text-[36px] text-[#f4f4f4] shadoww">
              29 Fevral
            </h2>
          </div>
        </div>
        <div className="gradient-overlay"></div>
        <img className="image" src="/duna2.jpg" style={contentStyle} />
      </div>
      <div className="image-container">
        <div className="containercss relative">
          <div className="w-full absolute z-50 left-2 top-[300px]">
            <h1 className="font-Helvetica text-[66px] text-[#f4f4f4] shadoww">
              Madam Tor
            </h1>
            <h2 className="font-Helvetica text-[36px] text-[#f4f4f4] shadoww">
              15 Fevral
            </h2>
          </div>
        </div>
        <div className="gradient-overlay"></div>
        <img className="image" src="/madam.jpg" style={contentStyle} />
      </div>
    </Carousel>
    <MainPC />
    <FooterPC />
  </div>
);
export default App;
