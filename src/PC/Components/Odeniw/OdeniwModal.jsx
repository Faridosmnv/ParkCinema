import React, { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../../data/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faX } from "@fortawesome/free-solid-svg-icons";
import Odeniw2 from "./Odeniw2";

const OdeniwModal = ({ isOpen, onClose }) => {
  const {
    isModalOpen,
    setIsModalOpen,
    adi,
    setAdi,
    vip,
    setVip,
    film,
    kinoteatr,
    tarix,
    vaxt,
  } = useContext(HeaderContext);

  const [countdown, setCountdown] = useState(60);
  const [showMainContent, setShowMainContent] = useState(true); // State variable to control main content visibility
  useEffect(() => {
    let timer;
    if (isOpen) {
      setCountdown(60); // Reset countdown to its initial value

      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            onClose();
            clearInterval(timer);
            return 0;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [isOpen, onClose]);

  const handleIrəliClick = () => {
    setShowMainContent(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"></div>
      <div className="position w-full h-full flex items-start justify-center z-50 overflow-y-auto">
        <div className="text-black">
          <div className="relative bg-[#3F1919] flex justify-between rounded-t-3xl font-Helvetica text-[#f4f4f4]">
            <h1 className="text-[35px] text-left w-[800px] p-10">{film}</h1>
            <div>
              <div className="text-right p-4">
                <button
                  onClick={onClose}
                  className="text-right border-[2px] hover:text-[#FD0D0D] hover:border-[#FD0D0D] border-[#F9F9F9] rounded-[50%] text-[15px] px-2 py-1 text-[#F9F9F9] bg-[#222222] font-bold"
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
              <div className="flex justify-end pr-5">
                <h2 className="pr-5 text-[35px]">
                  {Math.floor(countdown / 60)}:
                  {String(countdown % 60).padStart(2, "0")}
                </h2>
                <button className="text-[14px] hover:underline">
                  <FontAwesomeIcon
                    className="px-2 text-[#FFBE00]"
                    icon={faFile}
                  />
                  Qaydalar və şərtlər
                </button>
              </div>
            </div>
          </div>
          {showMainContent ? (
            <div className="text-black">
              <div className="w-full  flex justify-between">
                <div className="w-1/3 p-10 text-[21px] border-[1px] gap-5 bg-[#7C2121] text-[#f4f4f4] border-[#333] flex items-center">
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/ticket-1.png"
                    alt=""
                  />
                  Seans
                </div>
                <div className="w-1/3 border-[1px] p-10 text-[21px] gap-5 bg-[#FF0D0D] text-[#f4f4f4] border-[#333] flex items-center">
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/ticket-2.png"
                    alt=""
                  />
                  Yerlər
                </div>
                <div className="w-1/3 border-[1px] p-10 text-[21px] gap-5 bg-[#FF0D0D] text-[#f4f4f4] border-[#333] flex items-center">
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/ticket-3.png"
                    alt=""
                  />
                  Ödəniş
                </div>
              </div>
              <div className="bg-white w-full  flex justify-between">
                <div className="w-1/3 flex justify-center items-start">
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/step-arrow.png"
                    alt=""
                  />
                </div>
                <div className="w-1/3"></div>
                <div className="w-1/3"></div>
              </div>
              <div className="w-full flex justify-start bg-white items-center border-b-[6px] border-[#FF9C10]">
                <div className="text-center pl-20 py-8">
                  <img
                    className="my-2"
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/standart.png"
                    alt=""
                  />
                  <h1 className="text-[21px] py-2">Adi</h1>
                  <h2 className="text-[17px] py-2">8.00 AZN</h2>
                  <h3 className="text-[#999999] py-2">
                    Maksimum
                    <br />
                    10 bilet
                  </h3>
                  <select
                    onChange={(e) => {
                      setAdi(e.target.value);
                    }}
                    className="outline-none border-[#999999] border-[1px] px-2 py-1 rounded-xl"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex flex-col items-center pl-20 py-8">
                  <img
                    className="my-2"
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/diamond.png"
                    alt=""
                  />
                  <h1 className="text-[21px] py-2">VİP</h1>
                  <h2 className="text-[17px] py-2">15.00 AZN</h2>
                  <h3 className="text-[#999999] py-2">
                    Maksimum
                    <br />
                    10 bilet
                  </h3>
                  <select
                    onChange={(e) => {
                      setVip(e.target.value);
                    }}
                    className="outline-none border-[#999999] border-[1px] px-2 py-1 rounded-xl"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
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
              <div className="bg-white flex justify-end pr-10 rounded-b-3xl">
                <img
                  src="https://parkcinema.az/addons/shared_addons/themes/new/img/book-az.png"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <Odeniw2
              isOpen={isModalOpen}
              onClose={() => {
                setShowMainContent(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default OdeniwModal;
