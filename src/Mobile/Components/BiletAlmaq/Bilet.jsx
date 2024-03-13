import React, { useState, useEffect } from "react";
import axios from "axios";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../../../data/context";
import { nanoid } from "nanoid";

function Bilet() {
  const {
    selectedFilm,
    setSelectedFilm,
    selectedPlace,
    setSelectedPlace,
    selectedDay,
    setSelectedDay,
    selectedTime,
    setSelectedTime,
  } = useContext(HeaderContext);
  const [db, setDb] = useState([]);
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(true);
  const [selected3, setSelected3] = useState(true);
  const [disableButton, setDisableButton] = useState(true);

  const places = [
    "ParkBulvar",
    "MetroPark",
    "AygunMall",
    "FlameTowers",
    "Zagulba",
    "Sahdag",
  ];
  const time = ["Bu Gün", "Sabah"];

  useEffect(() => {
    axios.get("http://localhost:4000/now").then((res) => setDb(res.data));
  }, []);

  useEffect(() => {
    if (selectedFilm === "1") {
      setSelected1(true);
      setSelectedPlace("11");
      setSelectedDay("111");
      setSelectedTime("1111");
    } else {
      setSelected1(false);
    }
    if (selectedPlace === "11") {
      setSelected2(true);
      setSelectedDay("111");
      setSelectedTime("1111");
    } else {
      setSelected2(false);
    }
    if (selectedDay === "111") {
      setSelected3(true);
      setSelectedTime("1111");
    } else {
      setSelected3(false);
    }
  }, [selectedFilm, selectedPlace, selectedDay, selectedTime]);

  useEffect(() => {
    if (selectedFilm && selectedPlace && selectedDay && selectedTime) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [selectedFilm, selectedPlace, selectedDay, selectedTime]);
  return (
    <div className="font-Helvetica">
      <div className="bg-[#CC1A07] relative">
        <Link to="/">
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            fontSize="24px"
            className="absolute top-[14px] left-3"
          />
        </Link>
        <p className="text-center text-[#f4f4f4] text-[24px] font-Helvetica py-2">
          Seans
        </p>
      </div>

      <div className="bg-[#292929] p-5">
        <div>
          <div className="mb-5">
            <h3 className="py-2 text-[16px] text-[#909090]">Film</h3>
            <select
              className="w-full p-3 rounded-xl"
              value={selectedFilm}
              onChange={(e) => setSelectedFilm(e.target.value)}
            >
              <option value="1">-Seç-</option>
              {db.map((movie) => {
                return (
                  <option key={movie.id} value={movie.title}>
                    {movie.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-5">
            <h3 className="py-2 text-[16px] text-[#909090]">Kinoteatr</h3>
            <select
              className="w-full p-3 rounded-xl"
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
              disabled={selected1}
            >
              <option value="11">-Seç-</option>
              {places.map((item) => (
                <option key={nanoid()}>{item}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <h3 className="py-2 text-[16px] text-[#909090]">Tarix</h3>
            <select
              className="w-full p-3 rounded-xl"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              disabled={selected2}
            >
              <option value="111">-Seç-</option>
              {time.map((item) => (
                <option key={nanoid()}>{item}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <h3 className="py-2 text-[16px] text-[#909090]">Seans</h3>
            <select
              className="w-full p-3 rounded-xl"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              disabled={selected3}
            >
              <option value="1111">-Seç-</option>
              {db
                .filter((item) => item.name == selectedFilm)[0]
                ?.add.filter((i) => i.cinemaplace == selectedPlace)
                ?.map((i) => (
                  <option key={nanoid()} value={i.value}>
                    {i.schedule}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src="/zeng.png" alt="" />
          <div className="text-center">
            <Link to="/">
              <button className="ml-4 px-4 py-2 rounded-lg bg-[#494949] text-[20px] text-[#f4f4f4] font-medium">
                Geri
              </button>
            </Link>
            <Link to="/bilet/step2">
              <button
                className={`ml-4 px-4 py-2 rounded-lg ${
                  disableButton ? "bg-gray-500" : "bg-[#CC1A07]"
                } text-[20px] text-[#f4f4f4] font-medium`}
                disabled={disableButton}
              >
                Irəli
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bilet;
