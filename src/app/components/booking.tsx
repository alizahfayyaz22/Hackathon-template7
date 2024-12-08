{/* Booking Section */}export default function Booking(){
    return(
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
        
    )
}
