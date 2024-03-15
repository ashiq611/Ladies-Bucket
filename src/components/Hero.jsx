
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import c1 from "../assets/image 4.png";

import c3 from "../assets/image 6.png";
import catagory1 from "../assets/Dress Front View.png";
import catagory2 from "../assets/T-Shirt.png";
import catagory3 from "../assets/ComputerSupport.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full  flex flex-col lg:flex-row mt-2">
      <div className="w-full lg:w-1/4 h-full lg:px-12 lg:py-5 hidden lg:block">
        <h2 className="text-lg font-bold mb-2">Categories</h2>
        <div className="hidden lg:flex flex-wrap gap-2 p-2 bg-[#FFFBFB] border bottom-2 border-[#FF44CB] ">
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory1} alt="" className="w-10" />
            <p className="font-semibold">Accessories</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory2} alt="" className="w-10" />
            <p className="font-semibold">Baby Items</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory3} alt="" className="w-10" />
            <p className="font-semibold">Bags</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory1} alt="" className="w-10" />
            <p className="font-semibold">Accessories</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory2} alt="" className="w-10" />
            <p className="font-semibold">Baby Items</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory3} alt="" className="w-10" />
            <p className="font-semibold">Bags</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory1} alt="" className="w-10" />
            <p className="font-semibold">Accessories</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory2} alt="" className="w-10" />
            <p className="font-semibold">Baby Items</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-2">
            <img src={catagory3} alt="" className="w-10" />
            <p className="font-semibold">Bags</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/4 h-full">
        <div className="flex gap-2 items-center p-4">
          <div className="join w-full lg:mt-2 mb-2">
            <input
              type="text"
              placeholder="Search Your Products"
              className="input input-bordered join-item w-full"
            />
            <button className="btn join-item button text-white">
              Search <FaSearch />
            </button>
          </div>
          <p className="text-xl text-[#C50076]">
            <IoCartOutline />
          </p>
          <p className="text-xl text-[#C50076]">
            <FaRegHeart />
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:block lg:w-1/4 h-full sticky top-20 z-40">
        <img className="w-full h-full" src={c3} alt="add1" />
        <img className="w-full h-full" src={c3} alt="add2" />
      </div>
    </div>
  );
};

export default Hero;
