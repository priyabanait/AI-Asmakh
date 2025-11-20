"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { FaArrowRight,FaArrowLeft} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function AlAsmakhTower() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const areaCarouselRef = useRef(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const areas = [
    { name: "Lusail City", image: "/c2.jpg.png" },
    { name: "Pearl Island", image: "/14.png" },
    { name: "Lusail City", image: "/c2.jpg.png" },
    { name: "Doha", image: "/c3.jpg.png" },
    { name: "Al Sadd", image: "/17.png" },
    { name: "Lusail City", image: "/16.png" },
    { name: "Al Dafna", image: "/c2.jpg.png" },
    { name: "West Bay", image: "/c1.jpg.png" },
    
  ];

  const projects = [
    {
      title: "AL ASMAKH TOWER",
      location: "West Bay",
      description:
        "The flagship corporate headquarters features an iconic design on Doha’s skyline, offering premium smart office spaces and sustainability excellence, proudly achieving GSAS 4-star certification for innovation and environmental performance.",
      img: "/407.png",
    },
    {
      title: "MARINA SKY RESIDENCES",
      location: "Dubai Marina",
      description:
        "Premium waterfront living with world-class amenities and exceptional marina views.",
      img: "/407.png",
    },
    {
      title: "THE ROYAL HEIGHTS",
      location: "Business Bay",
      description:
        "Contemporary design combined with smart living for the modern urban lifestyle.",
      img: "/407.png",
    },
  ];

  const handleAreaTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleAreaTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleAreaTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentAreaIndex < areas.length - 1) {
      setCurrentAreaIndex(currentAreaIndex + 1);
    }
    if (isRightSwipe && currentAreaIndex > 0) {
      setCurrentAreaIndex(currentAreaIndex - 1);
    }
  };

  const goToAreaSlide = (index) => {
    setCurrentAreaIndex(index);
  };

  const goToPreviousArea = () => {
    setCurrentAreaIndex((prev) => (prev === 0 ? areas.length - 1 : prev - 1));
  };

  const goToNextArea = () => {
    setCurrentAreaIndex((prev) => (prev === areas.length - 1 ? 0 : prev + 1));
  };

  return (
    <section >
      {/* === PROJECT SECTION === */}
      {/* MOBILE - Full Background with Frosted Glass Card */}
      <div className="lg:hidden relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full"
          style={{ height: "clamp(400px, 90vh, 800px)" }}
        >
          <Image
            src={projects[activeSlide].img || "/407.png"}
            alt={projects[activeSlide].title}
            fill
            className="object-cover"
            priority
          />

          {/* FROSTED GLASS CARD OVERLAY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ padding: "16px" }}
          >
            <div
              className="relative bg-white/20 w-full max-w-md mx-auto p-6 md:p-8 rounded-2xl"
              style={{
               
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                margin: "0 auto",
              }}
            >
              {/* CONTENT */}
              <div className="relative text-center md:text-left md:pl-12">
                {/* TITLE */}
                <h2
                  className="font-bold text-[#10284C] mb-3 md:mb-4 md:text-left text-center text-2xl md:text-3xl uppercase tracking-wide"
                >
                  {projects[activeSlide].title}
                </h2>
                <div className="w-[90%] h-[1px]  bg-gray-300 mx-auto my-2 "></div>
                {/* SEPARATOR LINE */}
               

               {/* LOCATION */}
<div className="flex items-center gap-2 mb-4 md:mb-5 justify-center md:justify-start text-center md:text-left">

<MapPin
  size={18}
  className="text-[#10284C]"
/>

<span
  className="text-[#10284C]"
  style={{ fontSize: "clamp(14px, 1vw, 16px)" }}
>
  {projects[activeSlide].location}
</span>

</div>


                {/* DESCRIPTION */}
                <p
                  className="text-gray-700 font-semibold mb-6 md:mb-8 leading-relaxed"
                  style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  {projects[activeSlide].description}
                </p>

               {/* DETAILS BUTTON */}
<div className="flex justify-center md:justify-start">
  <button
    className="flex items-center justify-center gap-2 bg-[#10284C] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-[#022d5e] transition-all duration-300 shadow-md hover:shadow-lg"
    style={{ fontSize: "clamp(14px, 1.1vw, 16px)" }}
  >
    <span>Details</span>
    <FaArrowRight size={14} className="ml-16" />
  </button>
</div>

              </div>
            </div>
          </motion.div>

          {/* NAVIGATION DOTS - Below the card */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2">
            {projects.map((_, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => setActiveSlide(index)}
                  className={`
                    transition-all duration-300 flex items-center justify-center
                    ${index === activeSlide 
                      ? "w-5 h-5 border-2 border-[#10284C] rounded-sm" 
                      : "w-3 h-3"
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span
                    className={`
                      block
                      ${index === activeSlide 
                        ? "w-2.5 h-2.5 bg-[#10284C] rounded-sm" 
                        : "w-3 h-3 bg-gray-400"
                      }
                    `}
                  ></span>
                </button>
                {/* {index < projects.length - 1 && (
                  <div className="w-px h-3 bg-gray-300 mx-2"></div>
                )} */}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* DESKTOP - Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 gap-6 md:gap-20 3xl:gap-10 4xl:gap-12 relative">

{/* LEFT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative w-full"
  style={{ height: "clamp(300px, 80vw, 600px)" }}
>
  <Image
    src={projects[activeSlide].img || "/407.png"}
    alt={projects[activeSlide].title}
    fill
    className="object-cover"
    priority
  />
</motion.div>

{/* DESKTOP RIGHT CONTENT */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="hidden lg:flex flex-col justify-center px-4 md:px-0"
>
  <h2
    className="font-bold text-[#00254D] text-4xl  uppercase tracking-wide"
  >
    {projects[activeSlide].title}
  </h2>
  <div className="w-[30%] h-[1px]  bg-gray-300  my-4 "></div>
  <div className="flex items-center gap-2 mb-4 md:mb-5">
    <MapPin
      size={20}
      className="text-gray-600"
      style={{ width: "clamp(16px, 1.2vw, 20px)" }}
    />
    <span
      className="text-gray-600"
      style={{ fontSize: "clamp(12px, 1vw, 16px)" }}
    >
      {projects[activeSlide].location}
    </span>
  </div>

  <p
    className="text-gray-700 mb-6 mr-60 lg:mb-16 leading-relaxed"
    style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
  >
    {projects[activeSlide].description}
  </p>

  <button
    className="flex items-center justify-center gap-2 bg-[#10284C] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-md hover:bg-[#022d5e] transition-all duration-300 shadow-md hover:shadow-lg w-fit"
    style={{ fontSize: "clamp(14px, 1.1vw, 16px)" }}
  >
    <span>Details</span>
    <FaArrowRight size={16} className="ml-16" />
  </button>

  <div className="flex items-center ml-10 gap-2 mt-6 md:mt-16">
  {projects.map((_, index) => (
    <div key={index} className="flex items-center">
      <button
        onClick={() => setActiveSlide(index)}
        className={`
          transition-all duration-300 flex items-center justify-center
          ${index === activeSlide 
            ? "w-5 h-5 border-2 border-[#10284C] rounded-sm" 
            : "w-3 h-3"
          }
        `}
        aria-label={`Go to slide ${index + 1}`}
      >
        <span
          className={`
            block
            ${index === activeSlide 
              ? "w-2.5 h-2.5 bg-[#10284C] rounded-sm" 
              : "w-3 h-3 bg-gray-400"
            }
          `}
        ></span>
      </button>
      {/* {index < projects.length - 1 && (
        <div className="w-px h-3 bg-gray-300 mx-2"></div>
      )} */}
    </div>
  ))}
</div>

</motion.div>
</div>


      {/* === EXPLORE OUR AREA SECTION === */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-[1827px] mx-auto px-4">
          {/* Heading */}
          <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-bold text-[#10284C]  uppercase mb-2 text-center mx-10 3xl:mb-3 4xl:mb-4">
            EXPLORE BY AREA
          </h2>
          <div className="flex-1 h-px bg-gray-300 my-4 mx-auto w-[20%] mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-center">
            Browse luxury homes and investments across Qatar's finest districts,
            each offering its own lifestyle, charm, and opportunity.
          </p>

          {/* Mobile Carousel - Only visible on mobile */}
          <div 
            className="block lg:hidden relative" 
            style={{ 
              overflow: "hidden",
              width: "100%",
            }}
          >
            <div
              ref={areaCarouselRef}
              className="relative mx-auto"
              onTouchStart={handleAreaTouchStart}
              onTouchMove={handleAreaTouchMove}
              onTouchEnd={handleAreaTouchEnd}
              style={{ 
                height: "auto",
                minHeight: "400px",
                overflow: "hidden",
                width: "100%",
                maxWidth: "100%",
                position: "relative",
              }}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(calc(-${currentAreaIndex * 100}%))`,
                  willChange: "transform",
                }}
              >
                {areas.map((area, index) => {
                  const isCenter = index === currentAreaIndex;
                  const offset = index - currentAreaIndex;

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "8px",
                          width: "100%",
                          maxWidth: "100%",
                          height: "400px",
                          position: "relative",
                          overflow: "hidden",
                          margin: "0 auto",
                        }}
                        className="shadow-lg"
                      >
                        <Image
                          src={area.image}
                          alt={area.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                        {/* City Name Overlay - Top Left Corner */}
                        <div
                          className="absolute top-4 shadow-md bg-white/20 left-4 px-4 py-2 rounded"
                          style={{
                          
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                          }}
                        >
                          <span className="text-white font-semibold text-sm">
                            {area.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation - Below carousel */}
            <div className="mt-6">
              {/* Horizontal Line with Counter */}
              <div className="flex items-end justify-end mb-2">
               
                <span className="text-gray-400 text-sm mx-4">
                  {String(currentAreaIndex + 1).padStart(2, '0')} of {String(areas.length).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 h-px bg-[#10284C] mb-4"></div>
              {/* Navigation Buttons */}
             {/* Navigation Buttons */}
<div className="flex items-center justify-center gap-3">

{/* Previous Button */}
<button
  onClick={goToPreviousArea}
  className="w-10 h-10 rounded-sm bg-white border border-black flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
  aria-label="Previous area"
>
  <FaArrowLeft size={16} className="text-black" />
</button>

{/* Next Button */}
<button
  onClick={goToNextArea}
  className="w-10 h-10 rounded-sm bg-[#10284C] flex items-center justify-center hover:bg-[#022d5e] transition-all duration-300"
  aria-label="Next area"
>
  <FaArrowRight size={16} className="text-white" />
</button>

</div>

            </div>
          </div>

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden lg:block">
            {/* --- TOP ROW --- */}
            <div className="flex justify-center rounded-lg gap-[10px] mb-[10px]">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative rounded-lg ${
                    i === 1 ? "w-[860px] h-[420px]" : "w-[420px] h-[420px]"
                  }`}
                >
                  <Image
                    src={areas[i].image}
                    alt={areas[i].name}
                    fill
                    className="object-fill rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* --- BOTTOM ROW --- */}
            <div className="flex justify-center rounded-lg gap-[10px]">
              {[4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className={`relative rounded-lg ${
                    i === 7 ? "w-[860px] h-[420px]" : "w-[420px] h-[420px]"
                  }`}
                >
                  <Image
                    src={areas[i].image}
                    alt={areas[i].name}
                    fill
                    className="object-fill rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </section>
    
    </section>
  );
}
