import React, { useContext } from "react";
import { HeaderContext } from "../../../data/context";
import { Link } from "react-router-dom";
import { useState } from "react";

function Odeniw3({ isOpen, onClose }) {
  const {
    isModalOpen,
    setIsModalOpen,
    film,
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

  const handleButtonClick = () => {
    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
      setIsModalOpen(false);
    } else {
      // Handle cancellation if needed
    }
  };
  const [tesdiq, setTesdiq] = useState(false);

  return (
    <div className="w-full font-Helvetica bg-white text-center text-black">
      <h1 className="text-[30px] font-bold py-7">{film}</h1>
      <h2 className="text-[20px]">Məğləb: {adi * 8 + vip * 15}.00 AZN</h2>
      <h2 className="text-[20px] pt-7 pb-1">Bildiriş almaq istəyirəm</h2>
      <input
        placeholder="E-mail"
        className="border-[1px] border-[#d7d7d7] rounded-xl py-1 px-4 w-[320px]"
        type="email"
      />
      <div className="flex justify-center items-center py-5 gap-2">
        <span className="text-[#404040]">+994</span>
        <select className="border-[1px] border-[#d7d7d7] rounded-xl py-1 px-2 ">
          <option value="">10</option>
          <option value="">50</option>
          <option value="">55</option>
          <option value="">70</option>
          <option value="">77</option>
          <option value="">99</option>
        </select>
        <input
          type="number"
          className="border-[1px] border-[#d7d7d7] rounded-xl py-1 px-4 "
        />
      </div>
      <div className="flex justify-center">
        <input type="checkbox" />
        <h3 className="text-[#808080] ml-3">
          Mən "
          <Link>
            <span className="text-black hover:underline cursor-pointer">
              Qaydalar və şərtlər
            </span>
          </Link>
          " oxudum və razıyam.
        </h3>
      </div>
      <button
        onClick={handleButtonClick}
        className="hover:bg-[#ffffff] hover:text-[#ff0000] m-2 px-1 py-1 border w-[100px] rounded-xl bg-[#FF0000] text-[15px] text-[#ffffff] font-semibold font-Helvetica"
      >
        IMTINA
      </button>
      <button
        onClick={() => setTesdiq(true)}
        className={`hover:bg-[#ffffff] hover:text-[#ff0000]  m-2 px-1 py-1 border w-[100px] rounded-xl ${
          tesdiq ? "bg-green-600":"bg-[#FF0000]"
        } text-[15px] text-[#ffffff] font-semibold font-Helvetica`}
      >
        {tesdiq?'GÖNDƏRİLDİ':"TƏSDİQ"}
      </button>
    </div>
  );
}

export default Odeniw3;
