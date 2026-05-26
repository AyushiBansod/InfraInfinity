"use client";

import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import maskShape from "@/assets/infinity.png";





const MaskedVideo = () => {
  return (
    <div
      className="w-full max-w-[520px] aspect-square mx-auto bg-black"
      style={{
        WebkitMaskImage: `url(${maskShape.src || maskShape})`,
        maskImage: `url(${maskShape.src || maskShape})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    >
      <video
        src="/services.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 pt-16 pb-0 md:pb-4 sm:px-8 lg:px-12 xl:px-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-0 md:mb-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <h2 className="max-w-[500px] text-3xl md:text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-black sm:text-6xl xl:text-7xl">
              WHAT WE DO
            </h2>

            <p className="mt-8 text-sm sm:text-base md:text-lg 2xl:text-2xl font-light text-gray-600 leading-relaxed mb-8">
              At InfraInfinity, we deliver result-driven real estate solutions that help developers, builders, and property brands grow their presence in the digital world. We combine creativity, technology, and strategy to showcase properties in the most impactful way, generate high-quality leads, and connect the right buyers with the right spaces. Our focus is on building strong visibility, trust, and measurable growth in the real estate market.
            </p>

            <ul className="space-y-5 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <PiStarFourFill className="text-cyan-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg text-black">
                    Proven Experience
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-500">
                   15+ years of experience delivering impactful real estate marketing and digital solutions for developers, builders, and real estate agencies.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <PiStarFourFill className="text-cyan-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg text-black">
                    Client-Centric Approach
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-500">
                    We create tailored strategies for residential, commercial, and luxury real estate projects, ensuring maximum reach, engagement, and conversions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <PiStarFourFill className="text-cyan-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg text-black">
                    Results-Driven
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-500">
                    We focus on qualified property leads, stronger conversions, and higher ROI through performance-focused real estate marketing campaigns.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Content - Masked Video */}
          <div className="flex items-center justify-center">
            <MaskedVideo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
