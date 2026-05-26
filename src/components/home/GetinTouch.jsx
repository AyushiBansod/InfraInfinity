"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What areas do you provide services in?",
    answer:
      "We primarily operate in prime metropolitan areas, offering premium real estate services for both residential and commercial properties globally.",
  },
  {
    question: "How do I start the buying process?",
    answer:
      "Simply fill out the contact form on this page or give us a call. One of our dedicated agents will reach out to schedule an initial consultation to understand your needs.",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Yes, we provide comprehensive property management services for investors and homeowners, ensuring your property is well-maintained and profitable.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, we pride ourselves on transparency. All our fees and commission structures are clearly discussed and outlined before you sign any agreements.",
  },
];

export default function GetinTouch() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const sectionRef = useRef(null);
  const faqRef = useRef(null);
  const formRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(faqRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        formRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative w-full min-h-screen pt-16 pb-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-center overflow-hidden bg-[#f5f5f5]">

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: FAQ Section (50%) */}
          <div ref={faqRef} className="w-full lg:w-1/2 flex flex-col pt-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-black mb-6">
              Have Questions? We’ve Got Answers.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-10 max-w-lg leading-relaxed">
              Find answers to common questions about our real estate services, buying process, and property management.
              
            </p>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:bg-gray-50 shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                    >
                      <span className="text-black font-medium text-base sm:text-lg pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-black transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 sm:px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Form Section (50%) */}
          <div ref={formRef} className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="p-6 sm:p-10 rounded-[32px] bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-3xl sm:text-4xl font-semibold text-black mb-3">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                Ready to find your dream property? Drop us a message and we'll get back to you shortly.
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-widest pl-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-[#f5f5f5] border border-transparent rounded-xl px-4 py-3.5 text-black placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-widest pl-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-[#f5f5f5] border border-transparent rounded-xl px-4 py-3.5 text-black placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#f5f5f5] border border-transparent rounded-xl px-4 py-3.5 text-black placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest pl-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full bg-[#f5f5f5] border border-transparent rounded-xl px-4 py-3.5 text-black placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="mt-6 flex items-center justify-center gap-2 w-full text-xs md:text-sm font-medium tracking-widest uppercase border border-gray-400 rounded-full px-8 py-3 text-gray-700 hover:bg-gray-200 transition duration-300 cursor-pointer"
                >
                  SEND MESSAGE
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
