import React from "react";
import DarkVeil from "../Sections/DarkVeil";
import ClubInfo from "./ClubInfo";
import WhatWedo from "./WhatWedo";
import ClubJoin from "./ClubJion";
import Stats from "./Stats"; // Ensure this is the correct import path for your Stats component

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden font-sans bg-black">
        {/* Background WebGL Shader */}
        <DarkVeil />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-0 pointer-events-none" />

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 text-center z-10 space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_3px_15px_rgba(255,255,255,0.25)] leading-tight">
            The Blockchain Hub
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 italic drop-shadow-sm">
            “Empowering Decentralization”
          </p>

          <p className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-2 sm:px-6">
            We are a vibrant community of innovators, developers, and enthusiasts dedicated
            to advancing blockchain technology. Whether you're exploring smart contracts,
            NFTs, DeFi, or DAO governance — there’s a space here for you to learn,
            build, and collaborate.
          </p>

          <a
            href="#club"
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-sm sm:text-base font-semibold tracking-wide shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore the Club
          </a>
        </div>
      </section>

      {/* Informational Sections */}
<ClubInfo />
<WhatWedo />
{/* <Stats /> */}
<ClubJoin />

    </>
  );
}
