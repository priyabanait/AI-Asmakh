"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
export default function Rent() {
  const [viewMode, setViewMode] = useState("LIST"); // "LIST" or "MAP"
  
  const properties = [
    {
      title: "Floresta Tower Floresta Tower Les Maisons Blanches",
      location: "The Pearl Island, Doha",
      price: "280,000 QAR",
      beds: 4,
      baths: 2,
      area: 450,
      image: "/div.property-thumbnail-wrapper.png",
    },
    {
      title: "Floresta Tower Floresta Tower Les Maisons Blanches",
      location: "The Pearl Island, Doha",
      price: "280,000 QAR",
      beds: 4,
      baths: 2,
      area: 450,
      image: "/div.property-thumbnail-wrapper.png",
    },
    {
      title: "Floresta Tower Floresta Tower Les Maisons Blanches",
      location: "The Pearl Island, Doha",
      price: "280,000 QAR",
      beds: 4,
      baths: 2,
      area: 450,
      image: "/div.property-thumbnail-wrapper.png",
    },
    {
      title: "Floresta Tower Floresta Tower Les Maisons Blanches",
      location: "The Pearl Island, Doha",
      price: "280,000 QAR",
      beds: 4,
      baths: 2,
      area: 450,
      image: "/div.property-thumbnail-wrapper.png",
    },
  ];

  const scrollRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    const checkOverflow = () => {
      if (el && el.scrollWidth > el.clientWidth) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-visible">
  {/* Background Image */}
  <Image
    src="/Home page (2).png"
    alt="City Skyline"
    fill
    className="object-cover"
    priority
  />

  {/* Dark Overlay (optional if you want to dim background) */}
  <div className="absolute inset-0 " />

  {/* Left Aligned Box */}
  <div className="absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 z-20 w-[90%] md:w-[60%] lg:w-[60%]">
    <div className="bg-[#8C8C8C66] text-center backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 md:p-10 lg:text-left w-full max-w-5xl mx-auto">

      {/* Title */}
      <h2 className="text-2xl lg:text-3xl px-10 lg:px-0 font-semibold text-[#10284C] mb-2 sm:mb-3 md:mb-4 lg:mr-40">
        EXPERT REAL ESTATE SALES
      </h2>
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-400 my-3 sm:my-4 lg:mr-40"></div>
      {/* Subtitle */}
      <p className="text-xs mb-10  font-semibold lg:text-xs text-[#10284C] lg:mr-40">
        Whether buying or selling, our experienced team provides personalized
        service and market expertise to achieve your real estate goals.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:mr-40 text-center">
        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">500+</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Properties Sold</p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">30</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Days Average Sale</p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">98%</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Client Satisfaction</p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">$2.5M</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Average Sale Price</p>
        </div>
      </div>
    </div>
    
    {/* Contact Team Button - Below the box */}
    <div className="w-full max-w-5xl mx-auto mt-4 lg:mt-6">
      <div className="flex-shrink-0 lg:mr-40">
        <button className="bg-[#001730] text-white px-8 py-2 rounded-lg font-medium text-base md:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg">
          Contact Team
          <FaArrowRight size={18} className="ml-10"/>
        </button>
      </div>
    </div>
  </div>


  {/* 🔍 Search Bar (Half on BG, Half outside if needed) */}
 
</section>


<div className="relative w-full py-12 px-4 lg:px-16 overflow-hidden">
      <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-semibold text-[#10284C]  uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
          FEATURED PROPERTIES
        </h2>
        <div className="flex-1 h-px bg-gray-300 my-4 mx-auto lg:w-[20%] w-[60%] mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-center">
          From luxury residences to commercial developments, we deliver trusted
          services that turn your real estate goals into reality.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="w-[270px] sm:w-[320px] md:w-[350px] p-4  bg-gray-200 border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
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
              <div className="py-2">
                <h3 className="font-bold text-[#10284C] text-base  mb-1 leading-snug line-clamp-2">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-[#10284C] text-sm mb-3">
                  <Image
                    src="/Vector.png"
                    alt="Location"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span>{property.location}</span>
                </div>

                {/* Bed/Bath/Area Info */}
                <div className="flex items-center justify-between text-[#10284C] text-sm mb-4">
                  <div className="flex items-center gap-1 bg-white shadow p-2 lg:px-6 px-4 rounded-md">
                    <Image
                      src="/Icon (1).png"
                      alt="Beds"
                      width={18}
                      height={18}
                    />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-2 lg:px-6 px-4 rounded-md">
                    <Image
                      src="/Icon.png"
                      alt="Baths"
                      width={18}
                      height={18}
                    />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-2 lg:px-6 px-4 rounded-md">
                    <Image
                      src="/Icon (2).png"
                      alt="Area"
                      width={18}
                      height={18}
                    />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-[#10284C]">
                    {property.price}
                  </p>

                  <button className="bg-[#10284C] text-white text-sm font-semibold px-5 py-2 rounded flex items-center gap-2 transition hover:bg-[#1b3a70]">
  <Link href="/propertydetails" className="flex items-center gap-2">
    <span>Details</span>
    <FaArrowRight size={14} className="lg:ml-6 ml-2" />
  </Link>
</button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#10284C] text-white text-sm font-semibold px-5 py-2 rounded flex items-center justify-center gap-2 transition hover:bg-[#1b3a70]">
            <span>View All</span>
            <FaArrowRight size={14} className="ml-20" />
          </button>
        </div>

        {/* Scroll Button */}
        {showScrollButton && (
          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 
                     bg-white border border-gray-300 rounded-md  p-2 md:p-3 md:px-6
                     shadow-md z-10 hover:shadow-lg transition"
          >
            <FaArrowRight
              className="text-[#10284C] w-6 h-6 md:w-6 md:h-6"
            />
          </button>
        )}
      </div>

      

      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
      <section className="w-full bg-gray-200 py-16 px-6 md:px-20">
  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-[27px] md:text-[36px] lg:text-[36px]l font-semibold text-[#10284C] mb-2">
      COMPREHENSIVE SALES SERVICES
    </h2>
    <div className="w-[30%] h-[1.5px] bg-gray-300 my-2  mx-auto md:my-3"></div>
    <p className="text-gray-500 text-sm md:text-sm">
      From initial consultation to closing, we provide full-service real estate sales support.
    </p>
  </div>

  {/* Service Boxes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="rounded-md p-6 shadow-md transition-all">
      <h3 className="text-[#10284C] font-semibold mb-2">Market Analysis</h3>
      <p className="text-gray-600 text-sm">
        Comprehensive market research and competitive analysis to price your property optimally.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-md p-6 shadow-md transition-all">
      <h3 className="text-[#10284C] font-semibold mb-2">Property Valuation</h3>
      <p className="text-gray-600 text-sm">
        Professional property appraisal and valuation services using latest market data.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-md p-6 shadow-md transition-all">
      <h3 className="text-[#10284C] font-semibold mb-2">Expert Negotiation</h3>
      <p className="text-gray-600 text-sm">
        Skilled negotiation to secure the best possible terms for buyers and sellers.
      </p>
    </div>

    {/* Card 4 */}
    <div className="rounded-md p-6 shadow-md transition-all">
      <h3 className="text-[#10284C] font-semibold mb-2">Transaction Management</h3>
      <p className="text-gray-600 text-sm">
        Complete transaction coordination from contract to closing with legal support.
      </p>
    </div>

    {/* Card 5 */}
    <div className="rounded-md p-6 shadow-md transition-all">
      <h3 className="text-[#10284C] font-semibold mb-2">Buyer Matching</h3>
      <p className="text-gray-600 text-sm">
        Extensive network and marketing to connect sellers with qualified buyers.
      </p>
    </div>

    {/* Card 6 */}
    <div className="rounded-md p-6 shadow-md transition-all">
      <h3 className="text-[#10284C] font-semibold mb-2">Closing Support</h3>
      <p className="text-gray-600 text-sm">
        Full support through the closing process ensuring smooth transactions.
      </p>
    </div>
  </div>
</section>

      
      <section className="py-10 md:py-10 bg-gray-100">
        <div className="mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-2">
              Ready to Find Your Perfect Space ?
              </h2>
              <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 md:my-2"></div>
              <p className="text-base md:text-base text-[#333333] leading-relaxed">
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Al Asmakh is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
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

