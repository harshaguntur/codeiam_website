"use client"

import { motion } from "framer-motion"
import {Lightbulb, MicVocal, Handshake, Megaphone, Boxes, Trophy } from "lucide-react"
const features = [
  { icon:Lightbulb, title: "Startup Showcases", description: "Present your innovative ideas, prototypes and research work" },
  { icon: MicVocal, title: "Pitch Competitions", description: "Compete for funding and mentorship opportunities" },
  { icon: Handshake, title: "Networking Sessions", description: "Meet investors, entrepreneurs, and like-minded students" },
  { icon: Megaphone, title: "Expert Panel Talks", description: "Learn from industry experts and successful founders" },
  { icon: Boxes, title: "Hands-on Workshops", description: "master Bussiness scaling,marketing,and tech innovations" },
  { icon: Trophy, title: "Prizes & Incubation Support", description: "Win cash prizes, mentorship, and investor access for your idea" },
]

export default function FeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mt-24 container bg-black"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-px group"
    >
      <div className="relative z-10 bg-gray-200 p-8 rounded-xl h-full">
        <div className="mb-4 text-blue-400">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out" />
      <div className="absolute inset-0 backdrop-blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
    </motion.div>
  )
}

