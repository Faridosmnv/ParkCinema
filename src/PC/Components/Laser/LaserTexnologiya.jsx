import React from "react";
import Reklam from "../Home/Reklam";
import HomeFoot from "../Home/HomeFoot";

function LaserTexnologiya() {
 
  return (
    <div className="w-full bg-black pt-5 text-[#f4f4f4]">
      <div className=" flex justify-between">
        <div className="p-5 w-[750px]">
          <img
            src="https://parkcinema.az/addons/shared_addons/themes/new/img/laser-az.png"
            alt=""
          />
          <p className="text-[13px] py-4">
            2017-ilin iyul ayında Park Cinema kinoteatrlar şəbəkəsi Azərbaycanda
            ilk dəfə yeni nəsil lazer proyektorlu zal təqdim etdi. Dünyaca
            məşhur bu innovativ texnologiya kino sevərləri Park Bulvar ticarət
            və əyləncə mərkəzində gözləyir.
          </p>
          <p className="text-[13px] py-4">
            Lazer zalı 199 yer üçün nəzərdə tutulub və Azərbaycanda ilk, və
            hələki tək, lazer zalı hesab olunur. Sözügedən zalda yerləşdirilmiş
            yeni nəsil proyektor film izləyiciləri üçün daha aydın və rəngli
            görüntü yaradır.
          </p>
          <p className="text-[13px] py-4 pb-3">
            Adi proyektordan fərqli olaraq, yeni nəsil lazerli proyektor
            dolğunluq yaradır və kontrastlığı artırır, beləcə izləyiciyə böyük
            ekranda maksimal dərəcədə daha aydın görüntü izləməyə imkan yaradır.
            Proyektorun kontrastlığı artırması filmin görüntüsünə qərq olmağa
            imkan yaradır, eyni zamanda çox parlaq və çox tünd rəngləri və hamar
            rəng keçidlərini əks etdirir.
          </p>
          <p className="text-[13px] py-4 pb-3">
            Həmçinin onu da qeyd etmək lazımdır ki, lazerli proyektorla film
            izləryən zaman görüntünün işıldaması halı baş vermir. İşığın ekranda
            bərabar şəkildə paylanılması nəticəsində, insan gözü əks olunmuş
            görüntünü bütün bir vəhdət olaraq qavrayır.
          </p>
          <p className="text-[13px] py-4 ">
            Proyektorun əsas üstünlükləri:
            <ul className="list-disc p-5">
              <li>Görüntünün yüksək səviyyədə detallaşdırılması,</li>
              <li>Yüksək kontrastlıq səviyyəsi,</li>
              <li>Görüntünün bir vəhdət olaraq qavranılması,</li>
              <li>Rənglərin yüksək keyfiyyətdə ötürülməsi.</li>
            </ul>
          </p>
          <p className="text-[13px] py-4 ">
            Park Cinema-nın lazer zalında filmi ilk sən izlə, fərqi hiss et və
            təsssüratını sosial şəbəkələrdə paylaş. Sevimli ziyarətçilırimizin
            rəyləri bizim üçün çox önəmlidir.
          </p>
         
          <HomeFoot />
        </div>
        <Reklam />
      </div>
    </div>
  );
}

export default LaserTexnologiya;
