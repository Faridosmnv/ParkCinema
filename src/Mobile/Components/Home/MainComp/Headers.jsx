import React, { createContext, useContext, useState } from "react";
import { HeaderContext } from "../../../../data/context";

function Headers() {
  const { selectedHeader, setSelectedHeader } = useContext(HeaderContext);

  const handleHeaderClick = (index) => {
    setSelectedHeader(index);
  };
  const headers = ["Bu gün", "Tezliklə", "Cədvəl"];

  return (
    <div>
      <div className="flex justify-around items-center h-[100px] font-Helvetica font-bold">
        {headers.map((item, index) => (
          <h2
            className=""
            key={index}
            style={{
              color: index === selectedHeader ? "#CD1C0A" : "#B8B8B8",
              fontSize: index === selectedHeader ? "26px" : "20px",
              transition: "font-size 0.6s ease-in-out",
              cursor: "pointer",
            }}
            onClick={() => handleHeaderClick(index)}
          >
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Headers;
