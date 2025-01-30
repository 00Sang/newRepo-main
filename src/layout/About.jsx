import React from "react";
import ccpur from "../assets/ccpur.jpg";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 lg:mt-12 md:mt-0 text-center md:text-left p-6 bg-white">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
          About Us
        </h1>
        <p className="text-gray-600 w-[350px] lg:w-[580px] text-sm lg:text-lg  lg:mt-4">
          Churachandpur, a small town located in the Southern part of Manipur, 
          was in darkness until 30th November, 1964, when a group of scholars 
          and intellectuals led by Pu (L) Pauneikhai Vaiphei and (L) Dr. Pu TS 
          Gangte met to discuss the establishment of a college. The governing body 
          was formed, and the college was inaugurated on 30th November, 1964.
        </p>
        <div className="mt-6">
          <button className="text-gray-800 border-2 border-gray-400 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:mt-12 lg:w-[650px] w-96 md:mt-0 md:w-[550px] flex items-center justify-center p-6">
        <img
          src={ccpur}
          alt="College Campus"
          className="w-full rounded-lg shadow-md transform transition-all hover:scale-102"
        />
      </div>
    </section>
  );
};

export default About;
