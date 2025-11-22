"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
export default function Profit() {
  const [currentSlides, setCurrentSlide] = useState(0);
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
  const testimonials = [
    {
      name: "Cameron Williamson",
      text: "AREDC’s attention to detail and understanding of my specific requirements made finding my dream penthouse an effortless experience.",
      image: "/518.png",
    },
    {
      name: "Victoria Chen",
      text: "Their global network and discreet approach were instrumental in helping us acquire multiple investment properties across three continents.",
      image: "/514.png",
    },
    {
      name: "Robert Keller",
      text: "The team at AREDC provided white-glove service from start to finish. They truly understand the meaning of luxury in real estate.",
      image: "/516.png",
    },
    {
      name: "Sophia Lewis",
      text: "The professionalism and attention to every small detail made our home buying process seamless and stress-free.",
      image: "/516.png",
    },
    {
      name: "Michael Brown",
      text: "Outstanding service and deep understanding of luxury properties — truly unmatched in the region.",
      image: "/516.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  // Automatically move to the next set of cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get three testimonials for current slide
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  // Get current slide index for dots
  const currentSlide = Math.floor(startIndex / 3);

  // Blog data
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

  const [blogStartIndex, setBlogStartIndex] = useState(0);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const blogsPerSlide = 3;
  const totalBlogSlides = Math.ceil(blogs.length / blogsPerSlide);

  // Get visible blogs for current slide (desktop)
  const visibleBlogs = [];
  for (let i = 0; i < blogsPerSlide; i++) {
    const index = (blogStartIndex + i) % blogs.length;
    visibleBlogs.push(blogs[index]);
  }

  // Get current blog slide index for dots
  const currentBlogSlide = Math.floor(blogStartIndex / blogsPerSlide);

  // Mobile: show first blog initially, all blogs when showAllBlogs is true
  const mobileBlogs = showAllBlogs ? blogs : [blogs[0]];

  // Automatically move to the next set of blog cards every 5 seconds
  useEffect(() => {
    const blogInterval = setInterval(() => {
      setBlogStartIndex((prevIndex) => (prevIndex + blogsPerSlide) % blogs.length);
    }, 5000);
    return () => clearInterval(blogInterval);
  }, []);
  const offices = [
    {
      title: "Head Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquaters@alasmakhrealestate.com",
      timing: "Sun - Thu :: 8:00am - 6.00pm",
      image: "/office_location_background 1.png",
    },
    {
      title: "The Pearl Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquaters@alasmakhrealestate.com",
      timing: "Sun - Thu :: 8:00am - 6.00pm",
      image: "/office_location_background 1.png",
    },
    {
      title: "Ain Khalid Gate",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquaters@alasmakhrealestate.com",
      timing: "Sun - Thu :: 8:00am - 6.00pm",
      image: "/office_location_background 1.png",
    },
    {
      title: "Al Sadd Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquaters@alasmakhrealestate.com",
      timing: "Sun - Thu :: 8:00am - 6.00pm",
      image: "/office_location_background 1.png",
    },
    {
      title: "Al Thumama Office",
      subtitle: "Main Office",
      address: "Floor 28, Tower 1, West Bay, Doha",
      phone: "+974 4444 4444",
      email: "headquaters@alasmakhrealestate.com",
      timing: "Sun - Thu :: 8:00am - 6.00pm",
      image: "/office_location_background 1.png",
    },
  ];

  // Calculate total slides for offices (3 offices per slide)
  const officesPerSlide = 3;
  const totalOfficeSlides = Math.ceil(offices.length / officesPerSlide);

  // Mobile office state - show one at a time
  const [mobileOfficeIndex, setMobileOfficeIndex] = useState(0);

  // Auto Slide for offices (desktop only)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalOfficeSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalOfficeSlides]);

  // Auto Slide for mobile offices - one at a time
  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setMobileOfficeIndex((prev) => (prev + 1) % offices.length);
    }, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(mobileInterval);
  }, [offices.length]);

  // Get visible offices for current slide (desktop)
  const visibleOffices = offices.slice(
    currentSlides * officesPerSlide,
    currentSlides * officesPerSlide + officesPerSlide
  );
  return (
    <div>
      {/* Full Page Image */}
      {/* <div className="relative w-screen h-screen">
        <Image
          src="/c6.jpg.png"
          alt="profit"
          fill
          className="object-cover"
          priority
        />
      </div> */}
      <section className="relative h-auto min-h-[100vh] lg:h-screen w-full text-white">
  {/* Background Image */}
  <Image
     src="WhatsApp Image 2025-11-08 at 10.47.12 PM.jpeg"
    alt="City Skyline"
    fill
    className="object-fill"
    priority
  />

  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-white/20 bg-opacity-60"></div> */}

  {/* Content */}
  <div
    className="
      absolute lg:static
      bottom-0 left-0 right-0 
      lg:bottom-auto lg:left-auto lg:right-auto
      z-10 
      flex items-center justify-center lg:justify-end 
      h-full px-4 lg:px-20 py-6 lg:py-0
    "
  >
    <div
      className="
        max-w-lg space-y-3 lg:space-y-6 text-center lg:text-left

        /* MOBILE BACKGROUND */
        bg-white/20 backdrop-blur-md p-3 rounded-t-xl
        lg:bg-transparent lg:backdrop-blur-0 lg:p-0 lg:rounded-none
      "
    >
      <div>
        <h1 className="text-lg lg:text-3xl font-semibold leading-tight">
          TURNING YOUR <br /> PROPERTY INTO PROFIT
        </h1>
        <div className="flex-1 h-px bg-white/20 my-3 lg:my-4 mb-3 lg:mb-4"></div>
        <p className="lg:text-gray-400 text-white mt-2 text-[0.75rem] lg:text-[0.8rem]">
          Your complete real estate partner — from concept to completion, and beyond.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="space-y-2 lg:space-y-3 mt-3 lg:mt-6">
        <div className="bg-white/30 bg-opacity-60 p-3 lg:p-4 rounded-md">
          <h3 className="font-semibold text-sm lg:text-base">Expert Knowledge</h3>
          <p className="lg:text-gray-400 text-white text-xs lg:text-sm mt-1">
            Our development team transforms visionary ideas into architectural
            landmarks that define Qatar's urban landscape.
          </p>
        </div>

        <div className="bg-white/30 bg-opacity-60 p-3 lg:p-4 rounded-md">
          <h3 className="font-semibold text-sm lg:text-base">Personalized Service</h3>
          <p className="lg:text-gray-400 text-white text-xs lg:text-sm mt-1">
            We take the time to understand your needs and offer personalized
            solutions to ensure a seamless real estate experience.
          </p>
        </div>

        <div className="bg-white/30 bg-opacity-60 p-3 lg:p-4 rounded-md">
          <h3 className="font-semibold text-sm lg:text-base">Trusted Partnerships</h3>
          <p className="lg:text-gray-400 text-white text-xs lg:text-sm mt-1">
            These prestigious partnerships underscore our capability to manage
            large-scale, complex projects and our trusted position within Qatar's
            development landscape.
          </p>
        </div>

        <div className="bg-white/30 bg-opacity-60 p-3 lg:p-4 rounded-md">
          <h3 className="font-semibold text-sm lg:text-base">Comprehensive Support</h3>
          <p className="lg:text-gray-400 text-white text-xs lg:text-sm mt-1">
            From property search to finalizing the deal, we provide comprehensive
            support at every step of the process.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section Title + Cards */}
      <div className="relative w-full py-6 lg:py-12 px-4 lg:px-16 overflow-hidden">
      <h2 className="text-[22px] lg:text-[36px] font-semibold text-[#10284C] uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
          FEATURED PROPERTIES
        </h2>
        <div className="flex-1 h-px bg-gray-300 my-3 lg:my-4 mx-auto lg:w-[20%] w-[60%] mb-3 lg:mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 lg:mb-12 text-center text-sm lg:text-base px-2 lg:px-0">
          From luxury residences to commercial developments, we deliver trusted
          services that turn your real estate goals into reality.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="w-[250px] lg:w-[350px] p-3 lg:p-4 bg-gray-200 border border-gray-200 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
            >
              {/* Image Section */}
              <div className="relative w-full h-[180px] lg:h-[220px]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-fill rounded-md"
                />
              </div>

              {/* Property Info */}
              <div className="py-2">
                <h3 className="font-bold text-[#10284C] text-sm lg:text-base mb-1 leading-snug line-clamp-2">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-[#10284C] text-xs lg:text-sm mb-2 lg:mb-3">
                  <Image
                    src="/Vector.png"
                    alt="Location"
                    width={14}
                    height={14}
                    className="mr-1.5 lg:mr-2 lg:w-4 lg:h-4"
                  />
                  <span className="line-clamp-1">{property.location}</span>
                </div>

                {/* Bed/Bath/Area Info */}
                <div className="flex items-center justify-between text-[#10284C] text-xs lg:text-sm mb-3 lg:mb-4 gap-1">
                  <div className="flex items-center gap-1 bg-white shadow p-1.5 lg:p-2 lg:px-6 px-2 rounded-md">
                    <Image
                      src="/Icon (1).png"
                      alt="Beds"
                      width={14}
                      height={14}
                      className="lg:w-[18px] lg:h-[18px]"
                    />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-1.5 lg:p-2 lg:px-6 px-2 rounded-md">
                    <Image
                      src="/Icon.png"
                      alt="Baths"
                      width={14}
                      height={14}
                      className="lg:w-[18px] lg:h-[18px]"
                    />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-1.5 lg:p-2 lg:px-6 px-2 rounded-md">
                    <Image
                      src="/Icon (2).png"
                      alt="Area"
                      width={14}
                      height={14}
                      className="lg:w-[18px] lg:h-[18px]"
                    />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm lg:text-base font-bold text-[#10284C]">
                    {property.price}
                  </p>

                  <button className="bg-[#10284C] text-white text-xs lg:text-sm font-semibold px-3 lg:px-5 py-1.5 lg:py-2 rounded flex items-center gap-1 lg:gap-2 transition hover:bg-[#1b3a70]">
  <Link href="/propertydetails" className="flex items-center gap-1 lg:gap-2">
    <span>Details</span>
    <FaArrowRight size={12} className="lg:w-[14px] lg:h-[14px] lg:ml-6 ml-1" />
  </Link>
</button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 lg:mt-6">
          <button className="bg-[#10284C] text-white text-xs lg:text-sm font-semibold px-4 lg:px-5 py-1.5 lg:py-2 rounded flex items-center justify-center gap-2 transition hover:bg-[#1b3a70]">
            <span>View All</span>
            <FaArrowRight size={12} className="lg:w-[14px] lg:h-[14px] ml-4 lg:ml-20" />
          </button>
        </div>

        {/* Scroll Button */}
        {showScrollButton && (
          <button
            onClick={scrollRight}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 
                     bg-white border border-gray-300 rounded-md  p-2 lg:p-3 lg:px-6
                     shadow-md z-10 hover:shadow-lg transition"
          >
            <FaArrowRight
              className="text-[#10284C] w-6 h-6 lg:w-6 lg:h-6"
            />
          </button>
        )}
      </div>
      <section className="bg-gray-100 py-8 lg:py-16 px-4 lg:px-24 relative overflow-visible">
      {/* Section Heading */}
      <div className="text-center mb-8 lg:mb-12">
      <h2 className="text-[22px] lg:text-[36px] font-bold text-[#10284C] uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
          STORY FROM OUR CLIENTS
        </h2>
        <div className="w-[40%] lg:w-[30%] h-[2px] bg-gray-300 mx-auto"></div>
      </div>

      {/* Testimonial Cards Row */}
      <div className="flex justify-center overflow-visible">
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-24 w-full max-w-7xl overflow-visible px-2 lg:px-0"
          >
            {visibleTestimonials.map(
              (t, i) =>
                t && (
                  <div
                    key={i}
                    className="relative bg-gray-200 shadow-md rounded-md p-4 lg:p-6 pl-14 lg:pl-20 hover:shadow-xl transition overflow-visible"
                  >
                    {/* Image - positioned to overlap left edge, starting from half */}
                    <div className="absolute left-[10px] lg:-left-[60px] top-1/2 -translate-y-1/2 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] rounded-md overflow-hidden flex-shrink-0 z-10">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="text-left relative z-0">
                      <h3 className="text-[#10284C] ml-10 lg:ml-0 font-semibold text-sm lg:text-lg mb-2 flex items-center justify-between">
                        {t.name}
                        <Image 
                          src="/SVG.png" 
                          alt="quote" 
                          width={16}
                          height={16}
                          className="lg:w-5 lg:h-5 object-contain"
                        />
                      </h3>
                      <p className="text-gray-600 ml-10 lg:ml-0 text-xs lg:text-sm leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                  </div>
                )
            )}
          </motion.div>
        </AnimatePresence>
      </div>

     {/* Dots Navigation */}
<div className="flex justify-center mt-8 space-x-3">
  {Array.from({ length: totalSlides }).map((_, index) => (
    <button
      key={index}
      onClick={() => setStartIndex(index * 3)}
      className={`w-2 h-2 transition-all duration-300  ${
        currentSlide === index
          ? "bg-[#10284C] ring-1 rounded-[1px] ring-[#10284C] ring-offset-2 scale-110"
          : "bg-gray-300 hover:bg-gray-400 rounded-[1px]"
      }`}
    ></button>
  ))}
</div>

    </section>

    {/* Latest Real Estate Blogs Section */}
    <section className="bg-white py-8 lg:py-16 px-4 lg:px-16">
      {/* Section Heading */}
      <div className="lg:hidden text-center mb-8 lg:mb-12">
      <h2 className="text-[22px] lg:text-[36px] font-bold text-[#10284C] uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
      Explore Events
        </h2>
        <div className="w-32 lg:w-50 mx-auto h-[2px] bg-gray-300"></div>
      </div>
      <div className="hidden lg:block text-center mb-12">
      <h2 className="text-[27px] lg:text-[36px] font-bold text-[#10284C] uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
      LATEST REAL ESTATE BLOGS
        </h2>
        <div className="w-40 h-[2px] bg-gray-300 mx-auto"></div>
      </div>

      {/* Mobile Version - Show one blog initially, all when View All is clicked */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 gap-4 lg:gap-6 w-full max-w-7xl mx-auto">
          {mobileBlogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-md overflow-hidden transition-shadow duration-300"
            >
              {/* Image Section with Overlapping Button and Text Overlay */}
              <div className="relative w-full h-[300px] lg:h-[400px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-fill"
                />
                {/* EXPLORE Button - overlapping top-left corner, partially on image and white space */}
                <button className="absolute top-6 left-3 lg:top-8 lg:left-4 -translate-y-1/2 bg-[#10284C] text-white text-[10px] lg:text-xs font-semibold px-3 lg:px-4 py-1.5 lg:py-2 rounded flex items-center gap-1.5 lg:gap-2 hover:bg-[#1b3a70] transition z-10 shadow-md">
                  <span>EXPLORE</span>
                  <FaArrowRight size={10} className="lg:w-3 lg:h-3 ml-2 lg:ml-6" />
                </button>
                
                {/* Text Overlay - absolute positioned at bottom with transparent dark gray background */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#10284C]/50 backdrop-blur-sm p-4 lg:p-6 z-10">
                  <h3 className="text-white font-bold text-base lg:text-lg xl:text-xl mb-2 lg:mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-white text-xs lg:text-sm xl:text-base leading-relaxed opacity-90">
                    {blog.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Only show when not all blogs are displayed */}
        {!showAllBlogs && (
          <div className="flex justify-center mt-6 lg:mt-8">
            <button
              onClick={() => setShowAllBlogs(true)}
              className="bg-[#10284C] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-md font-semibold hover:bg-[#1b3a70] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm lg:text-base"
            >
              <span>View All</span>
              <FaArrowRight size={14} className="lg:w-4 lg:h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Desktop Version - Keep carousel/pagination as is */}
      <div className="hidden lg:block">
        {/* Blog Cards Row */}
        <div className="flex justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={blogStartIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
            >
              {visibleBlogs.map((blog, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section with Overlapping Button and Text Overlay */}
                  <div className="relative w-full h-[300px] lg:h-[400px]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-fill"
                    />
                    {/* EXPLORE Button - overlapping top-left corner, partially on image and white space */}
                    <button className="absolute top-8 left-4 -translate-y-1/2 bg-[#10284C] text-white text-xs font-semibold px-4 py-2 rounded flex items-center gap-2 hover:bg-[#1b3a70] transition z-10 shadow-md">
                      <span>EXPLORE</span>
                      <FaArrowRight size={12} className="ml-6" />
                    </button>
                    
                    {/* Text Overlay - absolute positioned at bottom with transparent dark gray background */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#10284C]/50 backdrop-blur-sm p-6 z-10">
                      <h3 className="text-white font-bold text-lg lg:text-xl mb-3">
                        {blog.title}
                      </h3>
                      <p className="text-white text-sm lg:text-base leading-relaxed opacity-90">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalBlogSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setBlogStartIndex(index * blogsPerSlide)}
              className={`w-2 h-2 transition-all duration-300 ${
                currentBlogSlide === index
                 ? "bg-[#10284C] ring-1 rounded-[1px] ring-[#10284C] ring-offset-2 scale-110"
              : "bg-gray-300 hover:bg-gray-400 rounded-[1px]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
    <section className="relative w-full h-auto lg:h-screen flex items-center py-6 lg:py-0">
      {/* Background Image */}
      <Image
        src="/WhatsApp Image 2025-11-07 at 10.45.55 PM.jpeg"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full px-4 lg:px-14 items-center justify-between py-6 lg:py-0">
        {/* Left Side Title - Overlaid on background */}
        <div className="text-white lg:w-1/2 flex flex-col mt-6 lg:mt-40 mb-4 lg:mb-0 h-full">
          <h2 className="text-xl lg:text-4xl text-center lg:text-left font-semibold mb-2 lg:mb-3">
            How Can We Help You Today?
          </h2>
          <div className="h-[0.5px] w-[70%] bg-white mx-auto lg:mx-0 mb-3 lg:mb-4"></div>
        </div>

        {/* Right Side - Form Panel and Map */}
        <div className="lg:w-1/2 max-w-2xl w-full flex flex-col">
          {/* Form Panel - Translucent */}
          <div className="bg-blue-50/10 backdrop-blur-sm p-4 lg:p-6 lg:px-16 rounded-md shadow-xl relative overflow-visible">
            {/* Form Header */}
            <h3 className="text-[#10284C] lg:px-10 text-xs lg:text-sm xl:text-base text-center font-medium mb-2 lg:mb-3">
              Fill out the form below and our experts will get back to you within 24 hour
            </h3>
            <div className="h-[1px] w-40 lg:w-60 bg-white 300 mb-3 lg:mb-4 mx-auto"></div>


            <form className="space-y-3 lg:space-y-4">
              {/* First Row: Name and Email */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <label className="block text-[#10284C] text-xs lg:text-sm font-medium mb-1.5 lg:mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full bg-white border border-gray-300 rounded-md px-3 lg:px-4 py-2 lg:py-2.5 text-sm focus:outline-none focus:border-[#10284C]"
                  />
                </div>
                <div>
                  <label className="block text-[#10284C] text-xs lg:text-sm font-medium mb-1.5 lg:mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-white border border-gray-300 rounded-md px-3 lg:px-4 py-2 lg:py-2.5 text-sm focus:outline-none focus:border-[#10284C]"
                  />
                </div>
              </div>

              {/* Second Row: Phone and Property Type */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <label className="block text-[#10284C] text-xs lg:text-sm font-medium mb-1.5 lg:mb-2">Phone</label>
                  <input
                    type="text"
                    placeholder="(123) 456 - 789"
                    className="w-full bg-white border border-gray-300 rounded-md px-3 lg:px-4 py-2 lg:py-2.5 text-sm focus:outline-none focus:border-[#10284C]"
                  />
                </div>
                <div>
                  <label className="block text-[#10284C] text-xs lg:text-sm font-medium mb-1.5 lg:mb-2">Property Type</label>
                  <select
                    className="w-full bg-white border border-gray-300 rounded-md px-3 lg:px-4 py-2 lg:py-2.5 text-sm text-gray-500 focus:outline-none focus:border-[#10284C]"
                  >
                    <option>Choose a Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-[#10284C] text-xs lg:text-sm font-medium mb-1.5 lg:mb-2">Message</label>
                <textarea
                  placeholder="Tell us more about your requirement like budget ,area & others .."
                  rows={3}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 lg:px-4 py-2 lg:py-2.5 text-sm focus:outline-none focus:border-[#10284C] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#10284C] text-white px-6 lg:px-8 py-2 lg:py-2.5 rounded-md flex items-center justify-center lg:justify-end gap-2 hover:bg-[#0d2142] transition w-full lg:w-auto"
              >
                <span className="text-sm">Submit</span>
                <FaArrowRight size={12} className="lg:w-[14px] lg:h-[14px] ml-2 lg:ml-10" />
              </button>
            </form>
          </div>

          {/* Map Section - Below the blur card */}
          <div className="mt-3 mb-4 lg:mb-0 lg:mt-6 w-full h-[15vh] lg:h-[20vh] rounded-md overflow-hidden bg-gray-200 border border-gray-300 relative">
            <Image
              src="/675.png"
              alt="Map"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-8 lg:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-4">
        {/* Mobile Version - Show one office at a time with auto-slide */}
        <div className="block lg:hidden">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOfficeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-200 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex overflow-hidden">
                  {/* Left Section - Office Information */}
                  <div className="flex-1 p-4 lg:p-6">
                    <h3 className="text-lg lg:text-2xl font-bold text-[#10284C] mb-1">
                      {offices[mobileOfficeIndex].title}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm mb-3 lg:mb-4">{offices[mobileOfficeIndex].subtitle}</p>
                    
                    {/* Separator Line */}
                    <div className="h-[1px] w-40 lg:w-60 bg-gray-400 mb-3 lg:mb-4"></div>
                    
                    {/* Contact Details */}
                    <div className="space-y-1.5 lg:space-y-2">
                      <div className="flex items-center gap-2 text-gray-700 text-xs lg:text-sm">
                        <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" /> <span className="line-clamp-1">{offices[mobileOfficeIndex].address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs lg:text-sm">
                        <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" /> {offices[mobileOfficeIndex].phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs lg:text-sm">
                        <Mail className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" /> <span className="line-clamp-1">{offices[mobileOfficeIndex].email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs lg:text-sm">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" /> {offices[mobileOfficeIndex].timing}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Section - Patterned Strip */}
                  <div className="w-16 lg:w-24 relative overflow-hidden">
                    <Image
                      src={offices[mobileOfficeIndex].image}
                      alt="Pattern"
                      fill
                      className="object-fill opacity-50"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots - Mobile */}
          <div className="flex justify-center mt-6 lg:mt-8 space-x-3">
            {offices.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileOfficeIndex(index)}
                className={`w-2 h-2 transition-all duration-300 ${
                  mobileOfficeIndex === index
                    ? "bg-[#10284C] ring-1 rounded-[1px] ring-[#10284C] ring-offset-2 scale-110"
                    : "bg-gray-300 hover:bg-gray-400 rounded-[1px]"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Desktop Version - Keep as is */}
        <div className="hidden lg:block">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlides}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleOffices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex overflow-hidden"
                  >
                    {/* Left Section - Office Information */}
                    <div className="flex-1 p-6">
                      <h3 className="text-2xl font-bold text-[#10284C] mb-1">
                        {office.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">{office.subtitle}</p>
                      
                      {/* Separator Line */}
                      <div className="h-[1px] w-60 bg-gray-400 mb-4"></div>
                      
                      {/* Contact Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <MapPin className="w-4 h-4 text-gray-400" /> {office.address}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" /> {office.phone}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" /> {office.email}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <Clock className="w-4 h-4 text-gray-400" /> {office.timing}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Section - Patterned Strip */}
                    <div className="w-24 relative overflow-hidden">
                      <Image
                        src={office.image}
                        alt="Pattern"
                        fill
                        className="object-fill opacity-50"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalOfficeSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 transition-all duration-300  ${
          currentSlides === index
            ? "bg-[#10284C] ring-1 rounded-[1px] ring-[#10284C] ring-offset-2 scale-110"
            : "bg-gray-300 hover:bg-gray-400 rounded-[1px]"
        }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
