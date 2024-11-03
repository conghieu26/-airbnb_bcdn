import React from "react";
import airConditionerImg from "../../../../assets/image/air-conditioner.png";
import floating from "../../../../assets/image/floating.png";
import iron from "../../../../assets/image/iron.png";
import kitchen from "../../../../assets/image/kitchen.png";
import parkingArea from "../../../../assets/image/parking-area.png";
import television from "../../../../assets/image/television.png";
import washingMachine from "../../../../assets/image/washing-machine.png";
import wiFi from "../../../../assets/image/wi-fi.png";

function Utilities({
  mayGiat,
  banLa,
  tivi,
  dieuHoa,
  wifi,
  bep,
  doXe,
  hoBoi,
  banUi,
}) {
  return (
    <div className="p-4 border-b">
      <h2 className="font-bold">Tiện ích</h2>
      <div className="grid grid-cols-3 gap-8 mt-6">
        {dieuHoa && (
          <div className="flex items-center">
            <img src={airConditionerImg} className="w-10 h-10 mr-2" alt="" />
            <span>Điều hòa nhiệt độ</span>
          </div>
        )}

        {banUi && (
          <div className="flex items-center">
            <img src={iron} className="w-10 h-10 mr-2" alt="" />
            <span>Bàn ủi</span>
          </div>
        )}

        {doXe && (
          <div className="flex items-center">
            <img src={parkingArea} className="w-10 h-10 mr-2" alt="" />
            <span>Chỗ để xe</span>
          </div>
        )}

        {mayGiat && (
          <div className="flex items-center">
            <img src={washingMachine} className="w-10 h-10 mr-2" alt="" />
            <span>Máy giặt</span>
          </div>
        )}

        {hoBoi && (
          <div className="flex items-center">
            <img src={floating} className="w-10 h-10 mr-2" alt="" />
            <span>Hồ bơi</span>
          </div>
        )}

        {bep && (
          <div className="flex items-center">
            <img src={kitchen} className="w-10 h-10 mr-2" alt="" />
            <span>Bếp</span>
          </div>
        )}

        {banLa && (
          <div className="flex items-center">
            <img src={iron} className="w-10 h-10 mr-2" alt="" />
            <span>Bàn là</span>
          </div>
        )}

        {wifi && (
          <div className="flex items-center">
            <img src={wiFi} className="w-10 h-10 mr-2" alt="" />
            <span>Wifi</span>
          </div>
        )}

        {tivi && (
          <div className="flex items-center">
            <img src={television} className="w-10 h-10 mr-2" alt="" />
            <span>TV</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Utilities;
