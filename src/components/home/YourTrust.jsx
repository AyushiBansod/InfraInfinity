"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImage from "@/assets/pic1.jpg";

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
        rotate: 1080,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // VERTICAL SCROLL MOVEMENT
      gsap.fromTo(
        windmillWrapperRef.current,
        {
          y: 0,
        },
        {
          y: 260,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        },
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
              <h2 className="max-w-[760px] text-[3rem] font-semibold leading-[0.92] tracking-[-0.05em] text-black sm:text-[4rem] lg:text-[5.2rem]">
                Your Trusted Real
              </h2>

              <h2
                className="mt-1 text-[3rem] leading-[0.92] tracking-[-0.05em] text-black sm:text-[4rem] lg:text-[5.2rem]"
                style={{ fontFamily: "serif" }}
              >
                Estate Advisors
              </h2>
            </div>

            {/* WINDMILL */}
            <div
              ref={windmillWrapperRef}
              className="absolute right-0 top-0 z-20 hidden lg:block"
            >
              <div className="flex flex-col items-center">
                <svg
                  ref={svgRef}
                  width="140"
                  height="140"
                  viewBox="0 0 248 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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

                <p className="mt-3 text-sm text-gray-500">Scroll to rotate</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 w-full max-w-[600px]">
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
            <div className="w-full lg:w-[30%]">
              <div className="grid h-[400px] grid-cols-2">
                {/* Card 1 */}
                <div className="rounded-tl-[24px] rounded-bl-[24px] bg-white p-4 shadow-sm">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                      18k+
                    </h3>

                    <p className="mt-3 text-xs text-gray-500 sm:text-sm">
                      Satisfied Customers
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="mb-4 ml-4 rounded-[24px] bg-white p-4 shadow-sm">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                      17k+
                    </h3>

                    <p className="mt-3 text-xs text-gray-500 sm:text-sm">
                      Total Partner
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="mr-4 mt-4 rounded-[24px] bg-white p-4 shadow-sm">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                      13+
                    </h3>

                    <p className="mt-3 text-xs text-gray-500 sm:text-sm">
                      Years of Experience
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="rounded-tr-[24px] rounded-br-[24px] bg-white p-4 shadow-sm">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                      14k+
                    </h3>

                    <p className="mt-3 text-xs text-gray-500 sm:text-sm">
                      Property Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Space */}
            <div className="hidden lg:block lg:w-[30%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
