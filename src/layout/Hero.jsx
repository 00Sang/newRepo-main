import React from "react";
import ccpur from "../assets/ccpur.jpg";

const Hero = () => {
  return (
    <main className="relative w-full h-[380px] lg:w-full lg:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="object-fill h-[380px] lg:w-full lg:h-full"
          src={ccpur}
          alt="Churachandpur College Background"
        />
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {/* Heading */}
        {/* <h1 className="text-3xl mt-16 lg:text-6xl md:text-5xl font-bold leading-tight">
          CHURACHANDPUR AUTONOMOUS COLLEGE
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light">
          NAAC Accredited B+
        </p>
        <p className="mt-2 text-lg md:text-2xl font-light">
          Empowering Future Leaders
        </p> */}

        {/* Optional Call-to-Action Button */}
        {/* Uncomment if needed */}
        {/* <button className="mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium text-lg rounded-lg shadow-lg transition-all duration-300">
          Explore Programs
        </button> */}
      </div>
    </main>
  );
};

export default Hero;
