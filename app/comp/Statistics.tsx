"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col justify-center bg-white py-20 md:p-10">
      <h3 className="text-neutral-800 pl-4 text-5xl md:text-6xl font-bold mb-6 self-start">
        Our Statistics
      </h3>
      <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-5xl font-semibold text-gray-700">
            Seminars
          </h2>
          <span className="text-red-600 text-5xl md:text-7xl font-bold">
            {isVisible && <CountUp end={150} duration={2} />}+
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-5xl font-semibold text-gray-700">
            Students
          </h2>
          <span className="text-green-600 text-5xl md:text-7xl font-bold">
            {isVisible && <CountUp end={2500} duration={2} />}+
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-5xl font-semibold text-gray-700">
            Hackathons
          </h2>
          <span className="text-blue-600 text-5xl md:text-7xl font-bold">
            {isVisible && <CountUp end={1} duration={8} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

