import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./../../../App.css";
import HomeFoot from "./../Home/HomeFoot";
import { Link } from "react-router-dom";
import { HeaderContext } from "./../../../data/context";
function OtherFilms() {
  const { setName, setJson, db } = useContext(HeaderContext);
  
  return (
    <div>
      <div className="p-7 moviesGrid h-[900px] bg-[]">
        {db.map((item) => (
          <div className="flex " key={item.id}>
            <div className=" flex flex-col items-center gap-5">
              <img
                className="w-[180px] h-[280px] cursor-pointer"
                src={`/${item.poster}`}
                alt=""
              />
              <Link to="/selectedMovie">
                <button
                  onClick={() => {
                    setName(item.title), setJson("movies");
                  }}
                  className="bg-[#394349] hover:bg-[#FF0D0D] rounded-lg text-xs font-Helvetica font-bold w-[65px] h-[25px] mb-5"
                >
                  BILET AL
                </button>
              </Link>
            </div>
            <div className="font-Helvetica text-xs pl-2">
              <h1 className="hover:underline text-[#F4F5F5] mb-1 mr-7">
                {item.title}
              </h1>
              <h2 className="text-[#D8DDDF] mb-1">{item.releaseDate}</h2>
              <h3 className="text-[#B5650F] mb-1">{item.language}</h3>
              <span className="border-[1px] border-[#B5650F] text-[#B5650F] rounded-md px-1">
                {item.ageLimit}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="containercss text-[#f4f4f4]">
        <HomeFoot />
      </div>
    </div>
  );
}

export default OtherFilms;
