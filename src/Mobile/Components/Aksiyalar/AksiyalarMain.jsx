import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function AksiyalarMain() {
    const topRef = useRef(null);

    const scrollToTop = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='p-5 font-Helvetica'>
            <div className="relative w-full mb-5">
                <Link onClick={scrollToTop} to='/aksiyalar/adgunu'>
                    <div className="relative">
                        <img  className="w-full" src="./../public/cake.jpeg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className="absolute left-5 bottom-3 font-bold text-[20px] text-white">AD GÜNÜN MÜBARƏK,  ƏZİZ DOST!</h3>
                    </div>
                </Link>
            </div>

            <div className='relative w-full mb-5'>
                <Link onClick={scrollToTop} to='/aksiyalar/imax'>
                    <img className='w-full ' src="./../public/8azn.jpeg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className='absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]'>IMAX 8 AZN</h3>
                    </div>
                </Link>
            </div>
            <div className='relative w-full mb-5'>
                <Link onClick={scrollToTop} to='/aksiyalar/supergun'>
                    <img className='w-full ' src="./../public/supergun.jpeg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className='absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]'>SUPER GÜN!</h3>
                    </div>
                </Link>
            </div>
            <div className='relative w-full mb-5'>
                <Link onClick={scrollToTop} to='/aksiyalar/xowbext'>
                    <img className='w-full ' src="./../public/xowbext.jpeg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className='absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]'>Xoşbəxt saatlar. Hər gün ENDİRİM!</h3>
                    </div>
                </Link>
            </div>
            <div className='relative w-full mb-5'>
                <Link onClick={scrollToTop} to='/aksiyalar/aile'>
                    <img className='w-full ' src="./../public/aile.jpeg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className='absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]'>Ailə tarifi</h3>
                    </div>
                </Link>
            </div>
            <div className='relative w-full mb-5'>
                <Link onClick={scrollToTop} to='/aksiyalar/telebe'>
                    <img className='w-full ' src="./../public/televe.jpeg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className='absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]'>Tələbə Tarifi</h3>
                    </div>
                </Link>
            </div>
            <div className='relative w-full mb-5'>
                <Link onClick={scrollToTop} to='/aksiyalar/bonussimo'>
                    <img className='w-full ' src="./../public/bonus.jpeg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                        <h3 className='absolute left-5 bottom-3 font-bold text-[20px] text-[#FFFFFF]'>Bonussimo</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AksiyalarMain