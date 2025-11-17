"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

export default function Buy() {
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
      <section className="relative lg:mb-[60px] w-full min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
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
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] md:w-[70%] lg:w-[60%]">
          <div className="bg-[#8C8C8C66]  backdrop-blur-md border border-[#8C8C8C66] rounded-md p-4 md:p-6 shadow-lg">
            {/* Buttons Section */}
            <div className="flex justify-center gap-4 mb-4">
              <button className="px-20 py-2 rounded-md bg-[#10284C] text-white font-medium shadow hover:bg-gray-100 transition">
                RENT
              </button>
              <button className="px-20 py-2 rounded-md bg-[#10284C]/20 text-white font-medium shadow hover:bg-gray-100 transition">
                BUY
              </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-md shadow-lg flex items-center px-4 py-3">
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
      </section>

      <div className="w-full flex justify-center pt-10 lg:pt-18 ">
      <div className="flex flex-wrap justify-center gap-4 bg-[#8C8C8C66] md:px-10 p-4 rounded-md shadow-md">
  {/* Filter Items */}
  {["Property Type", "Location", "Beds", "Baths", "Price"].map((label, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-[#0B1F3A] text-white px-4 py-3 rounded-md w-[180px] shadow-lg hover:bg-[#10284C] transition"
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
  <button className="flex items-center justify-center ml-10 bg-[#0B1F3A]/40 text-white px-6 py-3 rounded-md w-[180px] font-medium shadow-lg hover:bg-[#5c1eff] transition">
    <span>+ More Filters</span>
  </button>
</div>

      </div>

      <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%] h-[1.5px] bg-white my-2 md:my-2 mx-auto"></div>

      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
      <div className="bg-gray-50">
        {/* Header Bar */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-full mx-auto flex items-center justify-between">
            {/* LIST/MAP Toggle Buttons */}
            <div className="flex items-center bg-[#001730] rounded-lg p-1">
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
      <div className="flex h-[calc(100vh-120px)]">
        {/* Left Section: Property List (50%) */}
        <div className="w-full md:w-1/2 overflow-y-auto bg-white p-4">
          <div className="space-y-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex p-4 rounded-lg">
                  {/* Image Section - Left */}
                 
  {/* Image Section - Left */}
  <div className="relative w-[320px] h-[192px] flex-shrink-0">
    <Image
      src={property.image}
      alt={property.title}
      fill
      className="object-cover rounded-lg"
    />
 
</div>


                  {/* Details Section - Right */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#001730] mb-1">
                        {property.title}
                      </h3>
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
                <div className="flex items-center justify-between text-[#10284C] text-sm mb-4">
                  <div className="flex items-center gap-1 bg-white shadow p-2 px-6 rounded-md">
                    <Image
                      src="/Icon (1).png"
                      alt="Beds"
                      width={18}
                      height={18}
                    />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-2 px-6 rounded-md">
                    <Image
                      src="/Icon.png"
                      alt="Baths"
                      width={18}
                      height={18}
                    />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-2 px-6 rounded-md">
                    <Image
                      src="/Icon (2).png"
                      alt="Area"
                      width={18}
                      height={18}
                    />
                    <span>{property.area}</span>
                  </div>
                 
                </div>
                <div className="w-[100%]  h-[1px] bg-gray-200 my-3 "></div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
  <p className="text-lg font-bold text-[#001730] m-0">
    {property.price} QAR<span className="text-[0.8rem]">/per month</span>
  </p>

  <button className="flex items-center gap-2 bg-[#001730] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#002d52] transition-colors">
    <span>Details</span>
    <ArrowRight size={16} className="ml-10" />
  </button>
</div>


                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Properties Button */}
          <div className="mt-6 mb-4">
  <button className="w-full bg-[#001730] text-white py-3 rounded-md font-medium hover:bg-[#002d52] transition-colors flex items-center justify-between px-8">
    <span>Load More Properties</span>
    <ArrowRight size={18} />
  </button>
</div>

        </div>

        {/* Right Section: Map (50%) */}
        <div className="hidden md:block w-1/2 relative bg-gray-200">
          {/* Map Container */}
          <div className="w-full h-full relative">
            {/* Placeholder for Map - You can integrate Google Maps or Mapbox here */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="text-lg font-semibold mb-2">Map View</p>
                <p className="text-sm">Interactive map will be displayed here</p>
                <p className="text-xs mt-2">Property markers with prices (e.g., 98K, 108K, 407K)</p>
              </div>
            </div>

            {/* Property Markers (Example) */}
            <div className="absolute top-20 left-20 bg-white px-2 py-1 rounded shadow-md text-sm font-semibold text-[#001730]">
              98K
            </div>
            <div className="absolute top-40 left-40 bg-white px-2 py-1 rounded shadow-md text-sm font-semibold text-[#001730]">
              108K
            </div>
            <div className="absolute top-60 left-60 bg-orange-500 px-2 py-1 rounded shadow-md text-sm font-semibold text-white">
              156K
            </div>
            <div className="absolute top-80 left-30 bg-white px-2 py-1 rounded shadow-md text-sm font-semibold text-[#001730]">
              407K
            </div>
            <div className="absolute top-100 left-50 bg-white px-2 py-1 rounded shadow-md text-sm font-semibold text-[#001730]">
              121K
            </div>
            <div className="absolute top-120 left-70 bg-white px-2 py-1 rounded shadow-md text-sm font-semibold text-[#001730]">
              357K
            </div>

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 bg-white rounded-md shadow-lg flex flex-col">
              <button className="px-3 py-2 border-b border-gray-200 hover:bg-gray-50">
                <span className="text-lg font-semibold">+</span>
              </button>
              <button className="px-3 py-2 hover:bg-gray-50">
                <span className="text-lg font-semibold">-</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <section className="py-10 md:py-10 bg-gray-100">
        <div className="mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-2">
                Ready to Find Your Dream Property ?
              </h2>
              <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 md:my-2"></div>
              <p className="text-base md:text-base text-[#333333] leading-relaxed">
                Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice. Al Asmakh is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button className="bg-[#001730] text-white px-8 py-4 rounded-lg font-medium text-base md:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg">
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
