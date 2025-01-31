import React, { useEffect, useRef, useState } from "react";
import logo2 from "../assets/ccpurlogo2.png";
import logo3 from "../assets/ccpurlogo3.png";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowUp,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaWineGlass,
  FaXingSquare,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const MainNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(null);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);
  const [programDropdown, setProgramDropdown] = useState(false);
  const [researchDropdown, setResearchDropdown] = useState(false);
  const [placementsDropdown, setPlacementsDropdown] = useState(false);
  const [campusLifeDropdown, setCampusLifeDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [innovationDropdown, setInnovationDropdown] = useState(false);
  const [SecondAdmissionDropdown, setSecondAdmissionDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  //   console.log("Menu state:", menuOpen);
  // };

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);

  // const toggleMenu = () => {
  //   setMenuOpen((prev) => !prev); // Toggle the menu open state
  // };

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  // Close the search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const aboutDropdownHandler = (id) => {
  //   setAboutDropdown((prev) => (prev === id ? null : id));
  // };
  const aboutDropdownHandler = () => setAboutDropdown(!aboutDropdown);
  const admissionDropdownHandler = () =>
    setAdmissionDropdown(!admissionDropdown);
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

  const navButton = [
    {
      id: 1,
      title: "About Us",
      link: "/about",
      submenu: [
        { title: "Our Legacy", link: "/about/mission" },
        { title: "Leadership", link: "/about/team" },
        { title: "Acedemic Advisory Board", link: "/about/history" },
        { title: "Industry Advisory Board", link: "/about/history" },
        { title: "Statutory Bodies", link: "/about/history" },
        { title: "Research Chair Professors", link: "/about/history" },
      ],
    },
    // Other nav buttons...
    {
      id: 2,
      title: "Programs",
      link: "/programs",
      submenu: [
        { title: "Undergraduate", link: "/undergraduate" },
        { title: "Postgraduate", link: "/programs/postgraduate" },
        { title: "Online Courses", link: "/programs/online-courses" },
        { title: "Online Courses", link: "/programs/online-courses" },
        { title: "Online Courses", link: "/programs/online-courses" },
        { title: "Online Courses", link: "/programs/online-courses" },
      ],
    },
    {
      id: 3,
      title: "Research & Publications",
      link: "/research",
      submenu: [
        { title: "Projects", link: "/research/projects" },
        { title: "Publications", link: "/research/publications" },
        { title: "Collaborations", link: "/research/collaborations" },
        { title: "Collaborations", link: "/research/collaborations" },
        { title: "Collaborations", link: "/research/collaborations" },
        { title: "Collaborations", link: "/research/collaborations" },
        { title: "Collaborations", link: "/research/collaborations" },
        { title: "Collaborations", link: "/research/collaborations" },
        { title: "Collaborations", link: "/research/collaborations" },
      ],
    },
    // {
    //   id: 4,
    //   title: "Placements",
    //   link: "/placements",
    //   submenu: [
    //     { title: "Career Services", link: "/placements/career-services" },
    //     { title: "Internship Programs", link: "/placements/internships" },
    //     { title: "Alumni Success", link: "/placements/alumni" },
    //     { title: "Alumni Success", link: "/placements/alumni" },
    //     { title: "Alumni Success", link: "/placements/alumni" },
    //     { title: "Alumni Success", link: "/placements/alumni" },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Campus Life",
    //   link: "/campus-life",
    //   submenu: [
    //     { title: "Clubs & Organizations", link: "/campus-life/clubs" },
    //     { title: "Events", link: "/campus-life/events" },
    //     { title: "Housing", link: "/campus-life/housing" },
    //     { title: "Housing", link: "/campus-life/housing" },
    //     { title: "Housing", link: "/campus-life/housing" },
    //     { title: "Housing", link: "/campus-life/housing" },
    //     { title: "Housing", link: "/campus-life/housing" },
    //   ],
    // },
    {
      id: 4,
      title: "College News",
      link: "/news",
      submenu: [
        { title: "Department News", link: "/department-news" },
        { title: "Announcement", link: "/announcement" },
        { title: "Overall", link: "/overall" },
       
      ],
    },
    {
      id: 5,
      title: "Examination",
      link: "/examination",
      submenu: [
        { title: "Examination Schedules", link: "/examination-schedules" },
        { title: "Examination Result", link: "/examination-result" },
        { title: "Examination News", link: "/examination-news" },
        
      ],
    },
  ];

  return (
    <div className="w-full bg-white border-b shadow-md">
      <div className="flex justify-between items-center px-3 lg:px-20">
        <Link to="/" className="flex items-center">
          <img
            src={logo2}
            alt="Churachandpur College Logo"
            className="w-36  md:w-16 md:h-16 lg:w-52"
          />
        </Link>

        <div className="flex pt-1 items-center h-16">
          {navButton.map((button) => (
            <div
              key={button.id}
              className="relative hidden group h-full hover:text-gray-100 active:text-white hover:bg-sky-700 last:border-none  hover:rounded-t-lg lg:flex items-center"
            >
              <button
                
                className="text-gray-900 active:hover:text-white border-gray-700 border-r  px-3 font-semibold hover:text-gray-100"
              >
                {button.title}
              </button>

              {button.submenu && (
                <div className="fixed border-b-4 border-red-600 top-[94px] left-[400px] bg-sky-700 shadow-lg w-[895px] opacity-0 scale-y-0 transform origin-top transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-y-100">
                  <div className="grid grid-cols-3 p-4">
                    {button.submenu.map((sub, index) => (
                      <Link
                        key={index}
                        to={sub.link}
                        className="block px-4 hover:underline py-2 text-sm text-gray-100"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            
          </button>
        </div> */}
          {/* Search and Mobile menu */}
          <div className="flex items-center gap-3">
            <div
              className="flex md:flex lg:flex items-center lg:gap-1"
              ref={searchRef}
            >
              {/* Apply Now Button */}
              {!isSearchVisible && (
                <Link
                  to="/signup-page"
                  className="bg-red-600 hidden lg:flex text-white py-2 px-5 text-sm md:text-md lg:px-4 lg:py-2 lg:text-md rounded-md font-medium hover:bg-red-700"
                >
                  APPLY NOW
                </Link>
              )}

              <div
                className={`relative transition-all duration-300 ease-in-out ${
                  isSearchVisible ? "lg:w-60 pl-3" : "w-0"
                }`}
              >
                {/* Only show the search icon inside the input when it's visible */}
                <input
                  type="search"
                  placeholder="search..."
                  className={`pl-8  py-1 border lg:border-gray-800 border-sky-500 outline-none rounded w-48 lg:w-full ${
                    isSearchVisible ? "block" : "hidden"
                  }`}
                />
                {isSearchVisible && (
                  <FiSearch
                    className="absolute text-gray-700 w-4 h-4 left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleSearch}
                  />
                )}
              </div>

              <Link
                to="/apply"
                className="bg-red-600 absolute top-[200px] right-[-31px] -rotate-90 flex lg:hidden text-white py-1.5 px-3 text-xs md:text-md lg:px-4 lg:py-2 lg:text-md font-medium hover:bg-red-700"
              >
                APPLY NOW
              </Link>

              {/* Search Icon outside the input, shown only when input is hidden */}
              {!isSearchVisible && (
                <FiSearch
                  onClick={toggleSearch}
                  className="lg:text-gray-800 text-sky-500 w-7 h-7 cursor-pointer"
                />
              )}
            </div>

            {/* Mobile Menu */}
            <button
              className="flex md:hidden relative z-50 right-0 lg:hidden text-2xl focus:outline-none hover:text-sky-500 transform transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars className="text-sky-500" />
              )}
            </button>
            {menuOpen && (
              <div className="absolute lg:hidden top-0 right-0 w-72 h-screen z-20 bg-sky-700 text-gray-300">
                <div className="flex flex-col gap-6 py-5 pt-[14px] items-start px-6 justify-center">
                  <Link to="/" className="flex items-center">
                    <img
                      src={logo3}
                      alt="Churachandpur College Logo"
                      className="w-40 h-12"
                    />
                  </Link>
                  <button
                    onClick={admissionDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    Admissions
                    {admissionDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {admissionDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-start text-white">
                      <Link
                        to="/"
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                      >
                        Admission Process
                      </Link>
                      <Link
                        to="/"
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                      >
                        Eligibility & Selection Criteria
                      </Link>
                      <Link
                        to="/"
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                      >
                        Fee Structure
                      </Link>
                      <Link
                        to="/"
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                      >
                        Scholarships
                      </Link>
                      <Link
                        to="/"
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                      >
                        FAQs
                      </Link>
                      <Link
                        to="/"
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                      >
                        Download Brochure
                      </Link>
                    </div>
                  )}
                  <button
                    onClick={aboutDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    About Us
                    {aboutDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {aboutDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full py-2 hover:bg-sky-700 px-3 font-light border-gray-300"
                        to="/about"
                      >
                        Mission & Vision
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#history"
                      >
                        History
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#faculty"
                      >
                        Faculty
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#team"
                      >
                        Accredation
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#team"
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={ProgramDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    Programs
                    {programDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {programDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Undergraduate Programs
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#history"
                      >
                        Postgraduate Programs
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#faculty"
                      >
                        Online Courses
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about#team"
                      >
                        Special Programs
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={ResearchDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    Research
                    {researchDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {researchDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/marksheet"
                      >
                        Research Areas
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/marksheet"
                      >
                        Publications
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/marksheet"
                      >
                        Collaborations
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/marksheet"
                      >
                        Funding Opportunities
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/marksheet"
                      >
                        Research Labs
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={PlacementsDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    Placements
                    {placementsDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {placementsDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Placement Overview
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Recruiters
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Placement Statistics
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Internship Opportunities
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Career Guidance
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={CampusLifeDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    Campus Life
                    {campusLifeDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {campusLifeDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Clubs & Societies
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Events & Activities
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Hostel & Dining
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Sports & Fitness
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Campus Tour
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={NewsDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    CCpur College News
                    {newsDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {newsDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Latest Announcements
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Media Coverage
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Achievements
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Event Highlights
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Newsletter
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={InnovationDropdownHandler}
                    className="font-semibold flex items-center gap-3 text-gray-300 hover:text-white"
                  >
                    Innovation Centre
                    {innovationDropdown ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {innovationDropdown && (
                    <div className="flex flex-col justify-center w-full text-center items-center text-white">
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Overview
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Startup Incubation
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Hackathons
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Research Grants
                      </Link>
                      <Link
                        className="text-left text-sm w-full hover:bg-sky-700 px-3 py-2 font-light border-gray-300"
                        to="/about"
                      >
                        Collaborate with Us
                      </Link>
                    </div>
                  )}
                  <button className="lg:border-r font-semibold border-gray-300 lg:px-3 border-solid hover:text-sky-500 leading-none align-middle py-1">
                    Scholarships
                  </button>
                  <button className="lg:border-r font-semibold border-gray-300 lg:px-3 border-solid hover:text-sky-500 leading-none align-middle py-1">
                    Schools
                  </button>
                  <button className="lg:border-r font-semibold border-gray-300 lg:px-3 border-solid hover:text-sky-500 leading-none align-middle py-1">
                    Alumni
                  </button>
                  <button className="lg:border-r font-semibold border-gray-300 lg:px-3 border-solid hover:text-sky-500 leading-none align-middle py-1">
                    Career
                  </button>
                  <button className="lg:border-r font-semibold border-gray-300 lg:px-3 border-solid hover:text-sky-500 leading-none align-middle py-1">
                    Online Payment
                  </button>
                  <button className="lg:border-r font-semibold  border-gray-300 lg:px-3 border-solid hover:text-sky-500 leading-none align-middle py-1">
                    Student Login
                  </button>

                  {/* {isLoggedIn ? (
                <button
                  onClick={logoutHandler}
                  className="bg-red-600 py-2 px-7 text-white font-semibold rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={LoginHandler}
                  className="bg-green-500 py-2 px-5 text-wnormal rounded-lg"
                >
                  Student/Login
                </button>
              )} */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search */}
      </div>
    </div>
  );
};

export default MainNavBar;
