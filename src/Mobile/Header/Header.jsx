import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { HeaderContext } from "../../data/context";

function Header() {
  const { navbar, setNavbar } = useContext(HeaderContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 344);

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsMobile(window.innerWidth <= 344);
    }

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="relative flex justify-between bg-[#292929] w-full py-3 items-center font-Helvetica">
      <div className="items-center px-3">
        <Link onClick={() => setNavbar(false)} to="/">
          <img
            className={isMobile ? "w-[50px] h-[50px] mx-3" : ""}
            src={isMobile ? "./../public/logo.png" : "./../public/pc-logo.svg"}
            alt=""
          />
        </Link>
      </div>
      <div className="flex justify-end items-center mx-4 gap-4">
        <div className="text-white">
          <Link to="/bilet/step1">
            <button className="bg-[#CC1A07] text-[16px] px-5 py-3 rounded-[30px] ">
              Bilet al
            </button>
          </Link>
        </div>
        <div className="text-white">
          <Hamburger
            size={40}
            direction="left"
            toggled={navbar}
            toggle={toggleNavbar}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
