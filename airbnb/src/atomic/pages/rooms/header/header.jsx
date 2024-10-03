import React from "react";
import Airbnb from "../../../../assets/icon/airbnb/index";
import Bars from "../../../../assets/icon/bars/index";
import Search from "../../../../assets/icon/search/index";
import UserCircle from "../../../../assets/icon/userCircle/index";

function Header() {
  return (
    <header>
      <div className=" w-[95%] m-auto flex items-center justify-between p-4 ">
        <div className="flex items-center">
          <Airbnb color="black" />
          <span className="ml-4 text-3xl font-extrabold">airbnb</span>{" "}
        </div>
        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
          <span className="px-2">Khu vực bản đồ đã chọn</span>
          <span className="px-2">|</span>
          <span className="px-2">16 thg 4 – 14 thg 5</span>
          <span className="px-2">|</span>
          <span className="px-2">Thêm khách</span>
          <button className="bg-red-500 text-white rounded-full p-2 ml-2">
            <Search />
          </button>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Trở thành chủ nhà</span>

          <div className="flex items-center border rounded-full p-2">
            <Bars />
            <UserCircle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
