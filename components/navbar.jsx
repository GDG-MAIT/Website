"use client";

import { useState, useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const googleColors = [
    "hover:text-[#4285F4]", // Blue
    "hover:text-[#EA4335]", // Red
    "hover:text-[#FBBC05]", // Yellow
    "hover:text-[#34A853]", // Green
  ];

  const navItems = [
    { name: "Home", path: "/" }, // Updated to point to root
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav ref={menuRef} className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md">
      <div className="container flex h-14 items-center justify-between px-6">
        {/* Logo - Links to Home */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="GDG Logo"
            width={32}
            height={32}
            className="h-6 w-auto md:h-8"
          />
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.div className="space-y-1.5">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-gray-700"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-gray-700"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-gray-700"
            />
          </motion.div>
        </Button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex md:items-center">
          <NavigationMenuList className="flex gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${googleColors[index % googleColors.length]} text-gray-800`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <NavigationMenu className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <NavigationMenuList className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`block w-full px-4 py-2 text-sm font-medium transition-colors rounded-md ${googleColors[index % googleColors.length]} text-gray-800`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </nav>
  );
}