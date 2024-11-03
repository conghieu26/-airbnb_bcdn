import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./comments/comments";
import Description from "./description/index";
import Payment from "./payment/index";
import Titles from "./titles/index";
import Utilities from "./utilities/index";

export function RoomDetails() {
  const [room, setRoom] = useState(null);
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(
          `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${roomId}`,
          {
            headers: {
              TokenCybersoft:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg ",
            },
          },
        );
        setRoom(response.data.content);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    if (roomId) {
      fetchRoomDetails();
    }
  }, [roomId]);

  if (!room) return <p>Loading...</p>; // Display loading message while data is being fetched

  return (
    <div className="p-4 bg-white max-w-screen-xl mx-auto">
      {/* Image on top in full width */}
      <div className="w-[90%] mx-auto mb-6">
        <Titles name={room.tenPhong} />
        <img
          src={room.hinhAnh}
          alt={room.tenPhong}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex justify-center p-4">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between">
            <div className="w-2/3">
              <Description
                tenPhong={room.tenPhong}
                khach={room.khach}
                phongNgu={room.phongNgu}
                giuong={room.giuong}
                phongTam={room.phongTam}
                moTa={room.moTa}
              />

              <Utilities
                mayGiat={room.mayGiat}
                banLa={room.banLa}
                tivi={room.tivi}
                dieuHoa={room.dieuHoa}
                wifi={room.wifi}
                bep={room.bep}
                doXe={room.doXe}
                hoBoi={room.hoBoi}
                banUi={room.banUi}
              />
              <Comments MaPhong={roomId} />
            </div>
            <div className="w-1/3">
              <Payment />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
