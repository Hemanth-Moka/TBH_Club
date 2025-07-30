import React from 'react';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Events() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="mt-20 text-4xl sm:text-5xl font-extrabold tracking-tight text-violet-400 drop-shadow-[0_3px_15px_rgba(139,92,246,0.3)]">
            Our Events
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Dive into our dynamic lineup of workshops, webinars, hackathons, and community engagements. Stay tuned for what’s next!
          </p>
        </div>

        {/* Placeholder Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-black/20 border border-violet-500/30 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Upcoming Event</h3>
              <p className="text-gray-400 text-sm mb-4">Details coming soon...</p>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <CalendarDaysIcon className="w-5 h-5 text-violet-400" />
                <span>TBD</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                <ClockIcon className="w-5 h-5 text-violet-400" />
                <span>TBD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-16">
          <p className="text-gray-400 text-lg">
            Interested in hosting or collaborating on an event?
          </p>
          <a
            href="/ContactUs"
            className="mt-4 inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
