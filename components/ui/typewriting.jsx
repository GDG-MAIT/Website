"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export const TypewriterEffect = () => {
  const words = [
    { text: "Google", className: "text-green-500" },
    { text: "Developers", className: "text-yellow-500" },
    { text: "Group", className: "text-blue-500" },
    { text: "(MAIT)", className: "text-red-500" },
    
  ];

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: (index) => 0.1 * index, // Fixed stagger implementation
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn(`text-black opacity-100 hidden`, word.className)}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-30" // Reduced transparency (20%)
          priority
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center w-full">
        Welcome to Our Developer Community
      </h1>

      <div className="w-full max-w-2xl mx-auto"> {/* Reduced max-width to match Google's search box */}
  <div className={cn(
    "text-xl sm:text-2xl md:text-3xl font-medium text-left w-full", // Reduced font size and changed to text-left
    "px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm", // Google's exact styling
    "hover:shadow-md transition-shadow duration-200 flex items-center", // Flex layout for icons
    "relative" // For absolute positioning of icons
  )}>
    {/* Magnifying glass icon on the left */}
    <svg 
      className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>

    {/* Typewriter text */}
    <div className="flex-grow">
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block rounded-sm w-[2px] h-6 md:h-8 bg-blue-500 ml-1"
      />
    </div>

    {/* Microphone and search icons on the right */}
    <div className="flex items-center space-x-2 ml-3">
      {/* Microphone icon */}
      <svg 
        className="w-5 h-5 text-blue-500 flex-shrink-0" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" y1="19" x2="12" y2="23"></line>
        <line x1="8" y1="23" x2="16" y2="23"></line>
      </svg>

      {/* Search icon (visible on mobile) */}
      <svg 
        className="w-5 h-5 text-blue-500 flex-shrink-0 md:hidden" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  </div>
</div>

      <p className="text-xl  md:text-2xl text-gray-900 mt-8 text-center w-full max-w-3xl">
        Join us for workshops, hackathons, and cutting-edge technology discussions
      </p>
    </div>
  );
};

export function GoogleDevelopersTypewriter() {
  return (
    <div className="w-full">
      <TypewriterEffect />
    </div>
  );
}