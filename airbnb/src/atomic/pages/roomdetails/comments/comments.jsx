import axios from "axios";
import React, { useEffect, useState } from "react";

function Comments({ MaPhong }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const apiUrl = `https://airbnbnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-phong/${MaPhong}`;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg";

    axios
      .get(apiUrl, {
        headers: {
          tokenCybersoft: token,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data.content)) {
          setComments(response.data.content);
        } else {
          console.error(
            "API response.content is not an array:",
            response.data.content,
          );
          setComments([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setComments([]);
      });
  }, [MaPhong]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={comment.avatar}
              alt={`Avatar of ${comment.tenNguoiBinhLuan}`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-bold">{comment.tenNguoiBinhLuan}</div>
              <div className="text-sm text-gray-500">
                {comment.ngayBinhLuan}
              </div>
              <div className="mt-1">{comment.noiDung}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <img
          src="https://placehold.co/50x50?text=Avatar&bg=cccccc"
          alt="Avatar of commenter"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          className="flex-1 border rounded p-2"
          rows="3"
          placeholder="Add a comment"
        ></textarea>
      </div>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add Comment
      </button>
    </div>
  );
}

export default Comments;
