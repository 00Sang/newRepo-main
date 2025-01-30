import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaBookOpen,
  FaMoneyBillWave,
  FaUserTie,
  FaClipboardList,
  FaUsers,
  FaRegCalendarAlt,
  FaChartLine,
  FaReceipt,
  FaFileAlt,
  FaChartPie,
  FaRegCalendarTimes,
} from "react-icons/fa";
import {
  MdOutlineAssignment,
  MdCardMembership,
  MdAccountBalance,
} from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"; // Chevron icons
import logo from "../assets/ccpurlogo.png";
// import { LuLayoutDashboard } from "react-icons/lu";
import { PiBriefcaseLight, PiGraduationCapLight } from "react-icons/pi";
import {
  TbMoneybag,
  TbUserBolt,
  TbUserExclamation,
  TbUsersGroup,
  TbUserShield,
} from "react-icons/tb";
import { IoPeople, IoPeopleOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineSolution } from "react-icons/ai";
import Academics from "./Academics";
import DashboardNavbar from "./DashboardNavbar";
import Peoples from "./Peoples";
import HRM from "./HRM";
import FinanceAndAccounts from "./FinanceAndAccounts";
import Reports from "./Reports";
import UserManagement from "./UserManagement";
import Support from "./Support";

const AdminPanel = () => {
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle dropdown menus
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="flex h-screen bg-white overflow-y-scroll">
      {/* Sidebar */}
      <div className="w-64 text-white border-r flex flex-col">
        <div className="p-6 text-start flex border-b items-center">
          <img src={logo} alt="" className="w-16 h-16" />
          <h2 className="text-md font-semibold text-gray-600">
            Churachandpur College
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 overflow-y-scroll">
          <h1 className="text-gray-400 font-semibold text-xs border-b">MAIN</h1>
          {/* Dashboard */}
          <div className="my-4">
            <button
              onClick={() => toggleMenu("dashboard")}
              className="flex items-center text-sm gap-3 p-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
            >
              <LuLayoutDashboard className="w-4 h-4" />
              Dashboard
              {openMenu === "dashboard" ? (
                <FiChevronDown className="ml-auto" />
              ) : (
                <FiChevronRight className="ml-auto" />
              )}
            </button>
            {openMenu === "dashboard" && (
              <div className="ml-8 space-y-2">
                <Link
                  to="admin-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaGraduationCap className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Admin Dashboard
                </Link>
                <Link
                  to="teacher"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
                >
                  {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Teacher Dashboard
                </Link>
                <Link
                  to="student"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <MdOutlineAssignment className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Student Dashboard
                </Link>
                <Link
                  to="parent"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Parent Dashboard
                </Link>
              </div>
            )}
          </div>

          {/* Peoples Dropdown */}
          <Peoples />

          {/* Parents */}
          <div className="">
            {/* <h1 className="text-gray-400 font-semibold text-xs border-b">PEOPLES</h1> */}
            <button
              onClick={() => toggleMenu("parents")}
              className="flex items-center gap-3 text-sm p-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
            >
              <TbUserBolt className="w-4 h-4" />
              Parents
              {openMenu === "parents" ? (
                <FiChevronDown className="ml-auto" />
              ) : (
                <FiChevronRight className="ml-auto" />
              )}
            </button>
            {openMenu === "parents" && (
              <div className="ml-8 space-y-2">
                <Link
                  to="dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaGraduationCap className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  All Parents
                </Link>
                <Link
                  to="teacher"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
                >
                  {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Parents List
                </Link>
              </div>
            )}
          </div>

          {/* Guardians */}
          <div className="">
            {/* <h1 className="text-gray-400 font-semibold text-xs border-b">PEOPLES</h1> */}
            <button
              onClick={() => toggleMenu("guardians")}
              className="flex items-center text-sm gap-3 p-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
            >
              <TbUserShield className="w-4 h-4" />
              Guardians
              {openMenu === "guardians" ? (
                <FiChevronDown className="ml-auto" />
              ) : (
                <FiChevronRight className="ml-auto" />
              )}
            </button>
            {openMenu === "guardians" && (
              <div className="ml-8 space-y-2">
                <Link
                  to="dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaGraduationCap className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  All Guardians
                </Link>
                <Link
                  to="teacher"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
                >
                  {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Guardians List
                </Link>
              </div>
            )}
          </div>

          {/* Teachers */}
          <div className="">
            {/* <h1 className="text-gray-400 font-semibold text-xs border-b">PEOPLES</h1> */}
            <button
              onClick={() => toggleMenu("teachers")}
              className="flex items-center gap-3 text-sm p-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
            >
              <IoPeopleOutline className="w-4 h-4" />
              Faculty
              {openMenu === "teachers" ? (
                <FiChevronDown className="ml-auto" />
              ) : (
                <FiChevronRight className="ml-auto" />
              )}
            </button>
            {openMenu === "teachers" && (
              <div className="ml-8">
                <Link
                  to="dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaGraduationCap className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  All Faculty List
                </Link>
                <Link
                  to="teacher"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
                >
                  {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Teaching Staff List
                </Link>
                <Link
                  to="student-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <MdOutlineAssignment className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Non-Teaching Staff List
                </Link>
                <Link
                  to="parent-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Teaching Staff Details
                </Link>
                <Link
                  to="parent-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Non-Teaching Staff Details
                </Link>
              </div>
            )}
          </div>

          {/* HRM */}
          <div className="my-4">
            <HRM />
            <Academics />
            <FinanceAndAccounts />
            <Reports />
            <UserManagement />
            <Support />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <DashboardNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
