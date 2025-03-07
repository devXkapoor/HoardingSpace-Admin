import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex items-center justify-between  h-[100px] px-[34px] w-full  shadow-sm">
          <img className=" w-[320px]" src={logo} alt="logo" />
          <div className="flex gap-[16px] pr-6">
            <div
              className="text-[26px] text-[#626060] font-semibold pr-8 cursor-pointer hover:text-[#bfb63e]"
              onClick={() => navigate("/allitem")}
            >
              Hoarding
            </div>
            <div
              className="text-[26px] text-[#626060] font-semibold pr-8 cursor-pointer hover:text-[#bfb63e]"
              onClick={() => navigate("/addItem")}
            >
              Create
            </div>
            <div
              className="text-[26px] text-[#626060] font-semibold pr-8 cursor-pointer hover:text-[#bfb63e]"
              onClick={() => navigate("/orders")}
            >
              Orders
            </div>
            <div
              className="text-[26px] text-[#626060] font-semibold pr-8 cursor-pointer hover:text-[#bfb63e]"
              onClick={() => navigate("/messages")}
            >
              Messages
            </div>

            {/* <div
              className="text-[26px] text-[#626060] font-semibold pr-8 cursor-pointer"
              onClick={() => navigate("/allitem")}
            >
              Back
            </div> */}
          </div>
        </div>
        <div className=" bg-[#F9F1E7] h-[40px] w-full" />
      </div>
    </>
  );
};

export default Header;
