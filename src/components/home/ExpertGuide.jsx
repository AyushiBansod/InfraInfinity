"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  Building2,
  BadgeDollarSign,
  KeyRound,
  ArrowUpRight,
} from "lucide-react"; 

import realEstateAnimation from "@/assets/real estate.json";

const cards = [
  {
    title: "Buy Properties",
    description:
      "Discover premium homes, luxury apartments, and curated investment properties crafted for modern lifestyles, long-term value, and exceptional living experiences in prime locations.",
    icon: Building2,
    activeDots: 1,
  },
  {
    title: "Sell Properties",
    description:
      "Showcase and sell your properties with strategic market positioning, premium presentation, expert guidance, and a refined approach tailored for maximum visibility and value.",
    icon: BadgeDollarSign,
    activeDots: 2,
  },
  {
    title: "Rent Properties",
    description:
      "Explore thoughtfully curated rental residences designed for flexibility, elegance, comfort, and a seamless living experience suited for modern urban lifestyles.",
    icon: KeyRound,
    activeDots: 3,
  },
];

export default function ExpertGuide() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-16">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-black/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-neutral-200/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-[1450px] mx-auto flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[38px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.05em] max-w-6xl">
            
            <span className="text-zinc-950">
              Expert Guide
            </span>

            <br />

            <span className="text-slate-600">
              to Exceptional Living
            </span>

            <br />

            <span className="text-slate-400">
              & Real Estate Investment
            </span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            mt-8
            text-sm
            sm:text-base
            md:text-lg
            text-neutral-500
            text-center
            max-w-2xl
            leading-relaxed
          "
        >
          Curating exceptional spaces and investment opportunities
          with a refined approach to modern real estate.
        </motion.p>

        {/* Lottie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-14 sm:mt-16"
        >
          <div className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px]">
            <Lottie animationData={realEstateAnimation} loop={true} />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  bg-white
                  rounded-[22px]
                  p-6
                  md:p-8
                  flex
                  flex-col
                  min-h-[390px]
                  transition-all
                  duration-500
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]

                  ${
                    index === 2
                      ? "md:col-span-2 md:max-w-[420px] md:mx-auto xl:col-span-1 xl:max-w-full"
                      : ""
                  }
                `}
              >
                
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#f5f5f5]">
                  <Icon className="h-5 w-5 text-zinc-700" />
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-semibold tracking-tight text-zinc-950">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">
                  {card.description}
                </p>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
                  
                  {/* Learn More Button */}
                 <button className="group inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] cursor-pointer">
  Learn More
  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</button>

                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((dot) => (
                      <span
                        key={dot}
                        className={`h-2.5 w-2.5 rounded-full ${
                          dot <= card.activeDots
                            ? "bg-zinc-950"
                            : "bg-zinc-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}