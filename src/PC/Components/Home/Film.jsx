import React, { useState } from "react";
import Bugun from "./Bugun";
import Tezlikle from "./Tezlikle";
import CedvelPC from "./CedvelPC";
import HomeFoot from "./HomeFoot";

function Film() {
  const [selectedHeader, setSelectedHeader] = useState(0);

  const handleClick = (index) => {
    setSelectedHeader(index);
  };

  const headers = ["Bu gün", "Tezliklə", "Cədvəl"];

  return (
    <div className="bg-black text-white w-[772px]">
      <div className="flex justify-around gap-3 w-full mb-5">
        {headers.map((item, index) => (
          <div
            className="border-[2px] rounded-2xl w-1/3 text-[26px] font-medium text-center font-Helvetica cursor-pointer"
            key={index}
            style={{
              color: index === selectedHeader ? "#f4f4f4" : "#2B3236",
              borderColor: index === selectedHeader ? "#FF0000" : "#2B3236",
            }}
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {selectedHeader === 0 ? <Bugun /> : ""}
      {selectedHeader === 1 ? <Tezlikle /> : ""}
      {selectedHeader === 2 ? <CedvelPC /> : ""}
      <HomeFoot/>
    </div>
  );
}

export default Film;
