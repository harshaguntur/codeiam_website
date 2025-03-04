"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ImageGallery from "@/components/ui/ideathon_image_slider";
import { JoinTeam } from "@/app/comp/Jointeam";

const images = [
  { src: "/Student_EXPO.png", alt: "Student Startup Expo 1" },
  { src: "/WhatsApp Image 2025-03-01 at 20.42.23_f66e85d9.jpg", alt: "Student Startup Expo 2" },
];

const StudentStartupExpo = () => {
  return (
    <section>

   
    <section className="px-6 py-12 mx-auto max-w-7xl mt-12 bg-white">
      {/* Image Slider */}
      <div className="mb-8 flex justify-center">
        <Swiper
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-lg shadow-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={350}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                  priority={index === 0}
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Event Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Student Startup Expo 2025</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          The <span className="font-semibold text-blue-600">Student Startup Expo 2025</span> is an exclusive platform designed to ignite innovation and entrepreneurship among students.
          <br /> Showcase your startup, pitch ideas, and connect with investors at one of the biggest startup events of the year.
        </p>
      </div>

      {/* Event Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "💡 Startup Showcases", desc: "Present your innovative ideas and prototypes." },
          { title: "🎤 Pitch Competitions", desc: "Compete for funding and mentorship opportunities." },
          { title: "🤝 Networking Sessions", desc: "Meet investors, entrepreneurs, and like-minded students." },
          { title: "📢 Expert Panel Talks", desc: "Learn from industry experts and successful founders." },
          { title: "📚 Hands-on Workshops", desc: "Master business scaling, marketing, and tech innovations." },
          { title: "🏆 Prizes & Incubation Support", desc: "Win cash prizes, mentorship, and investor access." },
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-3 text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Event Details */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold">📅 Event Details</h3>
        <p className="mt-4 text-lg">📍 <strong>Venue:</strong> A-hub , AU</p>
        <p className="text-lg">📆 <strong>Date:</strong> 09-03-2025</p>
        <p className="text-lg">🎟️ <strong>Registration:</strong> Open to all students with a startup idea. Sign-In with Google to access the form.</p>
        
        {/* Embedded Google Form */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd4qXFRNdB6h1tgEWKRCisIXbnvJARJtSTEhh3XXh4Q1JRrGQ/viewform?embedded=true"
          className="w-full h-[750px] mt-6 rounded-lg"
          frameBorder="0"
        >
          Loading…
        </iframe>
      </div>



        {/* lunch registration form  */}
 <div className="mt-12 p-8 bg-[#4E47E6] text-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold">🍽️ Registration for Lunch</h3>
        <p className="mt-4 text-lg">Reserve your lunch for the event by registering now.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfT2ufI3deB31SJwniA__2mAg-cTHl4QagU3fyLOTDjB4ZSfQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-white text-[#4E47E6] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Register for Lunch 🍽️
        </a>
      </div>



      {/* Verification Documents */}
      <div className="text-center bg-gray-100 py-8 rounded-lg shadow-md mt-12">

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Event Verification Documents</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
          {[
            { title: "Permission Letter 1", link: "https://drive.google.com/file/d/1DFOS3Ws1iBao9cP-ga1pAW0yF6ffUdIM/view?usp=drive_link" },
            { title: "Permission Letter 2", link: "https://drive.google.com/file/d/18xlhC45UomaYi1wWVD2GG-MGqQC3kWAz/view?usp=drive_link" },
            { title: "Permission Letter 3", link: "https://drive.google.com/file/d/1C8q5-NuwF7RYYl_6hye8IOphqkiCFF-R/view?usp=drive_link" },
          ].map((doc, idx) => (
            <a
              key={idx}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-medium hover:bg-blue-700 transition duration-300"
            >
              🔹 {doc.title}
            </a>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-12">
        <ImageGallery  />
      </div>

 
  

    </section>
<JoinTeam/>
</section> 
  );
};

export default StudentStartupExpo;

