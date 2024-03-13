import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { HeaderContext } from "../../../data/context";
import { nanoid } from "nanoid";

function Info() {
  const { name, json } = useContext(HeaderContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/${json}`).then((res) => setData(res.data));
  }, []);
  return (
    <div className="w-[288px]">
      <h1 className="flex justify-start text-[14px] px-5 gap-9 py-5">
        <Link to="https://www.facebook.com/ParkCinema">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="https://twitter.com/park_cinema">
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link to="https://www.youtube.com/channel/UC0NJN0gCCx_DbJlkPfD30Ag/feed">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
      </h1>
      <div className="w-full bg-black relative">
        <img src="/order.png" alt="" />
        <div className="absolute top-2 left-2 w-full text-left p-3 text-[18px]">
          <h1 className="text-[#FF0000]">Biletlərin sifarişi</h1>
          <h2 className="text-[#f4f4f4]">
            <span className="text-[#999999]">+994 12 </span>598 74 14
          </h2>
          <h3 className="text-[#f4f4f4]">
            119 <span className="text-[#999999]">( ödənişli )</span>
          </h3>
        </div>
      </div>
      {data
        .filter((item) => item.title == name)
        ?.map((it) => {
          return (
            <div key={nanoid()} className="px-5">
              <img className="py-6" src={it.poster} alt="" />
              <div className="py-7 text-[14px]">
                <h1 className="text-[#8B8B8B]">Ölkə:</h1>
                <p >{it.country}</p>
              </div>
              <div className="py-7 text-[14px]">
                <h1>Il:</h1>
                <p>{it.yearOfDevelopment}</p>
              </div>
              <div className="py-7 text-[14px]">
                <h1 className="text-[#8B8B8B]">Rejissor:</h1>
                <p>{it.director}</p>
              </div>
              <div className="py-7 text-[14px]">
                <h1 className="text-[#8B8B8B]">Janr:</h1>
                <p>{it.genre}</p>
              </div>
              <div className="py-7 text-[14px]">
                <h1 className="text-[#8B8B8B]">Rollarda:</h1>
                <p>{it.mainActors}</p>
              </div>
              <div className="py-7 text-[14px]">
                <h1 className="text-[#8B8B8B]">Surəklilik:</h1>
                <p>{it.length}</p>
              </div>
              <div className="py-7 text-[14px]">
                <h1 className="text-[#8B8B8B]">Yas məhdudiyyəti:</h1>
                <p>{it.ageLimit}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Info;
