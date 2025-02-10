"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import MobNav from "./MobNav";
import Navlinks from "./Navlinks";

const Navbars = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="relative w-full">
      {/* Announcement Banner */}
      {showBanner && (
        <div className="bg-black text-white text-center py-2 px-4 w-full fixed top-0 z-50 flex justify-between items-center text-xs md:text-base gap-2 md:gap-4 h-8 md:h-10 whitespace-nowrap overflow-hidden">
          <h4 className="truncate">
            🚀 Student Startup Expo 2025 - Showcasing young innovators!
          </h4>
          <a
            href="/Events/student_startup_expo"
            className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800"
          >
            Learn More!
          </a>
          <button
            className="text-white text-lg focus:outline-none ml-2"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`flex bg-background/80 backdrop-blur-md h-16 w-full gap-2 border-b-2 border-b-primary justify-between items-center fixed px-4 md:px-8 transition-all duration-300 ${showBanner ? "top-8 md:top-10" : "top-0"} z-40`}
      >
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="hidden lg:flex">
          <Navlinks />
        </div>
        <div className="lg:hidden flex items-center">
          <MobNav />
        </div>
      </div>
    </div>
  );
};

export default Navbars;

