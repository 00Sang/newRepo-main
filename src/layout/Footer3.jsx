import React from "react";
import logo from "../assets/filogo.png";

const Footer3 = () => {
  return (
    <div className="bg-gray-950 py-4 w-full flex flex-col items-center gap-2 justify-center">
      <p className="text-gray-400 text-center text-sm">
        © 2025 Churachandpur College. All Rights Reserved
      </p>
      <div className="flex items-center">
        <p className="text-gray-400 text-center text-xs w-full flex items-center gap-3">
          • Design and crafted by -
        </p>
        <a
            href="https://www.frameimpacts.com/"
            target="_blank"
            className="underline flex items-center gap-1"
          >
            <img src={logo} className="w-4 h-4" />
            <p className="text-sm tracking-widest text-[#17a1c0]">FIT</p>
          </a>
      </div>
    </div>
  );
};

export default Footer3;
