"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VolumeX, Volume2 } from "lucide-react"; // Icons for mute/unmute

export function Hero() {
  const videoSrc = "/STUDENT_IDEATHON_STARTUP-EXPO_2025.mp4"; // Ensure file is in the public folder
  const imageSrc = "/Student_EXPO_(7).png"; // Image for mobile devices
  const [isMuted, setIsMuted] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
          setTimeout(() => {
            videoRef.current.muted = false;
            setIsMuted(false);
          }, 500);
        } catch (error) {
          console.warn("Autoplay failed, user interaction needed:", error);
        }
      };
      playVideo();
    }
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-end bg-black text-white">
      {isClient && (isMobile ? (
        <>
          <img
            src={imageSrc}
            alt="Event Preview"
            className="w-full h-auto object-contain sm:object-cover"
          />
        </>
      ) : (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted
        />
      ))}

      {!isMobile && isClient && (
        <button
          className="absolute bottom-6 right-6 bg-black/40 p-2 rounded-full text-white hover:bg-black/70 transition"
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = !isMuted;
            }
            setIsMuted(!isMuted);
          }}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center bg-black/70 p-4 sm:p-6 md:p-12 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] mb-8"
      >
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold">Pre-Incubation & Hackathon Cluster</h1>
        <p className="text-xs sm:text-sm md:text-lg text-neutral-300 mt-2">
          Join us for an innovation-driven event, fostering entrepreneurship and collaboration.
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Link href="https://www.canva.com/design/DAGSM0Rlenk/VieoPgmahO2m3m5rNSuDZw/edit" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-white text-white bg-transparent hover:bg-white/20 transition">
              Check Our Brochure →
            </Button>
          </Link>
          <Link href="/Events/student_startup_expo" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-white text-white bg-transparent hover:bg-white/20 transition">
              Check out the Student Expo →
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

