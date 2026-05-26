import React from "react";

const steps = [
  {
    num: "01",
    title: "Dream &\nDiscover",
    desc: "Dive into our extensive listings and visualize your perfect home. Use our advanced filters to narrow down your search based on location, features, and budget."
  },
  {
    num: "02",
    title: "Pre\nApproval",
    desc: "Get pre-approved for a mortgage seamlessly within our platform. We connect you with trusted lenders to understand your options and borrowing power."
  },
  {
    num: "03",
    title: "Schedule\nViewings",
    desc: "Sit back, relax, and let us handle the scheduling! We'll coordinate all property viewings, ensure you maximize your time and efficiency."
  },
  {
    num: "04",
    title: "Offer &\nNegotiation",
    desc: "We act as your champion through the offer and negotiation process, leveraging our expertise and experience to secure your dream home on your terms."
  },
  {
    num: "05",
    title: "Secure Your\nDream",
    desc: "We'll walk you through every step, answer any questions you may have, and handle all the details so you can focus on the excitement of your new home."
  },
  {
    num: "06",
    title: "Welcome\nHome!",
    desc: "Unlock a world of possibilities! Step into your dream home, a place where countless happy memories will be created and a fulfilling future awaits."
  }
];

const StepCard = ({ step }) => (
  <div className="flex flex-col">
    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6 shadow-sm bg-white">
      <span className="text-gray-600 text-sm font-medium italic">{step.num}</span>
    </div>
    <h3 className="text-3xl lg:text-4xl font-medium text-black leading-tight mb-6 whitespace-pre-line">
      {step.title}
    </h3>
    <div className="w-12 h-[1px] bg-gray-300 mb-6"></div>
    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
      {step.desc}
    </p>
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-[#f5f5f5]">
      
      {/* Heading and Descriptions */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12 xl:px-24 pt-8 md:pt-16 pb-12">
        
        {/* Top Section: Title Left, Description Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-black sm:text-6xl xl:text-7xl shrink-0">
            ABOUT US
          </h2>
          
          <div className="lg:max-w-[450px] xl:max-w-[550px]">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At InfraInfinity, we are dedicated to transforming your vision into reality. We combine creativity, strategic insight, and deep industry knowledge to deliver exceptional real estate solutions that exceed expectations.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 mt-12 md:mt-16 mb-8 md:mb-12"></div>

        {/* Stats Section matching the image */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-2 sm:gap-x-4 md:flex md:flex-row md:justify-between md:items-center mb-16 md:mb-24 text-gray-500 text-[10px] sm:text-[11px] md:text-sm font-semibold tracking-wider uppercase">
          <div className="flex items-start md:items-center gap-1.5 md:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#c3d198] shrink-0 mt-1 md:mt-0"></div>
            <span className="text-left leading-snug">50+ Luxury<br className="block sm:hidden" /> Projects Delivered</span>
          </div>
          <div className="flex justify-end md:justify-start">
            <div className="flex items-start md:items-center gap-1.5 md:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#c3d198] shrink-0 mt-1 md:mt-0"></div>
              <span className="text-left leading-snug">1,000+ Happy<br className="block sm:hidden" /> Families</span>
            </div>
          </div>
          <div className="flex items-start md:items-center gap-1.5 md:gap-2 justify-center col-span-2 md:col-span-1 md:justify-start">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#c3d198] shrink-0 mt-1 md:mt-0"></div>
            <span className="text-left leading-snug">15+ Years Of Excellence</span>
          </div>
        </div>

        {/* Centered Steps Intro */}
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <p className="text-gray-500 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            A few steps to the home you've been dreaming of, with just 6 steps you can follow that.
          </p>
        </div>

      </div>

      {/* Steps Grid Section */}
      <div className="mx-auto max-w-[1400px] px-4 pb-8 lg:pb-12 sm:px-8 lg:px-12 xl:px-24">
        
        {/* Steps Grid (Desktop) - Staggered */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-16 mt-0">
            <StepCard step={steps[0]} />
            <StepCard step={steps[3]} />
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-16 mt-32">
            <StepCard step={steps[1]} />
            <StepCard step={steps[4]} />
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-16 mt-64">
            <StepCard step={steps[2]} />
            <StepCard step={steps[5]} />
          </div>
        </div>

        {/* Steps Grid (Mobile & Tablet) - Sequential */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:hidden">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} />
          ))}
        </div>

      </div>
        
    </section>
  );
};

export default AboutUs;
