import React, { useContext, useState } from "react";
import { HeaderContext } from "../../../data/context";
import { useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Reklam from "./../Home/Reklam";
import OdeniwModal from "./../Odeniw/OdeniwModal";
import OtherFilms from "./../Kinoteatr/OtherFilms";
import LaserTexnologiya from "./LaserTexnologiya";

function MainLaser() {
  const [gun, setGun] = useState("Bu Gün");
  const arr = ["Cedvel", "LaseR"];
  const [selectedHeader, setSelectedHeader] = useState(0);

  const handleClick = (index) => {
    setSelectedHeader(index);
  };
  const {
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
    data, setData
  } = useContext(HeaderContext);

  const hours = Array.from({ length: 16 }, (_, index) => {
    const hour = (index + 10) % 24;
    return `${hour.toString().padStart(2, "0")}:00`;
  });



  return (
    <div className="bg-black">
      <div className="containercss text-[#f4f4f4]  font-Helvetica">
        <h1 className="text-[60px] font-normal py-5 pl-5">LaseR</h1>
        <div className="flex justify-start gap-2 px-5 font-Helvetica">
          {arr.map((item, index) => (
            <div
              className="rounded-lg border-[1px] border-[#FF0000] py-2 px-3 text-[25px] cursor-pointer"
              key={index}
              style={{
                backgroundColor: index === selectedHeader ? "#FF0000" : "",
              }}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
        {selectedHeader == 0 ? (
          <>
            <div className="w-full  p-5">
              <div className="w-full flex">
                <select
                  onChange={(e) => setGun(e.target.value)}
                  className="w-1/5 border-[2px] border-[#212121] mb-2 rounded-xl bg-black text-[14px] text-[#f4f4f4] outline-none px-5"
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
                  .filter((item) => item.form.includes("LaseR"))
                  .map((item, index) => {
                    return (
                      <div
                        key={nanoid()}
                        className={`flex justify-between w-full py-4 ${
                          index % 2 ? "bg-[#212121]" : "bg-[#262626]"
                        }`}
                      >
                        <div className="px-5">{item.name}</div>
                        <div className="w-[836px] ml-3 flex relative py-1">
                          {item.add
                            .filter((i) => {
                              const filterCondition = i.format === "LaseR";

                              const dayCondition = gun === "" || i.time === gun;

                              return filterCondition && dayCondition;
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
                                    setKinoteatr(filteredItem.cinemaplace);
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
              </div>
              <OdeniwModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
            <div className="containercss flex justify-between pt-5">
              <OtherFilms />
              <Reklam />
            </div>
          </>
        ) : (
          <LaserTexnologiya />
        )}
      </div>
    </div>
  );
}

export default MainLaser;
