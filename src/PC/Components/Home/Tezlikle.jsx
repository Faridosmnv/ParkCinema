import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./../../../App.css";
import { HeaderContext } from "../../../data/context";
import { Link } from "react-router-dom";

function Tezlikle() {
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Hamisi");
  const [selectedPlace, setSelectedPlace] = useState(String);
  const [selectedLanguage, setSelectedLanguage] = useState(String);

  const { setName, setJson , dab } = useContext(HeaderContext);

  const places = [
    "ParkBulvar",
    "MetroPark",
    "AygunMall",
    "FlameTowers",
    "Zagulba",
    "Sahdag",
  ];
 

  const filterMovies = (movies) => {
    return movies.filter((item) => {
      return (
        (selectedFilter == "Hamisi" || item.format.includes(selectedFilter)) &&
        (selectedPlace == "Kinoteatr" || item.place.includes(selectedPlace)) &&
        item.language.includes(selectedLanguage)
      );
    });
  };

  return (
    <div className="w-full bg-[#2B3236]">
      <div className="flex justify-around h-[40px] items-center font-Helvetica text-[16px] font-bold p-10">
        <div
          onClick={() => setSelectedFilter("Hamisi")}
          className={`w-[100px] cursor-pointer h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
            selectedFilter === "Hamisi" && "bg-[#394349]"
          }`}
        >
          Hamisi
        </div>
        <div
          onClick={() => setSelectedFilter("IMAX")}
          className={`w-[100px] cursor-pointer py-2 h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
            selectedFilter === "IMAX" && "bg-[#394349]"
          }`}
        >
          <img
            src="https://parkcinema.az/addons/shared_addons/themes/new/img/IMAX.svg"
            alt=""
          />
        </div>
        <div
          onClick={() => setSelectedFilter("LaseR")}
          className={`w-[100px] cursor-pointer py-2 h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
            selectedFilter === "LaseR" && "bg-[#394349]"
          }`}
        >
          <img
            src="https://parkcinema.az/addons/shared_addons/themes/new/img/laser-w.svg"
            alt=""
          />
        </div>
        <div
          onClick={() => setSelectedFilter("Dolby")}
          className={`w-[100px] cursor-pointer py-2 h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
            selectedFilter === "Dolby" && "bg-[#394349]"
          }`}
        >
          <img
            className="w-11"
            src="https://parkcinema.az/addons/shared_addons/themes/new/img/dolbyatmos-type.svg"
            alt=""
          />
        </div>
        <div
          onClick={() => setSelectedFilter("2D")}
          className={`w-[100px] cursor-pointer py-2 h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
            selectedFilter === "2D" && "bg-[#394349]"
          }`}
        >
          2D
        </div>
        <div
          onClick={() => setSelectedFilter("3D")}
          className={`w-[100px] cursor-pointer py-2 h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
            selectedFilter === "3D" && "bg-[#394349]"
          }`}
        >
          3D
        </div>
      </div>
      <div className=" text-center w-full">
        <select
          className="bg-[#394349] w-[500px] px-5 py-2 rounded-2xl  text-[#f4f4f4] text-[20px] outline-none font-Helvetica font-medium"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
        >
          <option>Kinoteatr</option>
          {places.map((item) => (
            <option key={nanoid()}>{item}</option>
          ))}
        </select>

        <div className="flex justify-center my-5 gap-5">
          <div
            onClick={() => setSelectedLanguage("EN")}
            className={`py-4 px-6 cursor-pointer h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
              selectedLanguage === "EN" && "bg-[#394349]"
            }`}
          >
            İngilis dilində filmlər
          </div>
          <div
            onClick={() => setSelectedLanguage("TR")}
            className={`py-4 px-6 cursor-pointer h-[30px] bg-[#272D31] rounded-lg text-center flex items-center justify-center border-[1px] border-[#394349] ${
              selectedLanguage === "TR" && "bg-[#394349]"
            }`}
          >
            Türk dilində filmlər
          </div>
        </div>
      </div>
      <div className="p-7 moviesGrid">
        {filterMovies(dab).map((item) => (
          <div className="flex" key={item.id}>
            <div className=" flex flex-col items-center gap-5">
              <img
                className="w-[180px] h-[280px] cursor-pointer"
                src={item.poster}
                alt=""
              />
              <Link to="/selectedMovie">
                <button
                  onClick={() => {
                    setName(item.title), setJson("soon");
                  }}
                  className="bg-[#394349] hover:bg-[#FF0D0D] rounded-lg text-xs font-Helvetica font-bold w-[65px] h-[25px] mb-5"
                >
                  BILET AL
                </button>
              </Link>
            </div>
            <div className="font-Helvetica text-xs pl-2">
              <h1 className="hover:underline text-[#F4F5F5] mb-1">
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
    </div>
  );
}

export default Tezlikle;
