"use client";

import React, { useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

const navLinks = ["Home", "Services", "About", "Contact"];

const menuVariants = {
  hidden: {
    clipPath: "circle(0% at 92% 6%)",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  visible: {
    clipPath: "circle(150% at 92% 6%)",
    opacity: 1,

    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-16 pt-3 sm:pt-6">
        <nav
          className="
            rounded-2xl
            px-4
            sm:px-5
            py-2 sm:py-3
            flex
            items-center
            justify-between
            backdrop-blur-xl
            bg-white/70
            border
            border-black/10
            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          "
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-50"
          >
            <Image
              src={logo}
              alt="VEX Logo"
              width={120}
              height={120}
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain scale-[1.6] sm:scale-[1.8] transform origin-left transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-black">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-gray-600 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 hover:scale-[1.03] transition-all duration-300">
              Start a Chat
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-50">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              rounded
              size={24}
              duration={0.5}
              distance="sm"
              color="#000000"
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="
              fixed
              inset-0
              z-40
              md:hidden
              overflow-hidden
              bg-black/90
              backdrop-blur-3xl
            "
          >
            {/* Background Glow */}
            <div className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="
                  absolute
                  top-[-10%]
                  right-[-10%]
                  w-[400px]
                  h-[400px]
                  bg-white/10
                  rounded-full
                  blur-3xl
                "
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="
                  absolute
                  bottom-[-20%]
                  left-[-10%]
                  w-[300px]
                  h-[300px]
                  bg-white/5
                  rounded-full
                  blur-3xl
                "
              />
            </div>

            {/* Menu Content */}
            <div className="relative flex flex-col items-center justify-center h-full px-6">
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    variants={linkVariants}
                    whileHover={{
                      scale: 1.03,
                      letterSpacing: "0.02em",
                    }}
                    className="
                      text-white
                      text-[42px]
                      sm:text-6xl
                      font-semibold
                      tracking-[-0.04em]
                      leading-none
                      transition-all
                      duration-300
                    "
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}

                {/* CTA Button */}
                <motion.button
                  variants={linkVariants}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    mt-8
                    bg-white
                    text-black
                    px-10
                    py-4
                    rounded-2xl
                    text-lg
                    font-medium
                    shadow-2xl
                    hover:bg-gray-100
                    transition-all
                  "
                >
                  Start a Chat
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
