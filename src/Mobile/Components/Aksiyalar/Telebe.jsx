import React, { useState } from 'react'
import AksiyalarMain from './AksiyalarMain';
import { Link } from 'react-router-dom';

function Telebe() {
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
        <h2 className='text-black font-bold text-[28px] px-5 py-[15px] '>Tələbə Tarifi</h2>
        <p className='text-[#292929] px-5 py-5 text-[22px]'>Həftə ərzində şəbəkəmizin bütün kinoteatrlarında tələbə biletini təqdim edən hər tələbəni xüsusi qiymət gözləyəcək!</p>
        <p className='text-[#292929] px-5 py-5 text-[22px]'>QİYMƏTLƏRİN CƏDVƏLİ</p>
        <table className="table-auto border border-black bg-white m-5 text-[#292929]">
          <thead>
            <tr>
              <th className="px-4 py-2">AZƏRBAYCAN VƏ TÜRK FİLMLƏRİ</th>
              <th className="px-4 py-2">STANDARD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">KİNOTEATRLAR</td>
              <td className="px-4 py-2">2D</td>
            </tr>
            <tr>
              <td className="px-4 py-2">DOLBY ATMOS (METROPARK)</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">LASER (PARK BULVAR)</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">ADİ ZALLAR (BÜTÜN KİNOTEATRLARDA</td>
              <td className="px-4 py-2">5</td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto border border-black bg-white m-5">
          <thead>
            <tr>
              <th className="px-4 py-2">XARİCİ FİLMLƏR</th>
              <th className="px-4 py-2">STANDARD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">KİNOTEATRLAR</td>
              <td className="px-4 py-2">2D</td>
              <td className="px-4 py-2">3D</td>
            </tr>
            <tr>
              <td className="px-4 py-2">DOLBY ATMOS (METROPARK)</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">IMAX (FLAME TOWERS)</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">LASER (PARK BULVAR)</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">ADİ ZALLAR (BÜTÜN KİNOTEATRLARDA)</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">5</td>
            </tr>
          </tbody>
        </table>
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

export default Telebe