import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuSchool, LuUniversity } from "react-icons/lu";
import { MdCameraOutdoor, MdCastForEducation } from "react-icons/md";

const Rankings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full px-4 lg:px-12">
      {/* Title Section */}
      <div className="text-center my-8">
        <h2 className="font-bold text-2xl lg:text-3xl">
          <span className="text-sky-500 font-medium">Rankings</span> & Laurels
        </h2>
        <div className="flex items-center justify-center">
          <p className="mt-4 text-justify lg:max-w-5xl text-gray-600 lg:text-xl md:text-base">
            Churachandpur College, regarded as one of the best colleges in
            India, is bestowed with prestigious awards and honors for its
            remarkable contribution to higher education. These awards highlight
            our mission of transforming young minds into skilled professionals.
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full py-12 bg-gray-100 flex items-center rounded-xl justify-center relative">
        <Slider className="w-full lg:max-w-7xl" {...settings}>
          {/* Slide 1 */}
          <div className="flex flex-col items-start justify-center px-2">
            <div className=" md:w-[300px] flex flex-col gap-5 lg:w-[300px] lg:h-[260px] h-[300px] md:h-[200px] bg-white p-4 shadow-lg rounded-lg text-start">
              <div className="flex items-center gap-3">
                <LuUniversity className="w-12 h-12" />
                <div className="w-52 bg-yellow-400 h-[3px]"></div>
              </div>
              <h3 className=" text-gray-800 text-sm md:text-sm lg:text-lg font-semibold mb-2">
                No.1 Best Emerging University
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Ranking by Times Engineering -2021
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex justify-center px-2">
          <div className=" md:w-[300px] flex flex-col gap-5 lg:w-[300px] lg:h-[260px] h-[300px] md:h-[200px] bg-white p-4 shadow-lg rounded-lg text-start">
              <div className="flex items-center gap-3">
                <LuSchool className="w-12 h-12" />
                <div className="w-52 bg-yellow-400 h-[3px]"></div>
              </div>
              <div>
              <h3 className=" text-gray-800 text-sm md:text-sm lg:text-lg font-semibold mb-2">
              2nd Emerging engineering institute for Placements and Research Capability
              </h3>
              <p className="text-gray-600 text-xs font-normal md:text-base">
                Ranking by Times Engineering -2021
              </p>
              </div>
              
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex justify-center px-2">
          <div className=" md:w-[300px] flex flex-col gap-5 lg:w-[300px] lg:h-[260px] h-[300px] md:h-[200px] bg-white p-4 shadow-lg rounded-lg text-start">
              <div className="flex items-center gap-3">
                <MdCameraOutdoor className="w-12 h-12" />
                <div className="w-52 bg-yellow-400 h-[3px]"></div>
              </div>
              <h3 className=" text-gray-800 text-sm md:text-sm lg:text-lg font-semibold mb-2">
                Most Popular BA Mass Communication
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Design by the Time Group Editors
              </p>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="flex justify-center px-2">
          <div className=" md:w-[300px] flex flex-col gap-5 lg:w-[300px] lg:h-[260px] h-[300px] md:h-[200px] bg-white p-4 shadow-lg rounded-lg text-start">
              <div className="flex items-center gap-3">
                <MdCastForEducation className="w-12 h-12" />
                <div className="w-52 bg-yellow-400 h-[3px]"></div>
              </div>
              <h3 className=" text-gray-800 text-sm md:text-sm lg:text-lg font-semibold mb-2">
               6th School of Management; Top Private B-School in Under University Program Category
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
              IIRF 2023 RANKING (North Zone)
              </p>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="flex justify-center px-2">
          <div className=" md:w-[300px] flex flex-col gap-5 lg:w-[300px] lg:h-[260px] h-[300px] md:h-[200px] bg-white p-4 shadow-lg rounded-lg text-start">
              <div className="flex items-center gap-3">
                <LuUniversity className="w-12 h-12" />
                <div className="w-52 bg-yellow-400 h-[3px]"></div>
              </div>
              <div>
              <h3 className=" text-gray-800 text-sm md:text-sm lg:text-lg font-semibold mb-2">
                ISO Certification Compliant
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                
							 (QMS) Standard – ISO 9001:2015
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                
							 (QMS) Standard – ISO 9001:2015
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                
							 (QMS) Standard – ISO 9001:2015
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                
							 (QMS) Standard – ISO 9001:2015
              </p>
              </div>
              
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Rankings;
