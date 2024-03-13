import React, { useState } from 'react'
import AksiyalarMain from './AksiyalarMain';
import { Link } from 'react-router-dom';

function Adgunu() {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleClick = (index) => {
    if (selectedDiv === index) {
      setSelectedDiv(null);
    } else {
      setSelectedDiv(index);
    }
  };
  return (
    <div className='font-Helvetica'>
      <div className='bg-[#F4F4F4]'>
        <Link to='/aksiyalar'><h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]'>Aksiyalar</h5></Link>
        <h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]'>Aksiyalar</h5>
        <h2 className='text-black font-bold text-[28px] px-5 py-[15px] '>AD GÜNÜN MÜBARƏK, ƏZİZ DOST!</h2>
        <p className='text-[#292929] px-5 text-[22px]'>AD GÜNÜN MÜBARƏK,  ƏZİZ DOST!  Bu  günü bizimlə keçirməyə nə deyirsən? Kinoteatrımız adından sənə 1 bilet hədiyyəmizdir, şəxsiyyət vəsiqəsi ilə yaxınlaşıb istədiyin filialdan biletini götürə bilərsən. Sənə arzu edirik ki, neçə gözəl illərə bizimlə birlikdə addımlayasan Hörmətlə, Park Cinema kollektivi!</p>
        <div className='flex justify-center p-5'>
          <img src="./../public/adgunu.jpg" alt="" />
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

export default Adgunu