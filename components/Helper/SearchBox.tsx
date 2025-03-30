import React from "react";
import { FaMap } from "react-icons/fa";
import { FaCalendarWeek } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lx:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
      {/* 1st Search Input  */}
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div className="">
            <p className="text-lg font-medium mb-[0.2rem]">
                Location
            </p>
            <input type="text" name="" placeholder="Where are you going?" id="" className="outline-none border-none placeholder:text-gray-800"/>
        </div>
      </div>
      {/* 2nd Search Input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600"></FaCalendarWeek>
        <div className="">
            <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
            <input type="date" name="" id="" className="outline-none border-none" />
        </div>
      </div>
      {/* 3rd Search Box */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600"></FaCalendarWeek>
        <div className="">
            <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
            <input type="date" name="" id="" className="outline-none border-none" />
        </div>
      </div>
      {/* 4 search input  */}
      <div className="flex items-center space-x-6">
        <FaUser className="w-6 h-6 text-blue-600"></FaUser>
        <div className="">
            <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
            <p className="text-base font-normal">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
