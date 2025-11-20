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
      <section className="relative lg:h-screen h-[140vh] w-full text-white">
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
      relative z-10 
      flex items-center justify-end 
      h-full px-6 md:px-20

      /* MOBILE OVERRIDE BELOW */
      md:static
      absolute bottom-0 left-0 right-0 
      md:bottom-auto md:left-auto md:right-auto
    "
  >
    <div
      className="
        max-w-lg space-y-6 text-center lg:text-left

        /* MOBILE BACKGROUND */
        bg-white/20 backdrop-blur-md p-6 rounded-t-xl
        md:bg-transparent md:backdrop-blur-0 md:p-0 md:rounded-none
      "
    >
      <div>
        <h1 className="text-xl md:text-3xl lg:text-3xl font-semibold leading-tight">
          TURNING YOUR <br /> PROPERTY INTO PROFIT
        </h1>
        <div className="flex-1 h-px bg-white/20 my-4 mb-4"></div>
        <p className="lg:text-gray-400 text-white mt-2 text-[0.8rem]">
          Your complete real estate partner — from concept to completion, and beyond.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="space-y-3 mt-6">
        <div className="bg-white/30 bg-opacity-60 p-4 rounded-lg">
          <h3 className="font-semibold">Expert Knowledge</h3>
          <p className="lg:text-gray-400 text-white text-sm">
            Our development team transforms visionary ideas into architectural
            landmarks that define Qatar’s urban landscape.
          </p>
        </div>

        <div className="bg-white/30 bg-opacity-60 p-4 rounded-lg">
          <h3 className="font-semibold">Personalized Service</h3>
          <p className="lg:text-gray-400 text-white text-sm">
            We take the time to understand your needs and offer personalized
            solutions to ensure a seamless real estate experience.
          </p>
        </div>

        <div className="bg-white/30 bg-opacity-60 p-4 rounded-lg">
          <h3 className="font-semibold">Trusted Partnerships</h3>
          <p className="lg:text-gray-400 text-white text-sm">
            These prestigious partnerships underscore our capability to manage
            large-scale, complex projects and our trusted position within Qatar’s
            development landscape.
          </p>
        </div>

        <div className="bg-white/30 bg-opacity-60 p-4 rounded-lg">
          <h3 className="font-semibold">Comprehensive Support</h3>
          <p className="lg:text-gray-400 text-white text-sm">
            From property search to finalizing the deal, we provide comprehensive
            support at every step of the process.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section Title + Cards */}
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
      <section className="bg-gray-100 py-16 pl-12 md:pl-16 lg:pl-24 pr-6 md:pr-12 lg:pr-24 relative overflow-visible">
      {/* Section Heading */}
      <div className="text-center mb-12">
      <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-bold text-[#10284C]  uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
          STORY FROM OUR CLIENTS
        </h2>
        <div className="w-[30%] h-[2px] bg-gray-300 mx-auto"></div>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 w-full max-w-7xl overflow-visible"
          >
            {visibleTestimonials.map(
              (t, i) =>
                t && (
                  <div
                    key={i}
                    className="relative bg-gray-200 shadow-md rounded-lg p-6 pl-16 md:pl-20 hover:shadow-xl transition overflow-visible"
                  >
                    {/* Image - positioned to overlap left edge, starting from half */}
                    <div className="absolute -left-[45px] md:-left-[60px] top-1/2 -translate-y-1/2 w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden flex-shrink-0 z-10">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="text-left relative z-0">
                      <h3 className="text-[#10284C] font-semibold text-base md:text-lg mb-2 flex items-center justify-between">
                        {t.name}
                        <Image 
                          src="/SVG.png" 
                          alt="quote" 
                          width={20} 
                          height={20} 
                          className="object-contain"
                        />
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
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
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="lg:hidden text-center mb-12">
      <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-bold text-[#10284C]  uppercase mb-2 text-left 3xl:mb-3 4xl:mb-4">
      Explore Events
        </h2>
        <div className="w-50 h-[2px] bg-gray-300 "></div>
      </div>
      <div className="hidden lg:block text-center mb-12">
      <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-bold text-[#10284C]  uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
      LATEST REAL ESTATE BLOGS
        </h2>
        <div className="w-40 h-[2px] bg-gray-300 mx-auto"></div>
      </div>

      {/* Mobile Version - Show one blog initially, all when View All is clicked */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 gap-6 w-full max-w-7xl mx-auto">
          {mobileBlogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-md overflow-hidden  transition-shadow duration-300"
            >
              {/* Image Section with Overlapping Button and Text Overlay */}
              <div className="relative w-full h-[400px] md:h-[400px]">
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
                  <h3 className="text-white font-bold text-lg md:text-xl mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
                    {blog.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Only show when not all blogs are displayed */}
        {!showAllBlogs && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllBlogs(true)}
              className="bg-[#10284C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1b3a70] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>View All</span>
              <FaArrowRight size={16} />
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
            >
              {visibleBlogs.map((blog, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section with Overlapping Button and Text Overlay */}
                  <div className="relative w-full h-[300px] md:h-[400px]">
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
                      <h3 className="text-white font-bold text-lg md:text-xl mb-3">
                        {blog.title}
                      </h3>
                      <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
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
    <section className="relative w-full lg:h-screen h-[150vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/WhatsApp Image 2025-11-07 at 10.45.55 PM.jpeg"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full px-6 md:px-12 lg:px-14 items-center justify-between">
        {/* Left Side Title - Overlaid on background */}
        <div className="text-white md:w-1/2 flex flex-col lg:mt-40 mt-20 h-full ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-semibold mb-3">
            How Can We Help You Today?
          </h2>
          <div className="h-[0.5px] w-[70%] bg-white mx-auto lg:mx-0 mb-4 "></div>
        </div>

        {/* Right Side - Form Panel and Map */}
        <div className="md:w-1/2 max-w-2xl flex flex-col">
          {/* Form Panel - Translucent */}
          <div className="bg-blue-50/10 backdrop-blur-sm p-6 lg:px-16 rounded-lg shadow-xl relative overflow-visible">
            {/* Form Header */}
            <h3 className="text-[#10284C] md:px-10 text-sm text-center md:text-base font-medium mb-3">
              Fill out the form below and our experts will get back to you within 24 hour
            </h3>
            <div className="h-[1px] w-60 bg-white 300 mb-4 mx-auto"></div>


            <form className="space-y-4">
              {/* First Row: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#10284C] text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#10284C]"
                  />
                </div>
                <div>
                  <label className="block text-[#10284C] text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#10284C]"
                  />
                </div>
              </div>

              {/* Second Row: Phone and Property Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#10284C] text-sm font-medium mb-2">Phone</label>
                  <input
                    type="text"
                    placeholder="(123) 456 - 789"
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#10284C]"
                  />
                </div>
                <div>
                  <label className="block text-[#10284C] text-sm font-medium mb-2">Property Type</label>
                  <select
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-gray-500 focus:outline-none focus:border-[#10284C]"
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
                <label className="block text-[#10284C] text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Tell us more about your requirement like budget ,area & others .."
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#10284C] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#10284C] text-white px-8 py-2.5 rounded-md flex items-center justify-end gap-2 hover:bg-[#0d2142] transition"
              >
                <span>Submit</span>
                <FaArrowRight size={14} className="ml-10" />
              </button>
            </form>
          </div>

          {/* Map Section - Below the blur card */}
          <div className="mt-6 w-full h-[20vh] rounded-md overflow-hidden bg-gray-200 border border-gray-300 relative">
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
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
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
                <div className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex overflow-hidden">
                  {/* Left Section - Office Information */}
                  <div className="flex-1 p-6">
                    <h3 className="text-2xl font-bold text-[#10284C] mb-1">
                      {offices[mobileOfficeIndex].title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{offices[mobileOfficeIndex].subtitle}</p>
                    
                    {/* Separator Line */}
                    <div className="h-[1px] w-60 bg-gray-400 mb-4"></div>
                    
                    {/* Contact Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" /> {offices[mobileOfficeIndex].address}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" /> {offices[mobileOfficeIndex].phone}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" /> {offices[mobileOfficeIndex].email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" /> {offices[mobileOfficeIndex].timing}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Section - Patterned Strip */}
                  <div className="w-24 relative overflow-hidden">
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
          <div className="flex justify-center mt-8 space-x-3">
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleOffices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex overflow-hidden"
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
