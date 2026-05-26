"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import n1 from "@/assets/n1.jpg";
import n2 from "@/assets/n2.jpg";
import n3 from "@/assets/n3.jpg";
import n4 from "@/assets/n4.jpg";
import n5 from "@/assets/n5.jpg";
import n6 from "@/assets/n6.jpg";

gsap.registerPlugin(ScrollTrigger);

const NewLaunch = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // Animate each listing item
      gsap.utils.toArray(".listing-item").forEach((item) => {
        const image = item.querySelector(".nl-image");
        const content = item.querySelector(".nl-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: isMobile ? "top 95%" : "top 85%",
            end: "bottom 10%",
            toggleActions: "play none none reset",
            invalidateOnRefresh: true,
          },
        });

        // IMAGE
        tl.fromTo(
          image,
          {
            y: isMobile ? 40 : 80,
            scale: isMobile ? 1.05 : 1.15,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: isMobile ? 0.9 : 1.4,
            ease: "power3.out",
          }
        );

        // TEXT
        tl.fromTo(
          content,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=1"
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="newlaunch"
      ref={sectionRef}
      className="bg-[#F5F5F5] w-full pt-16 pb-8 sm:pt-20 sm:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 pl-2 xl:pl-6">
            <div className="flex items-center gap-4 mb-4">
              

              <h2 className="text-3xl md:text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[0.95] tracking-[-0.05em] text-black uppercase">
                NEW LISTINGS
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-500 mt-4 max-w-2xl leading-relaxed">
              Discover your dream home in the most sought-after neighborhoods.
              These premium properties offer the perfect blend of comfort,
              convenience, and luxury for modern family living.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="lg:col-span-4 flex lg:justify-end lg:items-center pr-2 xl:pr-6">
            <button className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest  border border-gray-400 rounded-full px-8 py-3 text-gray-700 hover:bg-gray-200 transition duration-300 cursor-pointer">
              Explore More
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ROW 1 */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-6 md:items-end mb-12">
          {/* ITEM 1 - LUXURY APARTMENT (SQUARE) */}
          <div className="listing-item md:col-span-6 flex flex-col md:grid md:grid-cols-6 gap-3 md:gap-6 md:items-end">
            <div className="hidden md:flex md:col-span-3 nl-content flex-col text-right pb-4">
              <h3 className="text-black text-sm lg:text-base font-medium tracking-wider uppercase">
                LUXURY APARTMENT
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Premium urban living experience
              </p>
            </div>

            <div className="md:col-span-3 nl-image overflow-hidden rounded-2xl group w-full aspect-square">
              <Image
                src={n1}
                alt="LUXURY APARTMENT"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* MOBILE TEXT */}
            <div className="md:hidden nl-content w-full">
              <h3 className="text-black text-sm font-medium tracking-wider uppercase">
                LUXURY APARTMENT
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Premium urban living experience
              </p>
            </div>
          </div>

          {/* ITEM 2 - COMMERCIAL SPACE (SQUARE) */}
          <div className="listing-item md:col-span-6 flex flex-col md:grid md:grid-cols-6 gap-3 md:gap-6 md:items-end mt-4 md:mt-0">
            <div className="md:col-span-3 nl-image overflow-hidden rounded-2xl group w-full aspect-square">
              <Image
                src={n2}
                alt="COMMERCIAL SPACE"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="hidden md:flex md:col-span-3 nl-content flex-col text-left pb-4">
              <h3 className="text-black text-sm lg:text-base font-medium tracking-wider uppercase">
                COMMERCIAL SPACE
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Strategic location for modern businesses
              </p>
            </div>

            {/* MOBILE TEXT */}
            <div className="md:hidden nl-content w-full">
              <h3 className="text-black text-sm font-medium tracking-wider uppercase">
                COMMERCIAL SPACE
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Strategic location for modern businesses
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 - PREMIUM VILLA (RECTANGLE) */}
        <div className="listing-item flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-6 md:items-end mb-12">
          <div className="md:col-span-6 nl-image overflow-hidden rounded-2xl group w-full">
            <Image
              src={n3}
              alt="PREMIUM VILLA"
              className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="md:col-span-6 nl-content text-left md:pb-4 w-full">
            <h3 className="text-black text-base font-medium tracking-wider uppercase">
              PREMIUM VILLA
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Crafted for elegant family living
            </p>
          </div>
        </div>

        {/* ROW 3 - INVESTMENT PLOTS (RECTANGLE) */}
        <div className="listing-item flex flex-col-reverse md:grid md:grid-cols-12 gap-3 md:gap-6 md:items-end mb-12">
          <div className="md:col-span-6 nl-content text-left md:text-right md:pb-4 w-full">
            <h3 className="text-black text-base font-medium tracking-wider uppercase">
              INVESTMENT PLOTS
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Prime land for future developments
            </p>
          </div>

          <div className="md:col-span-6 nl-image overflow-hidden rounded-2xl group w-full">
            <Image
              src={n4}
              alt="INVESTMENT PLOTS"
              className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-6 md:items-end">
          {/* ITEM 1 - PENTHOUSE SUITE (SQUARE) */}
          <div className="listing-item md:col-span-6 flex flex-col md:grid md:grid-cols-6 gap-3 md:gap-6 md:items-end">
            <div className="hidden md:flex md:col-span-3 nl-content flex-col text-right pb-4">
              <h3 className="text-black text-sm lg:text-base font-medium tracking-wider uppercase">
                PENTHOUSE SUITE
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Skyline views with luxury interiors
              </p>
            </div>

            <div className="md:col-span-3 nl-image overflow-hidden rounded-2xl group w-full aspect-square">
              <Image
                src={n5}
                alt="PENTHOUSE SUITE"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* MOBILE TEXT */}
            <div className="md:hidden nl-content w-full">
              <h3 className="text-black text-sm font-medium tracking-wider uppercase">
                PENTHOUSE SUITE
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Skyline views with luxury interiors
              </p>
            </div>
          </div>

          {/* ITEM 2 - MODERN FARMHOUSE (SQUARE) */}
          <div className="listing-item md:col-span-6 flex flex-col md:grid md:grid-cols-6 gap-3 md:gap-6 md:items-end mt-4 md:mt-0">
            <div className="md:col-span-3 nl-image overflow-hidden rounded-2xl group w-full aspect-square">
              <Image
                src={n6}
                alt="MODERN FARMHOUSE"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="hidden md:flex md:col-span-3 nl-content flex-col text-left pb-4">
              <h3 className="text-black text-base font-medium tracking-wider uppercase">
                MODERN FARMHOUSE
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Peaceful living surrounded by nature
              </p>
            </div>

            {/* MOBILE TEXT */}
            <div className="md:hidden nl-content w-full">
              <h3 className="text-black text-sm font-medium tracking-wider uppercase">
                MODERN FARMHOUSE
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Peaceful living surrounded by nature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLaunch;