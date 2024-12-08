import Image from "next/image";
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from "react-icons/vsc";
import Link from 'next/link';

const Header = () => {
  return (
           <>
    <div className='w-auto h-[80px] border-slate-10000 border-b-2 bg-white  text-white'>
          <div className=' w-[1365px] border-slate-800 border-r-2 mt-9 bg-white text-white flex flex-row  h-[40px]'>
          <Image src="/cmd.png" alt="cmd" width={32} height={32} />
      <p className='font-semibold text-black ml-3 mt-2'>High Fidelity Dashboard - Home Rent</p>
      <h1 className='text-slate-600 ml-[800px] flex  mt-2'>Latest updated: <p className='text-black font-semibold'>8 Aug 2022</p></h1>
          </div>
        </div>
       
    <header className="bg-white py-4 px-4 sm:px-8 shadow-md flex flex-col sm:flex-row items-center justify-between">
      
      {/* Logo and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10 w-full">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MORENT
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-[492px]">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-12 border rounded-full py-2 px-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: '70px' }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        
        {/* Favorites Icon */}
        <Link href="/favorites">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaHeart className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Notifications Icon */}
        <Link href="/notifications">
          <div className="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaBell className="text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </Link>

        {/* Settings Icon */}
        <Link href="/settings">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/profile">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profile.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>

      </div>
    </header>
    </>
  );
};

export default Header;

