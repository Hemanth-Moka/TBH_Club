import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { CardSpotlightDemo } from "../components/ui/card-spotlight-demo";

export default function CardSpotlightTest() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          CardSpotlight Component Demo
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Original Demo */}
          <div className="flex justify-center">
            <CardSpotlightDemo />
          </div>
          
          {/* Custom Example 1 */}
          <CardSpotlight className="h-80 w-full" color="#1e40af">
            <h3 className="text-xl font-bold relative z-20 text-white mb-4">
              Web Development
            </h3>
            <p className="text-neutral-200 relative z-20 mb-4">
              Build modern, responsive web applications with cutting-edge technologies.
            </p>
            <div className="space-y-2 relative z-20">
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                React & Next.js
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Tailwind CSS
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                TypeScript
              </div>
            </div>
          </CardSpotlight>
          
          {/* Custom Example 2 */}
          <CardSpotlight className="h-80 w-full" color="#059669">
            <h3 className="text-xl font-bold relative z-20 text-white mb-4">
              AI & Machine Learning
            </h3>
            <p className="text-neutral-200 relative z-20 mb-4">
              Explore the future of artificial intelligence and automation.
            </p>
            <div className="space-y-2 relative z-20">
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Neural Networks
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Natural Language Processing
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Computer Vision
              </div>
            </div>
          </CardSpotlight>
          
          {/* Custom Example 3 */}
          <CardSpotlight className="h-80 w-full" color="#7c3aed">
            <h3 className="text-xl font-bold relative z-20 text-white mb-4">
              Blockchain Development
            </h3>
            <p className="text-neutral-200 relative z-20 mb-4">
              Build decentralized applications and smart contracts.
            </p>
            <div className="space-y-2 relative z-20">
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Ethereum & Solidity
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Web3 Integration
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                DeFi Protocols
              </div>
            </div>
          </CardSpotlight>
          
          {/* Custom Example 4 */}
          <CardSpotlight className="h-80 w-full" color="#dc2626">
            <h3 className="text-xl font-bold relative z-20 text-white mb-4">
              Mobile Development
            </h3>
            <p className="text-neutral-200 relative z-20 mb-4">
              Create cross-platform mobile applications.
            </p>
            <div className="space-y-2 relative z-20">
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                React Native
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Flutter
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Native iOS/Android
              </div>
            </div>
          </CardSpotlight>
          
          {/* Custom Example 5 */}
          <CardSpotlight className="h-80 w-full" color="#ea580c">
            <h3 className="text-xl font-bold relative z-20 text-white mb-4">
              DevOps & Cloud
            </h3>
            <p className="text-neutral-200 relative z-20 mb-4">
              Deploy and scale applications in the cloud.
            </p>
            <div className="space-y-2 relative z-20">
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                AWS & Azure
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Docker & Kubernetes
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                CI/CD Pipelines
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
} 