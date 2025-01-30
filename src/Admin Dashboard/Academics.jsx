import React, { useState } from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GiRoundKnob } from "react-icons/gi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { LiaNewspaperSolid } from "react-icons/lia";
import { LuSection } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { TbBookUpload, TbBrandDaysCounter, TbHexagonalPrismPlus, TbMoneybag, TbSchoolBell, TbUserExclamation, TbUsersGroup } from "react-icons/tb";
import { VscTable } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Academics = () => {

     const [openMenu, setOpenMenu] = useState(null);
    
      // Toggle dropdown menus
      const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
      };

  return (
    <div className="my-4">
      <h1 className="text-gray-400 font-semibold text-xs border-b">ACADEMICS</h1>
      <div className="flex flex-col gap-5 p-3">
      <div>
          <button
            onClick={() => toggleMenu("attendance")}
            className="flex items-center text-sm gap-3 text-gray-800 rounded-md hover:text-blue-400 w-full text-left"
          >
            <TbSchoolBell className="w-4 h-4" />
            Classes
            {openMenu === "attendance" ? (
              <FiChevronDown className="ml-auto" />
            ) : (
              <FiChevronRight className="ml-auto" />
            )}
          </button>
          {openMenu === "attendance" && (
            <div className="ml-7 py-2">
              <Link
                to="dashboard"
                className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-400"
              >
                {/* <FaGraduationCap className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                All Classes
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Schedule
              </Link>
            </div>
          )}
        </div>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <SiGoogleclassroom className="w-4 h-4" />
          Classroom
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <TbBrandDaysCounter className="w-4 h-4" />
          Class Routine
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <LuSection className="w-4 h-4" />
          Section
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <IoBookOutline className="w-4 h-4" />
          Subject
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <TbBookUpload className="w-4 h-4" />
          Syllabus
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <VscTable className="w-4 h-4" />
          Time Table
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <LiaNewspaperSolid className="w-4 h-4" />
          Home Work
        </Link>
        

        <div>
          <button
            onClick={() => toggleMenu("leaves")}
            className="flex items-center text-sm gap-3 text-gray-800 rounded-md hover:text-blue-400 w-full text-left"
          >
            <TbHexagonalPrismPlus className="w-4 h-4" />
            Examinations
            {openMenu === "leaves" ? (
              <FiChevronDown className="ml-auto" />
            ) : (
              <FiChevronRight className="ml-auto" />
            )}
          </button>
          {openMenu === "leaves" && (
            <div className="ml-7 py-2">
              <Link
                to="dashboard"
                className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-400"
              >
                {/* <FaGraduationCap className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Exam
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Exam Schedule
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Grade
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Exam Attendance
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Exam Results
              </Link>
            </div>
          )}
        </div>

        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-400"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <GiRoundKnob className="w-4 h-4" />
          Reasons
        </Link>
      </div>
    </div>
  );
};

export default Academics;
