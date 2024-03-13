import React, { useState } from 'react'
import AksiyalarMain from './AksiyalarMain';
import { Link } from 'react-router-dom';

function Supergun() {
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
        <h2 className='text-black font-bold text-[28px] px-5 py-[15px] '>SUPER GÜN!</h2>
        <p className='text-[#292929] px-5 text-[22px]'>Bu tarif MetroPark, Park Bulvar, Flame Towers, Aygün Mall və Zaqulba Mallda yerləşən Park Cinema kinoteatrlarıda keçərlidir.</p>
        <p className='text-[#292929] px-5 text-[22px]'>Bu tarif qeyri iş günlərinə şamil olunmur.<br />Qeyd: bu qiymətlər bəzi filmlərə aid olmaya bilər.</p>
        <div className='p-5'>
          <ul className='text-[#292929] px-5 text-[22px]  m-5 list-disc'>
            <li>2D – 4 AZN</li>
            <li>3D – 4 AZN</li>
            <li>AZE/TÜRK 2D – 4 AZN</li>
          </ul>
          <ul className='text-[#292929] px-5 text-[22px] m-5 list-disc'>
            <li>AZE/TÜRK “LASER” 2D – 4 AZN</li>
            <li>AZE/TÜRK “DOLBY” 2D –4 AZN</li>
          </ul>
          <ul className='text-[#292929] px-5 text-[22px] m-5 list-disc'>
            <li>“LASER” 2D – 4 AZN</li>
            <li>“LASER” 3D – 4 AZN</li>
          </ul>
          <ul className='text-[#292929] px-5 text-[22px] m-5 list-disc'>
            <li>“DOLBY” 2D – 4 AZN</li>
            <li>“DOLBY” 3D – 4 AZN</li>
          </ul>
        </div>
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

export default Supergun