import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";

function HeadLaser() {
  return (
    <div>
      <div className="absolute top-1 left-1 z-50 w-full">
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
              <Link to="/aksiyalar">
                <li className="hover:underline">Aksiyalar</li>
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
        </div>
      </div>

      <div className="relative sh">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src="https://parkcinema.az/addons/shared_addons/themes/new/img/top-shadow.png"
          alt=""
        />
        <img
          className="absolute bottom-0 left-0 w-full h-full "
          src="https://parkcinema.az/addons/shared_addons/themes/new/img/bottom-shadow.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadLaser;
