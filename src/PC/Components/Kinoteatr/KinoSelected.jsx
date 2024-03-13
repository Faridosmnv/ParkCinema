import React, { useState, useEffect, useContext } from "react";
import FooterPC from "../Footer/FooterPC";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import HeadKino from "./HeadKino";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { HeaderContext } from "../../../data/context";
import Kinocedvel from "./Kinocedvel";

const Modal = ({ isOpen, onClose }) => {
  const { location } = useContext(HeaderContext);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
      <div className="position w-full h-full flex items-center justify-center z-50">
        <div className="relative bg-[#F9F9F9] p-4">
          <iframe
            src={location}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="eager"
          ></iframe>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 tranafor border-[2px] border-[#F9F9F9] rounded-full text-[14px] p-2 text-[#F9F9F9] bg-[#222222] font-bold"
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </div>
    </>
  );
};

const KinoSelected = () => {
  const { place, info , isisModalOpen, setIsisModalOpen } = useContext(HeaderContext);


  useEffect(() => {
  }, [isisModalOpen]);

  const historyTo = useNavigate();

  useEffect(() => {
    if (!place) {
      historyTo("/kinoteatrlar");
    }
  }, []);
  return (
    <div
      className={`overflow-x-hidden bg-black relative ${isisModalOpen ? "" : ""}`}
    >
      <HeadKino />
      <div className="containercss">
        <h1 className="text-[60px] font-normal py-5 pl-5 text-[#f4f4f4]">
          Park Cinema: {place}
        </h1>
        <h2 className="text-[14px] italic text-[#737373] pl-5">
          {info}
          <button
            onClick={() => {
              setIsisModalOpen(true);
            }}
            className="text-[#f4f4f4] hover:underline pl-2"
          >
            Xəritədə bax
          </button>
        </h2>
      </div>
        <Kinocedvel/>
      <FooterPC />

      <Modal isOpen={isisModalOpen} onClose={() => setIsisModalOpen(false)} />
    </div>
  );
};

export default KinoSelected;
