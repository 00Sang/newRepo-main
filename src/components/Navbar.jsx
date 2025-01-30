import React, { useState, useEffect } from "react";
import logo2 from "../assets/ccpurlogo2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarTop from "../layout/NavbarTop";

const Navbar = () => {


const navButton = [
  {
    id: 1,
    title: "About Us",
    link: "/about",
  },
  {
    id: 2,
    title: "Programs",
    link: "/programs",
  },
  {
    id: 3,
    title: "Research",
    link: "/about",
  },
  {
    id: 4,
    title: "Placements",
    link: "/about",
  },
  {
    id: 5,
    title: "Campus Life",
    link: "/about",
  },
  {
    id: 6,
    title: "CCpur College News",
    link: "/about",
  },
  {
    id: 7,
    title: "Innovation",
    link: "/about",
  },
]



  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(null);
  const [programDropdown, setProgramDropdown] = useState(false);
  const [researchDropdown, setResearchDropdown] = useState(false);
  const [placementsDropdown, setPlacementsDropdown] = useState(false);
  const [campusLifeDropdown, setCampusLifeDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [innovationDropdown, setInnovationDropdown] = useState(false);
  const [SecondAdmissionDropdown, setSecondAdmissionDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setIsLoggedIn(true); // User is logged in
  //   }

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const aboutDropdownHandler = (id) => {
    setAboutDropdown((prev) => (prev === id ? null : id));
  };
  const ProgramDropdownHandler = () => setProgramDropdown(!programDropdown);
  const ResearchDropdownHandler = () => setResearchDropdown(!researchDropdown);
  const PlacementsDropdownHandler = () =>
    setPlacementsDropdown(!placementsDropdown);
  const CampusLifeDropdownHandler = () =>
    setCampusLifeDropdown(!campusLifeDropdown);
  const NewsDropdownHandler = () => setNewsDropdown(!newsDropdown);
  const InnovationDropdownHandler = () =>
    setInnovationDropdown(!innovationDropdown);
  const SecondAdmissionDropdownHandler = () =>
    setSecondAdmissionDropdown(!SecondAdmissionDropdown);

  const LoginHandler = () => {
    navigate("/login-page");
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login-page"); // Redirect to login page
  };

  return (
    <div
      className={`z-10 fixed w-full transition-all ${
        scrollY > 0 ? "bg-white shadow-md" : "bg-white"
      } text-gray-900 border-b border-gray-300`}
    >
      <div className="w-full flex px-2 lg:px-24 md:px-2 md:flex lg:flex items-center justify-between  shadow-lg border-b">
        <Link className="flex items-center" to="/">
          <img
            className="w-12 h-14 md:w-16 md:h-16 lg:w-72 lg:h-20"
            src={logo2}
            alt="Churachandpur College Logo"
          />
          {/* <div className="flex flex-col items-start text-xs">
            <h2 className="font-semibold  text-md md:text-lg lg:text-xl">
              CHURACHANDPUR <br></br>COLLEGE
            </h2>
            <p className="text-[11px] md:text-sm font-bold lg:text-sm text-gray-800">
              (AUTONOMOUS)
            </p>
            
          </div> */}
        </Link>

        <div className="hidden justify-between md:flex lg:flex items-center md:gap-3 lg:gap-2">
          {/* About Us Dropdown */}
          <div className="relative group">
            {/* Navbar Button */}
            <button className="font-semibold md:pr-4 md:text-sm border-r border-gray-700 bg-white text-gray-700 px-4">
              About Us
            </button>

            {/* Dropdown Container */}
            <div className="absolute top-[53px] left-0 bg-sky-700 shadow-lg text-white px-6 py-4 w-[600px] border-t border-sky-700">
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#legacy"
              >
                Our Legacy - The Times Group
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#advisory-board"
              >
                Industry Advisory Board
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#csr"
              >
                CSR
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#leadership"
              >
                Leadership
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#statutory-bodies"
              >
                Statutory Bodies
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#irco"
              >
                International Relations & Corporate Outreach (IRCO)
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#academic-board"
              >
                Academic Advisory Board
              </Link>
              <Link
                className="hover:underline px-4 py-2 text-sm block"
                to="/about#research"
              >
                Research Chair Professors
              </Link>
            </div>
          </div>

          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="font-semibold border-r md:pr-4 md:text-sm border-gray-700 hover:text-sky-500">
              Programs
            </button>
            <div className="absolute text-sm hidden flex-col top-full left-0 bg-sky-600 w-52 items-center text-white">
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Undergraduate Programs
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about#history"
              >
                Postgraduate Programs
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about#faculty"
              >
                Online Courses
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about#team"
              >
                Special Programs
              </Link>
            </div>
          </div>

          {/* Research Dropdown */}
          <div className="relative group">
            <button className="font-semibold border-r md:pr-4 md:text-sm border-gray-700 hover:text-sky-500">
              Research
            </button>
            <div className="absolute hidden text-sm group-hover:flex flex-col top-full left-0 bg-sky-600 w-52 items-center text-white">
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/marksheet"
              >
                Research Areas
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/marksheet"
              >
                Publications
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/marksheet"
              >
                Collaborations
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/marksheet"
              >
                Funding Opportunities
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/marksheet"
              >
                Research Labs
              </Link>
            </div>
          </div>

          {/* Placements Dropdown */}
          <div className="relative group">
            <button className="font-semibold border-r md:pr-3 md:text-sm border-gray-700 hover:text-sky-500">
              Placements
            </button>
            <div className="absolute hidden text-sm group-hover:flex flex-col top-full left-0 bg-sky-600 w-52 items-center text-white">
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Placement Overview
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Recruiters
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Placement Statistics
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Internship Opportunities
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Career Guidance
              </Link>
            </div>
          </div>

          {/* Campus Life Dropdown */}
          <div className="relative group">
            <button className="font-semibold border-r md:pr-3 md:text-sm border-gray-700 hover:text-sky-500">
              Campus Life
            </button>
            <div className="absolute hidden text-sm group-hover:flex flex-col top-full left-0 bg-sky-600 w-52 items-center text-white">
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Clubs & Societies
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Events & Activities
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Hostel & Dining
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Sports & Fitness
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Campus Tour
              </Link>
            </div>
          </div>

          {/* News Dropdown */}
          <div className="relative group">
            <button className="font-semibold border-r md:pr-3 md:text-sm border-gray-700 hover:text-sky-500">
              Ccpur College News
            </button>
            <div className="absolute hidden text-sm group-hover:flex flex-col top-full left-0 bg-sky-600 w-52 items-center text-white">
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Latest Announcements
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Media Coverage
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Achievements
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Event Highlights
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Newsletter
              </Link>
            </div>
          </div>

          {/* Innovation Center */}
          <div className="relative group">
            <button className="font-semibold md:pr-3 md:text-sm border-gray-700 hover:text-sky-500">
              Innovation Center
            </button>
            <div className="absolute hidden text-sm group-hover:flex flex-col top-full left-0 bg-sky-600 w-52 items-center text-white">
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Overview
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Startup Incubation
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Hackathons
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Research Grants
              </Link>
              <Link
                className="text-left w-full hover:bg-sky-700 px-3 py-2 border-b border-gray-300"
                to="/about"
              >
                Collaborate with Us
              </Link>
            </div>
          </div>

          {/* Apply Now Button */}
          <div>
            <button className="bg-red-600 hover:bg-red-700 px-3 rounded-md py-1.5 font-semibold text-white">
              APPLY NOW
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        
      </div>
    </div>
  );
};

export default Navbar;
