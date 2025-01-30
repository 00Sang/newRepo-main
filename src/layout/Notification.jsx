import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import notification from "../assets/notification.png";

const Notification = () => {
  return (
    <div className="group z-50 w-full px-5 py-1 bg-gray-200 text-gray-900 border-b text-center flex items-center justify-center lg:gap-3">
      <div className="relative overflow-hidden w-full border-b">
        {/* Wrapper for scrolling content */}
        <div className="animate-marquee flex border-b items-center gap-12 whitespace-nowrap">
          <div className="flex items-center border-b">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          {/* Duplicate content for smooth looping */}
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
          <div className="flex items-center">
            <img src={notification} className="w-8 h-8 animate-pulse" alt="notification" />
            <Link to="" className="text-sm underline">
              Check out the latest updates and announcements!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
