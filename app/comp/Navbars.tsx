"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import MobNav from "./MobNav";
import Navlinks from "./Navlinks";

const Navbars = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="relative">
      {showBanner && (
        <div className="bg-black text-white text-center py-2 w-full fixed top-0 z-50 flex justify-center items-center">
          <h4 className="mr-4">
            Student Startup Expo: Showcasing young innovators and their ideas!
          </h4>
          <a href="/Events/student_startup_expo" className="underline mr-4">
            Learn More!
          </a>
          <button
            className="text-white text-lg"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </button>
        </div>
      )}

      <div
        className={`flex bg-background/80 backdrop-blur-md h-20 w-full gap-2 border-b-2 border-b-primary justify-between fixed ${
          showBanner ? "top-12" : "top-0"
        } z-50 lg:fixed lg:w-full`}
      >
        <div>
          <Logo />
        </div>
        <div className="hidden lg:flex">
          <Navlinks />
        </div>
        <div className="lg:hidden flex mt-4 gap-3 mx-3">
          <MobNav />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
