import React, { useContext, useState } from "react";
import Bugun from "./Today";
import Tezlikle from "./Soon";
import Cedvel from "./../Cedvel2";
import { HeaderContext } from "../../../../data/context";

function Film() {
  const {selectedHeader, setSelectedHeader} =useContext(HeaderContext);

  const handleClick = (index) => {
    setSelectedHeader(index);
  };

  const headers = ["Bu gün", "Tezliklə", "Cədvəl"];

  return (
    <div className="">
      {selectedHeader === 0 ? <Bugun /> : ""}
      {selectedHeader === 1 ? <Tezlikle /> : ""}
      {selectedHeader === 2 ? <Cedvel /> : ""}
    </div>
  );
}

export default Film;
