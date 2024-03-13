import React, { useEffect, useState } from 'react';
import AksiyalarMain from './AksiyalarMain';
import { Link } from 'react-router-dom';

function Aksiyalar() {
    const [selectedDiv, setSelectedDiv] = useState(0);

    const handleClick = (index) => {
        if (selectedDiv === index) {
            setSelectedDiv(null);
        } else {
            setSelectedDiv(index);
        }
    };
    return (
        <div className='bg-[#F4F4F4] font-Helvetica'>
            <Link to="/"><h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]'>Aksiyalar</h5></Link>
            <h2 className='text-black font-bold text-[28px] px-5 py-[15px] '>Aksiyalar</h2>
            <div className='m-5 bg-[#D8D8D8] text-[#393838] text-[18px] flex justify-evenly items-center cursor-pointer rounded-2xl'>
                <div onClick={() => handleClick(0)}
                    className={`w-1/3 text-center py-3 text-[20px] font-bold rounded-l-2xl ${selectedDiv === 0 ? 'bg-[#C21604] text-white' : ''}`}>Daimi</div>
                <div onClick={() => handleClick(1)}
                    className={`w-1/3 text-center py-3 text-[20px] font-bold ${selectedDiv === 1 ? 'bg-[#C21604] text-white' : ''}`}>Müvəqqəti</div>
                <div onClick={() => handleClick(2)}
                    className={`w-1/3 text-center py-3 text-[20px] font-bold rounded-r-2xl ${selectedDiv === 2 ? 'bg-[#C21604] text-white' : ''}`}>.</div>
            </div>
            <div className='p-5'>
                {!selectedDiv ? <AksiyalarMain /> : 'Məlumat Yoxdur'}
            </div>
        </div>
    );
}

export default Aksiyalar;
