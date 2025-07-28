import React from 'react';
import {
  ShieldCheck,
  Rocket,
  Badge,
  Network,
  KeyRound,
  LayoutTemplate,
} from "lucide-react";

const ClubInfo = () => {
  return (
    <section className="bg-black pb-6">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-black">
          <div className="mb-16 text-center">
            <p className="mt-5 mb-20 text-5xl lg:text-5xl font-bold tracking-tight text-white">
              About The Blockchain Hub (TBH)
            </p>
          </div>

          <div className="flex flex-wrap my-12">
            {/* Card 1 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 border-gray-700">
              <div className="flex items-center mb-6">
                <Badge className="h-6 w-6 text-indigo-500" />
                <div className="ml-4 text-xl text-white">What is TBH?</div>
              </div>
              <p className="leading-loose text-gray-400">
                The Blockchain Hub at KL University is a student-led initiative founded by Praveen and his team. It aims to foster innovation by offering a community where students can explore, experiment, and build with blockchain technology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 border-gray-700">
              <div className="flex items-center mb-6">
                <Rocket className="h-6 w-6 text-indigo-500" />
                <div className="ml-4 text-xl text-white">Our Vision</div>
              </div>
              <p className="leading-loose text-gray-400">
                TBH envisions a future where every student gains blockchain fluency through hands-on experience. Our vision is to bridge theory and real-world skills to drive impact across industries and empower tomorrow’s tech leaders.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 border-gray-700">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-6 w-6 text-indigo-500" />
                <div className="ml-4 text-xl text-white">What is Blockchain?</div>
              </div>
              <p className="leading-loose text-gray-400">
                Blockchain is a decentralized and secure ledger system that powers innovations like cryptocurrencies, smart contracts, and NFTs. It eliminates intermediaries by enabling transparent, peer-to-peer transactions across networks.
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8 border-gray-700">
              <div className="flex items-center mb-6">
                <Network className="h-6 w-6 text-indigo-500" />
                <div className="ml-4 text-xl text-white">Key Concepts</div>
              </div>
              <p className="leading-loose text-gray-400">
                We introduce members to vital concepts like decentralization, distributed consensus, public ledgers, and smart contracts. These principles are fundamental to building scalable, secure, and transparent blockchain systems.
              </p>
            </div>

            {/* Card 5 */}
            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8 border-gray-700">
              <div className="flex items-center mb-6">
                <KeyRound className="h-6 w-6 text-indigo-500" />
                <div className="ml-4 text-xl text-white">Secure & Transparent</div>
              </div>
              <p className="leading-loose text-gray-400">
                Blockchain enables secure, tamper-proof data exchanges by using cryptography and distributed networks. It promotes transparency and trust without relying on centralized control or traditional third-party authorities.
              </p>
            </div>
            

            {/* Card 6 */}
            <div className="w-full md:w-1/2 lg:w-1/3 p-8 border-gray-700">
              <div className="flex items-center mb-6">
                <LayoutTemplate className="h-6 w-6 text-indigo-500" />
                <div className="ml-4 text-xl text-white">Hands-On Experience</div>
              </div>
              <p className="leading-loose text-gray-400">
                At TBH, students gain practical skills through hackathons, workshops, and mentorship programs. We believe in learning by building—developing real-world projects that prepare members for careers in Web3 and beyond.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClubInfo;
