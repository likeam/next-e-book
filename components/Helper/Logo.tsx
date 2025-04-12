import React from "react";
import { BiBook } from "react-icons/bi";

const Logo = () => {
  return (
    <div className=" flex items-center space-x-2">
      <div className=" w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-col">
        <BiBook className=" w-6 h-6 text-white" />
      </div>
      <h1 className=" text-xl hidden sm:block md:text-2xl font-semibold text-gray-700">
        E-<span className=" text-orange-600">Book</span>
      </h1>
    </div>
  );
};

export default Logo;
