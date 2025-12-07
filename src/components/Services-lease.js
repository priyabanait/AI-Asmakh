"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon, Check, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import {  Calendar, Building2 } from "lucide-react";

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
  const properties = [
    {
      id: 1,
      title: "Pearl Towers",
      location: "The Pearl-Qatar",
      year: "2023",
      units: "120",
     bedrooms: 4,
      bathrooms: 2,
      area: "450",
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
      bedrooms: 4,
      bathrooms: 2,
      area: "450",
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
      bedrooms: 4,
      bathrooms: 2,
      area: "450",
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
      <section className="relative w-full min-h-[80vh] lg:min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
        {/* Background Image */}
        <Image
          src="/34b6d68fb7144d551cf5fa1b8d4c3a4048604f46.jpg"
          alt="City Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />
        
        {/* Hero Text Box - Mobile and Desktop */}
        <div className="absolute left-1/2 bottom-[355px] lg:bottom-[160px] mb-4 transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] lg:w-[58%] px-4 lg:px-0">
          <div className="bg-[#8C8C8C66] backdrop-blur-md border border-[#8C8C8C66] rounded-md p-4  lg:p-12 shadow-lg">
            <p className="text-center text-xl  lg:text-3xl font-semibold text-white">LUXURY PROPERTIES FOR LEASE</p>
            <div className="w-[60%]  lg:w-[40%] h-[1px] bg-gray-300 lg:mb-2 mt-4  lg:mt-8 mx-auto my-2 lg:my-4"></div>
            <p className="text-[10px] lg:text-xs text-white text-center">Discover our exclusive collection of premium residential and commercial properties available for lease in the most desirable locations.</p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="absolute left-1/2 bottom-[145px] lg:bottom-[-20px] transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] lg:w-[65%] px-4 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-10 lg:mb-10">
            {[
              { value: "05", label: "Residential" },
              { value: "02", label: "Commercial" },
              { value: "01", label: "Industrial" },
              { value: "02", label: "Others" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-black/10 backdrop-blur-md border border-white/20 rounded-md p-3 lg:p-4 lg:p-6 text-white h-28 lg:h-32 lg:h-32 lg:h-32"
              >
                <h2 className="text-lg  lg:text-2xl font-semibold mb-2">
                  {item.value}
                </h2>
                <div className="w-[60%] h-[1px] bg-gray-400 lg:mb-2"></div>
                <p className="text-[#0B1F3A] text-[10px]  lg:text-sm text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Filters Button - Absolute positioned in hero section */}
        <div className="absolute left-1/2 bottom-[-45px] mb-4 transform -translate-x-1/2 z-20 w-[100%] px-4 lg:hidden">
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
              {["Location", "Type", "Featured", "Date"].map((label, index) => (
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
      <div className="hidden lg:flex w-full justify-center pt-20">
  <div className="grid w-full bg-[#8C8C8C66] p-4 lg:mx-20 px-20 rounded-md shadow-md 
                  gap-4 grid-cols-1 lg:grid-cols-4">

    {/* Filter Items */}
    {["Location", "Type", "Featured", "Date"].map((label, index) => (
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
       
      <div className="w-[100%] h-[1px] bg-gray-300 my-4 mt-14 lg:my-6 lg:mt-6 px-4  lg:px-10"></div>
      <div className="text-gray-600 text-center lg:text-right px-4  lg:px-10 text-xs lg:text-sm font-medium">
              Showing 5 of 50
            </div>
      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
     
     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 px-4  lg:px-20 p-4 lg:p-6 ">
  {properties.map((property) => (
    <div
      key={property.id}
      className=" rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-80 s lg:h-80 object-cover"
        />
        <div className="absolute top-2 lg:top-3 right-2 lg:right-3 flex gap-1 lg:gap-2">
          <span className="bg-[#8C8C8C66] text-white text-[10px] lg:text-xs px-2 py-1 rounded-md">
            Completed
          </span>
          <span className="bg-[#8C8C8C66] text-white text-[10px] lg:text-xs px-2 py-1 rounded-md">
            Residential
          </span>
        </div>

        {/* Title and description on image */}
        <div className="absolute backdrop-blur-md bg-gradient-to-b from-gray-100/20 to-gray-100 shadow-md bottom-0 left-0 right-0 p-3 lg:p-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
            {/* Title on the left */}
            <h3 className="text-base lg:text-xl font-semibold text-[#10284C] truncate w-full lg:w-auto">
              {property.title}
            </h3>

            {/* Location on the right */}
            <div className="flex items-center text-[#10284C] text-xs lg:text-sm lg:ml-4 flex-shrink-0">
              <MapPin size={12} className="lg:w-[14px] lg:h-[14px] mr-1 text-[#10284C]" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>

          <p className="text-xs lg:text-sm text-[#10284C] mt-1 leading-snug">
            Luxury residential towers offering stunning sea views and premium
            residential, commercial, and leisure facilities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-2">
        {/* Units and status */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4 text-[#10284C] text-sm mb-4">

{/* Beds */}
<div className="flex items-center gap-1 bg-gray-50 shadow p-2 px-4  rounded-md justify-center">
  <Image
    src="/Icon (1).png"
    alt="Beds"
    width={16}
    height={16}
    className="w-[18px] h-[18px]"
  />
  <span className="text-xs lg:text-sm">{property.bedrooms}</span>
</div>

{/* Baths */}
<div className="flex items-center gap-1 bg-white shadow p-2 px-4   rounded-md justify-center">
  <Image
    src="/Icon.png"
    alt="Baths"
    width={16}
    height={16}
    className="w-[18px] h-[18px]"
  />
  <span className="text-xs lg:text-sm">{property.bathrooms}</span>
</div>

{/* Area */}
<div className="flex items-center gap-1 bg-white shadow p-2 px-4  rounded-md justify-center">
  <Image
    src="/Icon (2).png"
    alt="Area"
    width={16}
    height={16}
    className="w-[18px] h-[18px]"
  />
  <span className="text-xs lg:text-sm">{property.area}</span>
</div>

</div>


        {/* Tags */}
        <div className="p-2  bg-gray-100 shadow-md rounded-md">
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-1 ">

{/* Box 1 */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center flex-wrap border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.7rem] font-semibold">
Gym
</div>

{/* Box 2 */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center flex-wrap border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.7rem] font-semibold">
Private Beach 
</div>

{/* Box 3 */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center flex-wrap border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.7rem] font-semibold">
Garden
</div>

{/* Small +1 box */}
<div className="bg-gray-300 text-white flex items-center justify-center text-center border border-gray-200 shadow-sm rounded-md px-2 py-2 text-[0.7rem] font-semibold w-fit">
  +1
</div>

</div>
        </div>
       

        {/* Map Image */}
        <img
          src="/div.property-thumbnail-wrapper (2).png"
          alt="map"
          className="w-full h-20 lg:h-28 mt-3 lg:mt-4 object-cover"
        />
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 px-3 lg:px-4 py-2 lg:py-3 
     flex flex-row items-center justify-between gap-3 lg:gap-2 rounded-b-xl">

  <div>
    <p className="text-[10px] lg:text-xs text-gray-500">Starting at</p>
    <p className="text-base lg:text-lg font-semibold text-[#10284C]">
      {property.price}
    </p>
  </div>

  <button className="flex items-center gap-2 bg-[#001730] text-white 
        px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium 
         transition-colors 
        w-auto justify-center">
    <span>View Details</span>
    <ArrowRight size={14} className="lg:w-4 lg:h-4 ml-10" />
  </button>

</div>
    </div>
  ))}
</div>

    <section className="py-6  lg:py-10 bg-gray-100">
        <div className="mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6  lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[18px]  lg:text-[30px] font-semibold text-[#001730] mb-2">
              Ready to Find Your Perfect Space ?
              </h2>
              <div className="w-[80%]  lg:w-[60%] h-[1.5px] bg-gray-300 my-2 lg:my-2"></div>
              <p className="text-sm  lg:text-base text-[#333333]  lg:mr-10 leading-relaxed">
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Al Asmakh is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <button className="bg-[#001730] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-md font-medium text-sm  lg:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg w-full lg:w-auto justify-center lg:justify-start">
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
