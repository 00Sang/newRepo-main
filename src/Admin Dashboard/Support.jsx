import React from 'react'
import { GrContact } from 'react-icons/gr'
import { TbMessageReport } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div className="">
      <h1 className="text-gray-400 font-semibold text-xs border-b">REPORTS</h1>
      <div className="flex flex-col gap-5 p-3 my-2">
      <Link
                  to="dashboard"
                  className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-500"
                >
                  <GrContact className="w-4 h-4" />
                  Contact Message
                </Link>
                <Link
                  to="teacher"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500"
                >
                  <TbMessageReport className="w-4 h-4" />
                  Report
                </Link>
      </div>
    </div>
  )
}

export default Support