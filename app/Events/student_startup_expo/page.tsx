"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const images = [
  { src: "/Student_EXPO.png", alt: "Student Startup Expo 1" },
  { src: "/Student_EXPO_2.png", alt: "Student Startup Expo 2" },
];

const StudentStartupExpo = () => {
  const [imageDimensions, setImageDimensions] = useState({ width: 600, height: 350 });

  useEffect(() => {
    const updateDimensions = async () => {
      const img = new window.Image();
      img.src = images[0].src;
      await img.decode();
      setImageDimensions({ width: img.width / 2, height: img.height / 2 });
    };
    updateDimensions();
  }, []);

  return (
    <section className="px-6 py-12 mx-auto max-w-6xl mt-16 bg-gray-50 rounded-xl shadow-xl">
      {/* Image Slider - Smaller and More Compact */}
      <div className="mb-8 flex justify-center">
        <Swiper
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-full max-w-2xl rounded-lg shadow-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={imageDimensions.width}
                  height={imageDimensions.height}
                  className="object-contain w-full h-auto rounded-lg shadow-md"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Event Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          🚀 Student Startup Expo 2025
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          The <span className="font-semibold text-blue-600">Student Startup Expo 2025</span> is an exclusive platform designed to **ignite innovation and entrepreneurship among students**.
          <br />💡 **Showcase your startup, pitch ideas, and connect with investors** at one of the **biggest startup events of the year**.
        </p>

        {/* Event Highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">💡 Startup Showcases</h3>
            <p className="text-gray-600 mt-2">Present your innovative ideas and prototypes.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">🎤 Pitch Competitions</h3>
            <p className="text-gray-600 mt-2">Compete for funding and mentorship opportunities.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">🤝 Networking Sessions</h3>
            <p className="text-gray-600 mt-2">Meet investors, entrepreneurs, and like-minded students.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">📢 Expert Panel Talks</h3>
            <p className="text-gray-600 mt-2">Learn from industry experts and successful startup founders.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">📚 Hands-on Workshops</h3>
            <p className="text-gray-600 mt-2">Master business scaling, marketing, and tech innovations.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">🏆 Prizes & Incubation Support</h3>
            <p className="text-gray-600 mt-2">Win cash prizes, mentorship, and investor access.</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">📅 Event Details</h3>
          <p className="mt-4 text-lg">📍 <strong>Venue:</strong> Innovation Hub, [Your University Name]</p>
          <p className="text-lg">📆 <strong>Date:</strong> February 2025 (Exact date to be announced)</p>
          <p className="text-lg">🎟️ <strong>Registration:</strong> Open to all students with a startup idea.</p>
        </div>
      </div>

      {/* Verification Documents */}
      <div className="text-center bg-gray-100 py-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          📜 Event Verification Documents
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/documents/verification1.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-medium hover:bg-blue-700 transition duration-300"
          >
            🔹 Permission Letter 1
          </a>
          <a
            href="/documents/verification2.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-medium hover:bg-blue-700 transition duration-300"
          >
            🔹 Permission Letter 2
          </a>
          <a
            href="/documents/verification3.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-medium hover:bg-blue-700 transition duration-300"
          >
            🔹 Permission Letter 3
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentStartupExpo;
