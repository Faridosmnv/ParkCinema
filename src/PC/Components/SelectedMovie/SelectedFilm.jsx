import React, { useContext, useEffect, useState } from "react";
import HeadKino from "../Kinoteatr/HeadKino";
import FooterPC from "../Footer/FooterPC";
import OdeniwModal from "../Odeniw/OdeniwModal";
import { HeaderContext } from "../../../data/context";
import axios from "axios";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Bio from "./Bio";

function SelectedFilm() {
  const {
    name,
    json,
    isModalOpen,
    setIsModalOpen,
    film,
    setFilm,
    kinoteatr,
    setKinoteatr,
    tarix,
    setTarix,
    vaxt,
    setVaxt,
  } = useContext(HeaderContext);
  const [data, setData] = useState([]);
  const [frmat, setFrmat] = useState("Hamisi");
  const [gun, setGun] = useState("Bu Gün");
  const [lan, setLan] = useState("");

  const hours = Array.from({ length: 16 }, (_, index) => {
    const hour = (index + 10) % 24;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  useEffect(() => {
    axios.get("http://localhost:4000/now").then((res) => setData(res.data));
  }, []);
  return (
    <div className=" bg-black text-[#f4f4f4] font-Helvetica">
      <HeadKino />
      <div className="containercss">
        {json && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-[60px] font-normal py-5 pl-5 text-[#f4f4f4]">
                {name}
              </h1>
              <button className="text-[14px] hover:underline">
                <FontAwesomeIcon
                  className="px-2 text-[#FFBE00]"
                  icon={faFile}
                />
                Qaydalar və şərtlər
              </button>
            </div>
            <div className="flex gap-1 pt-10">
              <button
                key={nanoid()}
                onClick={() => {
                  setFrmat("Hamisi");
                }}
                className={`text-[20px] px-10 py-2 rounded-t-xl hover:bg-[#2B3236] ${
                  frmat === "Hamisi" ? "bg-[#2B3236]" : "bg-[#4F5C63]"
                }`}
              >
                Hamisi
              </button>
              {data
                .filter((ad) => ad.name === name)
                .map((item, index) => {
                  return (
                    <>
                      {item.form.map((foa, index) => {
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setFrmat(foa);
                            }}
                            className={`text-[20px] px-10 py-2 rounded-t-xl hover:bg-[#2B3236] ${
                              frmat === foa ? "bg-[#2B3236]" : "bg-[#4F5C63]"
                            }`}
                          >
                            {foa}
                          </button>
                        );
                      })}
                      {item.dil.length > 1 &&
                        item.dil.map((lang, index) => {
                          return (
                            <button
                              key={index}
                              onClick={() => {
                                setLan(lang);
                              }}
                              className={`text-[20px] px-10 py-2 rounded-t-xl hover:bg-[#2B3236] ${
                                lan === lang ? "bg-[#2B3236]" : "bg-[#4F5C63]"
                              }`}
                            >
                              {lang}
                            </button>
                          );
                        })}
                    </>
                  );
                })}
            </div>
            <div className="w-full bg-[#2B3236] p-5">
              <div className="w-full flex">
                <select
                  onChange={(e) => setGun(e.target.value)}
                  className="w-1/5 bg-[#2B3236] outline-none px-5"
                >
                  <option value="Bu Gün">Bu Gün</option>
                  <option value="Sabah">Sabah</option>
                </select>
                <div className="w-4/5 pl-3">
                  <img
                    src="https://parkcinema.az/addons/shared_addons/themes/new/img/dayline.png"
                    alt=""
                  />
                  <div className="flex justify-between">
                    {hours.map((hour, index) => (
                      <div key={index} className="text-[11px] pt-2">
                        {hour}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full">
                {data
                  .filter((ad) => ad.name === name)
                  .map((item, index) => {
                    return (
                      <>
                        {item.places.map((yer, index) => {
                          let park = yer;
                          return (
                            <div
                              key={nanoid()}
                              className={`flex justify-between w-full py-4 ${
                                index % 2 ? "bg-[#212121]" : "bg-[#262626]"
                              }`}
                            >
                              <div className="px-5">{yer}</div>
                              <div className="w-[836px] ml-3 flex relative py-1">
                                {item.add
                                  .filter((i) => {
                                    const placeCondition =
                                      i.cinemaplace === park;

                                    const formatCondition =
                                      frmat === "Hamisi" || i.format === frmat;
                                    const dilCondition =
                                      lan === "" || i.language === lan;
                                    console.log(
                                      lan === "" || i.language === lan
                                    );
                                    const dayCondition =
                                      gun === "" || i.time === gun;

                                    return (
                                      placeCondition &&
                                      dayCondition &&
                                      formatCondition &&
                                      dilCondition
                                    );
                                  })
                                  .sort((a, b) =>
                                    a.schedule.localeCompare(b.schedule)
                                  )
                                  .map((filteredItem) => {
                                    const saat = 10;
                                    let pad;
                                    let hour = parseInt(
                                      filteredItem.schedule.slice(0, 2)
                                    );
                                    let Int = parseInt(
                                      filteredItem.schedule.slice(3, 4)
                                    );

                                    if (Int == 0) {
                                      pad = (hour - saat) * 54;
                                    } else {
                                      pad = (hour - saat) * 54 + 27;
                                    }
                                    return (
                                      <div
                                        onClick={() => {
                                          setFilm(filteredItem.title);
                                          setTarix(filteredItem.time);
                                          setVaxt(
                                            `${filteredItem.schedule},${filteredItem.format},${filteredItem.language}`
                                          );
                                          setKinoteatr(
                                            filteredItem.cinemaplace
                                          );
                                          setIsModalOpen(true);
                                        }}
                                        style={{
                                          left: `${pad}px`,
                                        }}
                                        className={`absolute top-[6px] text-[9px] hover:bg-[#f4f4f4] hover:text-black p-1 rounded-xl cursor-pointer`}
                                        key={filteredItem.id}
                                      >
                                        {filteredItem.schedule}
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  })}
              </div>
              <OdeniwModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </>
        )}
        <Bio />
      </div>
      <FooterPC />
    </div>
  );
}

export default SelectedFilm;
