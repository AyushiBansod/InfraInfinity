"use client";

import React, { useState, useEffect } from "react";

const FadeIn = ({
  children,
  delay = 0,
  duration = 1000,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

const AnimatedHeading = ({
  text,
  initialDelay = 200,
  charDelay = 30,
  transitionDuration = 500,
  className = "",
  style = {},
}) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        let currentLineCharIndex = 0;

        return (
          <div key={lineIndex} className="block break-words">
            {words.map((word, wordIndex) => {
              const wordChars = word.split("");
              const wordSpan = (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {wordChars.map((char) => {
                    const delay =
                      lineIndex * line.length * charDelay +
                      currentLineCharIndex * charDelay;
                    
                    currentLineCharIndex++;

                    return (
                      <span
                        key={currentLineCharIndex}
                        className="inline-block transition-all"
                        style={{
                          opacity: startAnimation ? 1 : 0,
                          transform: startAnimation
                            ? "translateX(0)"
                            : "translateX(-18px)",
                          transitionDuration: `${transitionDuration}ms`,
                          transitionDelay: `${delay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );

              const isLastWord = wordIndex === words.length - 1;
              if (!isLastWord) {
                currentLineCharIndex++; // Advance index for the space
              }

              return (
                <React.Fragment key={wordIndex}>
                  {wordSpan}
                  {!isLastWord && " "}
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
};

export default function HeroBackground() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-end">
      
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-8 sm:pb-10 md:pb-14 lg:pb-16 pt-32 sm:pt-36">
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          
          {/* Left Side */}
          <div className="w-full">
            
            <AnimatedHeading
              text={"Shaping tomorrow\nwith vision and action."}
              className="
                text-[34px]
                leading-[1.05]
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
                font-normal
                text-white
                mb-4
                max-w-[95%]
                sm:max-w-3xl
              "
              style={{
                letterSpacing: "-0.05em",
              }}
            />

            <FadeIn delay={700} duration={1000}>
              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-gray-200
                  max-w-xl
                  leading-relaxed
                  mb-6
                "
              >
                We back visionaries and craft ventures that define
                what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={1000} duration={1000}>
              <div
                className="
                  liquid-glass
                  border
                  border-white/20
                  rounded-2xl
                  px-4
                  sm:px-6
                  py-3
                  w-fit
                  max-w-full
                "
              >
                <span
                  className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl
                    xl:text-2xl
                    text-white
                    font-light
                    leading-relaxed
                    break-words
                  "
                >
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}