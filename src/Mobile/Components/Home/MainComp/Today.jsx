import axios from "axios";
import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import "./../../../../App.css";
import { HeaderContext } from "../../../../data/context";
import Cedvel2 from "../Cedvel2";
import { Link } from "react-router-dom";
function Movies() {
  const { selectedHeader, setClickedFilm } = useContext(HeaderContext);

  const [moviesToday, setMoviesToday] = useState([]);
  const [ind, setInd] = useState("movies");

  useEffect(() => {
    if (selectedHeader === 0 || selectedHeader === 2) {
      setInd("movies");
    } else {
      setInd("soon");
    }
    axios
      .get(`http://localhost:3000/movies`)
      .then((res) => setMoviesToday(res.data));
  }, [selectedHeader]);

  return (
    <div>
      {selectedHeader === 2 ? (
        <Cedvel2 />
      ) : (
        <Link to="/selectedmovie">
          <div className="moviesGrid">
            {moviesToday.map((item) => (
              <img
                onClick={() => setClickedFilm(item.title)}
                key={nanoid()}
                className="w-full h-full"
                src={item.poster}
                alt={item.title}
              />
            ))}
          </div>
        </Link>
      )}
    </div>
  );
}

export default Movies;
