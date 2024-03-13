import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContext } from "./../../../data/context";

function YerNovleri() {
  const {
    selectedFilm,
    selectedPlace,
    selectedDay,
    selectedTime,
    adi,
    setAdi,
    vip,
    setVip,
  } = useContext(HeaderContext);
  const [disableButton, setDisableButton] = useState(false);

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
  const [inputs, setInputs] = useState([0, 0]);

  const updateInput = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] += value;
    if (newInputs[index] < 0) newInputs[index] = 0;
    if (newInputs.reduce((adi, vip) => adi + vip, 0) <= 50) {
      setInputs(newInputs);
      if (index === 0) {
        setAdi(newInputs[index]);
      } else {
        setVip(newInputs[index]);
      }
    }
  };

  return (
    <div className="bg-[#F4F4F4] font-Helvetica">
      <Link to="/bilet/step1">
        <h5 className="text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]">
          Yer Növləri
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
        <Link to="/bilet/step1">
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            fontSize="24px"
            className="absolute top-[14px] left-3"
          />
        </Link>
        <p className="text-center text-[#f4f4f4] text-[24px] font-Helvetica py-2">
        Yer Növləri
        </p>
      </div>
      <div className="px-5 py-10 bg-[#292929] text-center">
        <div className="flex justify-between items-center">
          <h3 className="py-2 text-[20px] text-[#909090] w-1/5">Adi</h3>
          <div className="p-2 w-full">
            <button
              className="bg-[#494949] text-white text-[20px] py-2 px-4"
              onClick={() => updateInput(0, -1)}
            >
              -
            </button>
            <input
              className="outline-none w-2/5 text-[20px] text-center py-2"
              type="text"
              value={inputs[0]}
              readOnly
            />
            <button
              className="bg-[#494949] text-white text-[20px] py-2 px-4"
              onClick={() => updateInput(0, 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="py-2 text-[20px] text-[#909090] w-1/5 ">VIP</h3>
          <div className="p-2 w-full">
            <button
              className="bg-[#494949] text-white text-[20px] py-2 px-4"
              onClick={() => updateInput(1, -1)}
            >
              -
            </button>
            <input
              className="outline-none w-2/5 text-[20px] text-center py-2"
              type="text"
              value={inputs[1]}
              readOnly
            />
            <button
              className="bg-[#494949] text-white text-[20px] py-2 px-4"
              onClick={() => updateInput(1, 1)}
            >
              +
            </button>
          </div>
        </div>
        <h2 className="py-2 mt-[50px] text-[24px] text-[#909090]">
          Yer novlərin seçin
        </h2>
        <h4 className="py-2 text-[26px] text-[#f4f4f4]">
          {inputs.reduce((adi, vip) => adi * 0.5 + vip * 10, 0)} AZN
        </h4>
      </div>
      <div className="bg-[#292929] p-5">
        <div className="flex flex-col justify-center">
          <img src="/zeng.png" alt="" />
          <div className="text-center">
            <Link to="/bilet/step1">
              <button className="ml-4 px-4 py-2 rounded-lg bg-[#494949] text-[20px] text-[#f4f4f4] font-medium">
                Geri
              </button>
            </Link>
            <Link to="/bilet/step3">
              <button
                disabled={adi == "" && vip == ""}
                className="ml-4 px-4 py-2 rounded-lg bg-[#CC1A07] text-[20px] text-[#f4f4f4] font-medium"
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

export default YerNovleri;
