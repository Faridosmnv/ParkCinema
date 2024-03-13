import React from "react";
import { Link } from "react-router-dom";
import Select from "./Select";

function HeaderPC() {
  return (
    <div>
      <div className="containercss flex justify-between relative">
        <div className="flex gap">
          <Link to="/">
            <img className="h-[200px]" src="/logoPC.png" alt="" />
          </Link>
          <ul className="h-[60px] flex items-center pl-5  gap-2 text-[#f4f4f4] text-base font-Helvetica font-medium">
            <Link to="/kinoteatrlar">
              <li className="hover:underline">Kinoteatrlar</li>
            </Link>
            <li>
              <img className="" src="/slash.png" alt="" />
            </li>
            <Link to="/imax">
              <li className="hover:underline">IMAX</li>
            </Link>
            <li>
              <img className="" src="/slash.png" alt="" />
            </li>
            <Link to="/laser">
              <li className="hover:underline">LaseR</li>
            </Link>
            <li>
              <img className="" src="/slash.png" alt="" />
            </li>
            <Link to="/vip">
              <li className="hover:underline">VIP</li>
            </Link>
            <li>
              <img className="" src="/slash.png" alt="" />
            </li>
            <Link to="/about">
              <li className="hover:underline">Haqqımızda</li>
            </Link>
          </ul>
        </div>
        <div className="h-[60px] flex items-center gap-5 text-[#f4f4f4] text-xs font-Helvetica font-medium">
          <div className="flex gap-2">
            <span className="cursor-pointer hover:underline">AZ</span>
            <span>/</span>
            <span className="cursor-pointer hover:underline">RU</span>
            <span>/</span>
            <span className="cursor-pointer hover:underline">EN</span>
          </div>
          <Link to="https://apps.apple.com/us/app/park-cinema/id1119977600?ls=1">
            <img src="/ios.png" alt="" />
          </Link>
          <Link to="https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=ru">
            <img src="/android.png" alt="" />
          </Link>
        </div>
        <div className="absolute bottom-[-150%] right-0">
          <Select />
        </div>
      </div>
    </div>
  );
}

export default HeaderPC;
