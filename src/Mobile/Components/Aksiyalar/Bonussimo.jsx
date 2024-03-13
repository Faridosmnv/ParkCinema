import React, { useState } from 'react'
import AksiyalarMain from './AksiyalarMain';
import { Link } from 'react-router-dom';

function Bonussimo() {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleClick = (index) => {
    if (selectedDiv === index) {
      setSelectedDiv(null);
    } else {
      setSelectedDiv(index);
    }
  };
  return (
    <div>
      <div className='bg-[#F4F4F4] font-Helvetica'>
        <Link to='/aksiyalar'><h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]'>Aksiyalar</h5></Link>
        <h2 className='text-black font-bold text-[28px] px-5 py-[15px] '>Bonussimo</h2>
        <div className='flex justify-center p-5'>
          <img src="./../public/bonus-az.png" alt="" />
        </div>
        <p className='text-[#292929] px-5 py-6 text-[22px]'>Bizim bonus kartlarımızdan Park Cinema kinoteatrlar şəbəkəsinin hər ikinci tamaşaçısı istifadə edir, bu səbəbdən biz kartların istifadə imkanlarını genişləndirmək qərarına gəldik!</p>
        <p className='text-[#292929] px-5 pb-8 text-[22px]'>Yığılmış bonuslar kassadan bilet əldə etmək üçün istifadə oluna bilər. Xatırladaq ki, Silver bonus kartına alınmış bilet qiymətinin 7.5%, Qızıl kartla - 10%, Platinum kartla - 12.5% yığılır.</p>
      </div>
      <div className='bg-[#292929] pt-5'>
        <div className='m-5 bg-[#D8D8D8] text-[#393838] text-[18px] flex justify-evenly items-center cursor-pointer'>
          <div onClick={() => handleClick(0)}
            className={`w-1/3 text-center py-3 text-[20px] font-bold ${selectedDiv === 0 ? 'bg-[#C21604] text-white' : ''}`}>Daimi</div>
          <div onClick={() => handleClick(1)}
            className={`w-1/3 text-center py-3 text-[20px] font-bold ${selectedDiv === 1 ? 'bg-[#C21604] text-white' : ''}`}>Müvəqqəti</div>
          <div onClick={() => handleClick(2)}
            className={`w-1/3 text-center py-3 text-[20px] font-bold ${selectedDiv === 2 ? 'bg-[#C21604] text-white' : ''}`}>.</div>
        </div>
        <div className='p-5 text-[#f4f4f4]'>
          {!selectedDiv ? <AksiyalarMain /> : 'Məlumat Yoxdur'}
        </div>
      </div>
    </div>
  )
}

export default Bonussimo