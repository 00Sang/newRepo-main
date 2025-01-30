import React from "react";
import { BiNetworkChart } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { MdMoney } from "react-icons/md";
import { RiBarChartBoxLine } from "react-icons/ri";
import { SiChartmogul } from "react-icons/si";
import { TbChartInfographic, TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div className="">
      <h1 className="text-gray-400 font-semibold text-xs border-b">REPORTS</h1>
      <div className="flex flex-col gap-5 p-3 my-2">
      <Link
                  to="dashboard"
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
                >
                  <FaRegCalendarAlt className="w-4 h-4" />
                  Attendance Report
                </Link>
                <Link
                  to="teacher"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500"
                >
                  <TbReportAnalytics className="w-4 h-4" />
                  Class Report
                </Link>
                <Link
                  to="student-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
                >
                  <TbChartInfographic className="w-4 h-4" />
                  Student Report
                </Link>
                <Link
                  to="parent-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
                >
                  <GrLineChart className="w-4 h-4" />
                  Grade Report
                </Link>
                <Link
                  to="parent-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
                >
                  <BiNetworkChart className="w-4 h-4" />
                  Leave Report
                </Link>
                <Link
                  to="parent-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
                >
                  <MdMoney className="w-4 h-4" />
                  Fees Report
                </Link>
      </div>
    </div>
  );
};

export default Reports;
