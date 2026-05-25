"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { ArrowUpRight } from "lucide-react";

import servicesAnimation from "@/assets/services.json";

import service1 from "@/assets/s2.jpg";
import service2 from "@/assets/s3.jpg";
import service3 from "@/assets/s4.jpg";

const services = [
  {
    id: 1,
    title: "Buy an apartment",
    image: service1,
    description:
      "Find your ideal home with ease. We offer a wide range of properties that match your lifestyle and budget.",
  },
  {
    id: 2,
    title: "Commercial Real Estate",
    image: service2,
    description:
      "Discover office spaces, retail outlets, and commercial properties in prime locations.",
  },
  {
    id: 3,
    title: "Rent an Apartment",
    image: service3,
    description:
      "Explore premium rental apartments with modern amenities and flexible living options.",
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="w-full bg-[#f5f5f5] px-4 py-16 sm:px-8 lg:px-12 xl:px-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Top Section */}
        <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <h2 className="max-w-[500px] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-black sm:text-6xl xl:text-7xl">
              OUR SERVICES
            </h2>

            <p className="mt-8 max-w-[520px] text-base font-normal leading-[1.8] tracking-[-0.02em] text-[#444] sm:text-lg">
              We provide a full range of real estate services to help you find,
              buy, sell, or rent your perfect property.
            </p>

            <p className="mt-5 max-w-[520px] text-sm leading-[1.8] text-[#666] sm:text-base">
              From personalized property search and expert consultations to
              legal support and investment advice — our team ensures a smooth
              and transparent experience at every step.
            </p>

            <button className="mt-10 flex w-fit items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase border border-gray-400 rounded-full px-8 py-3 text-gray-700 hover:bg-gray-200 transition duration-300 cursor-pointer">
              VIEW ALL
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right Lottie */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[520px]">
              <Lottie animationData={servicesAnimation} loop={true} />
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {services.map((service) => {
            const isActive = activeCard === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveCard(service.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-[34px] transition-all duration-700 ease-in-out
  w-full
  h-[460px] lg:h-[460px]
  ${isActive ? "lg:w-[52%]" : "lg:w-[24%]"}
`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content - No overlays, just text with strong text-shadow for contrast */}
                <div className="relative z-10 flex h-full flex-col justify-between p-7">
                  <div>
                    <h3
                      className={`leading-[0.95] tracking-[-0.04em] text-black transition-all duration-500
                      ${
                        isActive
                          ? "lg:text-4xl lg:whitespace-nowrap text-4xl sm:text-5xl"
                          : "lg:text-3xl lg:max-w-[320px] text-4xl sm:text-5xl"
                      }
                      ${!isActive && "lg:whitespace-normal whitespace-normal"}
                      text-4xl sm:text-5xl
                      `}
                      style={{
                        textShadow:
                          "0 2px 4px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Show description on all cards for mobile, only on active for desktop */}
                    <p
                      className={`mt-7 text-sm leading-[1.8] text-black sm:text-base
                        ${isActive ? "lg:block" : "lg:hidden"}
                        block
                      `}
                      style={{
                        textShadow:
                          "0 2px 4px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.5)",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="flex justify-end">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg text-white transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
