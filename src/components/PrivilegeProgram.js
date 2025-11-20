"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function PrivilegeProgram() {
  // Image Icon Components
  const LeasingIcon = () => (
    <Image 
      src="/1_Icons Used_Leasing 1.png" 
      alt="Leasing" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const SalesIcon = () => (
    <Image 
      src="/Group.png" 
      alt="Sales" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const LuxuryMarketingIcon = () => (
    <Image 
      src="/4_Icons Used_Luxury Markt 1.png" 
      alt="Luxury Marketing" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const ProjectDevelopmentIcon = () => (
    <Image 
      src="/3_Icons Used_Project Dvt 1.png" 
      alt="Project Development" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const PropertyManagementIcon = () => (
    <Image 
      src="/5_Icons Used_Property Mgt 1.png" 
      alt="Property Management" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const FacilitiesManagementIcon = () => (
    <Image 
      src="/6_Icons Used_Facility Mgt 1.png" 
      alt="Facilities Management" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const TransactionAdvisoryIcon = () => (
    <Image 
      src="/7_Icons Used_Adisory 1.png" 
      alt="Transaction Advisory" 
      width={48} 
      height={48}
      className="object-contain"
    />
  );

  const services = [
    {
      icon: <LeasingIcon />,
      title: "Leasing",
      description: "Premium solutions for residential and commercial properties",
    },
    {
      icon: <SalesIcon />,
      title: "Sales",
      description: "Expert property sales with market-leading results",
    },
    {
      icon: <LuxuryMarketingIcon />,
      title: "Luxury Marketing",
      description: "Sophisticated marketing for high-end properties",
    },
    {
      icon: <ProjectDevelopmentIcon />,
      title: "Project Development",
      description: "Redefining luxury in residential, commercial, and mixed-use.",
    },
    {
      icon: <PropertyManagementIcon />,
      title: "Property Management",
      description: "Comprehensive property management solutions",
    },
    {
      icon: <FacilitiesManagementIcon />,
      title: "Facilities Management",
      description: "Professional management and maintenance services",
    },
    {
      icon: <TransactionAdvisoryIcon />,
      title: "Transaction Advisory",
      description: "Strategic advisory services for complex real estate transactions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      return;
    }

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= services.length - 1) {
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
  }, [isPaused, services.length]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      // Resume auto-scroll after a delay if no swipe occurred
      setTimeout(() => setIsPaused(false), 2000);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    // Resume auto-scroll after user interaction
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToSlide = (index) => {
    setIsPaused(true);
    setCurrentIndex(index);
    // Resume auto-scroll after clicking dot
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section
      style={{
        
      
        backgroundSize: "60px 60px",
        overflowX: "hidden",
      }}
      className="relative bg-gray-100 py-16 md:py-20 3xl:py-24 4xl:py-28 px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16"
    >
      <div className="container-custom text-center">
        <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-bold text-[#10284C]  uppercase mb-2 3xl:mb-3 4xl:mb-4">
          OUR REAL ESTATE SERVICES 
        </h2>

        <div className="w-32 3xl:w-40 4xl:w-48 h-[1px] mt-4 3xl:mt-5 4xl:mt-6 bg-gray-300 mx-auto mb-6 3xl:mb-8 4xl:mb-10"></div>

        <p
          style={{ fontSize: "clamp(14px, 1vw, 18px)", color: "#919191" }}
          className="max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto mb-8 3xl:mb-10 4xl:mb-12 font-normal "
        >
          From luxury residences to commercial developments, we deliver trusted services that turn your real estate goals into reality.
        </p>

        {/* Mobile Carousel - Only visible on mobile */}
        <div 
          className="block sm:hidden relative" 
          style={{ 
            overflow: "hidden",
            width: "100%",
            marginLeft: "-16px",
            marginRight: "-16px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div
            ref={carouselRef}
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ 
              height: "auto",
              minHeight: "320px",
              overflow: "visible",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(50vw - 125px - ${currentIndex * 266}px))`,
                willChange: "transform",
              }}
            >
              {services.map((item, index) => {
                const isCenter = index === currentIndex;
                const offset = index - currentIndex;

                return (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: "250px",
                      padding: "0 8px",
                      transform: isCenter
                        ? "translateY(0) scale(1)"
                        : `translateY(${20 + Math.abs(offset) * 5}px) scale(${0.9 - Math.abs(offset) * 0.05})`,
                      transition: "transform 0.3s ease-in-out",
                      zIndex: isCenter ? 10 : 5 - Math.abs(offset),
                      opacity: Math.abs(offset) > 1 ? 0.6 : 0.9,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "8px",
                        width: "100%",
                        height: "auto",
                        minHeight: "280px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                      className={`
                        bg-white shadow-sm p-6 text-center
                        ${isCenter ? "shadow-lg" : "shadow-sm"}
                        transition-all duration-300 
                      `}
                    >
                      <div className="flex justify-center items-center h-[60px] mb-4">
                        {item.icon}
                      </div>

                      <div>
                        <h3
                          style={{
                            fontSize: "clamp(16px, 4vw, 20px)",
                            color: "#2D3748",
                          }}
                          className="font-bold "
                        >
                          {item.title}
                        </h3>
                        <div className="w-[90%] h-[1px]  bg-gray-300 mx-auto my-2 "></div>
                        <p
                          style={{
                            fontSize: "clamp(12px, 3.5vw, 15px)",
                            color: "#4A5568",
                          }}
                          className="p-0 leading-relaxed mb-0"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
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
        <div className="hidden sm:block">
          {/* Top Row - 3 blocks */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-3
              gap-6 3xl:gap-8 4xl:gap-10
              mb-6 3xl:mb-8 4xl:mb-10 px-40
            "
          >
            {services.slice(0, 3).map((item, index) => (
              <div
                key={index}
                style={{ borderRadius: "8px", width: "100%" }}
                className="
                  bg-white shadow-sm p-6 3xl:p-8 4xl:p-10
                  hover:shadow-lg transition-all duration-300 text-center
                "
              >
                <div className="flex justify-center items-center h-[70px] mb-4 3xl:mb-5 4xl:mb-6">
                  {item.icon}
                </div>

                <h3
                  style={{ fontSize: "clamp(18px, 1.2vw, 22px)", color: "#2D3748" }}
                  className="font-bold mb-3 3xl:mb-4 4xl:mb-5"
                >
                  {item.title}
                </h3>
                <div className="w-[90%] h-[1px]  bg-gray-300 mx-auto my-2 "></div>
                <p
                  style={{ fontSize: "clamp(14px, 0.9vw, 16px)", color: "#4A5568" }}
                  className="p-0 leading-relaxed mb-0"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 4 blocks */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-6 3xl:gap-8 4xl:gap-10
            "
          >
            {services.slice(3, 7).map((item, index) => (
              <div
                key={index + 3}
                style={{ borderRadius: "8px", width: "100%" }}
                className="
                  bg-white shadow-sm p-6 3xl:p-8 4xl:p-10
                  hover:shadow-lg transition-all duration-300 text-center
                "
              >
                <div className="flex justify-center items-center h-[70px] mb-4 3xl:mb-5 4xl:mb-6">
                  {item.icon}
                </div>

                <h3
                  style={{ fontSize: "clamp(18px, 1.2vw, 22px)", color: "#2D3748" }}
                  className="font-bold mb-3 3xl:mb-4 4xl:mb-5"
                >
                  {item.title}
                </h3>
                <div className="w-[90%] h-[1px]  bg-gray-300 mx-auto my-2 "></div>
                <p
                  style={{ fontSize: "clamp(14px, 0.9vw, 16px)", color: "#4A5568" }}
                  className="p-0 leading-relaxed mb-0"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Transaction Advisory - Below carousel */}
        {/* <div className="block sm:hidden mt-8">
          <div
            style={{ borderRadius: "8px", width: "100%", maxWidth: "320px", margin: "0 auto" }}
            className="
              bg-white shadow-sm p-6 text-center
            "
          >
            <div className="flex justify-center items-center h-[60px] mb-4">
              {transactionAdvisory.icon}
            </div>

            <h3
              style={{
                fontSize: "clamp(16px, 4vw, 20px)",
                color: "#2D3748",
              }}
              className="font-bold mb-3"
            >
              {transactionAdvisory.title}
            </h3>

            <p
              style={{
                fontSize: "clamp(12px, 3.5vw, 15px)",
                color: "#4A5568",
              }}
              className="p-0 leading-relaxed mb-0"
            >
              {transactionAdvisory.description}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
