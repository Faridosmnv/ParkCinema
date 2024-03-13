import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContext } from "./../../../data/context";

function Odenis() {
  const [pay, setPay] = useState("");
  const [email, setEmail] = useState("");
  const [completed, setCompleted] = useState(false); 
  const { selectedFilm, selectedPlace, selectedDay, selectedTime, adi, vip } =
    useContext(HeaderContext);
  const historyTo = useNavigate();

  useEffect(() => {
    if (
      selectedFilm.includes("1") &&
      selectedPlace.includes("1") &&
      selectedDay.includes("1") &&
      selectedTime.includes("1")
    ) {
      historyTo("/bilet/step1");
    }
  }, []);

  const handleNextClick = () => {
    if (pay || email) setCompleted(true);
  };

  return (
    <div>
      <Link to="/bilet/step3">
        <h5 className="text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]">
          Ödəniş
        </h5>
      </Link>
      <h2 className="text-black font-bold text-[28px] px-5 py-[15px] ">
        {selectedFilm}
      </h2>
      <p className="text-[#292929] px-5 text-[22px]">{selectedPlace}</p>
      <p className="text-[#292929] px-5 text-[22px] pb-5">
        {selectedDay} {selectedTime}
      </p>
      <div className="bg-[#CC1A07] relative">
        <Link to="/bilet/step3">
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            fontSize="24px"
            className="absolute top-[14px] left-3"
          />
        </Link>
        <p className="text-center text-[#f4f4f4] text-[24px] font-Helvetica py-2">
          Ödəniş
        </p>
      </div>
      <div className="bg-[#292929] p-5">
        <h3 className="py-2 text-[16px] text-[#909090]">Ödəniş üsulu</h3>
        <select
          className="w-full p-3 rounded-xl mb-5"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
        >
          <option value="-Seç-">-Seç-</option>
          <option value="Kredit Kart">Kredit Kart</option>
          <option value="Nagd(Bron eləmək)">Nagd(Bron eləmək)</option>
        </select>
        <h3 className="py-2 text-[16px] text-[#909090]">
          Bildirişi almaq istəyirəm: E-poçt ilə
        </h3>
        <input
          onChange={(a) => setEmail(a.target.value)}
          className="w-full p-3 rounded-xl outline-none"
          type="email"
        />
        <div className="flex flex-col justify-center">
          <img src="/zeng.png" alt="" />
          <div className="text-center">
            <Link to="/bilet/step3">
              <button className="ml-4 px-4 py-2 rounded-lg bg-[#494949] text-[20px] text-[#f4f4f4] font-medium">
                Geri
              </button>
            </Link>
            <button
              onClick={handleNextClick}
              disabled={adi === "" && vip === ""}
              className={`ml-4 px-4 py-2 rounded-lg ${
                completed ? "bg-green-500" : "bg-[#CC1A07]"
              } text-[20px] text-[#f4f4f4] font-medium`}
            >
              {completed ? "Ödəniş təsdiq olundu" : "Irəli"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Odenis;
