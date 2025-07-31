import React from 'react';
import { Mail, Send, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-violet-400 mt-20">Contact Us</h2>
          <p className="mt-4 text-base text-gray-300">
            Whether you have questions, feedback, or want to collaborate — we’d love to connect.
            <br className="hidden sm:block" />
            The Blockchain Hub team is always open to conversations that spark innovation.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 text-center text-base sm:text-lg">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-violet-400" />
            <a
              href="mailto:theblockchainhub.klu@gmail.com"
              className="text-violet-400 hover:underline"
            >
              theblockchainhub.klu@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Send className="w-5 h-5 text-violet-400" />
            <a
              href="https://t.me/klu_tbh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              @klu_tbh
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-violet-400" />
            <span className="text-gray-300">
              K L University, Vaddeswaram, Andhra Pradesh
            </span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://www.instagram.com/klu_tbh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/the-blockchain-hub/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
