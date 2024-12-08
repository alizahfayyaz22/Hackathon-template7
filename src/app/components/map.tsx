import React from "react";
import Image from "next/image";

export default function Map() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      
      {/* Sidebar (Visible on md and larger) */}
      <div className="hidden md:flex w-full md:w-1/4 lg:w-1/5 bg-[#f6f7f9]">
        <Image 
          src="/Images/Nav Bar.png" 
          alt="Nav Bar" 
          width={360} 
          height={1600} 
          className="w-full h-auto object-cover" 
          priority 
        />
      </div>

      {/* Main Content (Visible on md and larger) */}
      <div className="w-full md:w-3/4 lg:w-4/5 bg-[#f6f7f9] p-4 sm:p-6 flex justify-center items-center">
        <Image 
          src="/Images/Details Rental.png" 
          alt="Details Rental" 
          width={534} 
          height={836} 
          className="w-full md:w-1/2 lg:w-[534px] h-auto" 
          priority 
        />
      </div>

      {/* Mobile Layout (Visible on small screens) */}
      <div className="md:hidden bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
        <Image 
          src="/Images/Maps.png" 
          alt="Map" 
          width={327} 
          height={1272} 
          className="w-full h-auto" 
        />
        
        <Image 
          src="/Images/Maps.png" 
          alt="Top 5 Car Rental" 
          width={327} 
          height={508} 
          className="w-full h-auto" 
        />
        
        <Image 
          src="/Images/recent.png" 
          alt="Recent Transaction" 
          width={327} 
          height={352} 
          className="w-full h-auto" 
        />
      </div>
    </div>
  );
}
