import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { HeaderContext } from "../../../data/context";
function Teatr() {
  const {
    place,
    selectedFilm,
    setSelectedFilm,
    selectedPlace,
    setSelectedPlace,
    selectedDay,
    setSelectedDay,
    selectedTime,
    setSelectedTime,
    selectedLanguage,
    setSelectedLanguage,
    data, setData
  } = useContext(HeaderContext);
  const [day, setDay] = useState(null);
  const [gun, setGun] = useState("Bu Gün");
  
  const historyTo = useNavigate();

  const handleOnClick = (title, cinemaplace, time, schedule) => {
    setSelectedFilm(title);
    setSelectedPlace(cinemaplace);
    setSelectedDay(time);
    setSelectedTime(schedule);
    console.log(selectedFilm);
    historyTo("/bilet/step1");
  };
  return (
    <div className="bg-[#F4F4F4] font-Helvetica">
      <Link to="/kinoteatrlar">
        <h5 className="text-[#B8B8B8] underline text-[18px] px-[20px] py-[12px]">
          Kinoteatrlar
        </h5>
      </Link>
      <h2 className="text-black font-bold text-[28px] px-5 pb-5">{place}</h2>
      <div className="bg-[#CC1A07] relative flex justify-center items-center">
        <FontAwesomeIcon
          icon={faChevronLeft}
          color="white"
          fontSize="24px"
          className="absolute top-[14px] left-3"
          onClick={() => {
            setGun("Bu Gün");
            setDay(false);
          }}
          style={{ display: day ? "block" : "none" }}
        />
        <p className="text-center text-[#f4f4f4] text-[24px] font-Helvetica py-2">
          {!day ? "Bu Gün" : "Sabah"}
        </p>
        <FontAwesomeIcon
          icon={faChevronRight}
          color="white"
          fontSize="24px"
          className="absolute top-[14px] right-3"
          onClick={() => {
            setGun("Sabah");
            setDay(true);
          }}
          style={{ display: day ? "none" : "block" }}
        />
      </div>
      <div className="bg-[#292929] p-5 text-white">
        {data.map((item) =>
          item.add
            ?.filter((i) => {
              const placeCondition =
                i.cinemaplace === place && i.available == true;

              const dayCondition = i.time === gun;

              return placeCondition && dayCondition;
            })
            .map((filteredItem, index) => (
              <div className="mb-4 flex justify-between" key={index}>
                <div>
                  <h1 className="font-bold uppercase text-[20px]">
                    {filteredItem.title}
                  </h1>
                  <h2 className="text-[#686868] text-[16px]">
                    {filteredItem.language}/{filteredItem.cinemaplace}/
                    {filteredItem.hall}
                  </h2>
                </div>
                <div>
                  <button
                    onClick={() =>
                      handleOnClick(
                        filteredItem.title,
                        filteredItem.cinemaplace,
                        filteredItem.time,
                        filteredItem.schedule
                      )
                    }
                    className="text-[#323232] bg-[#f4f4f4] font-bold p-3 rounded-xl text-[18px]"
                  >
                    {filteredItem.schedule}
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default Teatr;
