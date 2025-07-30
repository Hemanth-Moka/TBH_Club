import { Club, MessageSquare, Lock } from "lucide-react";
import React from "react";

const ClubJoin = () => {
  return (
    <section className="py-16 bg-black text-white sm:py-20 lg:py-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-violet-100 via-white-500 to-violet-500 bg-clip-text text-transparent">
              Join The 
              <span className="bg-gradient-to-r from-violet-500 via-white-500 to-violet-500 bg-clip-text text-transparent">
               
                Blockchain</span> Hub
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with developers, builders, and enthusiasts shaping the decentralized web.
            Get early access to workshops, hackathons, and exclusive blockchain resources.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
            <a
              href="https://t.me/klu_tbh"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 via-black-500 to-blue-500 rounded-md shadow-lg hover:scale-105 transition-transform"
            >
              <Club className="w-5 h-5" />
              Join Now
            </a>

            <a
              href="https://t.me/klu_tbh"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white rounded-md hover:bg-white hover:text-black transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ClubJoin;
