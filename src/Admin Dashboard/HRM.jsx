import React, { useState } from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { PiBriefcaseLight } from "react-icons/pi";
import { TbMoneybag, TbUserExclamation, TbUsersGroup } from "react-icons/tb";
import { Link } from "react-router-dom";

const HRM = () => {
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle dropdown menus
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div>
      <h1 className="text-gray-400 font-semibold text-xs border-b">HRM</h1>
      <div className="flex flex-col gap-5 p-3">
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <TbUsersGroup className="w-4 h-4" />
          Staffs
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <HiOutlineBuildingOffice className="w-4 h-4" />
          Departments
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <TbUserExclamation className="w-4 h-4" />
          Designation
        </Link>
        <div>
          <button
            onClick={() => toggleMenu("attendance")}
            className="flex items-center text-sm gap-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
          >
            <CiCalendarDate className="w-4 h-4" />
            Attendance
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
                className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
              >
                {/* <FaGraduationCap className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Student Attendance
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Teacher Attendance
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Staff Attendance
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleMenu("leaves")}
            className="flex items-center text-sm gap-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
          >
            <AiOutlineSolution className="w-4 h-4" />
            Leaves
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
                className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
              >
                {/* <FaGraduationCap className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                All Guardians
              </Link>
              <Link
                to="teacher"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
              >
                {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                <span className="text-2xl font-semibold text-gray-200">•</span>
                Guardians List
              </Link>
            </div>
          )}
        </div>

        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <PiBriefcaseLight className="w-4 h-4" />
          Holidays
        </Link>
        <Link
          to="staff"
          className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
        >
          {/* <FaGraduationCap className="w-5 h-5" /> */}
          <TbMoneybag className="w-4 h-4" />
          Payroll
        </Link>
      </div>
    </div>
  );
};

export default HRM;
