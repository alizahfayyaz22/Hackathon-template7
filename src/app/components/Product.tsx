import React from "react";
import Image from "next/image";

 

type CarCardProps = {
  name: string;
  type: string;
  image: string; // Use this image prop for each car
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  discountedPrice?: number;
  favoriteIcon: string;
};

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  discountedPrice,
  favoriteIcon
}) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl w-full sm:w-[304px] max-w-sm mx-auto relative border border-gray-50">
      {/* <Image 
        src={favoriteIcon} // Dynamic favorite icon
        alt="Favorite Icon" 
        width={24} 
        height={24} 
        className="absolute top-3 right-3 cursor-pointer z-10" 
      /> */}

      <div className="flex gap-5 justify-between">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div>
        </div>
      </div>

      <Image 
        src={image} // Dynamic car image for each car
        alt={`${name} car`} 
        width={204} 
        height={128} 
        className="object-contain self-center mt-16 max-w-full aspect-[3.18]" 
      />

      <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
        <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
          <Image 
            src="/Images/gas.png" // Assuming it's an icon path
            alt="Fuel Icon" 
            width={24} 
            height={24} 
            className="object-contain shrink-0" 
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>

        <div className="flex gap-1 items-start whitespace-nowrap">
          <Image 
            src="/Images/wheel.png" // Assuming it's an icon path
            alt="Transmission Icon" 
            width={24} 
            height={24} 
            className="object-contain shrink-0" 
          />
          <div className="w-12">{transmission}</div>
        </div>

        <div className="flex gap-1.5 items-start">
          <Image 
            src="/Images/profile.png" // Assuming it's an icon path
            alt="Capacity Icon" 
            width={24} 
            height={24} 
            className="object-contain shrink-0" 
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>

      <div className="flex gap-3 mt-8 w-full">
        <div className="flex flex-col font-bold text-slate-900">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-400">day</span>
          </div>
          {discountedPrice && (
            <div className="mt-1 text-sm line-through">${discountedPrice}.00</div>
          )}
        </div>
        <button
          className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center
           text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
          aria-label={`Rent ${name} now`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

const Product: React.FC = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Electric",
      image: "/Images/image 7.png", // Dynamic image path with leading slash
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "2 People",
      price: 120,
      favoriteIcon: "/Images/heart.png"
    },
    {
      name: "Nissan GT-R",
      type: "Gasoline",
      image: "/Images/image 8.png", // Dynamic image path with leading slash
      fuelCapacity: "60L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      favoriteIcon: "/Images/heart.png"
    },
    {
      name: "Rolls-Royce",
      type: "Gasoline",
      image: "/Images/image 9.png", // Dynamic image path with leading slash
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 150,
      favoriteIcon: "/Images/heart.png"
    },
    {
      name: "Mercedes-Benz E-Class",
      type: "Hybrid",
      image: "/Images/image 10.png", // Dynamic image path with leading slash
      fuelCapacity: "55L",
      transmission: "Manual",
      capacity: "2 People",
      price: 130,
      favoriteIcon: "/Images/heart.png"
    }
  ];

  return (
    <div className="p-6 bg-gray-100">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>



  );
};

export default Product;
