"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function JoinTeam() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join Our Community
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        The Codeiam Pre-Incubation Hackathon Cluster is a dynamic innovation hub designed to empower aspiring developers, entrepreneurs, and tech enthusiasts. 
        </p>
        <div className="flex space-x-4">
        <Input
        placeholder="Enter Your Email"
          type="text"
          
          className="rounded-lg border border-neutral-800 focus:ring-2 text-white placeholder:text-neutral-400 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 "
        />
        <Button className="mt-4">Submit</Button>
        </div>
      
      </div>
      <BackgroundBeams />
    </div>
  );
}
