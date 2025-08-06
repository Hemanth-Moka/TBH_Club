import React from 'react';
import { useBatteryStatus } from 'react-haiku';

export default function Footer() {
  const { level, isCharging } = useBatteryStatus();

  return (
    <section className="py-12 bg-black text-gray-200 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-auto h-14" src="/TBH_logo.png" alt="Blockchain Hub" />
            <p className="text-base leading-relaxed text-gray-400 mt-7">
              Blockchain Hub is a decentralized tech ecosystem focused on delivering secure, scalable, and innovative Web3 solutions.
            </p>

            {/* Battery Status */}
            <p className="text-sm mt-4 text-gray-500">
              Battery: {Math.round(level * 1)}% {isCharging ? "(Charging)" : "(Not Charging)"}
            </p>

            {/* Social Icons */}
            <ul className="flex items-center space-x-4 mt-9">
              <li>
                <a href="https://www.instagram.com/klu_tbh" aria-label="Instagram"
                  className="text-gray-300 hover:text-pink-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 3.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/the-blockchain-hub/posts/?feedView=al" aria-label="LinkedIn"
                  className="text-gray-300 hover:text-blue-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5A2.5 2.5 0 0 1 7.48 6a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5zM2 8.75h4v12.5H2V8.75zm7 0h3.75v1.64h.05a4.11 4.11 0 0 1 3.7-2.04c3.95 0 4.68 2.6 4.68 5.98v6.92H17v-6.14c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25v6.25H9V8.75z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://t.me/klu_tbh" aria-label="Telegram"
                  className="text-gray-300 hover:text-sky-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.428 15.569l-.395 4.314c.566 0 .813-.244 1.114-.536l2.671-2.497 5.536 4.025c1.013.558 1.736.265 2.003-.938l3.627-16.992h.001c.309-1.445-.534-2.012-1.524-1.665L1.449 10.197c-1.403.547-1.388 1.328-.24 1.682l4.973 1.552 11.533-7.25c.542-.345 1.034-.153.628.192L9.428 15.569z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:theblockchainhub.klu@gmail.com" aria-label="Email"
                  className="text-gray-300 hover:text-red-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v1.18l-10 6.32-10-6.32V6c0-1.1.9-2 2-2zm0 4.47l7.6 4.8a1 1 0 0 0 1.07 0L20 8.47V18c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V8.47z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              <li><a href="/AboutUs" className="text-base text-gray-300 transition hover:text-white">Domains</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Our Mission</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Ecosystem</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Resources</p>
            <ul className="mt-6 space-y-4">
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Whitepaper</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Developer Docs</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Tokenomics</a></li>
              <li><a href="/" className="text-base text-gray-300 transition hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe</p>
            <form className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-gray-200 placeholder-gray-400 transition bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-blue-600"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-12 mb-6 border-gray-700" />
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Designed & Developed by Hemanth Moka | Blockchain Hub. All rights reserved.
        </p>
      </div>
    </section>
  );
}
