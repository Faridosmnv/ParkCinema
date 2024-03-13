import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./../../../App.css";
import { HeaderContext } from "../../../data/context";
import OdeniwModal from "../Odeniw/OdeniwModal";

function CedvelPC() {
  const [selectedFilter, setSelectedFilter] = useState("Hamisi");
  const [selectedPlace, setSelectedPlace] = useState("Kinoteatr");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedDay, setSelectedDay] = useState("Bu Gün");

  const places = [
    "ParkBulvar",
    "MetroPark",
    "AygunMall",
    "FlameTowers",
    "Zagulba",
    "Sahdag",
  ];

 

  const {
    isModalOpen,
    setIsModalOpen,
    film,
    setFilm,
    kinoteatr,
    setKinoteatr,
    tarix,
    setTarix,
    vaxt,
    setVaxt,
    data, setData
  } = useContext(HeaderContext);

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
          onChange={(e) => {
            setSelectedPlace(e.target.value);
          }}
        >
          <option value="Kinoteatr">Kinoteatr</option>
          {places.map((place) => (
            <option key={nanoid()} value={place}>
              {place}
            </option>
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
        <select
          className="bg-[#394349] w-[500px] px-5 py-2 rounded-2xl  text-[#f4f4f4] text-[20px] outline-none font-Helvetica font-medium"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="Bu Gün">Bu Gün</option>
          <option value="Sabah">Sabah</option>
        </select>
      </div>
      <div className="p-7">
        {data.map((item) =>
          item.add
            ?.filter((i) => {
              const filterCondition =
                selectedFilter === "Hamisi" || i.format === selectedFilter;

              const placeCondition =
                selectedPlace === "Kinoteatr" ||
                i.cinemaplace === selectedPlace;

              const languageCondition =
                selectedLanguage === "" || i.language === selectedLanguage;

              const dayCondition = selectedDay === "" || i.time === selectedDay;

              return (
                filterCondition &&
                placeCondition &&
                languageCondition &&
                dayCondition
              );
            })
            .map((filteredItem, index) => {
              return (
                <div
                  className={`w-full flex text-sm font-Helvetica py-2 px-4 ${
                    index % 2 ? "bg-[#1B1B1B]" : ""
                  }`}
                  key={filteredItem.id}
                >
                  <h1
                    onClick={() => {
                      setFilm(filteredItem.title);
                      setTarix(filteredItem.time);
                      setVaxt(`${filteredItem.schedule},${filteredItem.format},${filteredItem.language}`);
                      setKinoteatr(filteredItem.cinemaplace); 
                      console.log(film, vaxt, tarix, kinoteatr);
                      setIsModalOpen(true);
                    }}
                    
                    className="w-1/2 hover:underline cursor-pointer"
                  >
                    {filteredItem.title}
                  </h1>
                  <div className="w-1/2 flex">
                    <span className="w-1/5">{filteredItem.schedule}</span>
                    <span className="w-1/5 mr-10">
                      {filteredItem.cinemaplace}
                    </span>
                    <span className="w-1/5">{filteredItem.hall}</span>
                    <div className="w-1/4 text-right ml-4">
                      <span className="border-[1px] border-[#B5650F] text-[#B5650F] rounded-md px-1 mr-2">
                        {filteredItem.format}
                      </span>
                      <span className="border-[1px] border-[#B5650F] text-[#B5650F] rounded-md px-1">
                        {filteredItem.language}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
      <OdeniwModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default CedvelPC;
