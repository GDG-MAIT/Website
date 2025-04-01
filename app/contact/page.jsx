"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

const spring = { type: "spring", damping: 10, stiffness: 100 };

const ContactUs = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none z-[-1] opacity-5 bg-center bg-cover bg-repeat bg-[url('/bg.png')]" />
      <Navbar />
      <div className="flex justify-center mx-10 pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us through any of these channels or send us a message
            directly.
          </p>
        </motion.div>
      </div>

      <div className="flex md:flex-row flex-col mt-10 gap-20 md:gap-32 items-center md:items-start">
        <div className="flex justify-center md:justify-end md:w-1/2 px-4">
          <div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={spring}
              className="text-4xl md:text-5xl font-bold mb-8 -ml-2 text-[#91969f]"
            >
              Find us on
            </motion.h1>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, ...spring }}
              className="flex flex-col space-y-4"
            >
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-4 text-xl text-gray-600 hover:text-[#0088cc] transition-transform hover:scale-105"
                >
                  <img src="/contactUs/telegram.svg" alt="Telegram icon" className="w-12 h-12 pr-1" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-4 text-xl text-gray-600 hover:text-black transition-transform hover:scale-105"
                >
                  <img src="/contactUs/twitter.svg" alt="Twitter icon" className="w-12 h-12 pr-1" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/google-developer-students-club-mait/"
                  className="flex items-center space-x-4 text-xl text-gray-600 hover:text-blue-800 transition-transform hover:scale-105"
                >
                  <img src="/contactUs/linkedIn.svg" alt="LinkedIn icon" className="w-12 h-12 pr-1" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gdg_on_campus_mait/"
                  className="flex items-center space-x-4 text-xl text-gray-600 hover:text-[#C13584] transition-transform hover:scale-105"
                >
                  <img src="/contactUs/instagram.svg" alt="Instagram icon" className="w-12 h-12 pr-1" />
                  Instagram
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
        <motion.div
          className="flex flex-col md:w-1/2 min-h-full place-items-start px-10 md:px-0 md:items-start mb-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={spring}
        >
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <img src="/contactUs/GN.png" alt="background element" className="w-[100px] h-[100px]" />
            <span className="font-bold text-3xl md:text-5xl text-green-500">oogle</span>
          </motion.div>
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <img src="/contactUs/DN.png" alt="background element" className="w-[140px] h-[140px]" />
            <span className="font-bold text-3xl md:text-5xl text-yellow-300 -ml-7">eveloper</span>
          </motion.div>
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <img src="/contactUs/GN.png" alt="background element" className="w-[100px] h-[100px]" />
            <span className="font-bold text-3xl md:text-5xl text-blue-400">roups</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
