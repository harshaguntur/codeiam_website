"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center bg-white py-20 md:p-10"
    >
      <h3 className="text-neutral-800 pl-4 text-5xl md:text-6xl font-bold mb-6 self-start">
        Our Statistics
      </h3>
      <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-10">
        {[
          { title: "Seminars", count: 150, color: "text-red-600" },
          { title: "Students", count: 2500, color: "text-green-600" },
          { title: "Hackathons", count: 1, color: "text-blue-600" },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h2 className="text-xl md:text-5xl font-semibold text-gray-700">
              {stat.title}
            </h2>
            <span
              className={`${stat.color} text-5xl md:text-7xl font-bold`}
              aria-hidden="true"
            >
              {isVisible && <CountUp end={stat.count} duration={2} />}+
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

