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
      <section className="relative w-full min-h-[70vh] lg:min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
        {/* Background Image */}
        <Image
          src="/c4630f1da5043e1a5c0d91a308c6487bfbad67a8.jpg"
          alt="City Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* 🔍 Search Bar (Half on BG, Half outside) */}
        <div className="absolute left-1/2 lg:bottom-[110px] bottom-56 shadow-md transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] lg:w-[50%] px-4 lg:px-0">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 shadow-md lg:gap-6  mb-10 lg:mb-10">
    {[
      { value: "34", label: "Total Projects" },
      { value: "16", label: "Completed " },
      { value: "02", label: "Ongoing" },
      { value: "05", label: "Upcoming" },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center  bg-black/10 backdrop-blur-md border border-white/20 rounded-md p-3  lg:p-6 text-white h-28 lg:h-32"
      >
        <h2 className="text-lg  lg:text-2xl font-semibold mb-2">
          {item.value}
        </h2>
        <div className="w-[60%] h-[1px] bg-gray-400 lg:mb-2"></div>
        <p className="text-white text-[10px] lg:text-sm text-center">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>


    

<div className="absolute w-full flex justify-center px-4 lg:px-40 bottom-14 lg:bottom-[-45px]">
  <div
    className="
      grid w-full overflow-x-auto lg:overflow-visible
      border border-white/20 lg:mx-24 bg-[#8C8C8C66]
      p-3 lg:p-8 lg:px-8 rounded-md shadow-md gap-3 lg:gap-4
      grid-cols-3  lg:grid-cols-3
      justify-center 
    "
  >
    {["LUXURY", "COMMERCIAL", "INDUSTRIAL"].map((label, index) => (
      <div
        key={index}
        className="
          flex items-center justify-center bg-[#0B1F3A] text-white
          px-4 py-2 rounded-md shadow-lg hover:bg-[#10284C] transition
        "
      >
        <span className="text-xs lg:text-sm font-medium">{label}</span>
      </div>
    ))}
  </div>
</div>



      {/* Mobile Filters Button - Absolute positioned in hero section */}
      <div className="absolute left-1/2 bottom-[-45px] mb-4 transform -translate-x-1/2 z-20 w-[100%] px-4 lg:hidden">
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
      <div className="hidden lg:flex w-full justify-center pt-16 ">
  <div className="grid w-full bg-[#8C8C8C66] p-4 lg:mx-20 px-20 rounded-md shadow-md 
                  gap-4 grid-cols-1 lg:grid-cols-4">

    {/* Filter Items */}
    {["Property Type", "Location", "Status", "Date"].map((label, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 
                   rounded-md shadow-lg hover:bg-[#10284C] transition"
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

       
      <div className="w-[100%] h-[1px] bg-gray-300 my-4 mt-14  lg:my-6 lg:mt-6 px-4  lg:px-10"></div>
      <div className="text-gray-600 text-center lg:text-right px-4 lg:px-10 text-xs lg:text-sm font-medium">
              Showing 10 of 50
            </div>
      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
     
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4   lg:px-10 xl:px-20 p-4 lg:p-6">
  {properties.map((property) => (
    <div
      key={property.id}
      className="bg-gray-100 rounded-md  shadow-md "
    >
      {/* Image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-80 lg:h-80 object-cover"
        />

        {/* Top Labels */}
        <div className="absolute top-2 lg:top-3 right-2 lg:right-3 flex flex-wrap gap-1 lg:gap-2">
          <span className="bg-[#8C8C8C66] text-white text-[10px] lg:text-xs px-2 py-1 rounded-md">
            Completed
          </span>
          <span className="bg-[#8C8C8C66] text-white text-[10px] lg:text-xs px-2 py-1 rounded-md">
            Commercial
          </span>
        </div>

        {/* Title + Location Overlay */}
        <div className="absolute backdrop-blur-md bg-gradient-to-b from-gray-100/20 to-gray-100 shadow-md bottom-0 left-0 right-0 p-3 lg:p-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
            <h3 className="text-base lg:text-xl font-semibold text-[#10284C] truncate w-full lg:w-auto">
              {property.title}
            </h3>

            <div className="flex items-center text-[#10284C] text-xs lg:text-sm flex-shrink-0">
              <MapPin size={12} className="mr-1" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>

          <div className="w-[60%] h-[1px] bg-gray-500 my-2"></div>

          <p className="text-xs lg:text-sm text-[#10284C] leading-snug">
            Luxury residential towers offering stunning sea views and premium
            residential, commercial, and leisure facilities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="">

  {/* Info Row — GRID RESPONSIVE */}
  <div className="grid grid-cols-[1fr_1fr_auto] gap-1 mt-2 ">

{/* Year Box */}
<div
  className="
    flex items-center gap-2
    bg-gray-50 border border-gray-200 shadow-sm 
    rounded-md px-2 py-2
  "
>
  <img
    src="/Time.png"
    className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5object-contain"
  />
  <span className="lg:text-xs xl:text-sm font-semibold text-[#10284C]">
    {property.year}
  </span>
</div>

{/* Units Box */}
<div
  className="
    flex items-center gap-2
    bg-white border border-gray-200 shadow-sm 
    rounded-md px-2 py-2
  "
>
  <img
    src="/3_Icons Used_Project Dvt 1 (1).png"
    className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5object-contain"
  />
  <span className="lg:text-xs xl:text-sm font-semibold text-[#10284C]">
    {property.units} <span className='text-xs text-gray-500'>Units</span>
  </span>
</div>

{/* Status Box */}
<div
  className="
    flex flex-col justify-center
    bg-white border border-gray-200 shadow-sm 
    rounded-md px-3 py-2
    w-fit
  "
>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
      <Check size={12} className="text-white" />
    </div>

    <span className="text-xs font-semibold">100%</span>
    <span className="text-xs text-gray-500">Completed</span>
  </div>

  <div className="w-full h-1 bg-green-200 rounded-full mt-1">
    <div className="w-full h-full bg-green-500 rounded-full"></div>
  </div>
</div>

</div>




  {/* TAGS — GRID RESPONSIVE */}
{/* TAGS — GRID RESPONSIVE */}
<div className='p-2 shadow-md bg-gray-50 rounded-md mt-2'>
<div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-1 ">

{/* Box 1 */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center flex-wrap border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.6rem] font-semibold">
  Smart City
</div>

{/* Box 2 */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center flex-wrap border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.6rem] font-semibold">
  Private Beach Access
</div>

{/* Box 3 */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center flex-wrap border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.6rem] font-semibold">
  Concierge Service
</div>

{/* Small +1 box */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.6rem] font-semibold w-fit">
  +1
</div>

</div>
</div>






  {/* Map */}
  <img
    src="/div.property-thumbnail-wrapper (2).png"
    className="w-full h-20  mt-3 object-cover"
  />
</div>


      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 px-3 lg:px-4 py-2 lg:py-3 flex justify-between items-center rounded-b-xl">
        <div>
          <p className="text-[10px] lg:text-xs text-gray-500">Starting at</p>
          <p className="text-base lg:text-lg font-semibold text-[#10284C]">
            {property.price}
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#001730] text-white px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium">
          <span>View Details</span>
          <ArrowRight size={14} className="lg:w-4 lg:h-4 ml-6 lg:ml-10" />
        </button>
      </div>
    </div>
  ))}
</div>


    <section className="py-6  lg:py-10 bg-gray-100">
        <div className="mx-auto px-4  lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[18px] lg:text-[30px] font-semibold text-[#001730] mb-2">
              Ready to Invest in Luxury ?
              </h2>
              <div className="w-[80%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 lg:my-2"></div>
              <p className="text-sm lg:text-base  text-[#333333]  lg:mr-10 leading-relaxed">
              Get in touch with our expert team to discover exclusive investment opportunities and available units in our premium luxury developments. Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Al Asmakh is here to assist you every step of the way
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <button className="bg-[#001730] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-md font-medium text-sm lg:text-base  hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg w-full lg:w-auto justify-center lg:justify-start">
                Contact Expert
                <FaArrowRight size={16} className="lg:w-[18px] lg:h-[18px] lg:ml-3" />
              </button>
              <p className="text-center text-xs lg:text-sm mt-2">Explore Available Units</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
