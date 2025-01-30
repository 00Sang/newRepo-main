import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaCoins,
  FaGraduationCap,
  FaBook,
  FaBuilding,
  FaLink,
  FaUserTie,
  FaBell,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  // Sample events for the calendar
  const [events] = useState([
    {
      title: "New Semester Begins",
      start: new Date(2025, 0, 15),
      end: new Date(2025, 0, 15),
    },
    {
      title: "Placement Drive",
      start: new Date(2025, 1, 10),
      end: new Date(2025, 1, 10),
    },
    {
      title: "Cultural Fest",
      start: new Date(2025, 2, 25),
      end: new Date(2025, 2, 25),
    },
  ]);

  // Configure the calendar to use moment.js for date localization
  const localizer = momentLocalizer(moment);

  return (
    <main className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-white p-4 mb-8 flex items-center justify-between rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
        <Link
          to="/add-student"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          + Add Student
        </Link>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<FaGraduationCap />}
          title="Total Students"
          value="5000"
          color="bg-green-500"
        />
        <StatCard
          icon={<FaChalkboardTeacher />}
          title="Total Staff"
          value="43"
          color="bg-blue-500"
        />
        <StatCard
          icon={<FaUserTie />}
          title="Teaching Staff"
          value="33"
          color="bg-pink-500"
        />
        <StatCard
          icon={<FaPerson />}
          title="Non-Teaching Staff"
          value="10"
          color="bg-red-500"
        />
        <StatCard icon={<FaCoins />} title="Earnings" value="₹50,000" color="bg-yellow-500" />
        <StatCard
          icon={<FaBook />}
          title="Library Books"
          value="12,500"
          color="bg-purple-500"
        />
      </div>

      {/* Quick Links Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Student Management", "Staff Management", "Library", "Finance", "Events", "Settings"].map(
            (link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase().replace(" ", "-")}`}
                className="bg-gray-200 p-4 rounded-md text-center font-semibold text-gray-700 hover:bg-blue-100"
              >
                {link}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">Event Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          className="bg-gray-50 rounded-md"
        />
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
        <ul className="list-disc ml-4 text-gray-700">
          {events.map((event, index) => (
            <li key={index} className="mb-2">
              {event.title} -{" "}
              {moment(event.start).format("MMMM Do, YYYY")}
            </li>
          ))}
        </ul>
      </div>

      {/* News & Announcements Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">News & Announcements</h2>
        <ul className="list-disc ml-4 text-gray-700">
          {[
            "Semester starts on January 15th",
            "Placement Drive on February 10th",
            "Cultural Fest on March 25th",
          ].map((news, index) => (
            <li key={index} className="mb-2">
              {news}
            </li>
          ))}
        </ul>
      </div>

      {/* Leave Requests Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Leave Requests</h2>
        <ul className="text-gray-700">
          {[
            { name: "John Doe", reason: "Medical Leave", date: "Jan 9, 2025" },
            { name: "Jane Smith", reason: "Family Emergency", date: "Feb 15, 2025" },
            { name: "Michael Brown", reason: "Vacation", date: "Mar 2, 2025" },
          ].map((request, index) => (
            <li key={index} className="mb-4 border-b pb-2">
              <p className="font-semibold">{request.name}</p>
              <p className="text-sm text-gray-600">
                Reason: {request.reason} | Date: {request.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

// Reusable Stat Card Component
const StatCard = ({ icon, title, value, color }) => {
  return (
    <div className="bg-white w-full flex items-center gap-4 p-4 shadow-md border rounded-lg">
      <div className={`${color} w-12 h-12 flex items-center justify-center rounded-full text-white`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-600">{title}</h3>
        <p className="text-gray-800 mt-1 text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default AdminDashBoard;
