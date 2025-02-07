import { cn } from "@/lib/utils";
import {
  
    IconArrowGuide,
    IconBook,
    IconBrandGithub,
    IconBuildingFactory,
    IconCode,

  IconMoodWink,
  IconSitemap,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
    const features = [
        {
          title: "Hackathon & Competition",
          description:
            "Participate in hackathons and competitive events to showcase your skills and win prizes.",
          icon: <IconCode/>,
        },
        {
          title: "Coding Challenges & Practices",
          description:
            "Improve your coding skills with a variety of challenges and daily practice routines.",
          icon: <IconTerminal2 />,
        },
        {
          title: "Project Development",
          description:
            "Collaborate on real-world projects, showcase your work, and learn through hands-on experience.",
          icon: <IconBrandGithub/>,
        },
        {
          title: "Industry Engagement",
          description:
            "Connect with industry professionals, attend webinars, and access internship opportunities.",
          icon: <IconBuildingFactory/>,
        },
        {
          title: "Fun Activities",
          description:
            "Enjoy gamified learning, community challenges, and interactive forums for a lively experience.",
          icon: <IconMoodWink/>,
        },
        {
          title: "Resource Library",
          description:
            "Access a curated collection of tutorials, articles, and guides to enhance your learning journey.",
          icon: <IconBook/>,
        },
        {
          title: "Mentorship Programs",
          description:
            "Get personalized guidance from industry experts to accelerate your career growth.",
          icon: <IconArrowGuide/>,
        },
        {
          title: "Team Collaboration",
          description:
            "Work seamlessly with teammates on projects using built-in collaboration tools and features.",
          icon: <IconSitemap/>,
        },
       
      ];
      
  return (
    <div className="grid grid-cols-1 container md:grid-cols-2 lg:grid-cols-4   relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
