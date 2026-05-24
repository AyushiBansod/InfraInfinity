"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ArrowUpRight } from "lucide-react";

import dubai from "@/assets/dubai.jpg";
import usa from "@/assets/usa.jpg";
import aus from "@/assets/aus.jpg";
import canada from "@/assets/canada.jpg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ScrollPlane() {
  const sectionRef = useRef(null);
  const planeRef = useRef(null);
  const pathCoreRef = useRef(null);
  const pathTopRef = useRef(null);
  const pathBottomRef = useRef(null);
  const svgContainerRef = useRef(null);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const plane = planeRef.current;
    const corePath = pathCoreRef.current;
    const topPath = pathTopRef.current;
    const bottomPath = pathBottomRef.current;

    if (!plane || !corePath) return;

    // Setup draw animation for all three paths
    const setupDraw = (path, dashLengthMultiplier = 1) => {
      if (!path) return;
      const length = path.getTotalLength();
      const dashLength = length * 0.15 * dashLengthMultiplier;
      const gapLength = length * 2;
      gsap.set(path, {
        strokeDasharray: `${dashLength} ${gapLength}`,
        strokeDashoffset: dashLength,
      });
      return { length, dashLength };
    };

    const coreConfig = setupDraw(corePath, 1);
    const topConfig = setupDraw(topPath, 0.7);
    const bottomConfig = setupDraw(bottomPath, 0.5);

    // Initial plane and paths state: hidden until scroll starts
    gsap.set([plane, corePath, topPath, bottomPath], {
      opacity: 0,
    });
    gsap.set(plane, {
      scale: 0.4,
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // Fade in animated elements quickly at the start of scroll
    tl.to(
      [plane, corePath, topPath, bottomPath],
      { opacity: 1, duration: 0.2 },
      0,
    );

    // Draw paths sequentially
    tl.to(
      corePath,
      {
        strokeDashoffset: coreConfig.dashLength - coreConfig.length,
        duration: 4,
        ease: "power2.inOut",
      },
      0,
    );
    tl.to(
      topPath,
      {
        strokeDashoffset: topConfig.dashLength - topConfig.length,
        duration: 4,
        ease: "power2.inOut",
      },
      0.1,
    );
    tl.to(
      bottomPath,
      {
        strokeDashoffset: bottomConfig.dashLength - bottomConfig.length,
        duration: 4,
        ease: "power2.inOut",
      },
      0.2,
    );

    // Animate plane along the core path
    tl.to(
      plane,
      {
        scale: 0.7,
        duration: 4,
        motionPath: {
          path: corePath,
          align: corePath,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          autoRotateDelay: 0.5,
        },
        ease: "power2.inOut",
      },
      0,
    );

    // Fade out paths
    tl.to(
      [corePath, topPath, bottomPath],
      {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=1.2",
    );

    // Fade out container
    tl.to(svgContainerRef.current, { opacity: 0, duration: 0.8 }, "-=0.8");

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f5f5f5]"
    >
      <div className="flex w-full flex-col items-center justify-start overflow-hidden px-4 py-2 sm:py-6 lg:py-8 sm:px-8 md:px-12 lg:px-12 xl:px-32">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col">
          {/* Top Split Section */}
          <div className="flex w-full flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Left 40% - Content */}
            <div className="z-20 mb-4 flex w-full flex-col items-start lg:mb-0 lg:w-[45%] xl:w-[40%]">
              <h2 className="mb-2 text-3xl font-semibold leading-[0.95] tracking-[-0.04em] text-gray-900 sm:text-4xl md:text-5xl lg:mb-4 xl:text-6xl">
                Popular Cities
              </h2>
              <p className="mb-4 max-w-md text-sm font-normal leading-[1.7] tracking-[-0.01em] text-gray-600 sm:text-base lg:mb-8 lg:text-lg">
                Discover the most sought-after real estate markets around the
                globe. From bustling metropolises to serene coastal towns, find
                your perfect property in these top destinations. Step into a
                world where architecture meets lifestyle modern skyscrapers,
                waterfront villas, and vibrant communities designed for the
                future. Whether you're searching for your dream home or a high
                yield investment, these locations open doors to global
                opportunities and premium living.
              </p>
              <button className="flex items-center gap-2 rounded-full border border-gray-900 px-5 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white lg:mb-10 lg:px-6 lg:py-2.5">
                Explore All <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right 60% - SVG Scroll Plane */}
            <div className="relative z-10 w-full lg:w-[55%] xl:w-[60%]">
              <div
                ref={svgContainerRef}
                className="relative w-full max-w-full pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-120 -50 1150 900"
                  className="h-auto w-full overflow-visible"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Path Gradient - vibrant scroll colors */}
                    <linearGradient
                      id="paint0_linear_2272_56524"
                      x1="722.156"
                      x2="92.39"
                      y1="-228.339"
                      y2="704.889"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".144" stopColor="#FFE9FE" />
                      <stop offset="1" stopColor="#FF96F9" />
                    </linearGradient>

                    {/* Plane Gradients - exact from reference */}
                    <linearGradient
                      id="paint0_linear_2272_56525"
                      x1="154.593"
                      x2="160.643"
                      y1="48.892"
                      y2="131.658"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".199" stopColor="#6F4D70" />
                      <stop offset="1" stopColor="#12195A" />
                    </linearGradient>

                    <linearGradient
                      id="paint1_linear_2272_56525"
                      x1="66.623"
                      x2="112.939"
                      y1="2.042"
                      y2="199.069"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".27" stopColor="#FEC5FB" />
                      <stop offset=".838" stopColor="#00BAE2" />
                    </linearGradient>

                    <linearGradient
                      id="paint2_linear_2272_56525"
                      x1="112.454"
                      x2="109.954"
                      y1="132.998"
                      y2="94.498"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2F3CC0" />
                      <stop offset=".706" stopColor="#FFD6EC" />
                    </linearGradient>

                    <linearGradient
                      id="paint3_linear_2272_56525"
                      x1="246.499"
                      x2="260.599"
                      y1="203"
                      y2="92.441"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".199" stopColor="#6F4D70" />
                      <stop offset=".845" stopColor="#12195A" />
                    </linearGradient>

                    <linearGradient
                      id="paint4_linear_2272_56525"
                      x1="-18.792"
                      x2="-15.789"
                      y1="49.95"
                      y2="152.351"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".27" stopColor="#FEC5FB" />
                      <stop offset=".838" stopColor="#00BAE2" />
                    </linearGradient>

                    {/* Noise patterns for texture */}
                    <pattern
                      id="pattern-scroll-smooth-plane-0"
                      width="1"
                      height="1"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        href="#svg-noise"
                        transform="matrix(.00075 0 0 .00225 0 -1)"
                      />
                    </pattern>
                    <pattern
                      id="pattern-scroll-smooth-plane-1"
                      width=".895"
                      height="1.947"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use href="#svg-noise" transform="scale(.00179 .0039)" />
                    </pattern>
                    <pattern
                      id="pattern-scroll-smooth-plane-2"
                      width="1"
                      height="1"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        href="#svg-noise"
                        transform="matrix(.00075 0 0 .00676 0 -4)"
                      />
                    </pattern>
                    <pattern
                      id="pattern-scroll-smooth-plane-3"
                      width=".671"
                      height="4.025"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use href="#svg-noise" transform="scale(.00134 .00805)" />
                    </pattern>
                  </defs>

                  {/* BACKGROUND PATH - Faint dashed route showing the full flight path */}
                  <path
                    stroke="#e5e7eb"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8 8"
                    d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
                  />

                  {/* CORE PATH - Main flight path - starts from left edge */}
                  <path
                    ref={pathCoreRef}
                    stroke="url(#paint0_linear_2272_56524)"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    fill="none"
                    d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
                  />

                  {/* TOP PATH - Secondary layer - starts from left edge */}
                  <path
                    ref={pathTopRef}
                    stroke="url(#paint0_linear_2272_56524)"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    fill="none"
                    transform="translate(15, -25)"
                    d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
                  />

                  {/* BOTTOM PATH - Third layer - starts from left edge */}
                  <path
                    ref={pathBottomRef}
                    stroke="url(#paint0_linear_2272_56524)"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                    fill="none"
                    transform="translate(-15, 25)"
                    d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
                  />

                  {/* PLANE - EXACT match from reference with reduced size */}
                  <g ref={planeRef} transform="scale(0.6) translate(200, 100)">
                    <g transform="matrix(0.99999,-0.00378,0.00378,0.99999,-0.48707,1.13022)">
                      <path
                        fill="#F5A9FF"
                        d="m82.78 35.086 215.877 94.559L79 92l3.78-56.914Z"
                      />
                      <path
                        fill="url(#paint0_linear_2272_56525)"
                        d="m82.78 35.086 215.877 94.559L79 92l3.78-56.914Z"
                      />
                      <path
                        fill="url(#pattern-scroll-smooth-plane-0)"
                        fillOpacity="0.34"
                        d="m82.78 35.086 215.877 94.559L79 92l3.78-56.914Z"
                      />
                      <path
                        fill="url(#paint1_linear_2272_56525)"
                        d="m82.781 35.085 52.044-23.564 163.833 118.123-215.877-94.56Z"
                      />
                      <path
                        fill="url(#pattern-scroll-smooth-plane-1)"
                        fillOpacity="0.6"
                        d="m82.781 35.085 52.044-23.564 163.833 118.123-215.877-94.56Z"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </g>
                    <g transform="matrix(0.99999,0.00378,-0.00378,0.99999,0.49801,-1.12807)">
                      <path
                        fill="url(#paint2_linear_2272_56525)"
                        d="M76.828 107.147 291.17 126.73l-216.516 4.229 2.175-23.812Z"
                      />
                      <path
                        fill="#000"
                        fillOpacity="0.2"
                        d="M76.828 107.147 291.17 126.73l-216.516 4.229 2.175-23.812Z"
                      />
                      <path
                        fill="url(#paint3_linear_2272_56525)"
                        d="M76.828 107.147 291.17 126.73l-216.516 4.229 2.175-23.812Z"
                      />
                      <path
                        fill="url(#pattern-scroll-smooth-plane-2)"
                        fillOpacity="0.34"
                        d="M76.828 107.147 291.17 126.73l-216.516 4.229 2.175-23.812Z"
                      />
                      <path
                        fill="url(#paint4_linear_2272_56525)"
                        d="M298.777 130.425 1.903 103.302l53.998-44.957 242.876 72.08Z"
                      />
                      <path
                        fill="url(#pattern-scroll-smooth-plane-3)"
                        fillOpacity="0.6"
                        d="M298.777 130.425 1.903 103.302l53.998-44.957 242.876 72.08Z"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Four Cities Images Section */}
          <div className="grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 lg:gap-8 xl:gap-12">
            {[
              { name: "Canada", listings: "840 Listing", image: canada },
              { name: "USA", listings: "1140 Listing", image: usa },
              { name: "Australia", listings: "950 Listing", image: aus },
              { name: "UAE", listings: "570 Listing", image: dubai },
            ].map((city, idx) => (
              <div
                key={idx}
                className="z-20 flex flex-col items-center text-center"
              >
                <div className="relative mb-2 aspect-square w-24 overflow-hidden rounded-full transition-all duration-500 ease-out hover:-translate-y-3 sm:mb-4 sm:w-32 md:w-full lg:w-4/5 xl:w-full">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl xl:text-2xl">
                  {city.name}
                </h3>
                <p className="mt-0.5 text-xs text-gray-500 sm:mt-1 sm:text-sm">
                  {city.listings}
                </p>
              </div>
            ))}
          </div>
        </div>

        {!isReady && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#f5f5f5]">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
          </div>
        )}
      </div>

      {/* Hidden SVG noise definition */}
      <svg
        className="hidden"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <image
            id="svg-noise"
            width="500"
            height="500"
            href="https://gsap.com/tf-assets/noise-e82662fe.png"
          />
        </defs>
      </svg>
    </section>
  );
}
