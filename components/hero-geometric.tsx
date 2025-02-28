"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import FeatureSection from "./FeatureSection"
import { AutoplayCarousel } from "./AutoplayCarousel"
import EventLocationMap from "./Event-location"
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})
const carouselImages = [
    {
      src: "/stex1.png",
      alt: "Project 1",
    },
    {
      src: "/stex2.png",
      alt: "Project 2",
    },
   
   
  ]

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  title1 = "Student Startup",
  title2 = "Expo 2025",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-80">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-white/[0.08] "
          >
            <Image src="/logo.png" alt="Kokonut UI" width={100} height={100} />
            
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">{title1}</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            The Student Startup Expo 2025 is an exclusive platform designed to ignite innovation and entrepreneurship among students.
            </p>
          </motion.div>
         
        </div>
        <div className="-mt-20 mb-20"> 
        <FeatureSection/>
        <section className="mb-16  px-4 py-12">
        <AutoplayCarousel images={carouselImages} interval={4000} />
      </section>
      
      <div>
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold">📅 Event Details</h3>
        <p className="mt-4 text-lg">📍 <strong>Venue:</strong> South Campus Placement Building, Andhra University</p>
        <p className="text-lg">📆 <strong>Date:</strong> 01-03-2025</p>
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
      </div>
      <div>
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
      </div>
      <EventLocationMap/>
        </div>

      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

