"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

import gif1 from "../../assets/road-map/1.gif";
import lottie2 from "../../assets/road-map/2.json";
import lottie3 from "../../assets/road-map/3.json";
import lottie4 from "../../assets/road-map/4.json";
import lottie5 from "../../assets/road-map/5.json";
import lottie6 from "../../assets/road-map/6.json";
import lottie7 from "../../assets/road-map/7.json";

const roadmapData = [
  {
    title: "Phase 1: Premium Properties Launch",
    points: [
      "Explore luxury apartments and premium villas",
      "Find dream homes in top-rated neighborhoods",
      "Curated listings for modern family living",
      "Verified and trusted property options",
    ],
    image: gif1,
  },

  {
    title: "Phase 2: Buy, Sell & Rent Services",
    points: [
      "Easy property buying experience",
      "Trusted property selling assistance",
      "Rental solutions for every lifestyle",
      "Dedicated support from real estate experts",
    ],
    animation: lottie2,
  },

  {
    title: "Phase 3: Premium Commercial Spaces",
    points: [
      "Premium office and commercial spaces",
      "Strategic locations for modern businesses",
      "Investment-ready commercial properties",
      "Smart infrastructure for business growth",
    ],
    animation: lottie3,
  },

  {
    title: "Phase 4: Global Property Presence",
    points: [
      "840+ listings across Canada",
      "1140+ properties available in the USA",
      "950+ premium listings in Australia",
      "570+ luxury properties in UAE",
    ],
    animation: lottie4,
  },

  {
    title: "Phase 5: Luxury Living Experience",
    points: [
      "Luxury apartments with modern interiors",
      "Exclusive penthouse suites with skyline views",
      "Premium villas crafted for elegant living",
      "Modern farmhouses surrounded by nature",
    ],
    animation: lottie5,
  },

  {
    title: "Phase 6: Trusted Real Estate Advisors",
    points: [
      "10k+ satisfied customers worldwide",
      "17k+ trusted real estate partners",
      "15+ years of industry experience",
      "Professional guidance for every investment",
    ],
    animation: lottie6,
  },

  {
    title: "Phase 7: Future Growth & Investment",
    points: [
      "Expansion into new global property markets",
      "Advanced digital property showcase experience",
      "Smart investment opportunities for buyers",
      "Building the future of luxury real estate",
    ],
    animation: lottie7,
  },
];

const roadmapImageSizes = {
  0: { width: 180, height: 180 },
  1: { width: 200, height: 200 },
  2: { width: 200, height: 200 },
  3: { width: 150, height: 150 },
  4: { width: 195, height: 205 },
  5: { width: 175, height: 175 },
  6: { width: 190, height: 190 },
};

const roadmapMobileImageSizes = {
  0: { width: 150, height: 150 },
  1: { width: 170, height: 160 },
  2: { width: 170, height: 160 },
  3: { width: 130, height: 130 },
  4: { width: 145, height: 150 },
  5: { width: 130, height: 130 },
  6: { width: 140, height: 140 },
};

const RoadmapItem = ({ item, index, activeIndex, itemRefs, isLast }) => {
  const isActive = index === activeIndex;
  const isLeft = index % 2 === 0;

  const desktopSize = roadmapImageSizes[index] || {
    width: 140,
    height: 140,
  };

  const mobileSize = roadmapMobileImageSizes[index] || {
    width: 100,
    height: 100,
  };

  const renderMedia = (size, isDesktop = false) => {
    if (item.animation) {
      return (
        <div style={{ width: size.width, height: size.height }} className={isDesktop ? "flex-shrink-0" : ""}>
          <Lottie animationData={item.animation} loop={true} />
        </div>
      );
    }
    return (
      <Image
        src={item.image}
        alt={item.title}
        width={size.width}
        height={size.height}
        className={`object-contain rounded-lg ${isDesktop ? "flex-shrink-0" : ""}`}
        unoptimized
      />
    );
  };

  return (
    <div
      ref={(el) => (itemRefs.current[index] = el)}
      className={`relative ${isLast ? "mb-0" : "mb-16 md:mb-24"}`}
      style={{ minHeight: "140px" }}
    >
      {/* Desktop Dot */}
      <div
        className={`hidden md:block z-10 w-4 h-4 rounded-full border-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isActive
            ? "bg-black border-black scale-125 shadow-lg"
            : "bg-gray-400 border-gray-500"
        }`}
      ></div>

      {/* Mobile Layout */}
      <div className="md:hidden pl-8 pr-4 flex flex-col items-start text-left space-y-4">
        <div className="w-full flex justify-center">
          {renderMedia(mobileSize, false)}
        </div>

        <div className="relative w-full">
          {/* Mobile Dot */}
          <div
            className={`md:hidden absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 z-10 transition-all duration-300 ${
              isActive
                ? "bg-black border-black scale-125 shadow-lg"
                : "bg-gray-400 border-gray-500"
            }`}
          ></div>
          
          <h3 className="text-lg font-bold text-black mb-2">
            {item.title}
          </h3>

          <ul className="list-disc text-gray-700 space-y-1 ml-4">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-wrap items-center">
        {isLeft && (
          <div className="flex items-center gap-4 max-w-md w-1/2 px-2 lg:px-4 -ml-8 lg:-ml-16">
            {renderMedia(desktopSize, true)}

            <div>
              <h3 className="text-base lg:text-xl font-bold text-black mb-2">
                {item.title}
              </h3>

              <ul className="list-disc text-gray-700 space-y-1 ml-4 text-sm lg:text-base">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="w-1/2"></div>

        {!isLeft && (
          <div className="flex items-center gap-4 max-w-md w-1/2 px-2 lg:px-4 justify-end text-left ml-auto -mr-8 lg:-mr-16">
            <div>
              <h3 className="text-base lg:text-xl font-bold text-black mb-2">
                {item.title}
              </h3>

              <ul className="list-disc text-gray-700 space-y-1 mr-4 text-sm lg:text-base">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {renderMedia(desktopSize, true)}
          </div>
        )}
      </div>
    </div>
  );
};

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let smallestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();

        const offset = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );

        if (offset < smallestDistance) {
          smallestDistance = offset;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pt-4 pb-0 md:pt-20 md:pb-0 bg-[#f5f5f5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-20">
           <h2 className="text-4xl sm:text-5xl font-bold text-black">
            OUR ROADMAP
          </h2>
          <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-3">
            Infra Infinity
          </p>

       
        </div>

        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2 z-0"></div>

          {/* Mobile Line */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-[2px] bg-gray-300 z-0"></div>

          {roadmapData.map((item, index) => (
            <RoadmapItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              itemRefs={itemRefs}
              isLast={index === roadmapData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;