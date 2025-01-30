import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { TbHandFinger } from "react-icons/tb";

const PrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} bg-sky-600 lg:-mt-4 -ml-1 hover:bg-sky-700 text-red-600 rounded-full flex items-center justify-center`}
    onClick={onClick}
  >
    <FcPrevious className="hidden lg:block w-8 h-8" />
  </div>
);

const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} bg-red-500 lg:-mt-4 mr-1 hover:bg-sky-600 text-red-600 rounded-full flex items-center justify-center`}
    onClick={onClick}
  >
    <FcNext className="w-8 h-8 hidden lg:block" />
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  // arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ImageGallery = () => {
  return (
    <div className="w-full bg-white mt-6 px-3 lg:px-20">
      {/* <h2 className="text-center text-4xl font-semibold text-gray-800 p-12">
        Image Gallery
      </h2> */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-10">
        {/* Video */}
        <div className="flex flex-col w-full lg:w-3/6 justify-center items-center">
          <div>
            <h2 className="font-semibold text-gray-800 text-3xl py-6">Video</h2>
          </div>

          <ReactPlayer
            url="https://www.youtube.com/watch?v=lxesJr2-ajs"
            controls
            width="100%"
            height="250px"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="font-bold text-3xl md:text-2xl py-6 lg:text-3xl text-center">
            <span className="text-sky-500 font-medium ">Image</span> Gallery
          </h2>
          {/* <div className="relative lg:hidden">
            <h2 className="text-white font-semibold z-10 top-32 left-44 absolute text-md lg:hidden">
              Swipe
              <TbHandFinger className="animate-marquee w-12 h-12" />
            </h2>
          </div> */}
          <Slider className="" {...settings}>
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S250524104939.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S221222114644.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S20102215289.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S250524104939.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S201022142041.jpg"
              className="hover:opacity-80 w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S20102215812.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S06092210408.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S05082211914.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S270122125058.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S270122125010.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S24042113335.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
            <img
              src="https://www.churachandpurcollege.edu.in/g_file/S270122122758.jpg"
              className="hover:opacity-80 object-cover w-[100%] h-[250px]"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
