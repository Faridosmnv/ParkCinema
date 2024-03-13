import React from "react";
import { Link } from "react-router-dom";

function Reklam() {
  return (
    <div className="w-[288px]">
      <div className="w-full bg-black relative">
        <img src="/order.png" alt="" />
        <div className="absolute top-2 left-2 w-full text-left p-3 text-[18px]">
          <h1 className="text-[#FF0000]">Biletlərin sifarişi</h1>
          <h2 className="text-[#f4f4f4]">
            <span className="text-[#999999]">+994 12</span>598 74 14
          </h2>
          <h3 className="text-[#f4f4f4]">
            119 <span className="text-[#999999]">( ödənişli )</span>
          </h3>
        </div>
      </div>
      <div className="text-left w-full relative mt-5 bg-white">
        <img className="h-[140px]" src="/order.png" alt="" />
        <div className="absolute top-1 left-2 w-full flex flex-col gap-3 p-3 text-[17px]">
          <h1 className="font-Helvetica text-black">
            Bonus kartının balansını yoxla
          </h1>
          <input
            className="outline-none bg-[#EFEFEF] h-[30px] text-[15px] px-3 py-1 w-[230px]"
            placeholder="Kartin Nömrəsi"
            type="text"
          />
          <button className="hover:bg-[#ffffff] hover:text-[#ff0000] mb-2 px-1 py-1 border w-[100px] rounded-xl bg-[#FF0000] text-[15px] text-[#ffffff] font-semibold font-Helvetica">
            BILET AL
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 my-5">
        <Link to="https://umico.az/?utm_source=google&utm_medium=cpc&utm_content=Umico_ru&utm_term=umico&utm_campaign=Brand_Umico&gclid=CjwKCAjw__ihBhADEiwAXEazJr6nk8nVAJGVSjtdh55uK3y7JrXK6XWzLuzAbyXKl6AL-JAQR4iEJhoCD_8QAvD_BwE">
          <img src="/umico.png" alt="" />
        </Link>
        <Link to='https://wolt.com/ru/discovery'>
          <img src="/woltH.png" alt="" />
        </Link>
        <img src="/mms.png" alt="" />
      </div>
    </div>
  );
}

export default Reklam;
