import React from "react";

function HomeFoot() {
  return (
    <div className="flex gap-16 px-5 py-16">
      <div className="text-center">
        <img
          src="https://parkcinema.az/addons/shared_addons/themes/new/img/bottom-links/super-gun.png"
          alt=""
        />
        <h1 className="mt-5 font-Helvetica text-[16px] hover:underline w-[100px]">Super gün</h1>
      </div>
      <div className="text-center">
        <img
          src="https://parkcinema.az/addons/shared_addons/themes/new/img/bottom-links/imax-telebeler-ucun.png"
          alt=""
        />
        <h1 className="mt-5 font-Helvetica text-[16px] hover:underline w-[130px]">IMAX tələbələr üçün</h1>
      </div>
    </div>
  );
}

export default HomeFoot;
