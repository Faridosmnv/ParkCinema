import axios from "axios";
import { createContext, useEffect, useState } from "react";

const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [adi, setAdi] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [vip, setVip] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("Hamisi");
  const [selectedFilm, setSelectedFilm] = useState("1");
  const [selectedPlace, setSelectedPlace] = useState("11");
  const [selectedDay, setSelectedDay] = useState("111");
  const [selectedTime, setSelectedTime] = useState("1111");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState("");
  const [clickedFilm, setClickedFilm] = useState("");
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [json, setJson] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isisModalOpen, setIsisModalOpen] = useState(false);
  const [film, setFilm] = useState("1");
  const [kinoteatr, setKinoteatr] = useState("11");
  const [tarix, setTarix] = useState("111");
  const [vaxt, setVaxt] = useState("1111");
  const [ad, setAd] = useState("");
  const [selectedAdiPlaces, setSelectedAdiPlaces] = useState([]);
  const [selectedVipPlaces, setSelectedVipPlaces] = useState([]);
  const [data, setData] = useState([]);
  const [db, setDb] = useState([]);
  const [dab, setDab] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/now").then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => setDb(res.data));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/soon").then((res) => setDab(res.data));
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        dab,
        setDab,
        db,
        setDb,
        data,
        setData,
        ad,
        setAd,
        isisModalOpen,
        setIsisModalOpen,
        selectedVipPlaces,
        setSelectedVipPlaces,
        selectedAdiPlaces,
        setSelectedAdiPlaces,
        vaxt,
        setVaxt,
        tarix,
        setTarix,
        kinoteatr,
        setKinoteatr,
        film,
        setFilm,
        isModalOpen,
        setIsModalOpen,
        json,
        setJson,
        name,
        setName,
        info,
        setInfo,
        location,
        setLocation,
        clickedFilm,
        setClickedFilm,
        place,
        setPlace,
        selectedHeader,
        setSelectedHeader,
        selectedFilter,
        setSelectedFilter,
        selectedDay,
        setSelectedDay,
        selectedFilm,
        setSelectedFilm,
        selectedPlace,
        setSelectedPlace,
        selectedTime,
        setSelectedTime,
        selectedLanguage,
        setSelectedLanguage,
        adi,
        setAdi,
        navbar,
        setNavbar,
        vip,
        setVip,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
export { HeaderContext };
