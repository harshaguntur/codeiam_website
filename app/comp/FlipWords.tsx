import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordss() {
  const words = ["Conduct Hackathons", "Conduct Coding Challenges", "Provide Development Space", "Provide Industry Engagement"];

  return (
    <div className="container">
      <div className="text-4xl lg:px-8 sm:px-4 md:px-6 colgra md:text-6xl lg:text-7xl  tex mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        At Codeiam We <br/>
        <div className="md:-ml-5">
        <FlipWords words={words} /> <br />
        </div>
       
        
      </div>
    </div>
  );
}
