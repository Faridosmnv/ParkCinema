import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Kinoteatr from './Kinoteatr';
import ImaxCedvel from './ImaxCedvel';
import Texnologiya from './Texnologiya'
function Imax() {
    const [selectedHeader, setSelectedHeader] = useState(0);

    const handleHeaderClick = (index) => {
        setSelectedHeader(index);
    };

    const headers = ['Cədvəl', 'Texnologiya', 'Kinoteatr'];
    return (
        <div className='bg-[#F4F4F4] font-Helvetica'>
            <h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] py-[12px]'>IMAX</h5>
            <h2 className='text-black font-bold text-[28px] px-5'>IMAX</h2>
            <img className='p-5' src="imax-az.jpg" alt="" />
            <span className='flex items-center m-5 gap-3'>
                <FontAwesomeIcon className='text-2xl text-[#B8B8B8]' icon={faLocationDot} />
                <h3 className='text-[18px] text-[#393838]'>M. Hüseyn küç., 1 A, Alov qüllələri kompleksi</h3>
            </span>
            <span className='flex items-center m-5 gap-3'>
                <FontAwesomeIcon className='text-2xl text-[#B8B8B8]' icon={faClock} />
                <h3 className='text-[18px] text-[#393838]'>(+994 12) 598 74 14, 119</h3>
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
            {selectedHeader === 0 ? <ImaxCedvel /> :
                selectedHeader === 1 ? <Texnologiya /> : <Kinoteatr />}

        </div>
    )
}

export default Imax