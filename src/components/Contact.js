"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, SlidersHorizontal } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

export default function MeetOurAgents() {
    const [showFilters, setShowFilters] = useState(false); // Toggle for mobile filters
    const filtersRef = useRef(null); // Ref for filter container

    // Close filters when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (showFilters && filtersRef.current && !filtersRef.current.contains(event.target)) {
          setShowFilters(false);
        }
      };

      if (showFilters) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [showFilters]);

    const agents = [
        {
          name: "Sarah Johnson",
          title: "Luxury Property Specialist",
          properties: 45,
          clients: 127,
          specialties: "West Bay, Commercial, Penthouse",
          languages: "English, Spanish, Arabic",
          image: "/div.png", // replace with your actual image path
        },
        {
          name: "Mohammed Al-Thani",
          title: "Luxury Property Specialist",
          properties: 45,
          clients: 127,
          specialties: "West Bay, Commercial, Penthouse",
          languages: "English, Spanish, Arabic",
          image: "/div (2).png", // replace with your actual image path
        },
      ];
  return (
    <div>
    {/* ---------- HERO SECTION ---------- */}
    <section className="relative w-full min-h-[80vh] lg:min-h-[80vh] flex flex-col items-center justify-center overflow-visible">
      {/* Background Image */}
      <Image
        src="/WhatsApp Image 2025-11-08 at 10.47.12 PM.jpeg"
        alt="City Skyline"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 md:px-8 mt-10 md:mt-36">
        {/* Transparent Box for Heading */}
        <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-md px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 shadow-lg max-w-[900px] mx-auto w-[90%] sm:w-[80%]">
          <h1 className="text-white text-lg sm:text-xl md:text-[30px] lg:text-[30px] font-semibold mb-2">
            MEET OUR EXPERT AGENTS
          </h1>
          <div className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%] h-[1px] mt-2 bg-white mb-3 md:mb-4 mx-auto"></div>
          <p className="text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm font-medium">
            Our experienced team of property professionals is here to guide
            you through every step of your real estate journey.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6 lg:mt-4 mb-10 lg:mb-16 w-[90%] sm:w-[80%] md:w-auto px-4">
          {[
            { value: "50+", label: "Expert Agents" },
            { value: "1,200+", label: "Properties Sold" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Years Experience" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/20 rounded-md p-3 sm:p-4 md:p-6 md:px-14 text-white h-28 sm:h-32 md:h-auto"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                {item.value}
              </h2>
              <div className="w-[60%] sm:w-[70%] md:w-[60%] lg:w-[90%] h-[1px] bg-white my-2 sm:my-3 md:mb-4 mx-auto"></div>
              <p className="text-white/70 text-[10px] sm:text-xs md:text-sm text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 Search Bar (Half on BG, Half outside) */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20 w-[70%] lg:w-[60%] hidden md:block">
          <div className="bg-[#8C8C8C66] backdrop-blur-md border border-[#8C8C8C66] rounded-md p-4 lg:p-4 shadow-lg">
            {/* Buttons Section */}
            

            {/* Search Bar */}
            <div className="bg-white rounded-md shadow-lg flex items-center px-4 mx-20 py-3">
            <div className="p-2 bg-[#10284C] rounded-md mr-2 flex items-center justify-center h-[28px] w-[28px]">
            <Search className="text-white h-4 w-4" />
          </div>
              <input
                type="text"
                placeholder="Explore and discover everything about our trusted agents..."
                className="flex-1 text-gray-800 text-sm md:text-base bg-transparent outline-none placeholder:text-gray-500"
              />
              <Mic className="text-gray-500 h-5 w-5 ml-3" />
            </div>
          </div>
        </div>

      {/* Mobile Filters Button - Absolute positioned in hero section */}
      <div className="absolute left-1/2 bottom-[-45px] mb-4 transform -translate-x-1/2 z-20 w-[90%] px-4 md:hidden">
        <div ref={filtersRef} className="flex flex-col gap-3 bg-[#8C8C8C66] border border-white/20 p-3 px-10 rounded-md shadow-md">
          {/* Single Filters Button for Mobile */}
          <div
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md shadow-lg hover:bg-[#10284C] transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* Filter Icon */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} />
                <div className="h-5 w-[1px] bg-gray-400 opacity-60"></div>
              </div>
              {/* Label */}
              <span className="text-sm font-medium">Filters</span>
            </div>
            {/* Down Arrow - Rotates when open */}
            <ArrowDown
              size={16}
              className={`text-white opacity-80 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Filter Items - Shown when button is clicked */}
          {showFilters && (
            <div className="flex flex-col gap-3">
              {["Location", "Specialities", "Reviews", "Languages"].map((label, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md w-full shadow-lg hover:bg-[#10284C] transition"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon + Divider */}
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <div className="h-5 w-[1px] bg-gray-400 opacity-60"></div>
                    </div>

                    {/* Label */}
                    <span className="text-sm font-medium">{label}</span>
                  </div>

                  {/* Down Arrow */}
                  <ArrowDown size={16} className="text-white opacity-80" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Desktop Filter Items */}
    <div className="hidden md:flex w-full justify-center pt-16 py-10">
  <div
    className="
      grid w-full bg-[#8C8C8C66] p-4 lg:mx-40 rounded-md shadow-md gap-4
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-20
    "
  >
    {/* Filter Items */}
    {["Location", "Specialities", "Reviews", "Languages"].map((label, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md shadow-lg hover:bg-[#10284C] transition"
      >
        <div className="flex items-center gap-4">
          {/* Icon + Divider */}
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <div className="h-5 w-[1px] bg-gray-400 opacity-60"></div>
          </div>

          {/* Label */}
          <span className="text-sm font-medium">{label}</span>
        </div>

        {/* Down Arrow */}
        <ArrowDown size={16} className="opacity-80" />
      </div>
    ))}
  </div>
</div>

    <div className="w-[100%] h-[1px] bg-gray-300 my-4 mt-14 sm:my-6 lg:mt-0 px-4 sm:px-6 md:px-10"></div>
    <div className="text-gray-600 text-sm text-right font-medium mr-2">
              Showing 5 of 50
            </div>
    {/* ---------- AGENTS SECTION ---------- */}
    <section className="py-12 sm:py-16 md:py-24 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {agents.concat(agents).map((agent, index) => (
  <div
    key={index}
    className="shadow-lg rounded-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 bg-gray-200"
  >
    {/* Combined Header Section (Image + Name + Title) */}
    <div className="shadow-md bg-gray-100 rounded-md overflow-hidden mx-2 sm:mx-4 mt-2 sm:mt-4">
      {/* Profile Image */}
      <div className="relative w-full h-80">
        <Image
          src={agent.image}
          alt={agent.title}
          fill
          className="object-fill"
        />
        
        {/* Name + Title - Absolute positioned over image */}
        <div className="absolute text-center backdrop-blur-md bg-gradient-to-b from-gray-100/20 to-gray-100 shadow-lg bottom-0 left-0 right-0 p-3 lg:p-4">
          <h3 className="text-base sm:text-lg font-semibold text-[#10284C]">
            {agent.name}
          </h3>
          <p className="text-[#10284C] text-xs sm:text-sm">{agent.title}</p>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="text-center mt-3 sm:mt-4 px-3 sm:px-4 pb-4 sm:pb-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 lg:gap-2 mb-3 sm:mb-4">
  {/* Box 1 */}
  <div className="shadow-md p-2 px-4 sm:px-6 md:px-8 bg-gray-100 rounded-md text-center">
    <p className="font-semibold text-[#10284C] text-base sm:text-lg">
      {agent.properties}
    </p>
    <div className="h-[1.5px] bg-gray-200 my-1 sm:my-2 md:my-2 mx-auto"></div>
    <p className="text-[#10284C] text-[10px] sm:text-xs">Properties</p>
  </div>

  {/* Box 2 */}
  <div className="shadow-md p-2 px-4 sm:px-6 md:px-8 bg-gray-100 rounded-md text-center">
    <p className="font-semibold text-[#10284C] text-base sm:text-lg">
      {agent.clients}
    </p>
    <div className="h-[1.5px] bg-gray-200 my-1 sm:my-2 md:my-2 mx-auto"></div>
    <p className="text-[#10284C] text-[10px] sm:text-xs">Clients Served</p>
  </div>
</div>


      {/* Info */}
      <div className="text-left text-xs sm:text-sm mb-2 shadow-md bg-gray-100 p-2 rounded-md">
        <p className="text-gray-400">Specialities</p>
        <p className="text-gray-700 font-medium text-xs text-center sm:text-sm">{agent.specialties}</p>
      </div>

      <div className="text-left text-xs sm:text-sm mb-3 sm:mb-4 shadow-md bg-gray-100 p-2 rounded-md">
        <p className="text-gray-400">Languages</p>
        <p className="text-gray-700 font-medium text-xs text-center sm:text-sm">{agent.languages}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#10284C] text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#0d1f3a] transition">
          Call Agent
          <FaArrowRight size={12} className="sm:w-[14px] sm:h-[14px] ml-6" />
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#10284C] text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#0d1f3a] transition">
          Send Email
          <FaArrowRight size={12} className="sm:w-[14px] sm:h-[14px] ml-6" />
        </button>
      </div>
    </div>
  </div>
))}

      </div>
    </section>
    <section className="py-6 sm:py-8 md:py-10 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-[18px] sm:text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-2">
              Ready to Find Your Dream Property ?
            </h2>
            <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 md:my-2"></div>
            <p className="text-sm sm:text-base md:text-base text-[#333333] sm:mr-4 md:mr-10 leading-relaxed">
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice. Al Asmakh is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
          </div>
          
          {/* Right Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button className="bg-[#001730] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg w-full sm:w-auto justify-center sm:justify-start">
              Contact Team
              <FaArrowRight size={16} className="sm:w-[18px] sm:h-[18px] sm:ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
