import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const tabs = [
  "Ccpur College International Stars",
  "Startups",
  "Research Work & Patents",
];

const placementsData = [
  {
    name: "John",
    course: "B.Tech CSE (2019–2023)",
    ctc: "₹ 1.37 Crore",
    company: "Meta",
    image:
      "https://images.pond5.com/university-student-black-man-and-photo-229704036_iconl_nowm.jpeg",
  },
  {
    name: "Jessica",
    course: "B.Tech CSE (2019–2023)",
    ctc: "₹ 53.5 Lacs",
    company: "Adobe",
    image:
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Ranveer",
    course: "B.Tech CSE (2018–2022)",
    ctc: "₹ 53 Lacs",
    company: "Adobe",
    image:
      "https://img.freepik.com/premium-photo/portrait-indian-student-guy-smiling-background-university_409674-1149.jpg",
  },
  {
    name: "Cynthia",
    course: "B.Tech CSE (2019–2023)",
    ctc: "₹ 50 Lacs",
    company: "Layer3",
    image:
      "https://cdn.create.vista.com/api/media/small/663524538/stock-photo-portrait-caucasian-university-student-standing-university-campus",
  },
];

const Placement = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray-100 py-8 px-6">
      {/* <h1 className="text-center text-2xl font-bold mb-6">Placements</h1> */}

      {/* Tabs */}
      <div className="flex lg:justify-center overflow-x-auto gap-2 lg:gap-3 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-semibold ${
              activeTab === index
                ? "bg-red-500 text-white rounded"
                : "bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        
        // pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="max-w-screen-lg mx-auto"
      >
        {placementsData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-full lg:h-52 h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p className="text-gray-500 text-sm">{person.course}</p>
                <p className="text-blue-600 text-xl font-semibold">
                  {person.ctc}
                </p>
                <p className="text-gray-700 text-sm">
                  Placed at {person.company}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Placement;
