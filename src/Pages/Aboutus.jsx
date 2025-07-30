import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import {
  Network,
  Brain,
  Globe,
  ClipboardList,
  Pencil,
  Palette,
  Megaphone,
} from "lucide-react";

const domains = [
  {
    icon: <Network className="w-6 h-6 text-violet-400" />,
    title: "Blockchain Development",
    intro: "Dive deep into decentralized technologies and smart contracts.",
    points: [
      "Explore protocols, smart contracts, and DApps.",
      "Build projects using Ethereum, Polygon, etc.",
      "Research Layer 2 and interoperability.",
      "Provide backend for Web3 apps.",
    ],
    ideal: "For techies passionate about decentralized systems.",
  },
  {
    icon: <Brain className="w-6 h-6 text-violet-400" />,
    title: "Artificial Intelligence",
    intro: "Blend blockchain with intelligent automation.",
    points: [
      "Explore AI tools to boost productivity.",
      "Integrate AI into blockchain projects.",
      "Build smart bots and automated tools.",
    ],
    ideal: "For innovators curious about machine learning.",
  },
  {
    icon: <Globe className="w-6 h-6 text-violet-400" />,
    title: "Web Development",
    intro: "Craft beautiful, responsive interfaces for Web3.",
    points: [
      "Design UI/UX for blockchain platforms.",
      "Use React, Node JS ,SpringBoot HTML/CSS/JS.",
      "Ensure mobile-friendly, responsive UIs.",
    ],
    ideal: "Perfect for frontend enthusiasts with design sense.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-violet-400" />,
    title: "Project Management",
    intro: "Lead teams and streamline execution.",
    points: [
      "Plan and manage project timelines.",
      "Enable teamwork and progress tracking.",
      "Collaborate across all tech domains.",
    ],
    ideal: "For organizers who enjoy leading and strategizing.",
  },
  {
    icon: <Pencil className="w-6 h-6 text-violet-400" />,
    title: "Drafting",
    intro: "Put ideas into powerful, clear words.",
    points: [
      "Write blogs, docs, and internal reports.",
      "Create LinkedIn and presentation content.",
      "Support all teams with written drafts.",
    ],
    ideal: "Ideal for writers who blend tech and clarity.",
  },
  {
    icon: <Palette className="w-6 h-6 text-violet-400" />,
    title: "Designing",
    intro: "Visualize ideas through stunning graphics and layouts.",
    points: [
      "Design posters, UI mockups, and branding.",
      "Support PR and dev teams with visuals.",
      "Work with Figma, Adobe XD, Canva, etc.",
    ],
    ideal: "For creatives who think visually and critically.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-violet-400" />,
    title: "PR & Marketing",
    intro: "Amplify our presence through effective communication.",
    points: [
      "Handle digital outreach and promotions.",
      "Engage with clubs and online audiences.",
      "Plan campaigns for events and posts.",
    ],
    ideal: "Great for communicators and social storytellers.",
  },
];

export default function DomainsSection() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 bg-black ">
      {domains.map((domain, index) => (
        <CardSpotlight key={index} className=" h-full w-full p-8 mt-20 mb-5">
          <div className="flex items-center gap-3 z-10 relative">
            {domain.icon}
            <h2 className="text-2xl font-bold text-white">{domain.title}</h2>
          </div>
          <p className="mt-2 text-sm text-violet-300 z-10 relative">
            {domain.intro}
          </p>
          <ul className="mt-4 space-y-2 text-neutral-300 z-10 relative list-disc list-inside">
            {domain.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-neutral-400 z-10 relative">
            <span className="font-semibold text-white">Ideal for:</span>{" "}
            {domain.ideal}
          </p>
        </CardSpotlight>
      ))}
    </div>
  );
}
