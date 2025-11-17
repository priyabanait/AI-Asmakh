"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactHeadOffice() {
  const [currentOfficeIndex, setCurrentOfficeIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef(null);

  // Office data array
  const offices = [
    {
      title: "Head Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquarters@alasmakhrealestate.com",
      timing: "Sun - Thu : 8:00am - 6:00pm",
    },
    {
      title: "The Preal Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquarters@alasmakhrealestate.com",
      timing: "Sun - Thu : 8:00am - 6:00pm",
    },
    {
      title: "Ain Khalid Gate",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquarters@alasmakhrealestate.com",
      timing: "Sun - Thu : 8:00am - 6:00pm",
    },
    {
      title: "Al Sadd Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquarters@alasmakhrealestate.com",
      timing: "Sun - Thu : 8:00am - 6:00pm",
    },
    {
      title: "Al Thumama Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquarters@alasmakhrealestate.com",
      timing: "Sun - Thu : 8:00am - 6:00pm",
    },
  ];

  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (isPaused) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      return;
    }

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentOfficeIndex((prevIndex) => {
        if (prevIndex >= offices.length - 1) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused, offices.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
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

        {/* Content (Centered Box) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-md px-6 md:px-10 py-8 md:py-20 shadow-lg max-w-[900px] mx-auto text-center">
            <h1 className="text-white text-[20px] md:text-[30px] lg:text-[30px] font-semibold mb-2">
              CONTACT OUR HEAD OFFICE
            </h1>
            <div className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%] h-[1px] mt-2 bg-white mb-3 md:mb-4 mx-auto"></div>
            <p className="text-white/80 text-sm md:text-sm lg:text-sm font-medium">
              Get in touch with our head office team for corporate inquiries, partnerships, and general information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto">
          {/* Mobile Version - Two Cards Stacked (Email and Phone) */}
          <div className="block lg:hidden space-y-4 mb-8">
            {/* Card 1: Email Contact */}
            <div className="bg-[#001730] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                {/* Icon with pulsing purple circle */}
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border-2 border-[#4700FF] bg-[#003366] p-[10px] relative">
                    <Mail className="w-[32px] h-[32px] text-white z-10 relative" />
                    {/* Pulsing animation circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4700FF] animate-ping opacity-75"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-base font-semibold mb-3 items-end text-right text-white">Send us an email anytime</h3>
                  <div className="h-[1px] bg-gray-600 mb-4"></div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="text-sm text-white">Sales@aredc.qa</span>
                    <span className="text-sm text-white">Info@aredc.qa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Phone Contact */}
            <div className="bg-[#001730] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                {/* Icon with pulsing purple circle */}
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border-2 border-[#4700FF] bg-[#003366] p-[10px] relative">
                    <Phone className="w-[32px] h-[32px] text-white z-10 relative" />
                    {/* Pulsing animation circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4700FF] animate-ping opacity-75"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-base font-semibold mb-3 text-white items-end text-right">Call us during business hours</h3>
                  <div className="h-[1px] bg-gray-600 mb-4"></div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="text-sm text-white">+974 4444 5555</span>
                    <span className="text-sm text-white">+974 4444 5556</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Head Office Address */}
            <div className="bg-[#001730] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                {/* Icon with pulsing purple circle */}
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border-2 border-[#4700FF] bg-[#003366] p-[10px] relative">
                    <MapPin className="w-[32px] h-[32px] text-white z-10 relative" />
                    {/* Pulsing animation circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4700FF] animate-ping opacity-75"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-base font-semibold mb-3 text-white items-end text-right">Visit our head office</h3>
                  <div className="h-[1px] bg-gray-600 mb-4"></div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="text-sm text-white">Tower 1, Floor 15</span>
                    <span className="text-sm text-white">West Bay Business District</span>
                    <span className="text-sm text-white">Doha, Qatar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Office Hours */}
            <div className="bg-[#001730] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                {/* Icon with pulsing purple circle */}
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border-2 border-[#4700FF] bg-[#003366] p-[10px] relative">
                    <Clock className="w-[32px] h-[32px] text-white z-10 relative" />
                    {/* Pulsing animation circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4700FF] animate-ping opacity-75"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-base font-semibold mb-3 text-white items-end text-right">Our Office Hours</h3>
                  <div className="h-[1px] bg-gray-600 mb-4"></div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-white">Friday</span>
                      <span className="text-xs text-white/70">7:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-white">Sunday - Thursday</span>
                      <span className="text-xs text-white/70">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-white">Saturday</span>
                      <span className="text-xs text-white/70">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Version - Four Cards Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-2 mb-8">
            {/* Card 1: Email Contact */}
            <div className="bg-[#001730] rounded-lg p-6 text-center text-white shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border border-[#4700FF] bg-[#003366] p-[10px]">
                  <Mail className="w-[62px] h-[62px] text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">Send us an email anytime</h3>
              <div className="w-[90%] h-[1px] bg-gray-600 mb-3 md:mb-4 mx-auto"></div>
              <div className="flex items-center justify-center gap-10">
                <span className="text-sm">Sales@aredc.go</span>
                <div className="h-4 w-[1px] bg-white"></div>
                <span className="text-sm">info@ared.qa</span>
              </div>
            </div>

            {/* Card 2: Phone Contact */}
            <div className="bg-[#001730] rounded-lg p-6 text-center text-white shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border border-[#4700FF] bg-[#003366] p-[10px]">
                  <Phone className="w-[62px] h-[62px] text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-gray-400">Call us during business hours</h3>
              <div className="w-[90%] h-[1px] bg-gray-600 mb-3 md:mb-4 mx-auto"></div>
              <div className="flex items-center justify-center gap-6">
                <span className="text-sm">+974 4444 5555</span>
                <div className="h-4 w-[1px] bg-white"></div>
                <span className="text-sm">+974 4444 5556</span>
              </div>
            </div>

            {/* Card 3: Head Office Address */}
            <div className="bg-[#001730] rounded-lg p-6 text-white shadow-lg">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border border-[#4700FF] bg-[#003366] p-[10px]">
                  <MapPin className="w-[62px] h-[62px] text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 text-gray-400 text-center">
                Visit our head office
              </h3>

              {/* Divider */}
              <div className="w-[90%] h-[1px] bg-gray-600 mb-3 md:mb-4 mx-auto"></div>

              {/* Address aligned to start */}
              <div className="text-sm text-center leading-relaxed pl-4">
                <p>Tower 1, Floor 15
                West Bay Business District
                Doha, Qatar</p>
              </div>
            </div>

            {/* Card 4: Office Hours */}
            <div className="bg-[#001730] rounded-lg p-4 text-center text-white shadow-lg">
              {/* Clock Icon */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-[82px] h-[82px] rounded-full border border-[#4700FF] bg-[#003366] p-[10px]">
                  <Clock className="w-[62px] h-[62px] text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-6 text-gray-400">Our Office Hours</h3>
              <div className="w-[90%] h-[1px] bg-gray-600 mb-3 md:mb-4 mx-auto"></div>
              {/* Horizontal Days */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Friday</div>
                  <div className="text-white/70 text-xs">7:00 AM - 4:00 PM</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Sunday - Thursday</div>
                  <div className="text-white/70 text-xs">8:00 AM - 5:00 PM</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Saturday</div>
                  <div className="text-white/70 text-xs">Closed</div>
                </div>
              </div>
            </div>
          </div>
          <div
  className="lg:hidden
    bg-[#FFE0E0] rounded-lg p-6 shadow-md
    text-center md:text-left   /* laptop left if you want OR keep center */
    flex flex-col md:block     /* center on mobile */
    items-center md:items-start
  "
>
  <p className="text-base md:text-lg text-center md:text-left leading-relaxed">
    <span className="text-[#FF0000] font-semibold">Emergency Contact</span><br></br>
    <span className="text-[#FF0000] font-semibold">
    For urgent property-related emergencies outside business hours{" "}</span>
    <span className="text-[#FF0000] font-semibold ml-0 md:ml-4 block md:inline">
      +974 5555 0000
    </span>
    <span className="text-[#FF0000] font-semibold ml-0 md:ml-4 block md:inline">
      24/7 Emergency Line
    </span>
  </p>
</div>

          {/* Emergency Contact Banner */}
          <div className=" hidden md:block bg-[#FFE0E0] rounded-lg p-6 text-center shadow-md">
            <p className="text-base md:text-lg">
              <span className="text-[#FF0000] font-semibold">Emergency Contact</span>
              {" - "}
              <span className="text-[#FF0000] font-semibold">
              For urgent property-related emergencies outside business hours{" "}</span>
              <span className="text-[#FF0000] font-semibold ml-4">+974 5555 0000</span>
              {" "}
              <span className="text-[#FF0000] font-semibold ml-4">24/7 Emergency Line</span>
            </p>
          </div>
        </div> 
      </section>

      {/* LET'S CONNECT Form Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Abstract Design.png"
          alt="City Skyline Background"
          fill
          className="object-fill"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Geometric Pattern Background (Bottom Right) */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 pointer-events-none z-0">
          <div className="grid grid-cols-4 gap-2 p-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-400 rounded-sm"
                style={{
                  height: `${Math.random() * 40 + 20}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="md:mx-10 mx-auto relative z-10">
          {/* Form Container */}
          <div className="bg-gray-200 rounded-lg shadow-lg p-8 md:p-12">
            {/* Title */}
            <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] text-center mb-4">
              LET'S CONNECT
            </h2>
            <div className="w-[40%] h-[1px] mt-2 bg-white mb-3 md:mb-4 mx-auto"></div>

            {/* Introduction Paragraph */}
            <p className="text-gray-600 text-center mb-8  mx-auto text-sm">
              We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with us.. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
            </p>

            {/* Contact Form */}
            <form className="space-y-6 ">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Second Row: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Third Row: Inquiry Type & How Did You Hear About Us */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 bg-white appearance-none cursor-pointer">
                    <option value="">Select Inquiry Type</option>
                    <option value="general">General Inquiry</option>
                    <option value="property">Property Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 bg-white appearance-none cursor-pointer">
                    <option value="">Select</option>
                    <option value="google">Google</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Enter your Message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001730] text-gray-800 placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Form Footer: Terms & Submit Button */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-[#001730] border-gray-300 rounded focus:ring-[#001730] cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                    I agree with Terms of Use and Privacy Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#001730] text-white px-8 py-3 rounded-lg font-medium  transition-colors flex items-center gap-2 shadow-lg"
                >
                  Submit
                  <ArrowRight className="w-5 h-5 ml-10" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Discover Our Office Locations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="md:mx-10 mx-auto text-center lg:text-left">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-4">
              Discover Our Office Locations
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              We are here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the areas below to find Our office nearest to you.
            </p>
          </div>

          {/* Mobile Carousel - Only visible on mobile */}
          <div className="block lg:hidden relative" style={{ overflow: "hidden", width: "100%" }}>
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ 
                height: "auto",
                minHeight: "300px",
                overflow: "hidden",
                width: "100%",
                position: "relative",
              }}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(calc(-${currentOfficeIndex * 100}%))`,
                  willChange: "transform",
                }}
              >
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: "100%",
                      padding: "0 8px",
                    }}
                  >
                    <div className="relative bg-gray-200 rounded-lg p-3 shadow-md overflow-hidden">
                      {/* Background Image */}
                      <Image
                        src="/office_location_background 1.png"
                        alt="Office Background"
                        fill
                        className="object-fill opacity-20"
                      />
                      
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-[#001730] mb-1">{office.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{office.subtitle}</p>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span className="text-[0.7rem] break-all">{office.address}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Phone className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span className="text-[0.7rem] break-all">{office.phone}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Mail className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span className="text-[0.7rem] break-all">{office.email}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            <span className="text-[0.7rem] break-all">{office.timing}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {offices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentOfficeIndex(index);
                    setTimeout(() => setIsPaused(false), 3000);
                  }}
                  className={`transition-all duration-300 ${
                    index === currentOfficeIndex
                      ? "w-2 h-2 bg-gray-800"
                      : "w-2 h-2 border border-gray-800 bg-transparent"
                  }`}
                  style={{
                    borderRadius: "2px",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {offices.map((office, index) => (
              <div key={index} className="relative bg-gray-200 rounded-lg p-3 shadow-md overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/office_location_background 1.png"
                  alt="Office Background"
                  fill
                  className="object-fill opacity-20"
                />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-[#001730] mb-1">{office.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{office.subtitle}</p>
                  
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[0.7rem] break-all">{office.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[0.7rem] break-all">{office.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[0.7rem] break-all">{office.email}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[0.7rem] break-all">{office.timing}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 md:py-10 bg-gray-100">
      <div className=" mx-auto px-6 md:px-12 ">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className=" text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-[#001730] mb-2">
            Start Your Real Estate Journey Today
            </h2>
            <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] h-[1.5px] bg-gray-300 my-2 md:my-2 "></div>
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

