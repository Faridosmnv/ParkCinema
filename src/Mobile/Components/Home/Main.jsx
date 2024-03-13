import React, { useState } from "react";
import Headers from "./MainComp/Headers";
import Movies from "./MainComp/Movies";
import Bonus from "./MainComp/Bonus";

function Main() {
  return (
    <div className="bg-[#F4F4F4]">
        <Headers />
        <Movies />
        <Bonus />
    </div>
  );
}

export default Main;
