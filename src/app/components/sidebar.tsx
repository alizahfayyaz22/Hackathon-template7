import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div 
      className="
        w-[360px] 
        h-[1600px] 
        p-[32px] 
        pt-[32px] 
        pb-[760px] 
        border-r 
        border-gray-300 
        opacity-100 
        bg-white 
        hidden 
        md:block
      "
    >
      {/* Type Section */}
      <h2 
        className="
          font-['Plus Jakarta Sans'] 
          text-[10px]  
          leading-[15.12px] 
          tracking-[-0.02em] 
          text-left
          text-[#90A3BF]
        "
      >
        Type
      </h2>
      
      <ul className="mt-4 space-y-3">
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/tick-square.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>Sport</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/tick-square.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>SUV (12)</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/vector.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>Shadcn (12)</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/vector.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>Coupe (14)</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/vector.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>Hatchback (14)</span>
        </li>
      </ul>

      {/* Capacity Section */}
      <h2 
        className="
          font-['Plus Jakarta Sans'] 
          text-[10px]  
          leading-[15.12px] 
          tracking-[-0.02em] 
          text-left
          text-[#90A3BF]
        "
      >
        C A P A C I T Y
      </h2>

      <ul className="mt-4 space-y-3">
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/tick-square.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>2 Person</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
        <Image 
            src="/Images/vector.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>4 Person</span>
        </li>
        
        <li className="flex items-center gap-2 text-slate-600">
        <Image 
            src="/Images/vector.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>6 Person</span>
        </li>
        <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/tick-square.png" 
            alt="Check Icon" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
          <span>8 or more</span>
        </li>
      </ul>


      {/* Capacity Section */}
      <h2 
        className="
          font-['Plus Jakarta Sans'] 
          text-[10px]  
          leading-[15.12px] 
          tracking-[-0.02em] 
          text-left
          text-[#90A3BF]
        "
      >
        price
      </h2>
      <li className="flex items-center gap-2 text-slate-600">
          <Image 
            src="/Images/range.png" 
            alt="Check Icon" 
            width={246} 
            height={16} 
            className="object-contain" 
          />
          </li>
          <br/>
          <p>Max. $100.00</p>
    </div>
  );
};

export default Sidebar;
