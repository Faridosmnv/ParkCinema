import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContext } from "../../../data/context";
import {
  faLocationDot,
  faClock,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
function Kinoteatrlar() {
  const { place, setPlace } = useContext(HeaderContext);
  return (
    <div className="bg-[#F4F4F4] font-Helvetica">
      <Link to="/">
        <h5 className="text-[#B8B8B8] underline text-[18px] px-[20px] py-[12px]">
          Kinoteatrlar
        </h5>
      </Link>
      <h2 className="text-black font-bold text-[28px] px-5">Kinoteatrlar</h2>
      <span className="flex items-center m-5 gap-3">
        <FontAwesomeIcon
          className="text-2xl text-[#B8B8B8]"
          icon={faLocationDot}
        />
        <h3 className="text-[18px] text-[#393838]">
          Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə
        </h3>
      </span>
      <span className="flex items-center m-5 gap-3">
        <FontAwesomeIcon
          className="text-2xl text-[#B8B8B8]"
          icon={faPhoneVolume}
        />
        <h3 className="text-[18px] text-[#393838]">(+994 12) 598 74 14, 119</h3>
      </span>
      <div className="p-5">
        <div className="pb-5">
          <div className="relative w-full mb-5">
            <Link to="/kinoteatrlar/selectedpark">
              <img
                onClick={() => setPlace("ParkBulvar")}
                className="w-full "
                src="parkbulvatr_resized.jpg"
                alt=""
              />
              <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]">
                Park Bulvar
              </h3>
            </Link>
          </div>
          <span className="flex items-center m-5 gap-3">
            <FontAwesomeIcon
              className="text-2xl text-[#B8B8B8]"
              icon={faLocationDot}
            />
            <h3 className="text-[18px] text-[#393838]">
              Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə
            </h3>
          </span>
        </div>
        <div>
          <div className="relative w-full mb-5">
            <Link to="/kinoteatrlar/selectedpark">
              <img
                onClick={() => setPlace("MetroPark")}
                className="w-full "
                src="Metro_resized.jpg"
                alt=""
              />
              <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]">
                Metro Park
              </h3>
            </Link>
          </div>
          <span className="flex items-center m-5 gap-3">
            <FontAwesomeIcon
              className="text-2xl text-[#B8B8B8]"
              icon={faLocationDot}
            />
            <h3 className="text-[18px] text-[#393838]">
              Təbriz küç., 44, Metro Park AVM, 6-cı mərtəbə
            </h3>
          </span>
        </div>
        <div>
          <div className="relative w-full mb-5">
            <Link to="/kinoteatrlar/selectedpark">
              <img
                onClick={() => setPlace("FlameTowers")}
                className="w-full "
                src="Flame_resized.jpg"
                alt=""
              />
              <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]">
                Flame Towers
              </h3>
            </Link>
          </div>
          <span className="flex items-center m-5 gap-3">
            <FontAwesomeIcon
              className="text-2xl text-[#B8B8B8]"
              icon={faLocationDot}
            />
            <h3 className="text-[18px] text-[#393838]">
              M. Hüseyn küç., 1 A, Alov qüllələri kompleksi
            </h3>
          </span>
        </div>
        <div>
          <div className="relative w-full mb-5">
            <Link to="/kinoteatrlar/selectedpark">
              <img
                onClick={() => setPlace("Zagulba")}
                className="w-full "
                src="Zaqulba_resized.jpg"
                alt=""
              />
              <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]">
                Zaqulba
              </h3>
            </Link>
          </div>
          <span className="flex items-center m-5 gap-3">
            <FontAwesomeIcon
              className="text-2xl text-[#B8B8B8]"
              icon={faLocationDot}
            />
            <h3 className="text-[18px] text-[#393838]">
              Buzovna qəsəbəsi, "Park Zağulba" ticarət mərkəzi
            </h3>
          </span>
        </div>
        <div>
          <div className="relative w-full mb-5">
            <Link to="/kinoteatrlar/selectedpark">
              <img
                onClick={() => setPlace("Sahdag")}
                className="w-full "
                src="dlkfldk_resized.png"
                alt=""
              />
              <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]">
                Sahdag
              </h3>
            </Link>
          </div>
          <span className="flex items-center m-5 gap-3">
            <FontAwesomeIcon
              className="text-2xl text-[#B8B8B8]"
              icon={faLocationDot}
            />
            <h3 className="text-[18px] text-[#393838]">
              Qusar r., Laza k., Şahdağ Turistik Kompleksi
            </h3>
          </span>
        </div>
        <div>
          <div className="relative w-full mb-5">
            <Link to="/kinoteatrlar/selectedpark">
              <img
                onClick={() => setPlace("AygunMall")}
                className="w-full "
                src="78ef969e-e06e-42eb-8d9c-7a272eeb5313_resized.jpg"
                alt=""
              />
              <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]">
                Aygun Mall
              </h3>
            </Link>
          </div>
          <span className="flex items-center m-5 gap-3">
            <FontAwesomeIcon
              className="text-2xl text-[#B8B8B8]"
              icon={faLocationDot}
            />
            <h3 className="text-[18px] text-[#393838]">
              Sabunçu r., Sakit Qocayev 29, Aygun Mall, 3-cü mərtəbə
            </h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Kinoteatrlar;
