import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/ccpurlogo2.png";

const NavbarTop = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    navigate("/login-page");
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login-page");
  };

  return (
    <div className="bg-sky-700 hidden lg:block w-full">
      <div className="">
      <div className="flex items-center h-[100%] text-white w-full text-sm font-medium md:justify-end lg:justify-end lg:px-20 gap-3 px-3 lg:gap-1">
        {/* Admissions Dropdown */}
        <div className="relative group lg:border-r border-gray-300 lg:px-3 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          <Link to="/" className="cursor-pointer text-md">Admissions</Link>
          <div className="absolute border-b-4 top-full px-24 py-1 left-[-900px] bg-slate-50 shadow-lg border-red-600 w-screen opacity-0 scale-y-0 transform origin-top transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-y-100 z-10">
            <div className="grid grid-cols-3">
              <div>
                <Link to="/" className="flex items-center">
                  <img
                    src={logo2}
                    alt="Churachandpur College Logo"
                    className="w-36 md:w-16 md:h-16 lg:w-52"
                  />
                </Link>
              </div>
              <div>
                <Link
                  to="/admission-process"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Admission Process
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Eligibility & Selection Criteria
                </Link>
                <Link
                  to="/fee-structure"
                  className="block px-4 py-2 text-red-600 hover:underline hover:text-red-500"
                >
                  Fee Structure
                </Link>
                {/* <a
                  href="https://scholarships.gov.in/" target="_blank"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Scholarships
                </a> */}
                <Link
                  to="/"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  FAQs
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Download Brochures
                </Link>
              </div>
            </div>
          </div>
        </div>

        <a href="https://scholarships.gov.in/" target="_blank" className="lg:border-r border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Scholarships
        </a>
        {/* <button className="lg:border-r border-gray-300 lg:px-3 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Schools
        </button> */}
        <button className="lg:border-r border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Alumni
        </button>
        {/* <button className="lg:border-r border-gray-300 lg:px-3 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Career
        </button> */}
        <button className="lg:border-r border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Online Payment
        </button>
        <Link to="login-page" className="lg:border-r border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Student Login
        </Link>
        <Link to="/admin-login">Admin</Link>
      </div>
      </div>
      
    </div>
  );
};

export default NavbarTop;
