import React from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";
function FooterPC() {
  return (
    <div className="bg-[#1B1B1B] flex flex-col items-center p-6 gap-3 font-Helvetica">
      <Link to="/">
        <img src="./../public/logo-gray.png" alt="" />
      </Link>
      <ul className="flex gap-6">
        <li>
          <img
            className="w-[50px] h-[20px]"
            src="./../public/visa.svg"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-[50px] h-[20px]"
            src="./../public/mastercard.svg"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-[50px] h-[20px]"
            src="./../public/maestro.svg"
            alt=""
          />
        </li>
      </ul>
      <p className="text-[#7b7b7b] text-[12px]">
        © 2024. Park Cinema. All rights reserved.
      </p>
    </div>
  );
}

export default FooterPC;
