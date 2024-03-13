import React, { useState } from "react";
import Reklam from "./../Home/Reklam";
import HomeFoot from "./../Home/HomeFoot";

function MainPart() {
  const [selectedHeader, setSelectedHeader] = useState(0);

  const handleClick = (index) => {
    setSelectedHeader(index);
  };

  const places = [
    "ParkCinema",
    "MetroPark",
    "AygunMall",
    "FlameTowers",
    "Zagulba",
    "Sahdag",
  ];

  const placeContents = [
    <div>
      <img
        className="pr-5 py-5 w-full h-[450px]"
        src="https://parkcinema.az/uploads/structures/cinemas/images/parkbulvatr_resized.jpg"
        alt=""
      />
      <p className="text-[14px] py-5">
        Şəbəkənin birinci ən məşhur kinoteatrı dünya kinostudiyaları və
        «Universal Pictures», “20 century Fox”, “Warner Bros.”, “Sony”,
        “Disney”, “Bazeleves”, “Inter Film” və s. kimi distribusiya şirkətlərin
        rəsmi məlumatlarına görə Azərbaycanın ən ziyarət edilən kinoteatrı kimi
        tanınır. Park Bulvar TM-nin 4-cü mərtəbəsində yerləşir, VİP ilə birlikdə
        6 kinozalı, 789 oturacaq yeri, VİP bar ilə birlikdə 3 barı var.
        Kinoteatr Dolby Digital səs sistemi, dünya ekspertləri tərəfindən ən
        yaxşı 3D texnologiyası kimi qəbul edilmiş RealD 3D (Azərbaycanda yeganə)
        və yüksək keyfiyyətli gümüş örtüklü, filmləri daha yaxşı əks etdirən, 3D
        effektinin dərinliyinə təsir edən çökük ekran ilə təchiz olunub.{" "}
      </p>
    </div>,
    <div>
      <img
        className="pr-5 py-5 w-full h-[450px]"
        src="https://parkcinema.az/uploads/structures/cinemas/images/Metro_resized.jpg"
        alt=""
      />
      <p className="text-[14px] py-5">
        Şəbəkənin ən tutumlu, rahat mühitli kinoteatrı Nərimanov metro
        stansiyasının yaxınlığında yerləşir. Ziyarət edilən kinoteatrlardan
        ikincisi məşhur Metro Park TM-nin 6-cı mərtəbəsində yerləşir, 6 zalı,
        1034 oturacağı var. Kinoteatrın üstünlüyü ondan ibarətdir ki, TM-dən
        ayrıca yerləşir, və bunun sayəsində TM-nin səs-küyü qonaqlara mane
        olmur. Kinoteatrda müxtəlif endirim sistemləri tətbiq olunur: Ailə
        tarifi, Uşaq tarifi və hər həftənin çərşənbə axşamı günü 50% endirimlə
        filmlərə baxmağa imkan yaradan Super Gün.
      </p>
    </div>,
    <div>
      <img
        className="pr-5 py-5"
        src="https://parkcinema.az/uploads/structures/cinemas/images/78ef969e-e06e-42eb-8d9c-7a272eeb5313_resized.jpg"
        alt=""
      />
      <p className="text-[14px] py-5">
        Park Cinema Aygun Mall şəhərdə ola ola şəhərin sıxlığından kənar rahat
        film izləyib və vaxt keçirə biləcəyiniz yeganə məkan!
      </p>
    </div>,
    <div>
      <img
        className="pr-5 py-5 w-full h-[450px]"
        src="https://parkcinema.az/uploads/structures/cinemas/images/Flame_resized.jpg"
        alt=""
      />
      <p className="text-[14px] py-5 ">
        Ənənəvi komfort və lüks atmosferi birləşdirən yüksək səviyyəli kinoteatr
        Bakı şəhərinin yeni müasir simvolu olan Flame Towers-də yerləşir. 282
        tamaşaçını yerləşdirən Azərbaycanda ilk IMAX formatlı zal daxil olmaqla,
        kinoteatr 6 zal, 800 oturacaqdan ibarətdir. Standart zallar RealD 3D
        texnologiyası, gümüş örtüklü ekranlar, və çox rahat Couple Seats
        oturacaqları ilə təchiz olunub. IMAX formatı təxəyyülü o dərəcədə
        heyrətləndirir ki, aydın görüntü, böyük ekran, ən yaxşı 3D və güclü
        səsli IMAX Experience-i sınayan tamaşaçılar ən məşhur blokbasterlərə
        məhz bu formatda baxmağa üstünlük verirlər.
      </p>
    </div>,
    <div>
      <img
        className="pr-5 py-5 w-full h-[450px]"
        src="https://parkcinema.az/uploads/structures/cinemas/images/Zaqulba_resized.jpg"
        alt=""
      />
      <p className="text-[14px] py-5 ">
        Unikal yüksək səviyyəli kinoteatr ən populyar bağ zonalarının birində -
        Zagulba Park TM-də yerləşir. 2D və 3D formatlı 4 rahat zal, 576 oturacaq
        yer və zəngin barlı geniş foye Sizə ailəniz və dostlarınızla birgə
        unudulmaz vaxt kəçitməyə imkan verəc. Yay istirahətinin ideal əlavəsi
      </p>
    </div>,
    <div>
      <img
        className="pr-5 py-5 w-full h-[450px]"
        src="https://parkcinema.az/uploads/structures/cinemas/images/dlkfldk_resized.png"
        alt=""
      />
      <p className="text-[14px] py-5 ">
        Sahdag Turizm Mərkəzində yeni filmləri izləməkdən həzz almaq üçün əla
        imkan
      </p>
    </div>,
  ];

  return (
    <div className="w-full bg-black pt-5 text-[#f4f4f4]">
      <div className="containercss flex justify-between">
        <div className="w-[772px] font-Helvetica">
          <h1 className="text-[60px] font-normal py-5">Haqqımızda</h1>
          <h2 className="text-[22px] py-5">
            Park Cinema - 4 meydançadan ibarət ən böyük nüfuzlu kinoteatrlar
            şəbəkəsidir. Ən yüksək texniki tələblərə cavab verən kinoteatrlar
            Park Bulvar, MetroPark, Park Zagulba AVM, Bakının yeni simvolu Flame
            Towers-in yüksək səviyyəli ticarət mərkəzi.
          </h2>
          <p className="text-[14px] py-5">
            Əfsanəvi komfort və zalların keyfiyyətindən savayı, Park Cinema
            Azərbaycanda əzəmətli IMAX formatının yeganə nümayəndəsidir. Şəbəkə
            repertuarına festival filmləri və arthausdan başqa, ən məşhur
            premyeralar daxildir. Hər il Park Cinema şəbəkəsində kinofestivallar
            keçirilir, müntəzəm olaraq qala-premyeralar və press-nümayişlər,
            sadiq tamaşaçılar üçün geniş aksiyalar və filmlərin xeyriyyə
            nümayişi təşkil olunur. Şəbəkə Facebook və İnstagram sosial
            şəbəkələrində öz fəallığı, kontentə və istifadəçilərlə ünsiyyətə
            yaradıcı yanaşma ilə məşhurlaşıb və Azərbaycanın ən müzakirə olunan
            və populyar kinoman qrupu statusunu alıb (Socialbakers*-in
            məlumatına əsasən). Onu da qeyd edək ki, brend Bakının kübar
            həyatının çoxsaylı mühüm hadisələrinin tərəfdaşıdır, bu da Park
            Cinema-nın yüksək statusunun rəmzidir.
          </p>
          <p className="text-[14px] py-5">
            *Socialbakers- sosial şəbəkələrdə ən məşhur hesabat və statistika
            xidmətidir. Park Cinema səhifəsi istifadəçilərin sorğularının 98%-ni
            cavablandırdığına görə sertifikat alıb.
          </p>
          <h3 className="text-[14px] py-2">FLAME CINEMA MMC</h3>
          <h3 className="text-[14px] py-2">
            AZ1060, Bakı ş-ri, Nizami r-nu AZƏR MANAFOV ev.14, m.54
          </h3>
          <h3 className="text-[14px] py-2">
            AZ1006, Bakı ş-ri, Səbail r-nu, M.Hüseyn küçəsi, 1A
          </h3>
          <div className="flex justify-start gap-2 mt-10 font-Helvetica">
            {places.map((item, index) => (
              <div
                className="rounded-lg border-[1px] border-[#FF0000] py-2 px-3 text-[18px] cursor-pointer"
                key={index}
                style={{
                  backgroundColor: index === selectedHeader ? "#FF0000" : "",
                }}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
          {selectedHeader !== null && (
            <div className="mt-4">{placeContents[selectedHeader]}</div>
          )}
        </div>
        <Reklam />
      </div>
      <div className="containercss">
        <HomeFoot />
      </div>
    </div>
  );
}

export default MainPart;
