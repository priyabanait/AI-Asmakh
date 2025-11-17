import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export default function PropertyDetails() {
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
    
    <div className="w-full min-h-screen bg-[#F5F7FA] p-6 mt-20">
      {/* Back Button */}
      <div className="bg-gray-200 text-sm flex items-center w-40 p-3 mb-4 rounded-md cursor-pointer">
  <button className="flex items-center gap-2 text-[#10284C] font-semibold">
    <ArrowLeft size={18} className="mr-10" /> 
   <span className="ml-8">Back</span>
  </button>
</div>

      {/* Title + Price + Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#10284C] text-white p-6 rounded-md shadow-md flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Luxury Penthouse in West Bay</h1>
          <div className="w-[50%] h-[0.2px] px-10  mt-2 3xl:mt-3 bg-gray-400 my-2 "></div>
          <div className="flex items-center text-gray-200 text-sm mt-2">
            <MapPin size={16} className="mr-1" /> West Bay, Doha, Qatar
          </div>
        </div>

        <div className="bg-[#10284C] text-white p-6 rounded-md shadow-md flex flex-col justify-center">
          <p className="text-sm opacity-80 mb-1">Per Month</p>
          <h2 className="text-2xl font-bold">QAR 24,000</h2>
        </div>

        <div className="bg-[#10284C] p-6 rounded-md shadow-md flex items-center justify-center">
  <div className="flex gap-4 w-full">
    <button className="w-1/2 bg-gray-400 text-[#10284C] rounded-md font-semibold py-2 shadow">
      For Rent
    </button>

    <button className="w-1/2 bg-gray-400 text-[#10284C] rounded-md font-semibold py-2 shadow">
      Featured
    </button>
  </div>
</div>

      </div>
      <div className="bg-white shadow-md p-6">

      {/* Thumbnail Images */}
      <div className="flex gap-3 overflow-x-auto pb-3">
        {[1,2,3,4,5,6,7,8,9].map((n) => (
          <div key={n} className="min-w-[150px] h-[90px] rounded-md overflow-hidden shadow">
            <Image src={`/Image (6).png`} alt="thumb" width={150} height={90} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      {/* Main Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="w-full h-[350px] md:h-[420px] rounded-md overflow-hidden shadow-lg">
          <Image src="/Image (7).png" alt="main" width={800} height={800} className="object-cover w-full h-full" />
        </div>

        <div className="w-full h-[350px] md:h-[420px] rounded-md overflow-hidden shadow-lg">
          <Image src="/Image (8).png" alt="main" width={800} height={800} className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Slider Arrows */}
      <div className="flex justify-center items-center gap-6 mt-6 ">
        <button className="bg-white p-3 rounded-md shadow-md border border-gray-500">
          <FaArrowLeft size={22} className="text-[#10284C]" />
        </button>
        <div className="text-[#10284C] tracking-widest text-lg">- - - - -</div>
        <button className="bg-white p-3 rounded-md shadow-md border border-gray-500">
          <FaArrowRight size={22} className="text-[#10284C]" />
        </button>
      </div>
    </div>
    </div>
    <div className="w-full bg-gray-100 p-6">

      {/* MAIN CONTENT */}
      
      <div className="grid grid-cols-2 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-1">
          {/* TOP SPECS */}
          <div className="bg-gray-100 p-4 mt-4 shadow-lg rounded-md mb-4">
          <div className="grid grid-cols-5 gap-4">
            {[
              { icon: "/Icon (6).png", label: "03" },
              { icon: "/Icon (5).png", label: "02" },
              { icon: "/Icon (7).png", label: "450" },
              { icon: "/Car.png", label: "02" },
              { icon: null, label: "Furnished" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm"
              >
                {item.icon && (
                  <Image src={item.icon} width={30} height={30} alt="icon" />
                )}
                <p className="font-semibold text-[#10284C]">{item.label}</p>
              </div>
            ))}
          </div>
          </div>

          {/* Tabs */}
          

          {/* Description box */}
          <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex gap-4 mb-4">
            <button className="bg-white px-5 py-2 rounded-lg shadow text-[#10284C] font-semibold">
              Overview
            </button>
            <button className="bg-white px-5 py-2 rounded-lg shadow text-gray-500">
              360 Virtual Tour
            </button>
          </div>
            <h2 className="text-xl mx-10 font-semibold text-[#10284C] mb-3">
              Description
            </h2>

            <p className="text-gray-600  mx-10 leading-relaxed mb-4">
              West Bay Plaza represents the pinnacle of commercial real estate
              development in Doha’s prestigious financial district. This
              state-of-the-art complex combines premium office spaces with
              high-end retail outlets, creating a dynamic business environment
              in the heart of Qatar’s economic center.
            </p>

            <p className="text-gray-600 mx-10 leading-relaxed mb-4">
              The development features cutting-edge architecture with sustainable
              design principles, smart building technology, and world-class
              amenities. Located strategically in West Bay, the plaza offers
              unparalleled connectivity to major business hubs, government
              offices, and luxury hotels.
            </p>

            <p className="text-gray-600 mx-10 leading-relaxed mb-4">
              With 80 premium units ranging from compact offices to expansive
              commercial spaces, West Bay Plaza caters to businesses of all sizes.
              The project is designed to achieve LEED Gold certification,
              emphasizing our commitment to environmental sustainability and
              energy efficiency.
            </p>
            <div className="w-[90%] h-[0.2px] px-10 mx-10  mt-2 3xl:mt-3 bg-gray-400 mb-3 md:mb-4 3xl:mb-5"></div>
            {/* Bottom stats */}
            <div className="grid grid-cols-3 mx-10 pt-4 mt-4">
  {[
    { title: "Total Area", value: "8080", img: "/icon (8).png" },
    { title: "Floors", value: "25", img: "/icon (9).png" },
    { title: "Parking Spaces", value: "02", img: "/icon (9).png" },
  ].map((item, i) => (
    <div
      key={i}
      className={`flex flex-col pl-4 ${
        i !== 2 ? "border-r border-gray-400" : ""
      }`}
    >
      {/* TITLE + ICON SIDE BY SIDE */}
      <div className="flex items-center gap-2">
        <img src={item.img} alt={item.title} className="w-5 h-5" />
        <p className="text-gray-500 text-sm">{item.title}</p>
      </div>

      {/* VALUE BELOW */}
      <h3 className="text-[#10284C] text-xl font-semibold mt-1">
        {item.value}
      </h3>
    </div>
  ))}
</div>

          </div>

          {/* Map Box */}
<div className="mt-6 bg-white rounded-xl shadow p-0 h-[300px] overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1161406535!2d72.74109735859375!3d19.082197839287853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f497d4a63%3A0xdeb6b3fbbf7c9f1!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


          {/* Bottom info strip */ }
          <div className="bg-gray-100 p-4 mt-4 shadow-lg rounded-md">
          <div className=" grid grid-cols-3 gap-4">
  
  {/* Box 1 */}
  <div className="bg-white p-4 rounded-lg shadow text-sm">
    <p>
      <span className="font-semibold text-[#10284C]">Property ID:</span>{" "}
      PH-2024-001
    </p>
  </div>

  {/* Box 2 */}
  <div className="bg-white p-4 rounded-lg shadow text-sm">
    <p>
      <span className="font-semibold text-[#10284C]">Property Type:</span>{" "}
      Penthouse
    </p>
  </div>

  {/* Box 3 */}
  <div className="bg-white p-4 rounded-lg shadow text-sm">
    <p>
      <span className="font-semibold text-[#10284C]">Year Built:</span>{" "}
      2023
    </p>
  </div>
</div>
</div>

        </div>

        {/* RIGHT SIDE - AGENT CARDS */}
        <div className="col-span-1 flex flex-col gap-6">

          {/* Agent Card Component */}
          {[
            {
              name: "Sarah Johnson",
              role: "Luxury Property Specialist",
              specialties: "West Bay, Commercial, Penthouse",
              languages: "English, Spanish, Arabic",
              image: "/div.png",
              logo: "/Frame 74.png",
            },
            {
              name: "Mohammed Al-Thani",
              role: "Luxury Property Specialist",
              specialties: "West Bay, Commercial, Penthouse",
              languages: "English, Spanish, Arabic",
              image: "/div (2).png",
              logo: "/Frame 74.png",
            },
          ].map((agent, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow overflow-hidden flex h-auto"
            >
              {/* LEFT IMAGE */}
              <div className="w-1/2 relative flex-shrink-0">
                <Image
                  src={agent.image}
                  width={300}
                  height={300}
                  alt="agent"
                  className="h-full w-full object-fill"
                />

                <Image
                  src={agent.logo}
                  width={50}
                  height={50}
                  alt="logo"
                  className="absolute top-3 left-3"
                />
              </div>

              {/* RIGHT DETAILS */}
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                <div className="shadow-md bg-white text-center p-8 rounded-md">
                <h3 className="text-lg font-semibold text-center text-[#10284C] mb-1">
                    {agent.name}
                  </h3>
                  <div className="w-[30%] h-[0.2px] px-10 mx-10  mt-2 3xl:mt-3 bg-gray-400 my-2 mx-auto"></div>
                  <p className="text-gray-500 text-sm mb-4">{agent.role}</p>

                </div>
                  <div className="relative mt-4 ">
                    <p className=" absolute top-[-9px] text-xs text-gray-400 ml-2">Specialties:</p>
                    <p className="bg-white p-4 shadow-md  rounded text-sm text-gray-700">
                      {agent.specialties}
                    </p>
                  </div>

                  <div className="relative mt-4 ">
                    <p className="absolute top-[-9px] text-xs text-gray-400 ml-2 ">Languages:</p>
                    <p className="bg-white p-4 shadow-md rounded text-sm text-gray-700">
                      {agent.languages}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#10284C] text-white py-2.5 rounded-lg flex justify-between items-center px-4 text-sm font-medium hover:opacity-90 transition">
                      Call Agent 
                      <FaArrowRight size={14}/>
                    </button>
                    <button className="flex-1 bg-[#10284C] text-white py-2.5 rounded-lg flex justify-between items-center px-4 text-sm font-medium hover:opacity-90 transition">
                      Send email
                      <FaArrowRight size={14}/>
                    </button>
                  </div>
                  <button className="w-full bg-[#10284C] text-white py-2.5 rounded-lg flex justify-between items-center px-4 text-sm font-medium hover:opacity-90 transition">
                    Schedule Viewing 
                    <FaArrowRight size={14}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="relative w-full py-12 px-4 lg:px-16 overflow-hidden">
      <h2 className="text-[27px] md:text-[36px] lg:text-[36px] font-semibold text-[#10284C]  uppercase mb-2 text-center 3xl:mb-3 4xl:mb-4">
      Related Listings
        </h2>
        <p className="text-gray-500  mx-auto mb-12 text-center">
        Discover similar properties that might interest you in the same area or with comparable features
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
              <div className="p-4">
                <h3 className="font-semibold text-[#10284C] text-base mb-1 leading-snug line-clamp-2">
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
                  <div className="flex items-center gap-1 bg-white shadow p-2 px-6 rounded-md">
                    <Image
                      src="/Icon (1).png"
                      alt="Beds"
                      width={18}
                      height={18}
                    />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow p-2 px-6 rounded-md">
                    <Image
                      src="/Icon.png"
                      alt="Baths"
                      width={18}
                      height={18}
                    />
                    <span>{property.baths}</span>
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

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-[#10284C]">
                    {property.price}
                  </p>

                  <button className="bg-[#10284C] text-white text-sm font-semibold px-5 py-2 rounded flex items-center gap-2 transition hover:bg-[#1b3a70]">
  <Link href="/propertydetails" className="flex items-center gap-2">
    <span>Details</span>
    <FaArrowRight size={14} className="ml-6" />
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
    </div>
  );
}
