import React, { useContext, useState } from "react";
import { HeaderContext } from "../../../data/context";
import Odeniw3 from "./Odeniw3";

function Odeniw2({ isOpen, onClose }) {
  const {
    isModalOpen,
    adi,
    vip,
    kinoteatr,
    tarix,
    vaxt,
    selectedAdiPlaces,
    setSelectedAdiPlaces,
    selectedVipPlaces,
    setSelectedVipPlaces,
  } = useContext(HeaderContext);
  const [showMainContent, setShowMainContent] = useState(true);

  const handleIrəliClick = () => {
    setShowMainContent(false);
  };

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
  return (
    <>
      {showMainContent ? (
        <>
          <div className="w-full bg-white text-black flex py-20 justify-center">
            <table className="table-auto ">
              <tbody>
                {[...Array(5)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="p-2 text-black text-[16px]">
                      Sira {rowIndex + 1}
                    </td>
                    {[...Array(10)].map((_, colIndex) => {
                      const placeNumber = rowIndex * 10 + colIndex + 1;
                      const isSelectedAdi =
                        selectedAdiPlaces.includes(placeNumber);
                      const isSelectedVip =
                        selectedVipPlaces.includes(placeNumber);
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
                    <td className="p-2 text-text-black text-[16px]">
                      Sira {rowIndex + 1}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-2 text-text-black text-[16px]">VIP</td>
                  {[...Array(10)].map((_, colIndex) => {
                    const placeNumber = 50 + colIndex + 1;
                    const isSelectedVip =
                      selectedVipPlaces.includes(placeNumber);
                    const isSelectableVip =
                      selectedVipPlaces.length < vip || isSelectedVip;

                    return (
                      <td key={colIndex} className="p-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#727272] ${
                            isSelectedVip
                              ? "bg-[#FF0D0D]"
                              : isSelectableVip
                              ? "bg-gray-300"
                              : "bg-gray-500"
                          }`}
                          onClick={() =>
                            isSelectableVip &&
                            handlePlaceClick(placeNumber, true)
                          }
                        >
                          {colIndex + 1}
                        </div>
                      </td>
                    );
                  })}
                  <td className="p-2 text-black text-[16px]">VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full font-Helvetica flex justify-center items-center bg-white py-20">
            <div>
              <h1 className="text-center text-[24px] py-5">
                {tarix},{vaxt},{kinoteatr}
              </h1>
              <div className="flex relative">
                <button onClick={onClose}>
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/prev-deactive.png"
                    alt=""
                  />
                  <h5 className="absolute top-[49px] left-11 text-[#CCCCCC] text-[27px] hover:text-[#000]">
                    Geri
                  </h5>
                </button>
                <img
                  src="https://parkcinema.az/addons/shared_addons/themes/new/img/price-container.png"
                  alt=""
                />
                <div className="absolute top-7 left-[160px] text-center">
                  <h2 className="text-black text-[28px]">
                    {adi * 8 + vip * 15}
                  </h2>
                  <p className="text-[#CCCCCC] text-[24px]">AZN</p>
                </div>
                <button
                  onClick={handleIrəliClick}
                  disabled={adi + vip == 0}
                  className="relative"
                >
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/next-deactive.png"
                    alt=""
                  />
                  <h5 className="absolute top-[49px] right-11 text-[#CCCCCC] text-[27px] hover:text-[#000]">
                    İrəli
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Odeniw3
          isOpen={isModalOpen}
          onClose={() => {
            setIsO
            setShowMainContent(true);
          }}
        />
      )}
      <div className="bg-white flex justify-end pr-10 rounded-b-3xl">
        <img
          src="https://parkcinema.az/addons/shared_addons/themes/new/img/book-az.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Odeniw2;
