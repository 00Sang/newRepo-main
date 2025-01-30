import React, { useState } from "react";
import logo from "../assets/ccpurlogo.png";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const Navbar2 = () => {
  const [departmentsDrop, setDepartmentsDrop] = useState(false);
  const [libraryDrop, setLibraryDrop] = useState(false);
  const [accredationDrop, setAccredationDrop] = useState(false);
  const [downloadsDrop, setDownloadsDrop] = useState(false);
  const [facilitiesDrop, setFacilitiesDrop] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const handleDepartmentsDrop = () => setDepartmentsDrop(!departmentsDrop);
  const handleLibraryDrop = () => setLibraryDrop(!libraryDrop);
  const handleAccredationDrop = () => setAccredationDrop(!accredationDrop);
  const handleDownloadsDrop = () => setDownloadsDrop(!downloadsDrop);
  const handleFacilitiesDrop = () => setFacilitiesDrop(!facilitiesDrop);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="z-50 w-full lg:px-20 bg-gray-200 text-gray-900">
      <div className="w-full md:px-6 md:gap-8 lg:px-20 lg:gap-20 flex items-center justify-center py-4">

        {/* Hamburger Menu Button */}
        {/* <button
          className="md:hidden text-2xl focus:outline-none hover:text-teal-500 transition"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button> */}

        {/* Navigation Links */}
        {/* <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:static absolute top-28 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent flex-col md:flex-row items-center text-center lg:gap-12 px-6 py-4 md:py-0 md:px-0 text-sm`}
        > */}
          {/* About Dropdown */}
          
        </div>
      </div>
    // </div>
  );
};

export default Navbar2;
