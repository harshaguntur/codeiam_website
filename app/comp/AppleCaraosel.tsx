"use client";

// import { FocusCards } from "@/components/ui/focus-cards";
import React from "react";
// import { FocusCardss } from "./Focuscards";
import { BentoGridDemo } from "./Bento";

// import Chapterpagese from "./Chapterpage";
 
export function Chap () {
 
  
  return (
    <div className="w-full h-full py-20 container">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Chapter
      </h2>
      
      {/* <Carousel items={cards} /> */}
      {/* <FocusCardss/>
       */}
       <BentoGridDemo/>
    </div>
  );
}

