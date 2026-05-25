"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoLogoLinkedin } from "react-icons/io5";

import { Globe, Mail, Phone } from "lucide-react";

const footerLinks = [
  {
    label: "Product",
    links: ["Features", "Pricing", "Testimonials", "Integration"],
  },
  {
    label: "Company",
    links: ["FAQs", "About Us", "Privacy Policy", "Terms of Services"],
  },
  {
    label: "Resources",
    links: ["Blog", "Changelog", "Brand", "Help"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-6 pt-10 bg-[#f5f5f5]">
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-black/10
          backdrop-blur-xl
          bg-white/70
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          px-6
          sm:px-8
          md:px-10
          py-10
          md:py-12
        "
      >
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="VEX Logo"
                width={280}
                height={80}
                className="h-10 w-auto object-contain transform scale-[2] origin-left"
              />
            </div>

            <p className="text-sm text-gray-600 mt-6 leading-relaxed max-w-sm">
              We back visionaries and craft ventures that define what comes
              next.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              © {new Date().getFullYear()} VEX Ventures.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="xl:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.label}>
                <h3 className="text-black text-sm font-semibold tracking-wide mb-5">
                  {section.label}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          text-sm
                          text-gray-600
                          hover:text-black
                          transition-all
                          duration-300
                        "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social / Contact */}
            <div>
              <h3 className="text-black text-sm font-semibold tracking-wide mb-5">
                Connect
              </h3>

              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-all duration-300"
                  >
                    <IoLogoLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
