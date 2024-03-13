import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
function Footer() {
  return (
    <div className="bg-[#292929] flex flex-col items-center p-6 gap-3 font-Helvetica">
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
      <ul className="flex gap-20 text-[#7b7b7b] text-[18px]">
        <Link to="https://apps.apple.com/us/app/park-cinema/id1119977600?ls=1">
          <li className="flex gap-3">
            <img src="apple.svg" alt="" />
            <h4>App Store</h4>
          </li>
        </Link>
        <Link to="https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=ru">
          <li className="flex gap-3">
            <img src="android.svg" alt="" />
            <h4>Play Store</h4>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
