"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// images
import Image from "next/image";
import phoneImage from "@/assets/images/appointment-discount-phone-mockup.png";
import smritiLogo from "@/assets/images/smriti-Logo.png";
import sLetterImg from "@/assets/images/s-letter.png";

const navigation = [
  { name: "Services", href: "#" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Appointments", href: "#" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#" },
];

function Navbar() {
  const { setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/* <Link href="/">Home</Link>
        <Link href="/booking">Book</Link>
        <Link href="/admin">Admin</Link>
        <div className="absolute right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-120 transition-all
                translate-y-0  dark:-rotate-90
                dark:translate-y-full dark:scale-0 fill-[#FFCC33] text-[#FFCC33] 
                duration-1000
                "
                />
                <Moon
                  className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all
                translate-y-full  dark:rotate-0 
                dark:translate-y-0 dark:scale-120 fill-[#FFCC33] text-[#FFCC33]
                duration-1000 "
                />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="S Letter" src={sLetterImg} className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
