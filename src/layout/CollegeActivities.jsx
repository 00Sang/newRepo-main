import React from "react";
import student3 from "../assets/student3.jpg";
import lib from "../assets/lib.jpg";
import lib2 from "../assets/lib1.jpg";
import { Link } from "react-router-dom";

const CollegeActivities = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center pb-10">
          <span className="text-sky-500 font-medium">Campus Life</span> & Student Engagement
        </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16">
          {/* National Service Scheme Section */}
          <div className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-102">
            <img src={student3} alt="NSS" className="object-cover w-full h-48 rounded-lg mb-4"/>
            <div className="text-gray-800">
              <h2 className="font-semibold text-xl">National Service Scheme</h2>
              <p className="text-sm font-light mt-2 mb-4">
                The National Service Scheme (NSS) was introduced in this college in 1980, with 100 student-volunteers enrolling each year. The motto of NSS is "Not me, but you."
              </p>
              <Link className="text-teal-500 underline text-xs" to="/">read more »</Link>
            </div>
          </div>

          {/* Library Section */}
          <div className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-102">
            <img src={lib} alt="Library" className="object-cover w-full h-48 rounded-lg mb-4"/>
            <div className="text-gray-800">
              <h2 className="font-semibold text-xl">Library</h2>
              <p className="text-sm font-light mt-2 mb-4">
                The College library houses over 8560 books, periodicals, and journals. It is a great source of inspiration and knowledge for both students and faculty.
              </p>
              <Link className="text-teal-500 underline text-xs" to="/">read more »</Link>
            </div>
          </div>

          {/* Student Support Section */}
          <div className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-102">
            <img src={lib2} alt="Student Support" className="object-cover w-full h-48 rounded-lg mb-4"/>
            <div className="text-gray-800">
              <h2 className="font-semibold text-xl">Student Support</h2>
              <p className="text-sm font-light mt-2 mb-4">
                Special coaching classes are organized for students from weaker sections to improve their grasping ability, focusing on subjects like Math, Science, and English.
              </p>
              <Link className="text-teal-500 underline text-xs" to="/">read more »</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeActivities;
