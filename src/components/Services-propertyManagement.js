"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Search, Mic, MapPin, ArrowDown, Bed, Bath, Square, ArrowRight, Leaf, Home, Map as MapIcon } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

export default function Rent() {
  const [viewMode, setViewMode] = useState("LIST"); // "LIST" or "MAP"
  const plans = [
    {
      percent: "8%",
      title: "Essential Management",
      description: "Core property management services",
      features: [
        "Rent collection & financial reporting",
        "Basic maintenance coordination",
        "Tenant screening & lease management",
        "Monthly financial statements",
        "Legal compliance support",
      ],
      highlighted: false,
    },
    {
      percent: "10%",
      title: "Premium Management",
      description: "Core property management services",
      features: [
        "All Essential features",
        "24/7 emergency support",
        "Regular property inspections",
        "Vendor management & coordination",
        "Facility management services",
        "Quality control programs",
        "Tenant relations management",
      ],
      highlighted: true,
    },
    {
      percent: "12%",
      title: "Elite Management",
      description: "Comprehensive property management",
      features: [
        "All Premium features",
        "Dedicated property manager",
        "Concierge services",
        "Investment consulting",
        "Portfolio optimization",
        "Custom reporting & Priority support",
      ],
      highlighted: false,
    },
  ];
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
    <div className="bg-[#8C8C8C66] text-center backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 md:p-10 lg:text-left">

      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#10284C] mb-3 sm:mb-4 lg:mr-40">
        PROPERTY MANAGEMENT
      </h2>
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-400 my-3 sm:my-4 lg:mr-40"></div>
      {/* Subtitle */}
      <p className="text-[11px] mb-10 font-semibold sm:text-xs md:text-xs text-[#10284C] lg:mr-40">
        We have pioneered property management across Qatar by applying world-class
        standards and yet delivering personalized service. Our professional team
        acquires a deep insight into what's required to manage a property in Qatar's
        real estate market, enabling us to supervise the property life cycle from
        acquisition to disposition fully.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:mr-40 text-center">
        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">500+</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Properties Managed</p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">15%</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Average ROI Increase</p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">98%</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Client Satisfaction</p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 sm:p-4">
          <p className="text-xl sm:text-2xl font-bold text-[#10284C]">24/7</p>
          <div className="w-[70%] h-[1.5px] bg-gray-300 my-1 sm:my-2 mx-auto"></div>
          <p className="text-[10px] sm:text-xs text-[#10284C]">Emergency Support</p>
        </div>
      </div>
    </div>
    
    {/* Contact Team Button - Below the box */}
    <div className="mt-4 lg:mt-6">
      <div className="flex-shrink-0 lg:mr-40">
        <button className="bg-[#001730] text-white px-6 sm:px-8 py-2 sm:py-2 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-[#002d52] transition-all duration-300 flex items-center gap-3 shadow-lg">
          Contact Team
          <FaArrowRight size={18} className="ml-4 sm:ml-6 md:ml-10" />
        </button>
      </div>
    </div>
  </div>



  {/* 🔍 Search Bar (Half on BG, Half outside if needed) */}
 
</section>


<section className="w-full bg-gray-50 py-16 px-6 md:px-10">
  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-[27px] md:text-[36px] lg:text-[36px]  font-semibold text-[#10284C] mb-2 ">
      COMPLETE PROPERTY <br></br> MANAGEMENT SOLUTIONS
    </h2>
    <div className="w-[20%] h-[1px] bg-gray-400 my-4 mx-auto "></div>
    <p className="text-gray-500 text-sm md:text-base ">
      From tenant relations to facility management, we provide end-to-end property management
      solutions tailored to Qatar’s real estate market.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
    {/* Card 1 */}
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E8ECF5] text-[#10284C] font-bold text-lg mr-3 overflow-hidden">
      <img
    src="/Icon Container.png"   // 🔹 replace with your image path
    alt="icon"
    className="w-full h-full object-cover"
  />
</div>

        <h3 className="text-[#10284C] font-semibold text-lg">
          Moving Coordination
        </h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Seamless transition management for your properties</li>
        <li>Preparation of vacant units in a quick and efficient manner</li>
        <li>Management of all inventory protocols after tenant vacancy</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E8ECF5] text-[#10284C] font-bold text-lg mr-3 overflow-hidden">
      <img
    src="/Icon Container.png"   // 🔹 replace with your image path
    alt="icon"
    className="w-full h-full object-cover"
  />
</div>

        <h3 className="text-[#10284C] font-semibold text-lg">
          Financial Reporting & Budgets
        </h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Comprehensive financial management and reporting</li>
        <li>Preparing monthly and yearly account statements</li>
        <li>Fetching reliable vendors & establishing property budgets</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E8ECF5] text-[#10284C] font-bold text-lg mr-3 overflow-hidden">
      <img
    src="/Icon Container.png"   // 🔹 replace with your image path
    alt="icon"
    className="w-full h-full object-cover"
  />
        </div>
        <h3 className="text-[#10284C] font-semibold text-lg">Lease Contracts</h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Complete lease management and legal compliance</li>
        <li>Preparing lease agreements & enforcing leases</li>
        <li>Ensuring legal compliance and managing evictions</li>
      </ul>
    </div>

    {/* Card 4 */}
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E8ECF5] text-[#10284C] font-bold text-lg mr-3 overflow-hidden">
      <img
    src="/Icon Container.png"   // 🔹 replace with your image path
    alt="icon"
    className="w-full h-full object-cover"
  />
</div>

        <h3 className="text-[#10284C] font-semibold text-lg">
          Communication With Tenant
        </h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Professional tenant relations and communication</li>
        <li>Handling deposits and tenant-related matters</li>
        <li>Setting property rules and contract guidelines</li>
      </ul>
    </div>

    {/* Card 5 */}
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E8ECF5] text-[#10284C] font-bold text-lg mr-3 overflow-hidden">
      <img
    src="/Icon Container.png"   // 🔹 replace with your image path
    alt="icon"
    className="w-full h-full object-cover"
  />
        </div>
        <h3 className="text-[#10284C] font-semibold text-lg">
          Facility Management
        </h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Operations & maintenance of HVAC, MEP, and lift systems</li>
        <li>EHS compliance and waste management</li>
        <li>Project management and maintenance services</li>
      </ul>
    </div>

    {/* Card 6 */}
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E8ECF5] text-[#10284C] font-bold text-lg mr-3 overflow-hidden">
  <img
    src="/Icon Container.png"   // 🔹 replace with your image path
    alt="icon"
    className="w-full h-full object-cover"
  />
</div>

        <h3 className="text-[#10284C] font-semibold text-lg">
          Quality Control
        </h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        <li>Comprehensive quality assurance programs</li>
        <li>Providing preventive maintenance documentation</li>
        <li>Creating detailed policies and AREDC standards</li>
      </ul>
    </div>
  </div>
</section>


      

      {/* ---------- READY TO FIND SECTION ---------- */}
    

      {/* ---------- LIST AND MAP VIEW SECTION ---------- */}
 
 <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[27px] md:text-[36px] lg:text-[36px]l font-semibold text-[#10284C] mb-2">
          CHOOSE YOUR <br></br> MANAGEMENT LEVEL
        </h2>
        <div className="w-[30%] h-[1px] bg-gray-400 my-4 mx-auto "></div>
        <p className="text-gray-500 text-sm md:text-base">
          From initial consultation to closing, we provide full-service real estate sales support.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 ${
              plan.highlighted
                ? "border-2 border-[#10284C] shadow-xl scale-105"
                : "hover:shadow-lg"
            }`}
          >
            <div className="text-[#10284C] font-bold text-3xl mb-1">{plan.percent}</div>
            <p className="text-gray-500 text-sm ">Per Month</p>
            <div className="w-[60%] h-[1px] bg-gray-400 my-4 mx-auto "></div>
            <h3 className="text-lg font-semibold text-[#10284C] mb-2">{plan.title}</h3>
            <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

            <ul className="text-left text-gray-600 text-sm space-y-2 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#10284C] mr-2">•</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2.5 rounded-md text-white font-medium flex items-center justify-between px-6 gap-2 transition ${
                plan.highlighted
                  ? "bg-[#10284C] hover:bg-[#0A1A36]"
                  : "bg-[#10284C] hover:bg-[#0A1A36]"
              }`}
            >
              Select Plan 
              <FaArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
      
      <section className="py-10 md:py-10 bg-gray-100">
        <div className="mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-2">
              Ready to Maximize Your Investment Returns ?
              </h2>
              <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 md:my-2"></div>
              <p className="text-base md:text-base text-[#333333] leading-relaxed lg:mr-36">
              Let our experienced team handle your property management with world-class standards while you enjoy peace of mind and optimized returns. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
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

