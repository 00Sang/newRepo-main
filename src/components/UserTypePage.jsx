import React from "react";
import { Link } from "react-router-dom";

const UserTypePage = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex items-center w-full flex-col justify-center h-screen">
        

        <h2 className="text-center w-full text-2xl font-semibold text-gray-800 py-3">
          Select User Type
        </h2>
        <div className="flex items-center justify-center w-full gap-2">
          <Link
            to="/signup-page"
            className=" bg-white hover:bg-slate-100 border w-96 shadow-lg p-4 flex flex-col gap-6 rounded-md text-center"
          >
            New Students
          </Link>
          <Link
            to="/existing-signup"
            className="w-96 bg-white border hover:bg-slate-100 shadow-lg p-4 flex flex-col gap-6 rounded-md text-center"
          >
            Existing Students
          </Link>
        </div>
        <div className=" flex gap-2 items-center flex-col justify-start pt-12 w-full">
          <p className="text-start w-[780px] text-sm text-red-600">
            Note: <br /> a) The <span className="font-bold">"New Students"</span> button is exclusively for students who
            are applying for a new admission to the College. 
          </p>
          <p className="text-start w-[780px] text-sm text-red-600 ">b) The <span className="font-bold">"Existing
          Students"</span> button is intended for students who are already enrolled
            and progressing beyond their first semester (e.g., 2nd semester and
            above).</p>
        </div>
      </div>
    </div>
  );
};

export default UserTypePage;
