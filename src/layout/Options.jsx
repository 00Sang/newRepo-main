import React from 'react'
import { Link } from 'react-router-dom'
import { LiaUserTieSolid } from "react-icons/lia";
import { FaUserTie, FaRupeeSign, FaGraduationCap, FaMapMarkerAlt, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

const Options = () => {
  return (
    <div className='flex items-center gap-8 px-6 justify-start lg:px-28 lg:gap-16 lg:justify-center border-b h-52 overflow-auto'>
      {/* Leadership */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <LiaUserTieSolid className='bg-sky-400 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>LEADERSHIP</Link>
      </div>

      {/* Program Fee */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaRupeeSign className='bg-blue-950 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>PROGRAM FEE</Link>
      </div>

      {/* Scholarships */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaGraduationCap className='bg-sky-700 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>SCHOLARSHIPS</Link>
      </div>

      {/* Placement */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaMapMarkerAlt className='bg-red-700 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>PLACEMENT</Link>
      </div>

      {/* Programs (UG/PG) */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaChalkboardTeacher className='bg-green-700 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>PROGRAMS (UG/PG)</Link>
      </div>

      {/* Job Openings */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaBriefcase className='bg-sky-400 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>JOB OPENINGS</Link>
      </div>
    </div>
  )
}

export default Options
