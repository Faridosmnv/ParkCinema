import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import LazeeR from './LazeeR';
import LazerCedvel from './LazerCedvel';

function Imax() {
    const [selectedHeader, setSelectedHeader] = useState(0);

    const handleHeaderClick = (index) => {
        setSelectedHeader(index);
    };

    const headers = ['Cədvəl', 'LaseR'];
    return (
        <div className='bg-[#F4F4F4] font-Helvetica'>
            <h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] py-[12px]'>LaseR</h5>
            <h2 className='text-black font-bold text-[28px] px-5'>LaseR</h2>
            <img className='p-5' src="lazer.jpg" alt="" />
            <span className='flex items-center m-5 gap-3'>
                <FontAwesomeIcon className='text-2xl text-[#B8B8B8]' icon={faLocationDot} />
                <h3 className='text-[18px] text-[#393838]'>Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</h3>
            </span>
            <span className='flex items-center m-5 gap-3'>
                <FontAwesomeIcon className='text-2xl text-[#B8B8B8]' icon={faClock} />
                <h3 className='text-[18px] text-[#393838]'>+994 12 598 74 14, 119</h3>
            </span>
            <span className='flex items-center m-5 gap-3'>
                <FontAwesomeIcon className='text-2xl text-[#B8B8B8]' icon={faPhoneVolume} />
                <h3 className='text-[18px] text-[#393838]'>10:00 - 01:00</h3>
            </span>
            <div className='flex justify-around items-center h-[100px]   '>
                {headers.map((item, index) => (
                    <h2
                        className=''
                        key={index}
                        style={{
                            color: index === selectedHeader ? '#CD1C0A' : '#B8B8B8',
                            fontSize: index === selectedHeader ? '26px' : '20px',
                            transition: 'font-size 0.6s ease-in-out',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleHeaderClick(index)}
                    >
                        {item}
                    </h2>
                ))}
            </div>
            {selectedHeader === 0 ? <LazerCedvel /> : <LazeeR />}

        </div>
    )
}

export default Imax