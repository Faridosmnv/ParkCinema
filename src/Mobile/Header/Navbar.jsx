import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='vh flex items-center inset-0 w-full bg-[#292929] overflow-y-auto font-Helvetica'>
            <ul className='text-[#fff] h-full text-[28px] cursor-pointer flex flex-col gap-10 p-12 '>
                <li className='hover:text-[#555]'><Link onClick={()=>setNavbar(false)} to="/kinoteatrlar">Kinoteatrlar</Link></li>
                <li className='hover:text-[#555]'><Link onClick={()=>setNavbar(false)} to="/imax">IMAX</Link></li>
                <li className='hover:text-[#555]'><Link onClick={()=>setNavbar(false)} to="/laser">LaseR</Link></li>
                <li className='hover:text-[#555]'><Link onClick={()=>setNavbar(false)} to="/vip">VIP</Link></li>
                <li className='hover:text-[#555]'><Link onClick={()=>setNavbar(false)} to="/aksiyalar">Aksiyalar</Link></li>
                <li className='hover:text-[#555]'><Link onClick={()=>setNavbar(false)} to="/about">Haqqımızda</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
