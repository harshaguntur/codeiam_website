"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Innovation, Research & Startup Promotion",
      description:
        "Codelam fosters innovation by providing lab spaces and resources for student projects. The club actively supports research activities, guiding students to publish their findings and contribute to technological advancements. It also serves as a hub for student startups and entrepreneurial ventures, preparing students for future challenges.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))]">
          <Image
            src="/car2.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Innovation and Research"
          />
        </div>
      ),
    },
    {
      title: "Peer-to-Peer Learning",
      description:
        "Peer-to-peer learning is a cornerstone at Codelam. Students collaborate on projects, share knowledge, and support each other in a collaborative environment. This enhances learning and fosters professional relationships that last well beyond their time at the club.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))]">
          <Image
            src="/car3.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Peer-to-Peer Learning"
          />
        </div>
      ),
    },
    {
      title: "Events and Activities",
      description:
        "Codelam organizes a wide range of events such as hackathons, guest lectures, networking meetups, expert talks, and workshops. These events challenge students, provide insights into current technologies, and enhance their learning experience with career counseling and emerging technology workshops.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))]">
          <Image
            src="/car4.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Events and Activities"
          />
        </div>
      ),
    },
  ];
  
export function StickyScrollReveal() {
  return (
    <div className="-mt-[8%]">
      <StickyScroll content={content} />
    </div>
  );
}
