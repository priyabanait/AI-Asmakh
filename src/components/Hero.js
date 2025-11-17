import Image from "next/image";
import { Search, Mic, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div>

   
    <section className="hidden md:flex relative w-full min-h-screen  items-center justify-center overflow-hidden">

    <Image
      src="/images/Banner.jpg"
      alt="Luxury Apartment"
      fill
      className="object-cover object-center"
      priority
    />
  
    {/* overlay only for mobile */}
    <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
  
    {/* MAIN BOX */}
    <div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        relative z-10 lg:text-left text-center font-bold text-[#001730]
        px-4 md:px-4 lg:px-8
        border border-white/10 backdrop-blur-sm bg-white/20 
        p-5 sm:p-6 md:p-5 lg:p-6 
  
        mx-auto
        mt-16 sm:mt-24 md:mt-40 lg:mt-52
        
        w-[92%] sm:w-[96%] md:w-[90%] lg:w-[85%]
        max-w-[360px] sm:max-w-[550px] md:max-w-[770px] lg:max-w-[900px]
  
        max-h-[750px] sm:max-h-[550px] md:max-h-[430px] lg:max-h-[500px]
        rounded-[5px]
      "
    >
  
      {/* HEADING */}
      <h1 className="text-xl sm:text-2xl mx-20 lg:mx-0  md:text-[27px] lg:text-[36px] p-0 md:p-2 lg:p-3 mb-2 md:mb-3 lg:mb-4 leading-tight">
        REDEFINING REAL ESTATE
      </h1>
  
      {/* Line */}
      <div className="w-[80%] h-[0.2px] mt-2 lg:mt-3 bg-[#FFFFFF] mx-auto  lg:mx-0 mb-3 md:mb-4 lg:mb-5"></div>
  
      {/* DESCRIPTION */}
      <p
        className="mb-3 text-[10px] sm:text-[11px] text-left mx-2 lg:mx-0 md:text-[12px] lg:text-[14px]"
        style={{ fontWeight: "300" }}
      >
        Our commitment goes beyond buildings. We craft experiences, transform
        spaces into iconic destinations, and leave a legacy of sophistication
        and innovation across Qatar
      </p>
  
      {/* BUTTONS */}
      <div className="hidden lg:flex flex-wrap gap-2 md:gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8">
  
        <button
          style={{ backgroundColor: "#001730", borderRadius: "5px", height: "35px" }}
          className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[160px]
                     px-2 py-2 text-white text-[11px] md:text-[12px] lg:text-[13px]
                     shadow-lg hover:bg-[#022d5e] transition-all duration-300"
        >
          RENT
        </button>
  
        <button
          style={{ backgroundColor: "#001730", borderRadius: "5px", height: "35px" }}
          className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[160px]
                     px-2 py-2 text-white text-[11px] md:text-[12px] lg:text-[13px]
                     shadow-lg hover:bg-[#022d5e] transition-all duration-300"
        >
          BUY
        </button>
  
        <button
          style={{ borderRadius: "5px", height: "35px" }}
          className="flex items-center justify-center gap-2
                     w-[150px] sm:w-[160px] md:w-[170px] lg:w-[190px]
                     border border-white/20 bg-white/70 text-[#001730]
                     text-[11px] md:text-[12px] lg:text-[13px]
                     shadow-md  transition-all duration-300"
        >
          <ArrowDown size={14} className="opacity-80" />
          View More Filters
        </button>
  
      </div>
      {/* <div className="p-4 bg-gray-400 rounded-md shadow-md gap-4 flex flex-wrap lg:hidden">

<button
  style={{ backgroundColor: "#001730", borderRadius: "5px", height: "35px" }}
  className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[160px]
             px-2 py-2 text-white text-[11px] md:text-[12px] lg:text-[13px]
             shadow-lg hover:bg-[#022d5e] transition-all duration-300"
>
  RENT
</button>

<button
  style={{ backgroundColor: "#001730", borderRadius: "5px", height: "35px" }}
  className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[160px]
             px-2 py-2 text-white text-[11px] md:text-[12px] lg:text-[13px]
             shadow-lg hover:bg-[#022d5e] transition-all duration-300"
>
  BUY
</button>

</div> */}

  
      {/* SEARCH BAR */}
      <div className="mt-5 md:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-2 md:gap-3">
  
        {/* Input */}
        <div className="flex items-center bg-white/90 backdrop-blur-md rounded-[5px]
                        border border-white/30 px-2
                        w-full sm:w-[70%] md:w-[65%] lg:w-[60%]
                        shadow-md h-[40px] md:h-[45px]">
  
          <div className="p-2 bg-[#10284C] rounded-md mr-2 flex items-center justify-center h-[28px] w-[28px]">
            <Search className="text-white h-4 w-4" />
          </div>
  
          <input
            type="text"
            placeholder="Describe your dream Property by searching all our properties . . ."
            className="flex-1 bg-transparent outline-none text-[11px] md:text-[12px] lg:text-[13px] text-[#001730] placeholder:text-gray-500"
          />
  
          <Mic className="text-gray-500 h-4 w-4 ml-2" />
        </div>
  
        {/* Search Button */}
        <button
          className="w-full sm:w-[120px] md:w-[140px] lg:w-[180px]
                     text-white text-[11px] md:text-[12px] lg:text-[13px]
                     shadow-lg hover:bg-[#022d5e] transition-all duration-300
                     bg-[#001730] rounded-[5px]
                     h-[40px] md:h-[45px]"
        >
          Search
        </button>
  
      </div>
  
    </div>
    
  </section>
  <section className="lg:hidden relative w-full min-h-screen  items-center justify-center overflow-hidden">

{/* BACKGROUND VIDEO OR IMAGE */}
<Image
      src="/images/Banner.jpg"
      alt="Luxury Apartment"
      fill
      className="object-cover object-center"
      priority
    />
  

{/* OVERLAY */}
<div className="absolute inset-0"></div>

{/* MAIN CONTENT */}
<div className="relative mt-24  text-center justify-center flex flex-col items-center  w-full h-full px-8">

  {/* GLASS CARD */}
  <div className="backdrop-blur-sm bg-white/20 rounded-md p-6 w-full  text-center shadow-lg border border-white/10">

    <h2 className="text-2xl font-semibold tracking-wider text-gray-800 px-8">
      REDEFINING  REAL ESTATE
    </h2> 

   

    {/* Underline */}
    <div className="w-[80%] h-[2px] bg-[#FFFFFF] mx-auto mt-10 my-2"></div>

    <p className="text-xs font-semibold mt-4 leading-relaxed">
      Our commitment goes beyond buildings. We craft experiences,
      transform spaces into iconic destinations, and leave a legacy of
      sophistication and innovation across Qatar.
    </p>

  </div>

  {/* BUTTONS */}
  <div className="bg-white/20 rounded-md mt-4  p-4 shadow-lg border border-white/10  backdrop-blur-sm ">
  <div className="flex gap-5  ">
    <button className="px-10 py-3 bg-[#0A2A4C] text-white rounded-lg font-semibold shadow-md">
      RENT
    </button>
    <button className="px-10 py-3 bg-[#0A2A4C] text-white rounded-lg font-semibold shadow-md">
      BUY
    </button>
  </div>
  </div>

  {/* SEARCH BAR */}
  <div className="bg-white/20 rounded-md mt-4  p-2  shadow-lg border border-white/10  backdrop-blur-sm ">
 <div className="flex items-center w-full px-8 bg-white rounded-md shadow-md   py-3">
    <Search className="text-gray-500" size={20} />
    <input
      type="text"
      placeholder="Type here..."
      className="flex-1 ml-3 outline-none text-sm"
    />
    <Mic className="text-gray-500" size={20} />
  </div>
 </div>

  {/* FILTER BUTTON */}
  <div className="bg-white/20 rounded-md mt-4  p-4 px-20 shadow-lg border border-white/10  backdrop-blur-sm ">
 <div className="flex w-full   bg-[#0A2A4C] text-white px-4 py-3 rounded-lg shadow-md items-center">

{/* LEFT SIDE: Icon + Divider + Text */}
<div className="flex items-center gap-3">

  {/* ICON */}
  <img
    src="/Icon (10).png"      // change to your icon path
    alt="Filter Icon"
    className="w-5 h-5"
  />

  {/* VERTICAL DIVIDER */}
  <div className="h-5 w-[1px] bg-white/20"></div>

  {/* TEXT */}
  <span className="font-medium text-sm">Filters</span>
</div>

{/* ARROW ICON */}
<ArrowDown size={18} className="ml-24" />

</div>
 </div>

</div>
</section>
</div>
  );
}
