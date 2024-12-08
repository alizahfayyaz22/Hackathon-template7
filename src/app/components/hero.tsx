

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 gap-x-8 w-full">
        {/* Left Box (Now has Drop-Off) */}
        <div className="w-full md:w-1/2 h-64 bg-[#3563E9] text-white flex items-center justify-start 
        pl-8 mb-8 md:mb-0">
          {/* Left-aligned Content */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg sm:text-xl">The Best Platform for Car Rental</h2>
            <p className="text-sm sm:text-base">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="bg-[#54A6FF] text-white py-2 px-4 rounded-md">
              Rental Car
            </button>
          </div>
          {/* Image on the Right */}
          <div className="ml-auto">
            <Image src="/Images/image 7.png" alt="Car" width={180} height={120} />
          </div>
        </div>

        {/* Right Box (Now has Pick-Up) */}
        <div className="w-full md:w-1/2 h-64 bg-[#54A6FF] text-white flex items-center justify-start pl-8">
          {/* Left-aligned Content */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg sm:text-xl">Easy way to rent a car at a low price</h2>
            <p className="text-sm sm:text-base">Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className="bg-[#3563E9] text-white py-2 px-4 rounded-md">
              Rental Car
            </button>
          </div>
          {/* Image on the Right */}
          <div className="ml-auto">
            <Image src="/Images/image 8.png" alt="Car" width={180} height={120} />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8 w-full px-8">
        {/* Drop-Off Box (Now in Left Section) */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-medium mb-2">Drop-Off</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm sm:text-base mb-1">Locations</label>
              <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm sm:text-base mb-1">Date</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm sm:text-base mb-1">Time</label>
              <input type="time" className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>

        {/* Pick-Up Box (Now in Right Section) */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-medium mb-2">Pick-Up</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm sm:text-base mb-1">Locations</label>
              <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm sm:text-base mb-1">Date</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm sm:text-base mb-1">Time</label>
              <input type="time" className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
