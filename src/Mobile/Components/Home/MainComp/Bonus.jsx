import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Bonus() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckBonus = () => {
    if (inputValue === "fafafa") {
      setMessage("Bonus aktivləşdi");
    } else {
      setMessage("Kod Səhvdir");
    }
  };

  return (
    <div className="bg-[#E4E4E4] py-3 font-Helvetica">
      <h3 className="text-center py-2">Bonus kartının balansını yoxla</h3>
      <div className="text-center my-2">
        <input
          className="w-[75%] rounded-l-[20px] outline-none py-2 px-4"
          type="text"
          placeholder="Kartın nömrəsi"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="w-[10%] bg-white rounded-r-[20px] py-2 px-1"
          onClick={handleCheckBonus}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="text-center mt-2">{message}</div>
    </div>
  );
}

export default Bonus;
