import React from "react";
import Reklam from "../Home/Reklam";
import HomeFoot from "../Home/HomeFoot";
import Carousel from "./Carousel";

function AzalClubVİPHall() {
  return (
    <div className="w-full bg-black pt-5 text-[#f4f4f4]">
      <div className=" flex justify-between">
        <div className="p-5 w-[750px]">
          <p>
            <p>
              <p>
                <h3 className="text-[30px] py-4">
                  {" "}
                  Park Cinema VIP Lounge - əsl kinomanlar üçün.
                </h3>
                <p className="text-[13px] py-4">
                  VIP Lounge – filmləri həm 2D, həm də 3D formatlarında izləmə
                  imkanı verən ən müasir film proyeksiyalı və audio appartlı
                  (üçyollu səs DOLBY Surround 5.1)gümüşü ekranla təchiz olunmuş
                  standart zalın ən yeni premium versiyasıdır. Yüksək
                  keyfiyyətdə tərtib olunmuş dizayn, xüsusi divar və tavan
                  örtükləri kənar səsləri özünə hopduraraq filmin təmiz
                  səslənməsinə şərait yaradır.
                </p>
                <p className="text-[13px] py-4">
                  VIP Lounge geniş dirsək altlıqları, elektrik nizamlama
                  funksiyası və ayaq altlıqları ilə təchiz olunmuş «Figueras»
                  ispan firmasına məxsus 23 dəri oturacaqdan ibarətdir.
                </p>
                <p className="text-[13px] py-4">
                  Daha rahat şərait üçün hər bir kreslo idarə düyməsi ilə təchiz
                  olunub, bu düymə sayəsində izləyicilər rahat əyləşə bilər və,
                  ən əsası, filmi izlərkən zala içki və yemək sifariş edə bilər.
                </p>
                <p className="text-[13px] py-4">
                  VIP Lounge – kinonu və komfortu sevənlər və yalnız hər şeyin
                  ən yaxşısını əldə etmək istəyənlər üçündür!
                </p>
                <p className="text-[13px] py-4">
                  Sizləri Park Bulvar TM 5-ci mərtəbə ünvanında yerləşən Park
                  Cinema VIP Lounge-da gözləyirik.
                </p>
                <p> </p>
              </p>
            </p>
          </p>
          <div className="app">
            <Carousel />
          </div>
          <HomeFoot />
        </div>
        <Reklam />
      </div>
    </div>
  );
}

export default AzalClubVİPHall;
