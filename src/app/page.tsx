import Hero from "./components/hero";
import PopularCarPage from './components/popularCarPage';
import PopularCar2 from "./components/popularCar2";
import PopularCar3 from "./components/popularCar3";
import Booking from "./components/booking";
import Product from "./components/Product";
import Product2 from "./components/Product2";
import Product3 from "./components/product3"; 
import Sidebar from "./components/sidebar"; 
import Checkout from "./components/biling";
import Map from "./components/map";

export default function Home() {
  return (
    <div>
      {/* Components above Product layout */}
      <Hero />
      <PopularCarPage />
      <PopularCar2 />
      <PopularCar3 />

      {/* Products section where Sidebar only affects Booking, Product1, Product2, Product3 */}
      <div className="flex">
        {/* Left Side: Sidebar */}
        <div  className="w-1/4">
        <Sidebar/>
        </div>
        {/* Right Side: Products */}
        <div className="flex-1 p-6 space-y-6">
          <Booking />
          <Product />
          <Product2 />
          <Product3 />
          <Checkout/>
          <Map/>
        </div>
      </div>
    </div>
  );
}
