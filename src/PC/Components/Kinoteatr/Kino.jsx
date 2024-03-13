import React from "react";
import FooterPC from "../Footer/FooterPC";
import "../../../App.css";
import Mainkino from './Mainkino'
import HeadKino from "./HeadKino";

const Kino = () => (
  <div className="overflow-x-hidden">
    <HeadKino/>
    <Mainkino/>
    <FooterPC />
  </div>
);
export default Kino;
