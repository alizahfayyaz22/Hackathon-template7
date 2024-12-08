import React from "react";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">

        <div className="mb-10 lg:ml-[160px] mt-10 text-sm text-black opacity-50 flex flex-wrap lg:justify-start justify-center gap-4">
          {["Account", "My Account", "Product", "View Cart", "Checkout"].map((item, index) => (
            <span key={index} className="relative group cursor-pointer">
              {item}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}
        </div>

        {/* Billing Details Heading */}
        <h1 className="text-[28px] md:text-[36px] font-bold mb-6 lg:ml-[160px] text-center lg:text-left">
          Billing Info
        </h1>
        <p className="text-center lg:text-left">Please enter your billing info</p>

        <div className="flex flex-col lg:flex-row justify-between bg-gap-8 space-y-8 lg:space-y-0">

          {/* Billing Form */}
          <div className="bg-white p-6 rounded w-full max-w-md lg:w-[470px]">
            <form>
              {/* Name and Phone in one line */}
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5] opacity-50"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5] opacity-50"
                  />
                </div>
              </div>

              {/* Address and Town/City in one line */}
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Town/City</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 w-full max-w-md lg:w-[470px]">
            <h2 className="text-lg font-bold mb-4">Retail Summary</h2>

            {/* Order Items */}
            <ul className="mb-4 space-y-4">
              <li className="flex items-center">
                <Image src="/Images/image 8.png" alt="car" width={132} height={108} className="bg-[#3563E9]" />
                <div className="flex justify-between w-full text-sm ml-4">
                  <span className="text-gray-700">LCD Monitor</span>
                  <span className="text-gray-700">$650</span>
                </div>
              </li>
            </ul>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-700">Tax</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <input type="radio" id="pics" name="payment" className="mr-2" />
                  <label htmlFor="pics" className="text-gray-700">Bank Transfer</label>
                </div>
              </div>

              <div className="flex items-center">
                <input type="radio" id="cash" name="payment" className="mr-2" />
                <label htmlFor="cash" className="text-gray-700">Cash on Delivery</label>
              </div>
            </div>

            {/* Promo Code Section */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Apply promo code"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <button className="bg-[#db4444] text-white text-sm rounded py-2 px-4">
                Apply Now
              </button>
            </div>

            <button className="w-full bg-[#FFFFFF] text-black py-2 px-4 mt-4">
              <h1 className="text-2xl">Total Rental Price</h1>
              <p>Overall price and includes rental discount</p>
            </button>
          </div>
        </div>

        {/* Rental Info Section */}
        <h1 className="text-[28px] md:text-[36px] font-bold mb-6 lg:ml-[160px] text-center lg:text-left">
          Rental Info
        </h1>
        
        {/* Pickup & Drop-off Info Section */}
        <div className="flex flex-col gap-8">

          {/* Pickup Info Form */}
          <div className="bg-white p-6 rounded w-full max-w-md">
            <form>
              {/* Pickup Heading */}
              <h3 className="text-xl font-semibold mb-4">Pickup</h3>

              {/* Location and Date in one line */}
              <div className="flex flex-col lg:flex-row gap-8 mb-6">
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                    placeholder="Enter location"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                  />
                </div>
              </div>

              {/* Time on second line */}
              <div className="mb-6">
                <label className="block text-gray-700 opacity-50 mb-2">Time</label>
                <input
                  type="time"
                  className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                />
              </div>
            </form>
          </div>

          {/* Drop-off Info Form */}
          <div className="bg-white p-6 rounded w-full max-w-md">
            <form>
              {/* Drop-off Heading */}
              <h3 className="text-xl font-semibold mb-4">Drop-off</h3>

              {/* Location and Date in one line */}
              <div className="flex flex-col lg:flex-row gap-8 mb-6">
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                    placeholder="Enter location"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                  />
                </div>
              </div>

              {/* Time on second line */}
              <div className="mb-6">
                <label className="block text-gray-700 opacity-50 mb-2">Time</label>
                <input
                  type="time"
                  className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Payment Info Section */}
        <div>

          <h1 className="text-[28px] md:text-[36px] font-bold mb-6 lg:ml-[160px] text-center lg:text-left">
            Payment Info
          </h1>

          {/* Credit Card Form */}
          <div className="bg-white p-6 rounded w-full max-w-md">
            <form>
              {/* Credit Card Heading */}
              <h3 className="text-xl font-semibold mb-4">Credit Card</h3>

              {/* Card Number and Expiration Date in one line */}
              <div className="flex flex-col lg:flex-row gap-8 mb-6">
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                    placeholder="Enter card number"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Expiration Date</label>
                  <input
                    type="month"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                  />
                </div>
              </div>

              {/* Card Holder and CVC in one line */}
              <div className="flex flex-col lg:flex-row gap-8 mb-6">
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">Card Holder</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                    placeholder="Enter card holder's name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 opacity-50 mb-2">CVC</label>
                  <input
                    type="text"
                    className="w-full rounded px-4 py-2 bg-[#f5f5f5]"
                    placeholder="Enter CVC"
                  />
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
