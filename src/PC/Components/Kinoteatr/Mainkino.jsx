import React, { useContext, useState } from "react";
import Reklam from "./../Home/Reklam";
import HomeFoot from "./../Home/HomeFoot";
import myArray from "./teatrArray";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../../data/context";
import { nanoid } from "nanoid";

function MainPart() {
  const { setPlace, setLocation ,setInfo } = useContext(HeaderContext);
  return (
    <div className="w-full bg-black pt-5 text-[#f4f4f4]">
      <div className="containercss flex justify-between">
        <div className="w-[772px] font-Helvetica">
          <h1 className="text-[60px] font-normal py-5 pl-5">Kinoteatrlar</h1>
          <div className="moviesGrid">
            {myArray.map((item) => (
              <div key={nanoid()} className="p-5">
                <Link
                  onClick={() => {
                    setPlace(item.place), setLocation(item.location) ,setInfo(item.unvan);
                  }}
                  to="/kinoteatrlar/selected"
                >
                  <img className="w-[330px] h-[260px]" src={item.img} alt="" />
                  <h1 className="py-3 text-3xl hover:underline hover:text-[#FF0000] cursor-pointer">
                    {item.place}
                  </h1>
                </Link>
                <h2 className="text-[13px] pb-1">
                  <span className="text-[#FF0000]">Ünvan:</span>
                  {item.unvan}
                </h2>
                <h2 className="text-[13px] py-1">
                  <span className="text-[#FF0000]">Telefon:</span>(+994 12) 598
                  74 14, 119
                </h2>
                <h2 className="text-[13px] py-1">
                  <span className="text-[#FF0000]">Is rejimi:</span>10:00 -
                  01:00
                </h2>
              </div>
            ))}
          </div>
        </div>
        <Reklam />
      </div>
      <div className="containercss">
        <HomeFoot />
      </div>
    </div>
  );
}

export default MainPart;
