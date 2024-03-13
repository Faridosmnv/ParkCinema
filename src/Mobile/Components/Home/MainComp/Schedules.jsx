import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { HeaderContext } from "../../../../data/context";

function Cedvel2() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [park, setPark] = useState("Kinoteatr");
  const [gun, setGun] = useState("Bu Gün");

  const {
    selectedFilm,
    setSelectedFilm,
    setSelectedPlace,
    setSelectedDay,
    setSelectedTime,
    clickedFilm,
  } = useContext(HeaderContext);

  const places = [
    "ParkBulvar",
    "MetroPark",
    "AygunMall",
    "FlameTowers",
    "Zagulba",
    "Sahdag",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/now")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error fetching movies data:", error);
        setError("Error fetching movies data. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

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
    <div className="font-Helvetica">
      <div className="bg-[#CC1A07] relative flex justify-between items-center">
        <Link to="/">
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            fontSize="24px"
            className="absolute top-[14px] left-3"
            onClick={() => {
              setGun("Bu Gün");
              setDay(false);
            }}
            style={{ display: day ? "block" : "none" }} // Display if day is true
          />
        </Link>
        <p className="text-center text-[#f4f4f4] text-[24px] font-mono py-2">
          {!day ? "Bu gün" : "Sabah"}
        </p>
        <Link to="/">
          <FontAwesomeIcon
            icon={faChevronRight}
            color="white"
            fontSize="24px"
            className="absolute top-[14px] right-3"
            onClick={() => {
              setGun("Sabah");
              setDay(true);
            }}
            style={{ display: day ? "none" : "block" }} // Display if day is false
          />
        </Link>
      </div>
      <div className="bg-[#292929] p-5">
        <select
          className="w-full p-5 my-5 rounded-xl"
          value={park}
          onChange={(e) => setPark(e.target.value)}
        >
          <option value="Kinoteatr">Kinoteatr</option>
          {places.map((place) => (
            <option key={nanoid()} value={place}>
              {place}
            </option>
          ))}
        </select>
        <div className="mt-5">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-white">{error}</p>
          ) : (
            <div className="text-white">
              {data.map((item) =>
                item.add
                  ?.filter((i) => {
                    const filterCondition = clickedFilm == i.title;

                    const placeCondition =
                      park === "Kinoteatr" ||
                      (i.cinemaplace === park && i.available == true);

                    const dayCondition = i.time === gun;

                    return filterCondition && placeCondition && dayCondition;
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Cedvel2;
