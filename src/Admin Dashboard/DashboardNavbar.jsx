import React, { useState } from 'react';
import { FaCalendarAlt, FaGlobeAmericas, FaMoon, FaBell, FaChartBar, FaPlus } from 'react-icons/fa';
import { FiSearch, FiUser } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardNavbar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [academicYear, setAcademicYear] = useState(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Function to handle academic year selection
  const handleYearChange = (date) => {
    const startYear = date.getFullYear();
    const endYear = startYear + 1;
    setAcademicYear(`${startYear} / ${endYear}`);
  };

  return (
    <div className="flex sticky top-0 items-center justify-between p-4 bg-white shadow-md z-10">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-md px-4 py-2">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-48"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        
        {/* <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
          <FaCalendarAlt className="text-gray-600 mr-2" />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            className="bg-transparent outline-none cursor-pointer"
          />
        </div> */}

        {/* Academic Year Picker */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
          <FaCalendarAlt className="text-gray-600 mr-2" />
          <DatePicker
            selected={academicYear ? new Date(`${academicYear.split(' / ')[0]}-01-01`) : null}
            onChange={handleYearChange}
            showYearPicker
            dateFormat="yyyy"
            className="bg-transparent outline-none cursor-pointer"
            placeholderText="Select Academic Year"
          />
          <span className="ml-2 text-gray-700">
            {academicYear ? `Academic Year: ${academicYear}` : "Academic Year: 2025 / 2026"}
          </span>
        </div>

        {/* Icons */}
        <div className="relative">
          <button
            className="border text-gray-700 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus />
            <span>Add New</span>
          </button>
          {showAddModal && (
            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md p-4">
              <h4 className="text-lg font-semibold mb-4">Add New</h4>
              <button
                className="w-full bg-gray-100 px-4 py-2 mb-2 rounded-md text-left hover:bg-gray-200"
              >
                Students
              </button>
              <button
                className="w-full bg-gray-100 px-4 py-2 mb-2 rounded-md text-left hover:bg-gray-200"
              >
                Teachers
              </button>
              <button
                className="w-full bg-gray-100 px-4 py-2 rounded-md text-left hover:bg-gray-200"
              >
                Staff
              </button>
              <button
                className="mt-4 text-blue-500 hover:underline"
                onClick={() => setShowAddModal(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
        {/* <FaGlobeAmericas className="text-gray-600 cursor-pointer" /> */}
        <FaMoon className="text-gray-600 cursor-pointer" />

        {/* Notification Icon */}
        <div className="relative">
          <FaBell
            className="text-gray-600 cursor-pointer"
            onClick={() => setShowNotificationModal(!showNotificationModal)}
          />
          {showNotificationModal && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4">
              <h4 className="text-lg font-semibold mb-2">Notifications</h4>
              <p>No new notifications.</p>
              <button
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => setShowNotificationModal(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>

        <FaChartBar className="text-gray-600 cursor-pointer" />

        {/* Profile Image */}
        <div className="relative">
          <div
            className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden cursor-pointer"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <img
              src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>

        {/* Add Button */}
        
      </div>
    </div>
  );
};

export default DashboardNavbar;
