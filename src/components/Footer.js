"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter, FaSnapchat, FaTiktok, FaThreads } from "react-icons/fa6";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      className="bg-[#001730] text-white py-8 sm:py-7 md:py-14 3xl:py-8 4xl:py-10 5xl:py-12"
      style={{ borderRadius: "5px" }}
    >
      <div className="w-full px-4 sm:px-5 md:px-6 3xl:px-8 4xl:px-12 5xl:px-12 max-w-[98%] mx-auto space-y-4 sm:space-y-5 md:space-y-6">

        {/* ✅ Partner Logos (Now on Top for Mobile) */}
        {/* ———— */}

        {/* Logo + Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 sm:pb-5 md:pb-5 3xl:pb-6 4xl:pb-7 5xl:pb-8 gap-4 sm:gap-5">
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <Image
              src="/images/w-alasmakh.png"
              alt="Al-Asmakh Logo"
              width={150}
              height={180}
              className="object-contain w-32 sm:w-36 md:w-[140px] 3xl:w-[180px] 4xl:w-[200px] 5xl:w-[220px]"
            />
          </div>

          {/* Navbar Links (❌ hidden on mobile) */}
          <ul className="hidden md:flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12 text-[9px] sm:text-[10px] md:text-[11px] 3xl:text-[12px] 4xl:text-[13px] 5xl:text-[15px]">
            {["HOME", "LISTINGS", "SERVICES", "DEVELOPMENT", "ABOUT US", "CONTACT"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-gray-300 cursor-pointer transition-all flex items-center gap-1"
                >
                  {item}
                  <svg
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 12L12 18l6-6z" />
                  </svg>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6 w-full">
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 5xl:gap-5 text-[8px] sm:text-[9px] 5xl:text-[11px] justify-center md:justify-start">
            {/* ❌ Hidden “Follow Us” text on mobile */}
            <p className="hidden md:block text-[14px]">Follow Us</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 5xl:gap-6">
              <FaYoutube className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaFacebookF className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaInstagram className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaXTwitter className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaLinkedinIn className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaSnapchat className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaTiktok className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
              <FaThreads className="hover:text-gray-400 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 5xl:w-6 5xl:h-6" />
            </div>
          </div>

          {/* Newsletter (hidden on mobile) */}
          <div
            style={{ borderRadius: "5px" }}
            className="hidden md:flex flex-row items-center bg-white shadow-md overflow-hidden w-full sm:w-[300px] md:w-[520px] md:ml-auto 3xl:w-[650px] 4xl:w-[750px] 5xl:w-[900px] rounded-md h-[36px] sm:h-[38px] md:h-[40px] 3xl:h-[42px] 4xl:h-[44px] 5xl:h-[46px]"
          >
            <div className="flex items-center px-2 sm:px-4 md:px-5 5xl:px-6 bg-transparent flex-shrink-0">
              <span className="text-gray-800 font-bold uppercase text-[8px] sm:text-[9px] md:text-[10px] 3xl:text-[11px] 4xl:text-[12px] 5xl:text-[13px] whitespace-nowrap">
                Newsletter
              </span>
              <div className="hidden sm:block h-4 w-px bg-gray-600 mx-3"></div>
            </div>

            <input
              type="email"
              placeholder="Enter your Email here..."
              className="flex-1 px-2 sm:px-4 5xl:px-6 py-1 outline-none text-[#181717] text-[9px] sm:text-[10px] md:text-[11px] 3xl:text-[12px] 4xl:text-[13px] 5xl:text-[14px] border-none min-w-0 placeholder:text-gray-400"
            />

            <button
              style={{ backgroundColor: "#001730", borderRadius: "5px", fontSize: "10px" }}
              className="px-4 py-1 sm:px-6 md:px-8 5xl:px-10 text-white text-[9px] sm:text-[10px] md:text-[11px] 3xl:text-[12px] 4xl:text-[13px] 5xl:text-[14px] font-normal hover:bg-[#002d52] transition-all flex items-center justify-between gap-1.5 sm:gap-2 rounded-md flex-shrink-0 mr-2 h-[26px] w-[150px]"
            >
              Subscribe
              <RiArrowRightLine className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Footer Section */}
        <div className="hidden md:flex flex-row justify-between items-center text-gray-300 gap-4 sm:gap-6 border-t border-gray-700 pt-5 mt-4">
          <div className="text-left w-full md:w-auto">
            <p className="text-[8px] sm:text-[9px] md:text-[10px] 5xl:text-[12px] leading-relaxed">
              Address: Floor 28, Majlis Al Taawon Street, West Bay, P.O. Box
              15068, Doha, State of Qatar.
              <br />
              Privacy Terms &nbsp; | &nbsp; Terms of Use
              <br />
              Copyright © 2025 Al Asmakh Real Estate
            </p>
          </div>

          <div className="flex items-center gap-6 md:gap-8 4xl:gap-10 5xl:gap-12 justify-end">
            <div className="w-10 h-10 md:w-12 md:h-12 4xl:w-14 4xl:h-14">
              <Image
                src="/images/act.png"
                alt="ACT Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 4xl:w-14 4xl:h-14">
              <Image
                src="/images/ukas.png"
                alt="UKAS Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* ✅ Mobile Footer Section */}
        <div className="md:hidden text-center text-gray-300 border-t border-gray-700 pt-6 mt-6">
          {/* Partner Logos */}
          <div className="flex items-center justify-center gap-8 sm:gap-10 mb-6 flex-wrap">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/act.png"
                alt="ACT Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/ukas.png"
                alt="UKAS Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Address */}
          <p className="text-[9px] sm:text-[10px] leading-relaxed">
            Address: Floor 28, Majlis Al Taawon Street, West Bay, P.O. Box
            15068, Doha, State of Qatar.
            <br />
            Privacy Terms &nbsp; | &nbsp; Terms of Use
            <br />
            Copyright © 2025 Al Asmakh Real Estate
          </p>
        </div>
      </div>
    </footer>
  );
}
