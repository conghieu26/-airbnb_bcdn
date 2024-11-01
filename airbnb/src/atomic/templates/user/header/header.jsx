import React, { useState } from "react";
import { Link } from "react-router-dom";
import Airbnb from "../../../../assets/icon/airbnb/index";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-[85%] m-auto text-white">
      <header className="bg-black py-6 shadow-md relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center flex-grow">
            <Airbnb color={"white"} />
            <span className="ml-4 text-3xl font-extrabold">airbnb</span>{" "}
          </div>

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
            <div className="relative inline-block text-left">
              <button
                className="text-3xl hover:text-red-500 transition duration-300"
                type="button"
              >
                🌐
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="text-3xl hover:text-red-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
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

            {showMenu && (
              <div className="absolute top-20 right-0 w-48 bg-gray-800 text-white py-3 rounded-md shadow-lg z-50">
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition duration-300 rounded-md"
                >
                  Đăng ký
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition duration-300 rounded-md"
                >
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
