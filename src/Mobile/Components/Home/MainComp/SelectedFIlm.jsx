import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../../../data/context";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Schedules from "./Schedules";

function VideoPlayer() {
  const [showVideo, setShowVideo] = useState(false);
  const { clickedFilm } = useContext(HeaderContext);
  const [moviesToday, setMoviesToday] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies`)
      .then((res) => setMoviesToday(res.data));
  }, []);

  const poster = moviesToday.filter((item) => item.title === clickedFilm)[0]
    ?.poster;
  const link = moviesToday.filter((item) => item.title === clickedFilm)[0]
    ?.link;
  const length = moviesToday.filter((item) => item.title === clickedFilm)[0]
    ?.length;
  const age = moviesToday.filter((item) => item.title === clickedFilm)[0]
    ?.ageLimit;
  const language = moviesToday.filter((item) => item.title === clickedFilm)[0]
    ?.language;

  const historyTo = useNavigate();

  useEffect(() => {
    if (!clickedFilm) {
      historyTo("/");
    }
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 320);

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsMobile(window.innerWidth <= 320);
    }

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "360px" }}>
        <div>
          <Link to="/">
            <FontAwesomeIcon
              icon={faChevronLeft}
              color="white"
              fontSize="50px"
              className="absolute left-8 top-8"
            />
          </Link>
        </div>

        <img
          className="absolute w-[128px] h-[192px] top-[290px] left-5"
          src={poster}
          alt=""
        />

        {!showVideo && (
          <div
            style={{
              backgroundImage: `url("./../../../../../public/${poster}")`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            onClick={handlePlay}
          >
            <img
              src="https://mobile.parkcinema.az/addons/shared_addons/themes/mobile/img/play-icon.svg"
              alt="Play Button"
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        )}
        {showVideo && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${link}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="flex pb-5 bg-[#F4F4F4]">
        <div className="w-1/2"></div>
        <div className={`font-Helvetica text-left w-1/2 ${isMobile ? "pl-2" : ""}`}>
          <h2 className="text-[#393838] font-bold text-[28px] py-2 ">
            {clickedFilm}
          </h2>
          <h5 className="text-[#B8B8B8]  text-[18px] py-[12px]">Sürətlilik: {length}</h5>
          <span className="mr-1 rounded-3xl py-2 px-5 bg-[#CE1C09] text-center text-[#f4f4f4] text-[14px] font-medium" >{age}</span>
          <span className="rounded-3xl py-2 px-5 bg-[#CE1C09] text-center text-[#f4f4f4] text-[14px] font-medium" >{language}</span>
        </div>
      </div>
      <Schedules/>
    </div>
  );
}

export default VideoPlayer;
