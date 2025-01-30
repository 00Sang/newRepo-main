import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiBellAlert } from "react-icons/hi2";
import logo from "../assets/dl-logo.png"

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const notify = () => {
    if (email.trim() !== "") {
      toast.success("You will be notified soon!");
    } else {
      toast.error("Please enter a valid email!");
    }
    setEmail("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    notify();
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="flex flex-col gap-8 text-center">
      <div className="w-full flex items-center justify-center">
        <img src={logo} className="w-48 h-16 lg:w-80 lg:h-28 " />
      </div>
        {/* Heading with responsive font size */}
        <h1 className="pb-2 lg:h-[90px] bg-gradient-to-r from-gray-100 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl lg:text-7xl sm:text-5xl md:text-7xl font-bold">
          Coming Soon!
        </h1>
        {/* Subtext with responsive font size */}
        <p className="text-white text-sm md:text-2xl lg:text-xl   ">
          We are working hard to bring you the latest updates and features.
        </p>
        {/* Form */}
        <form
          className="flex lg:flex sm:flex-row items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full lg:w-[400px] py-2.5 text-gray-200 px-3 outline-none bg-gray-900 border border-gray-500 rounded-l-lg placeholder-gray-300"
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
            value={email}
            onChange={handleEmail}
          />
          <button
            type="submit"
            className="bg-gray-100 w-[190px] hover:bg-gray-300 border shadow-lg py-2.5 justify-center lg:px-6 text-gray-700 font-medium rounded-r-lg flex items-center gap-2"
          >
            Notify me
            <HiBellAlert className="animate-bounce" />
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
};

export default ComingSoon;
