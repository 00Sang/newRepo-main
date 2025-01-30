import React, { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { PiGraduationCapLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Peoples = () => {


const [openMenu, setOpenMenu] = useState(null);
    
      // Toggle dropdown menus
      const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
      };


  return (
    <div className="">
            <h1 className="text-gray-400 font-semibold text-xs border-b">
              PEOPLES
            </h1>
            <button
              onClick={() => toggleMenu("students")}
              className="flex items-center gap-3 text-sm p-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
            >
              <PiGraduationCapLight className="w-4 h-4" />
              Students
              {openMenu === "students" ? (
                <FiChevronDown className="ml-auto" />
              ) : (
                <FiChevronRight className="ml-auto" />
              )}
            </button>
            {openMenu === "students" && (
              <div className="ml-8">
                <Link
                
                  to="students-data"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaGraduationCap className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  All Students
                </Link>
                <Link
                  to="parent-dashboard"
                  className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                >
                  {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                  <span className="text-2xl font-semibold text-gray-200">
                    •
                  </span>
                  Students Progression
                </Link>
              </div>
            )}
          </div>
  )
}

export default Peoples