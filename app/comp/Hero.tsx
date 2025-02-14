"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VolumeX, Volume2 } from "lucide-react"; // Icons for mute/unmute

export function Hero() {
  const videoSrc = "/STUDENT_IDEATHON_STARTUP-EXPO_2025.mp4"; // Video in public folder
  const [isMuted, setIsMuted] = useState(false); // Video starts unmuted
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Background Video */}
      {isClient && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      )}

      {/* Mute/Unmute Button - Bottom Right Corner */}
      {isClient && (
        <button
          className="absolute bottom-6 right-6 bg-black/40 p-2 rounded-full text-white hover:bg-black/70 transition"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}

      {/* Content Below Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center bg-black/70 p-6 md:p-12 rounded-lg shadow-lg mt-[60vh]"
      >
        <h1 className="text-xl md:text-3xl font-bold">Pre-Incubation & Hackathon Cluster</h1>
        <p className="text-sm md:text-lg text-neutral-300 mt-2">
          Join us for an innovation-driven event, fostering entrepreneurship and collaboration.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <Link href="https://www.canva.com/design/DAGSM0Rlenk/VieoPgmahO2m3m5rNSuDZw/edit">
            <Button className="px-6 py-3 border border-white text-white bg-transparent hover:bg-white/20 transition">
              Check Our Brochure →
            </Button>
          </Link>
          <Link href="/Events/student_startup_expo">
            <Button className="px-6 py-3 border border-white text-white bg-transparent hover:bg-white/20 transition">
              Check out the Student Expo →
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
