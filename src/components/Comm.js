"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon, Check, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import {  Calendar, Building2 } from "lucide-react";

export default function Commercial() {
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
  const properties = [
    {
      id: 1,
      title: "Pearl Towers",
      location: "The Pearl-Qatar",
      year: "2023",
      units: "120",
      status: "100% Completed",
      statusType: "completed",
      price: "QAR 800,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Pearl Towers",
      location: "The Pearl-Qatar",
      year: "2023",
      units: "120",
      status: "100% Completed",
      statusType: "completed",
      price: "QAR 800,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Pearl Towers",
      location: "The Pearl-Qatar",
      year: "2023",
      units: "120",
      status: "30% Ongoing",
      statusType: "ongoing",
      price: "QAR 800,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  

  return (
    <div>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
        {/* Background Image */}
        <Image
          src="/Home page (2).png"
          alt="City Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* 🔍 Search Bar (Half on BG, Half outside) */}
        <div className="absolute left-1/2 lg:bottom-20 bottom-56 shadow-md transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] px-4 sm:px-0">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 shadow-md md:gap-6  mb-10 md:mb-10">
    {[
      { value: "34", label: "Residential" },
      { value: "16", label: "Commercial" },
      { value: "02", label: "Industrial" },
      { value: "05", label: "Others" },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center  bg-black/10 backdrop-blur-md border border-white/20 rounded-md p-3 sm:p-4 md:p-6 text-white h-28 sm:h-32 md:h-32 lg:h-32"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          {item.value}
        </h2>
        <div className="w-[60%] h-[1px] bg-gray-400 md:mb-2"></div>
        <p className="text-white text-[10px] sm:text-xs md:text-sm text-center">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>


    

<div className="absolute w-full flex justify-center px-4 lg:px-40 bottom-14 lg:bottom-[-45px]">
  <div
    className="
      flex w-full overflow-x-auto sm:flex-wrap border border-white/20
      lg:mx-24 justify-center gap-3 sm:gap-4 lg:mt-0
      bg-[#8C8C8C66] p-3 lg:p-4 rounded-md shadow-md
    "
  >
    {["LUXURY", "COMMERCIAL", "INDUSTRIAL"].map((label, index) => (
      <div
        key={index}
        className="
          flex items-center justify-center bg-[#0B1F3A] text-white
          px-4 py-2 rounded-md 
          w-[100px] lg:w-[260px]
          shadow-lg hover:bg-[#10284C] transition
        "
      >
        <span className="text-xs sm:text-sm font-medium">{label}</span>
      </div>
    ))}
  </div>
</div>


      {/* Mobile Filters Button - Absolute positioned in hero section */}
      <div className="absolute left-1/2 bottom-[-45px] mb-4 transform -translate-x-1/2 z-20 w-[100%] px-4 md:hidden">
        <div ref={filtersRef} className="flex flex-col gap-3 bg-[#8C8C8C66] border border-white/20 p-3 px-10  rounded-md shadow-md">
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
              {["Property Type", "Location", "Status", "Date"].map((label, index) => (
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
                  <ArrowDown size={16} className="opacity-80" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </section>

      {/* Desktop Filter Items */}
      <div className="hidden md:flex w-full justify-center pt-20 py-10">
        <div className="flex w-full flex-wrap justify-center gap-4 bg-[#8C8C8C66] p-4 lg:mx-20 rounded-md shadow-md">
          {/* Filter Items */}
          {["Property Type", "Location", "Status", "Date"].map((label, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md w-[280px] shadow-lg hover:bg-[#10284C] transition"
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
       
      <div className="w-[100%] h-[1px] bg-gray-300 my-4 mt-14  sm:my-6 lg:mt-20 px-4 sm:px-6 md:px-10"></div>
      <div className="text-gray-600 text-center lg:text-right px-4 sm:px-6 md:px-10 text-xs sm:text-sm font-medium">
              Showing 10 of 50
            </div>
      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
     
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 p-4 sm:p-6 bg-gray-50">
  {properties.map((property) => (
    <div
      key={property.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-80 lg:h-80 object-cover"
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2">
          <span className="bg-[#8C8C8C66] text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
            Completed
          </span>
          <span className="bg-[#8C8C8C66] text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
          Commercial
          </span>
        </div>

        {/* Title + Description overlay with blur */}
        <div className="absolute backdrop-blur-md bg-gradient-to-b from-gray-100/20 to-gray-100 shadow-md bottom-0 left-0 right-0 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            {/* Title on the left */}
            <h3 className="text-base lg:text-xl font-semibold text-[#10284C] truncate w-full sm:w-auto">
              {property.title}
            </h3>

            {/* Location on the right */}
            <div className="flex items-center text-[#10284C] text-xs sm:text-sm sm:ml-4 flex-shrink-0">
              <MapPin size={12} className="sm:w-[14px] sm:h-[14px] mr-1 text-[#10284C]" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>
          <div className="w-[60%] h-[1px] bg-gray-500 my-2 lg:my-2 "></div>
          <p className="text-xs sm:text-sm text-[#10284C] mt-1 leading-snug">
            Luxury residential towers offering stunning sea views and premium
            residential, commercial, and leisure facilities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Info Row */}
        <div className="flex flex-row justify-between items-stretch sm:items-center gap-1 lg:gap-1 text-sm text-gray-600">

          {/* Year */}
          <div className="flex font-semibold text-xs lg:text-sm items-center gap-1 shadow-md bg-white p-2 py-2 sm:py-3 rounded-md px-3 lg:px-4 flex-1 sm:flex-initial">
            <img
              src="/Time.png"
              alt="calendar"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            {property.year}
          </div>

          {/* Units */}
          <div className="flex font-semibold text-xs lg:text-sm items-center gap-1 shadow-md bg-white p-2 py-2 sm:py-3 rounded-md px-3 sm:px-4 flex-1 sm:flex-initial">
            <img
              src="/3_Icons Used_Project Dvt 1 (1).png"
              alt="building"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            {property.units} Units
          </div>

          {/* Status */}
          <div className="flex flex-col items-start gap-1 min-w-[142px] lg:min-w-[120px] shadow-md bg-white p-2 rounded-md px-3 sm:px-4 flex-1 sm:flex-initial">
            <div className="flex  items-center gap-2">
              {property.statusType === "completed" ? (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
              <span
                className={`text-xs lg:text-sm font-semibold whitespace-nowrap ${
                  property.statusType === "completed"
                    ? "text-green-700"
                    : "text-yellow-700"
                }`}
              >
                {property.status}
              </span>
            </div>
            {property.statusType === "completed" && (
              <div className="w-full h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-green-500 rounded-full"></div>
              </div>
            )}
            {property.statusType === "ongoing" && (
              <div className="w-full h-1 bg-yellow-200 rounded-full overflow-hidden">
                <div className="w-[30%] h-full bg-yellow-500 rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="p-2 bg-gray-100 shadow-md mt-2 rounded-md">
        <div className="flex flex-wrap gap-1 text-[8px] lg:text-xs text-white">
          <span className="bg-gray-400 px-2 py-1 rounded-md">Smart City</span>
          <span className="bg-gray-400 px-2 py-1 rounded-md">
            Private Beach Access
          </span>
          <span className="bg-gray-400 px-2 py-1 rounded-md">
            Concierge Service
          </span>
          <span className="bg-gray-400 px-2 py-1 rounded-md">+1</span>
        </div>
        </div>
        {/* Map */}
        <img
          src="/div.property-thumbnail-wrapper (2).png"
          alt="map"
          className="w-full h-20 sm:h-24 md:h-28 mt-3 sm:mt-4 object-cover"
        />
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-3 sm:px-4 py-2 sm:py-3 
     flex flex-row items-center justify-between gap-3 sm:gap-2 rounded-b-xl">

  <div>
    <p className="text-[10px] sm:text-xs text-gray-500">Starting at</p>
    <p className="text-base lg:text-lg font-semibold text-[#10284C]">
      {property.price}
    </p>
  </div>

  <button className="flex items-center gap-2 bg-[#001730] text-white 
        px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium 
         transition-colors 
        w-auto justify-center">
    <span>View Details</span>
    <ArrowRight size={14} className="sm:w-4 sm:h-4 ml-10" />
  </button>

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
