import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Titles({ name }) {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">{name}</h1>
      <div className="flex justify-between">
        <div className="flex items-center mt-2 ">
          <button className="ml-1 text-gray-500 mr-2">
            <FontAwesomeIcon
              icon={faShare}
              className="text-red-500 size-5 pb-0.5"
            />
            <span className="ml-2 text-xl">Chia sẻ</span>
          </button>
          <button className="ml-1 text-sm text-gray-500 pb-0.5">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 size-5 pt-2.5"
            />
            <span className="ml-2 text-xl">Lưu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Titles;
