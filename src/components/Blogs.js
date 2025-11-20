"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Buy() {
  const [viewMode, setViewMode] = useState("LIST"); // "LIST" or "MAP"
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


  const blogs = [
    {
      title: "Discover the Art of Living in Qatar",
      description: "Explore lifestyle stories, community highlights, and home inspirations that define modern living across Qatar.",
     image: "/Image.png",
    },
    {
      title: "Discover the Art of Living in Qatar",
      description: "Explore lifestyle stories, community highlights, and home inspirations that define modern living across Qatar.",
     image: "/Image.png",
    },
    {
      title: "Discover the Art of Living in Qatar",
      description: "Explore lifestyle stories, community highlights, and home inspirations that define modern living across Qatar.",
      image: "/Image.png",
    },
    {
      title: "Discover the Art of Living in Qatar",
      description: "Explore lifestyle stories, community highlights, and home inspirations that define modern living across Qatar.",
      image: "/Image.png",
    },
    {
      title: "Discover the Art of Living in Qatar",
      description: "Explore lifestyle stories, community highlights, and home inspirations that define modern living across Qatar.",
      image: "/Image.png",
    },
  ];

  return (
    <div>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
        {/* Background Image */}
        <Image
          src="/6bb7053353da600ce70375b5767156032c98bac4.jpg"
          alt="City Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* 🔍 Search Bar (Half on BG, Half outside) */}
        <div className="absolute left-1/2 bottom-[150px] lg:bottom-[100px] transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] px-4 sm:px-0  ">
          <div className="bg-[#8C8C8C66] backdrop-blur-md border border-[#8C8C8C66] rounded-md p-10 sm:p-6 lg:p-10 shadow-lg">
            <p className="text-center font-semibold text-lg sm:text-base md:text-lg">Find Knowledge that did not know !</p>
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
                {["Type", "Topic", "Categories", "Date"].map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md w-full shadow-lg hover:bg-[#10284C] transition"
                  >
                    <div className="flex items-center gap-3">
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

        {/* Desktop Filter Items - Half on BG, Half outside */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20 w-full hidden md:flex justify-center px-4 lg:px-10">
  <div
    className="
      grid w-full bg-[#8C8C8C66] p-4 lg:mx-24 px-20 rounded-md shadow-md gap-4
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    "
  >
    {/* Filter Items */}
    {["Type", "Topic", "Categories", "Date"].map((label, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md shadow-lg hover:bg-[#10284C] transition"
      >
        <div className="flex items-center gap-3">
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

      </section>
       
      <div className="w-[100%] h-[1px] bg-gray-300 my-4 mt-14 sm:my-6 lg:mt-20 px-4 sm:px-6 md:px-10"></div>
      <div className="text-gray-600 text-center px-4 sm:px-6 md:px-10 text-xs lg:text-right sm:text-sm font-medium">
        Showing 5 of 50
      </div>
      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-10 lg:px-10 p-4 sm:p-6">
  {blogs.map((blog, i) => (
    <div
      key={i}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Section with Overlapping Button and Text Overlay */}
      <div className="relative w-full h-80">
  <Link href={`/BlogsDetails`}>
    <Image
      src={blog.image}
      alt={blog.title}
      fill
      className="object-fill cursor-pointer"
    />
  </Link>

        {/* EXPLORE Button */}
        <button className="absolute top-4 sm:top-8 left-3 sm:left-4 bg-[#10284C] text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded flex items-center gap-2 hover:bg-[#1b3a70] transition z-10 shadow-md">
          <span>EXPLORE</span>
          <FaArrowRight size={10} className="sm:w-[12px] sm:h-[12px] sm:ml-6" />
        </button>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#10284C]/50 backdrop-blur-sm p-4 sm:p-6 z-10">
          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
            {blog.title}
          </h3>
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed opacity-90">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      <section className="py-6 sm:py-8 md:py-10 bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[18px] sm:text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-2">
                Ready to Invest in Luxury ?
              </h2>
              <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 md:my-2"></div>
              <p className="text-sm sm:text-base md:text-base text-[#333333] sm:mr-4 md:mr-10 leading-relaxed">
                Get in touch with our expert team to discover exclusive investment opportunities and available units in our premium luxury developments. Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Al Asmakh is here to assist you every step of the way
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button className="bg-[#001730] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg w-full sm:w-auto justify-center sm:justify-start">
                Contact Expert
                <FaArrowRight size={16} className="sm:w-[18px] sm:h-[18px] sm:ml-3" />
              </button>
              <p className="text-center text-xs sm:text-sm mt-2">Explore Available Units</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
