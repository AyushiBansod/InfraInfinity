"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImage from "@/assets/trusted.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Trusted() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const svgRef = useRef(null);
  const windmillWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ROTATION
      gsap.to(svgRef.current, {
        rotation: 1080,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: () => {
            if (window.innerWidth < 1024 && sectionRef.current && imageRef.current) {
              const sectionRect = sectionRef.current.getBoundingClientRect();
              const imageRect = imageRef.current.getBoundingClientRect();
              const diff = imageRect.top - sectionRect.top;
              return `top+${diff} 40%`;
            }
            return "bottom top";
          },
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // VERTICAL SCROLL MOVEMENT
      gsap.fromTo(
        windmillWrapperRef.current,
        {
          y: 0,
        },
        {
          y: () => {
            if (
              !sectionRef.current ||
              !windmillWrapperRef.current ||
              !headingRef.current ||
              !imageRef.current
            )
              return 0;
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const headingRect = headingRef.current.getBoundingClientRect();
            const imageRect = imageRef.current.getBoundingClientRect();
            const windmillHeight = windmillWrapperRef.current.offsetHeight;

            // Calculate starting and ending offsets relative to the section's top
            const headingTop = headingRect.top - sectionRect.top;
            const imageBottom = imageRect.bottom - sectionRect.top;
            const imageTop = imageRect.top - sectionRect.top;

            const isMobile = window.innerWidth < 1024;

            if (isMobile) {
              return imageTop - windmillHeight - headingTop - 24;
            }

            // The windmill starts at the top of the heading (headingTop).
            // It should end with its bottom edge aligned with the bottom of the image (imageBottom).
            return imageBottom - windmillHeight - headingTop;
          },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: () => {
              if (window.innerWidth < 1024 && sectionRef.current && imageRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const imageRect = imageRef.current.getBoundingClientRect();
                const diff = imageRect.top - sectionRect.top;
                return `top+${diff} 40%`;
              }
              return "bottom top";
            },
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f5f5f5] px-4 py-16 sm:px-8 lg:px-12 xl:px-24"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="flex flex-col items-start">
          {/* Heading + Windmill */}
          <div className="relative flex w-full justify-between">
            {/* Heading */}
            <div ref={headingRef} id="trusted-heading">
              <h2 className="max-w-[760px] text-[3rem] font-semibold leading-[0.92] tracking-[-0.05em] text-black sm:text-[4rem] lg:text-[5.2rem] pr-24 sm:pr-32 lg:pr-0">
                YOUR TRUSTED REAL
              </h2>

              <h2
                className="mt-1 text-[3rem] leading-[0.92] tracking-[-0.05em] text-black sm:text-[4rem] lg:text-[5.2rem] pr-24 sm:pr-32 lg:pr-0"
                style={{ fontFamily: "serif" }}
              >
                Estate Advisors
              </h2>
            </div>

            {/* WINDMILL */}
            <div
              ref={windmillWrapperRef}
              className="absolute right-4 sm:right-8 lg:right-28 top-0 z-20 block"
            >
              <div className="flex flex-col items-center">
                <svg
                  ref={svgRef}
                  viewBox="0 0 248 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-[140px] lg:w-[140px]"
                >
                  <path
                    fill="url(#paint0_linear)"
                    d="M152.266 123.716h94.275c.802 0 1.459.656 1.459 1.459v121.067c0 .81-.664 1.474-1.474 1.466-67.274-.78-121.669-55.137-122.522-122.387v121.22c0 .803-.657 1.459-1.46 1.459H1.474c-.81 0-1.474-.664-1.467-1.474C.795 178.721 56 124.008 123.996 124H1.459C.657 124 0 123.344 0 122.541V1.474C0 .664.664 0 1.474.008c67.274.78 121.669 55.137 122.522 122.387V1.46c0-.803.657-1.46 1.46-1.46h121.07c.81 0 1.474.664 1.467 1.474-.679 58.224-41.486 106.801-96.055 119.367-1.686.386-1.401 2.875.336 2.875h-.008Z"
                  />

                  <path
                    fill="url(#paint1_linear)"
                    d="M152.266 123.716h94.275c.802 0 1.459.656 1.459 1.459v121.067c0 .81-.664 1.474-1.474 1.466-67.274-.78-121.669-55.137-122.522-122.387v121.22c0 .803-.657 1.459-1.46 1.459H1.474c-.81 0-1.474-.664-1.467-1.474C.795 178.721 56 124.008 123.996 124H1.459C.657 124 0 123.344 0 122.541V1.474C0 .664.664 0 1.474.008c67.274.78 121.669 55.137 122.522 122.387V1.46c0-.803.657-1.46 1.46-1.46h121.07c.81 0 1.474.664 1.467 1.474-.679 58.224-41.486 106.801-96.055 119.367-1.686.386-1.401 2.875.336 2.875h-.008Z"
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="218"
                      x2="-47.283"
                      y1="258"
                      y2="153.706"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".27" stopColor="#FFD3FD" />
                      <stop offset=".838" stopColor="#806EFF" />
                    </linearGradient>

                    <linearGradient
                      id="paint1_linear"
                      x1="-21.183"
                      x2="223.712"
                      y1="-7.807"
                      y2="329.472"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".27" stopColor="#FEC5FB" />
                      <stop offset=".838" stopColor="#00BAE2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 w-full max-w-[600px] pr-24 sm:pr-32 lg:pr-0">
            <p className="text-lg leading-[1.7] text-[#4b4b4b] sm:text-xl">
              Discover the epitome of luxury living in this offering sweeping
              panoramic ocean views from every room.
            </p>
          </div>

          {/* Main Layout */}
          <div className="mt-10 flex w-full flex-col gap-6 lg:flex-row">
            {/* Image */}
            <div
              ref={imageRef}
              id="trusted-image"
              className="relative w-full overflow-hidden rounded-[34px] lg:w-[30%]"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={heroImage}
                  alt="Luxury House"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Cards */}
            <div className="w-full lg:w-[35%] xl:w-[32%]">
              <div className="grid h-full min-h-[320px] grid-cols-2 gap-3 sm:gap-4">
                {/* Card 1 */}
                <div className="group flex flex-col items-center justify-center text-center rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl group-hover:scale-105 transition-transform duration-500">
                    10k+
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-widest leading-relaxed">
                    Satisfied<br />Customers
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group flex flex-col items-center justify-center text-center rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer mt-0 lg:mt-6">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl group-hover:scale-105 transition-transform duration-500">
                    17k+
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-widest leading-relaxed">
                    Total<br />Partner
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group flex flex-col items-center justify-center text-center rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer mb-0 lg:mb-6">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl group-hover:scale-105 transition-transform duration-500">
                    15+
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-widest leading-relaxed">
                    Years of<br />Experience
                  </p>
                </div>

                {/* Card 4 */}
                <div className="group flex flex-col items-center justify-center text-center rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 cursor-pointer">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl group-hover:scale-105 transition-transform duration-500">
                    10k+
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-widest leading-relaxed">
                    Property<br />Available
                  </p>
                </div>
              </div>
            </div>

            {/* Empty Space */}
            <div className="hidden lg:block flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
