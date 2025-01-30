import React, { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { PiGraduationCapLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const FinanceAndAccounts = () => {

const [openMenu, setOpenMenu] = useState(null);

const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
}

  return (
    <div className="my-2">
              <h1 className="text-gray-400 font-semibold text-xs border-b">
                FINANCE & ACCOUNTS
              </h1>
              <button
                onClick={() => toggleMenu("students")}
                className="flex items-center gap-3 text-sm p-3 text-gray-800 rounded-md hover:text-blue-500 w-full text-left"
              >
                <PiGraduationCapLight className="w-4 h-4" />
                Accounts
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
                    Expenses
                  </Link>
                  <Link
                    to="teacher"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500"
                  >
                    {/* <FaChalkboardTeacher className="w-5 h-5" /> */}
                    <span className="text-2xl font-semibold text-gray-200">
                      •
                    </span>
                    Expense Category
                  </Link>
                  <Link
                    to="student-dashboard"
                    className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                  >
                    {/* <MdOutlineAssignment className="w-5 h-5" /> */}
                    <span className="text-2xl font-semibold text-gray-200">
                      •
                    </span>
                    Income
                  </Link>
                  <Link
                    to="parent-dashboard"
                    className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                  >
                    {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                    <span className="text-2xl font-semibold text-gray-200">
                      •
                    </span>
                    Invoices
                  </Link>
                  <Link
                    to="parent-dashboard"
                    className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                  >
                    {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                    <span className="text-2xl font-semibold text-gray-200">
                      •
                    </span>
                    Invoice New
                  </Link>
                  <Link
                    to="parent-dashboard"
                    className="flex items-center text-sm gap-2 text-gray-500 hover:text-blue-500"
                  >
                    {/* <FaRegCalendarAlt className="w-5 h-5" /> */}
                    <span className="text-2xl font-semibold text-gray-200">
                      •
                    </span>
                    Transactions
                  </Link>
                </div>
              )}
            </div>
  )
}

export default FinanceAndAccounts