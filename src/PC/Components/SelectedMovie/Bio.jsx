import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HeaderContext } from "../../../data/context";
import Info from "./Info";
import OtherFilms from "../Kinoteatr/OtherFilms";
import { nanoid } from "nanoid";
function Bio() {
  const { name, json } = useContext(HeaderContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/${json}`).then((res) => setData(res.data));
  }, []);
  console.log(name,json);
  return (
    <div className="font-Helvetica flex justify-between">
      {data
        .filter((item) => item.title == name)
        ?.map((it) => {
          return (
            <div key={nanoid()}>
              <p className="p-10 text-[13px] w-[750px]">{it.info}</p>
              <iframe
                width="750"
                height="500"
                src={`https://www.youtube.com/embed/${it.link}`}
                title="Сезон охоты: Суперкоманда — Русский трейлер (2024)"
                frameBorder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h1 className="py-10 text-[26px] text-center">Daha Çox</h1>
              <OtherFilms/>
            </div>
          );
        })}
      <Info />
    </div>
  );
}

export default Bio;
