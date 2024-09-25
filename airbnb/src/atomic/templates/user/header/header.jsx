import React from "react";
import { Link } from "react-router-dom";
import Airbnb from "../../../../assets/icon/airbnb/index";

function Header() {
  return (
    <div className="w-[85%] m-auto text-white">
      <header className="bg-black py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-grow">
            <Airbnb className="w-12 h-12" /> {/* Kích thước logo lớn hơn */}
            <span className="ml-4 text-3xl font-extrabold">airbnb</span>{" "}
            {/* Tăng kích thước chữ */}
          </div>

          {/* Navigation centered */}
          <nav className="flex justify-center space-x-16 text-lg font-semibold">
            <Link
              to="/"
              className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-white hover:after:h-[5px] transition-all duration-300 text-2xl"
            >
              Nơi ở
            </Link>
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300 text-2xl"
            >
              Trải nghiệm
            </Link>
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300 text-2xl"
            >
              Trải nghiệm trực tuyến
            </Link>
          </nav>

          {/* Right section with icons */}
          <div className="flex items-center space-x-10 flex-grow justify-end">
            <Link
              to="/"
              className="hover:underline text-2xl font-semibold hover:text-red-500 transition duration-300 "
            >
              Đón tiếp khách
            </Link>
            <button className="text-2xl hover:text-red-500 transition duration-300">
              🌐
            </button>
            <div className="relative">
              <button className="text-2xl hover:text-red-500 transition duration-300">
                🧳
              </button>
              <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                2
              </span>
            </div>
            <button className="text-2xl hover:text-red-500 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
