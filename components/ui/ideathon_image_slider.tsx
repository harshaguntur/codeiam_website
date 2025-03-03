"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "/arvr.png",
  "/car2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="px-6 py-12 mx-auto max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-8">📸 Image Gallery</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(src)}
          >
            <Image src={src} alt={`Gallery ${index + 1}`} width={300} height={200} className="w-full h-auto object-cover rounded-lg shadow-md" />
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="relative p-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
              <Image src={selectedImage} alt="Selected" width={800} height={600} className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg" onClick={() => setSelectedImage(null)}>
                <X size={24} className="text-black" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
