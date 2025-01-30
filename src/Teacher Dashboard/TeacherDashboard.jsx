import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TeacherDashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold">Good Morning Ms. Teena</h1>
        <p className="mt-2">Have a Good day at work</p>
        <p className="text-yellow-300 mt-1">Notice: There is a staff meeting at 9AM today. Don't forget to attend!</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <FaUserCircle className="text-6xl text-gray-400" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Henriques Morgan</h2>
              <p>Classes: IA - VB</p>
              <p>Subject: Physics</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FiEdit className="mr-2" /> Edit Profile
          </button>
        </div>

        {/* Syllabus Progress */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Syllabus Progress</h2>
          <div className="flex items-center">
            <div className="w-1/2">
              <p className="text-green-600">Completed: 95%</p>
              <p className="text-red-600">Pending: 5%</p>
            </div>
            <div className="w-1/2">
              {/* Progress Circle Placeholder */}
              <div className="relative w-16 h-16 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-green-500 stroke-current"
                    strokeWidth="3.8"
                    fill="none"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 1 1 0 31.831
                       a 15.9155 15.9155 0 1 1 0 -31.831"
                  />
                  <path
                    className="text-red-500 stroke-current"
                    strokeWidth="3.8"
                    fill="none"
                    strokeDasharray="5, 100"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 1 1 0 31.831
                       a 15.9155 15.9155 0 1 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Schedules</h2>
          <Calendar
            onChange={setDate}
            value={date}
            className="w-full"
          />
          <p className="text-gray-600 mt-4">Selected Date: {date.toDateString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Today's Class */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Class</h2>
          <div className="space-y-4">
            <div className="bg-red-100 p-4 rounded-lg flex items-center justify-between">
              <p>09:00 - 09:45</p>
              <p>Class V, B</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg flex items-center justify-between">
              <p>11:30 - 12:15</p>
              <p>Class IV, C</p>
            </div>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Attendance</h2>
          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded mr-2">M</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded mr-2">T</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded mr-2">W</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded mr-2">T</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded mr-2">F</span>
            <span className="bg-gray-400 text-white px-3 py-1 rounded mr-2">S</span>
            <span className="bg-gray-400 text-white px-3 py-1 rounded">S</span>
          </div>
          <p>No. of total working days: 28 Days</p>
          <p>Present: 25</p>
          <p>Absent: 2</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
