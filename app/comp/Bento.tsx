import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// HeaderWithImage Component
type imageurls =  {
    imageUrl:string;
}
const HeaderWithImage = ({ imageUrl }:imageurls) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center" 
       style={{ backgroundImage: `url(${imageUrl})` }}>
  </div>
);

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          hrefs={item.href}
          title={item.title}
          description={item.description}
          header={<HeaderWithImage imageUrl={item.imageUrl} />}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// Data with image URLs
const items = [
    {
      title: "AI/ML",
      description: "Dive into the world of Artificial Intelligence and Machine Learning, where algorithms shape the future.",
      imageUrl: "/aiml.png",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/AI&ML",
    },
    {
      title: "AR/VR & Web & App Development",
      description: "Explore immersive technologies and cutting-edge development for web and mobile platforms.",
      imageUrl: "/arvr.png",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/ARVR&WebAppDev",
    },
    {
      title: "Competitive Programming and DSA",
      description: "Sharpen your problem-solving skills and master data structures and algorithms.",
      imageUrl: "/dsa.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/CompetativeProgrammingDSA",
    },
    {
      title: "Ethical DevSecOps",
      description: "Learn the principles of secure and ethical software development, operations, and deployment.",
      imageUrl: "devsec.png",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/EthicalDevSecOps",
    },
    {
      title: "Gate Ignite",
      description: "Prepare for GATE with structured guidance and expert resources for engineering excellence.",
      imageUrl: "gatee.png",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/GateIgnite",
    },
    {
      title: "Industry 4.0",
      description: "Step into the future with insights into smart manufacturing, IoT, and automation.",
      imageUrl: "/ind.png",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/Industry4.0",
    },
    {
      title: "Women Techies",
      description: "Celebrate and empower women in technology with resources and community support.",
      imageUrl: "/wom.png",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/WomenTechies",
    },
    {
      title: "International AU Techies",
      description: "Connect with global innovators and technologists for cross-border collaboration.",
      imageUrl: "/int.png",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/InternationalAUTechies",
    },
    {
      title: "Marketing And Event Management",
      description: "Master the art of marketing and orchestrate memorable events with impact.",
      imageUrl: "/eve.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      href: "/chapters/MarketingEventManagement",
    },
  ];
  
