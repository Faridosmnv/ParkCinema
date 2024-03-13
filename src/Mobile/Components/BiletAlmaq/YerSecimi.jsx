import React, { useContext, useEffect, useState } from "react";
import {HeaderContext} from "../../../data/context";
import { Link, useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function YerSecimi() {
  const {
    selectedFilm,
    selectedPlace,
    selectedDay,
    selectedTime,
    adi,
    vip,
  } = useContext(HeaderContext);
  const [selectedAdiPlaces, setSelectedAdiPlaces] = useState([]);
  const [selectedVipPlaces, setSelectedVipPlaces] = useState([]);

  const handlePlaceClick = (placeNumber, isVip) => {
    const selectedPlaces = isVip ? selectedVipPlaces : selectedAdiPlaces;

    if (selectedPlaces.includes(placeNumber)) {
      isVip
        ? setSelectedVipPlaces(
            selectedPlaces.filter((place) => place !== placeNumber)
          )
        : setSelectedAdiPlaces(
            selectedPlaces.filter((place) => place !== placeNumber)
          );
    } else {
      if (
        (isVip ? selectedVipPlaces.length : selectedAdiPlaces.length) <
        (isVip ? vip : adi)
      ) {
        isVip
          ? setSelectedVipPlaces([...selectedVipPlaces, placeNumber])
          : setSelectedAdiPlaces([...selectedAdiPlaces, placeNumber]);
      }
    }
  };
  const historyTo = useNavigate();

  useEffect(() => {
    if (
      selectedFilm.includes('1') &&
      selectedPlace.includes('1') &&
      selectedDay.includes('1') &&
      selectedTime.includes('1')
    ) {
      historyTo("/bilet/step1");
    }
  }, []);

  return (
    <div className="font-Helvetica">
      <Link to="/bilet/step2">
        <h5 className="text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]">
          Yer Seçimi
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
        <Link to="/bilet/step2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            fontSize="24px"
            className="absolute top-[14px] left-3"
          />
        </Link>
        <p className="text-center text-[#f4f4f4] text-[24px] font-mono py-2">
        Yer Seçimi
        </p>
      </div>
      <div className="px-5 py-10 bg-[#292929] overflow-scroll">
        <table className="table-auto">
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className="p-2 text-[#f4f4f4] text-[16px]">
                  Sira {rowIndex + 1}
                </td>
                {[...Array(10)].map((_, colIndex) => {
                  const placeNumber = rowIndex * 10 + colIndex + 1;
                  const isSelectedAdi = selectedAdiPlaces.includes(placeNumber);
                  const isSelectedVip = selectedVipPlaces.includes(placeNumber);
                  const isSelectableAdi =
                    selectedAdiPlaces.length < adi || isSelectedAdi;
                  const isSelectableVip =
                    selectedVipPlaces.length < vip || isSelectedVip;

                  return (
                    <td key={colIndex} className="p-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                          isSelectedAdi
                            ? "bg-red-500"
                            : isSelectableAdi
                            ? "bg-gray-300"
                            : "bg-gray-500"
                        }`}
                        onClick={() =>
                          isSelectableAdi &&
                          handlePlaceClick(placeNumber, false)
                        }
                      >
                        {colIndex + 1}
                      </div>
                    </td>
                  );
                })}
                <td className="p-2 text-[#f4f4f4] text-[16px]">
                  Sira {rowIndex + 1}
                </td>
              </tr>
            ))}
            <tr>
              <td className="p-2 text-[#f4f4f4] text-[16px]">VIP</td>
              {[...Array(10)].map((_, colIndex) => {
                const placeNumber = 50 + colIndex + 1;
                const isSelectedVip = selectedVipPlaces.includes(placeNumber);
                const isSelectableVip =
                  selectedVipPlaces.length < vip || isSelectedVip;

                return (
                  <td key={colIndex} className="p-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                        isSelectedVip
                          ? "bg-red-500"
                          : isSelectableVip
                          ? "bg-gray-300"
                          : "bg-gray-500"
                      }`}
                      onClick={() =>
                        isSelectableVip && handlePlaceClick(placeNumber, true)
                      }
                    >
                      {colIndex + 1}
                    </div>
                  </td>
                );
              })}
              <td className="p-2 text-[#f4f4f4] text-[16px]">VIP</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-center p-5 bg-[#292929]">
        <img src="/az.jpg" alt="" />
        <div className="text-center pt-7">
          <Link to="/bilet/step2">
            <button className="ml-4 px-4 py-2 rounded-lg bg-[#494949] text-[20px] text-[#f4f4f4] font-medium">
              Geri
            </button>
          </Link>
          <Link to="/bilet/step4">
            <button className="ml-4 px-4 py-2 rounded-lg bg-[#CC1A07] text-[20px] text-[#f4f4f4] font-medium">
              Irəli
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YerSecimi;
