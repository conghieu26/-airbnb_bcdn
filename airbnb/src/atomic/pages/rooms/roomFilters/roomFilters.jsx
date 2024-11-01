import React, { useEffect, useState } from "react";

const RoomFilters = ({ rooms, onFilterChange }) => {
  const [typeFilter, setTypeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [bookNowFilter, setBookNowFilter] = useState(false);
  const [bedroomsFilter, setBedroomsFilter] = useState("");
  const [bathroomsFilter, setBathroomsFilter] = useState("");

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  // const handleBookNowFilterChange = (event) => {
  //   setBookNowFilter(event.target.checked);
  // };

  const handleBedroomsFilterChange = (event) => {
    setBedroomsFilter(event.target.value);
  };

  const handleBathroomsFilterChange = (event) => {
    setBathroomsFilter(event.target.value);
  };

  const applyFilters = () => {
    const filteredRooms = rooms.filter((room) => {
      let matches = true;

      if (typeFilter && room.loaiPhong !== typeFilter) {
        matches = false;
      }

      if (priceFilter) {
        const [minPrice, maxPrice] = priceFilter.split("-");
        if (
          room.giaTien < parseInt(minPrice) ||
          room.giaTien > parseInt(maxPrice)
        ) {
          matches = false;
        }
      }

      if (bookNowFilter && !room.datNgay) {
        matches = false;
      }

      if (bedroomsFilter && room.phongNgu !== parseInt(bedroomsFilter)) {
        matches = false;
      }

      if (bathroomsFilter && room.phongTam !== parseInt(bathroomsFilter)) {
        matches = false;
      }

      return matches;
    });

    onFilterChange(filteredRooms);
  };

  // Call applyFilters whenever a filter value changes
  useEffect(() => {
    applyFilters();
  }, [typeFilter, priceFilter, bookNowFilter, bathroomsFilter, bedroomsFilter]);

  return (
    <div className="mb-4 gap-4 flex flex-col md:flex-row md:items-center">
      {/* Loại nơi ở */}
      <div className="md:w-1/4">
        <label htmlFor="loai-noi-o" className="block mb-1">
          Loại nơi ở:
        </label>
        <select
          id="loai-noi-o"
          value={typeFilter}
          onChange={handleTypeFilterChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Tất cả</option>
          <option value="Phòng riêng">Phòng riêng</option>
          <option value="Căn hộ">Căn hộ</option>
        </select>
      </div>

      {/* Giá */}
      <div className="md:w-1/4">
        <label htmlFor="gia" className="block mb-1">
          Giá:
        </label>
        <select
          id="gia"
          value={priceFilter}
          onChange={handlePriceFilterChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Tất cả</option>
          <option value="0-25">$0 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50-100">$50 - $100</option>
        </select>
      </div>

      {/* Phòng ngủ */}
      <div className="md:w-1/4">
        <label htmlFor="phong-ngu" className="block mb-1">
          Phòng ngủ:
        </label>
        <select
          id="phong-ngu"
          value={bedroomsFilter}
          onChange={handleBedroomsFilterChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Tất cả</option>
          <option value="1">1</option>
          <option value="2">2</option>
          {/* ... more options as needed */}
        </select>
      </div>

      {/* Phòng tắm */}
      <div className="md:w-1/4">
        <label htmlFor="phong-tam" className="block mb-1">
          Phòng tắm:
        </label>
        <select
          id="phong-tam"
          value={bathroomsFilter}
          onChange={handleBathroomsFilterChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Tất cả</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* ... more options as needed */}
        </select>
      </div>
    </div>
  );
};

export default RoomFilters;
