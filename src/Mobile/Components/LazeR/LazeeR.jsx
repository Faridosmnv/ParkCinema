import React, { useEffect, useState } from 'react'

function LazeeR() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 656);

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsMobile(window.innerWidth <= 656);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  return (
    <div className='bg-[#292929] p-[25px] font-Helvetica'>
      <p className='text-[16px] text-[#F4F4F4] p-2'>2017-ilin iyul ayında Park Cinema kinoteatrlar şəbəkəsi Azərbaycanda ilk dəfə yeni nəsil lazer proyektorlu zal təqdim etdi. Dünyaca məşhur bu innovativ texnologiya kino sevərləri Park Bulvar ticarət və əyləncə mərkəzində gözləyir.</p>
      <p className='text-[16px] text-[#F4F4F4] p-2'>Lazer zalı 199 yer üçün nəzərdə tutulub və Azərbaycanda ilk, və hələki tək, lazer zalı hesab olunur. Sözügedən zalda yerləşdirilmiş yeni nəsil proyektor film izləyiciləri üçün daha aydın və rəngli görüntü yaradır.</p>
      <p className='text-[16px] text-[#F4F4F4] p-2'>Adi proyektordan fərqli olaraq, yeni nəsil lazerli proyektor dolğunluq yaradır və kontrastlığı artırır, beləcə izləyiciyə böyük ekranda maksimal dərəcədə daha aydın görüntü izləməyə imkan yaradır.  Proyektorun kontrastlığı artırması filmin görüntüsünə qərq olmağa imkan yaradır, eyni zamanda çox parlaq və çox tünd rəngləri və hamar rəng keçidlərini əks etdirir.</p>
      <p className='text-[16px] text-[#F4F4F4] p-2 mt-8'>Həmçinin onu da qeyd etmək lazımdır ki, lazerli proyektorla film izləryən zaman görüntünün işıldaması halı baş vermir. İşığın ekranda bərabar şəkildə paylanılması nəticəsində, insan gözü əks olunmuş görüntünü bütün bir vəhdət olaraq qavrayır.</p>
      <div className={isMobile ? "block" : "flex justify-around"}>
        <h1 className='text-[16px] text-[#F4F4F4] p-2'>Proyektorun əsas üstünlükləri:</h1>
        <ul className={isMobile ? 'px-[25px] text-[16px] text-[#F4F4F4] list-disc' : 'text-[16px] text-[#F4F4F4] list-disc'}>
          <li>Görüntünün yüksək səviyyədə detallaşdırılması,</li>
          <li>Yüksək kontrastlıq səviyyəsi,</li>
          <li>Görüntünün bir vəhdət olaraq qavranılması,</li>
          <li>Rənglərin yüksək keyfiyyətdə ötürülməsi.</li>
        </ul>
      </div>
      <p className='text-[16px] text-[#F4F4F4] p-2'>Park Cinema-nın lazer zalında filmi ilk sən izlə, fərqi hiss et və təsssüratını sosial şəbəkələrdə paylaş. Sevimli ziyarətçilırimizin rəyləri bizim üçün çox önəmlidir.</p>
    </div >
  )
}

export default LazeeR