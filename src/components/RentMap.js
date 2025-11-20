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
      <section className="relative lg:mb-[50px] w-full min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center overflow-visible">
        {/* Background Image */}
        <Image
          src="/e2a4624c82afeb7461113d23daa704d9218a5bd9.png"
          alt="City Skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* 🔍 Search Bar (Half on BG, Half outside) */}
        {/* Mobile Version */}
        <div className="absolute left-1/2 bottom-0 mb-8 transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] md:hidden">
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
            </div>
            <div className="w-[100%] h-[1px] bg-gray-300 my-2 mb-4  px-10"></div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="absolute left-1/2 bottom-0 mb-4 transform -translate-x-1/2 translate-y-1/2 z-20 w-[70%] lg:w-[60%] hidden md:block">
          <div className="bg-[#8C8C8C66] backdrop-blur-md border border-[#8C8C8C66] rounded-md p-4 md:p-6 shadow-lg">
            {/* Buttons Section */}
            <div className="flex justify-center gap-4 mb-4">
              <button className="px-20 py-2 rounded-md bg-[#10284C] text-white font-medium shadow  transition">
                RENT
              </button>
              <button className="px-20 py-2 rounded-md bg-[#10284C]/20 text-white font-medium shadow  transition">
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
                className="flex-1 text-gray-800 text-sm md:text-base bg-transparent outline-none placeholder:text-gray-500"
              />
              <Mic className="text-gray-500 h-5 w-5 ml-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Map View */}
      <div className="block md:hidden w-full mt-[130px] relative" style={{ height: "calc(100vh - 350px)", minHeight: "60vh" }}>
        {/* Los Angeles Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355503344!2d-118.69192047499999!3d34.02016129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>

       
       

        {/* Zoom Controls - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-white rounded-md shadow-lg flex flex-col z-10">
          <button className="px-3 py-2 border-b border-gray-200 hover:bg-gray-50">
            <span className="text-lg font-semibold">+</span>
          </button>
          <button className="px-3 py-2 hover:bg-gray-50">
            <span className="text-lg font-semibold">-</span>
          </button>
        </div>
      </div>

      <div className="hidden md:flex w-full justify-center pt-6 ">
  <div className="grid w-full bg-[#8C8C8C66] p-4 lg:mx-20 rounded-md shadow-md 
                  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

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
        <div className="bg-white  border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
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
      <div className="hidden lg:flex h-[calc(100vh-120px)]">
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
    {property.price} QAR
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
            {/* Los Angeles Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355503344!2d-118.69192047499999!3d34.02016129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>

           

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 bg-white rounded-md shadow-lg flex flex-col z-10">
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
