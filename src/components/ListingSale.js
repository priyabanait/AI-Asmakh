"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

export default function Sale() {
  const [viewMode, setViewMode] = useState("LIST"); // "LIST" or "MAP"

  const properties = [
    {
      id: 1,
      title: "Floresta Tower",
      location: "The Pearl Island, Doha",
      bedrooms: 4,
      bathrooms: 2,
      area: "450",
      price: "280,000",
      image: "/div.property-thumbnail-wrapper.png",
    },
    {
      id: 2,
      title: "Floresta Tower",
      location: "The Pearl Island, Doha",
      bedrooms: 4,
      bathrooms: 2,
      area: "450",
      price: "280,000",
     image: "/div.property-thumbnail-wrapper.png",
    },
    {
      id: 3,
      title: "Floresta Tower",
      location: "The Pearl Island, Doha",
      bedrooms: 4,
      bathrooms: 2,
      area: "450",
      price: "280,000",
      image: "/div.property-thumbnail-wrapper.png",
    },
    {
      id: 4,
      title: "Floresta Tower",
      location: "The Pearl Island, Doha",
      bedrooms: 4,
      bathrooms: 2,
      area: "450",
      price: "280,000",
      image: "/div.property-thumbnail-wrapper.png",
    },
  ];

  return (
    <div>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full min-h-[50vh] lg:min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
        {/* Background Image */}
        <Image
          src="/902cae874699fd9c9c5d9434e4c89be550197da7 (1).jpg"
          alt="City Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* 🔍 Search Bar (Half on BG, Half outside) */}
        {/* Mobile Version */}
        <div className="absolute left-1/2 bottom-0 mb-8  transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] lg:hidden">
          <div className="space-y-3">
            {/* Transaction Type Selector - Separate Box */}
            <div className="bg-[#8C8C8C66] backdrop-blur-md border rounded-md border-[#8C8C8C66]  p-3 shadow-md">
              <div className="flex justify-center gap-2">
                <button className="px-8 py-2 rounded-md  bg-[#10284C]  text-white font-medium shadow transition">
                  RENT
                </button>
                <button className="px-8 py-2 rounded-md bg-[#10284C]/20 text-white font-medium shadow transition">
                  BUY
                </button>
              </div>
            </div>

            {/* Search Bar - Separate Box */}
            <div className="bg-[#8C8C8C66] backdrop-blur-md border rounded-md border-[#8C8C8C66]  p-3 shadow-md">
              <div className="bg-white rounded-md shadow-sm flex items-center px-2 py-2">
                <button className="p-2 bg-[#10284C] rounded-md mr-2 flex items-center justify-center h-8 w-8 flex-shrink-0">
                  <Search className="text-white h-4 w-4" />
                </button>
                <input
                  type="text"
                  placeholder="Type here .."
                  className="flex-1 text-gray-800 text-sm bg-transparent outline-none placeholder:text-gray-400"
                />
                <button className="p-2 bg-[#10284C] rounded-md ml-2 flex items-center justify-center h-8 w-8 flex-shrink-0">
                  <Mic className="text-white h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons - Separate Box */}
            <div className="bg-[#8C8C8C66] backdrop-blur-md border rounded-md border-[#8C8C8C66]  p-3 shadow-md">
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#10284C] text-white px-3 py-2.5 rounded-md font-medium shadow-lg text-sm">
                  <SlidersHorizontal className="h-4 w-4" />
                  <div className="h-4 w-[1px] bg-white"></div>
                  <span>Filters</span>
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#10284C] text-white px-3 py-2.5 rounded-md font-medium shadow-lg text-sm">
                <Image
      src= "/Icon (4).png"
      alt="List Icon"
      width={16}
      height={16}
      className="text-white"
    />
                  <span>Map View</span>
                </button>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="text-center text-gray-600 text-sm font-medium pt-3  pb-2">
              Showing 10 of 50
              <div className="w-[100%] h-[1px] bg-gray-300 my-2 mb-4  px-10"></div>
            </div>
           
          </div>
          
        </div>

        {/* Desktop Version */}
        <div className="absolute left-1/2 bottom-0 mb-4 transform -translate-x-1/2 translate-y-1/2 z-20 w-[70%] lg:w-[60%] hidden lg:block">
          <div className="bg-[#8C8C8C66] backdrop-blur-md border border-[#8C8C8C66] rounded-md p-4 lg:p-6 shadow-lg">
            {/* Buttons Section */}
            <div className="flex justify-center gap-4 mb-4">
              <button className="px-20 py-2 rounded-md bg-[#10284C]/20 text-white font-medium shadow  transition">
                RENT
              </button>
              <button className="px-20 py-2 rounded-md bg-[#10284C] text-white font-medium shadow  transition">
                BUY
              </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-md shadow-lg flex items-center px-4 mx-20 py-3">
            <div className="p-2 bg-[#10284C] rounded-md mr-2 flex items-center justify-center h-[28px] w-[28px]">
            <Search className="text-white h-4 w-4" />
          </div>
              <input
                type="text"
                placeholder="Explore and discover everything about our trusted agents..."
                className="flex-1 text-gray-800 text-sm lg:text-base bg-transparent outline-none placeholder:text-gray-500"
              />
              <Mic className="text-gray-500 h-5 w-5 ml-3" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Properties Grid */}
      <div className="block lg:hidden mt-20 bg-[#F9F9F9] py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <div
              key={index}
              className="w-full p-4 bg-gray-200 border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-fill rounded-md"
                />
              </div>

              {/* Property Info */}
              <div className="pt-2">
                <h3 className="font-semibold text-[#10284C] text-base mb-1 leading-snug line-clamp-2">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-[#10284C] text-sm mb-3">
                  <Image
                    src="/Vector.png"
                    alt="Location"
                    width={12}
                    height={12}
                    className="mr-2"
                  />
                  <span>{property.location}</span>
                </div>

                {/* Bed/Bath/Area Info */}
                <div className="grid grid-cols-3 gap-2 text-[#10284C] text-sm mb-4">
  <div className="flex items-center gap-1 bg-white shadow p-2 px-4 rounded-md">
    <Image src="/Icon (1).png" alt="Beds" width={18} height={18} />
    <span>{property.bedrooms}</span>
  </div>

  <div className="flex items-center gap-1 bg-white shadow p-2 px-4 rounded-md">
    <Image src="/Icon.png" alt="Baths" width={18} height={18} />
    <span>{property.bathrooms}</span>
  </div>

  <div className="flex items-center gap-1 bg-white shadow p-2 px-4 rounded-md">
    <Image src="/Icon (2).png" alt="Area" width={18} height={18} />
    <span>{property.area}</span>
  </div>
</div>


                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-[#10284C]">{property.price} QAR</p>

                  <button className="bg-[#10284C] text-white text-sm font-semibold px-4 py-2 rounded flex items-center gap-2 transition hover:bg-[#1b3a70]">
                    <span>Details</span>
                    <FaArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex w-full justify-center lg:pt-20 ">
  <div className="grid w-full bg-[#8C8C8C66] p-4 lg:mx-20 rounded-md shadow-md 
                  gap-4 grid-cols-1  lg:grid-cols-3 xl:grid-cols-6">

    {/* Filter Items */}
    {["Property Type", "Location", "Beds", "Baths", "Price"].map((label, index) => (
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
     {/* More Filters Button */}
  <button className="flex items-center justify-center  bg-[#0B1F3A]/40 text-white px-6 py-3 rounded-md  font-medium shadow-lg hover:bg-[#5c1eff] transition">
    <span>+ More Filters</span>
  </button>
  </div>
</div>

      <div className="hidden lg:block w-[100%] h-[1px] bg-gray-300 my-4 mt-6 px-10"></div>

      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
      <div className="hidden lg:block bg-gray-50">
        {/* Header Bar */}
        <div className="bg-white  border-gray-200 px-4  lg:px-8 py-4">
          <div className="hidden lg:flex max-w-full mx-auto  items-center justify-between">
            {/* LIST/MAP Toggle Buttons */}
            <div className="flex items-center  bg-[#001730] rounded-lg p-1">
  {/* LIST Button */}
  <button
    onClick={() => setViewMode("LIST")}
    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
      viewMode === "LIST"
        ? "bg-white text-[#001730]"
        : "text-white"
    }`}
  >
    <Image
      src={viewMode === "LIST" ? "/Icon (3).png" : "/Icon (4).png"}
      alt="List Icon"
      width={18}
      height={18}
      className="text-white"
    />
    <span>LIST</span>
  </button>

  {/* MAP Button */}
  <button
    onClick={() => setViewMode("MAP")}
    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
      viewMode === "MAP"
        ? "bg-white text-[#001730]"
        : "text-white"
    }`}
  >
    <Image
      src={viewMode === "MAP" ? "/Icon (3).png" : "/Icon (4).png"}
      alt="Map Icon"
      width={18}
      height={18}
      className="text-white"
    />
    <span>MAP</span>
  </button>
</div>



            {/* Showing Count */}
            <div className="text-gray-600 text-sm font-medium">
              Showing 5 of 50
            </div>
          </div>
        </div>

      {/* Main Content: List and Map */}
      <div
  className="grid gap-6 px-20 bg-[#F9F9F9] lg:grid-cols-3 xl:grid-cols-4 p-4"
>
  {properties.map((property, index) => (
    <div
      key={index}
      className="w-full p-4 bg-gray-200 border  rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative w-full h-[220px]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-fill rounded-md"
        />
      </div>

      {/* Property Info */}
      <div className="pt-2">
        <h3 className="font-semibold text-[#10284C] text-base mb-1 leading-snug line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-[#10284C] text-sm mb-3">
          <Image
            src="/Vector.png"
            alt="Location"
            width={12}
            height={12}
            className="mr-2"
          />
          <span>{property.location}</span>
        </div>

        {/* Bed/Bath/Area Info */}
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
<div className="flex items-center gap-1 bg-gray-50 shadow p-2 px-4   rounded-md justify-center">
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
<div className="flex items-center gap-1 bg-gray-50 shadow p-2 px-4  rounded-md justify-center">
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


        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-[#10284C]">{property.price} QAR</p>

          <button className="bg-[#10284C] text-white text-sm font-semibold px-5 py-2 rounded flex items-center gap-2 transition hover:bg-[#1b3a70]">
            <span>Details</span>
            <FaArrowRight size={14} className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
      <section className="py-10 lg:py-10 bg-gray-100">
        <div className="mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[20px] lg:text-[30px] font-semibold text-[#001730] mb-2">
                Ready to Find Your Dream Property ?
              </h2>
              <div className="w-[80%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 lg:my-2"></div>
              <p className="text-base lg:text-base text-[#333333] leading-relaxed">
                Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice. Al Asmakh is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button className="bg-[#001730] text-white px-8 py-4 rounded-lg font-medium text-base lg:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg">
                Contact Team
                <FaArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
