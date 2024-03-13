import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { HeaderContext } from "../../../data/context";
import OdeniwModal from "../Odeniw/OdeniwModal";

function Select() {
  const [db, setDb] = useState([]);
  const{ film, setFilm ,kinoteatr, setKinoteatr, tarix, setTarix, vaxt, setVaxt}=useContext(HeaderContext)
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(true);
  const [selected3, setSelected3] = useState(true);
  const [selected4, setSelected4] = useState(true);
  const places = [
    "ParkBulvar",
    "MetroPark",
    "AygunMall",
    "FlameTowers",
    "Zagulba",
    "Sahdag",
  ];
  const time = ["Bu Gün", "Sabah"];

  useEffect(() => {
    axios.get("http://localhost:4000/now").then((res) => setDb(res.data));
  }, []);

  const { isModalOpen, setIsModalOpen } = useContext(HeaderContext);

  useEffect(() => {}, [isModalOpen]);

  useEffect(() => {
    if (film === "1") {
      setSelected1(true);
      setKinoteatr("11");
      setTarix("111");
      setVaxt("1111");
    } else {
      setSelected1(false);
    }
    if (kinoteatr === "11") {
      setSelected2(true);
      setTarix("111");
      setVaxt("1111");
    } else {
      setSelected2(false);
    }
    if (tarix === "111") {
      setSelected3(true);
      setVaxt("1111");
    } else {
      setSelected3(false);
    }
    if (vaxt === "1111") {
      setSelected4(true);
    } else {
      setSelected4(false);
    }
  }, [film, kinoteatr, tarix, vaxt]);

  return (
    <div className="w-[289px] flex flex-col items-end">
      <img className="w-full object-cover" src="/borderT.png" alt="" />
      <div className="flex flex-col bg-[#FFFFFF] py-[20px] w-[288px] border-[#ffffff]">
        <select
          className="bg-[#EFEFEF] mx-8 my-2 px-3 py-1 text-[#2B3236] hover:text-[#000000] text-[12px] outline-none"
          value={film}
          onChange={(e) => setFilm(e.target.value)}
        >
          <option>Film</option>
          {db.map((item) => (
            <option key={nanoid()}>{item.name}</option>
          ))}
        </select>
        <select
          disabled={selected1}
          className="bg-[#EFEFEF] mx-8 my-2 px-3 py-1 text-[#2B3236] hover:text-[#000000] text-[12px] outline-none"
          value={kinoteatr}
          onChange={(e) => setKinoteatr(e.target.value)}
        >
          <option>Kinoteatr</option>
          {places.map((item) => (
            <option key={nanoid()}>{item}</option>
          ))}
        </select>
        <select
          disabled={selected2}
          value={tarix}
          onChange={(e) => setTarix(e.target.value)}
          className="bg-[#EFEFEF] mx-8 my-2 px-3 py-1 text-[#2B3236] hover:text-[#000000] text-[12px] outline-none"
        >
          <option>Tarix</option>
          {time.map((item) => (
            <option key={nanoid()}>{item}</option>
          ))}
        </select>
        <select
          disabled={selected3}
          value={vaxt}
          onChange={(e) => {setVaxt(e.target.value)}}
          className="bg-[#EFEFEF] mx-8 my-2 px-3 py-1 text-[#2B3236] hover:text-[#000000] text-[12px] outline-none"
        >
          <option>Saat</option>
          {db
            .filter((item) => item.name == film)[0]
            ?.add.filter((i) => i.cinemaplace == kinoteatr)
            ?.map((i) =>(
              <option key={nanoid()} value={i.value}>
                {i.schedule},{i.format},{i.language}
              </option>
            ))}
        </select>

        <button disabled={selected4}
          onClick={() => {
            console.log(vaxt);
            setIsModalOpen(true);
          }}
          className="hover:bg-[#ffffff] hover:text-[#ff0000] mx-8 my-2 px-1 py-1 border w-[100px] rounded-xl bg-[#FF0000] text-[15px] text-[#ffffff] font-semibold font-Helvetica"
        >
          BILET AL
        </button>
      </div>
      <img className="w-full object-cover" src="/borderB.png" alt="" />
      <OdeniwModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Select;
