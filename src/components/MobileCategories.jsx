import c1 from "../assets/T-Shirt.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const MobileCategories = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={c1} alt="" className="w-6" />
            <p>Accesseories</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    // <div className="flex flex-wrap gap-2 p-2 bg-[#FFFBFB] border bottom-2 border-[#FF44CB] ">
    //   <div className="flex flex-col items-center">
    //     <img src={c1} alt="" className="w-6" />
    //     <p>Accesseories</p>
    //   </div>
    //   <div className="flex flex-col items-center">
    //     <img src={c1} alt="" className="w-6" />
    //     <p>Accesseories</p>
    //   </div>
    // </div>
  );
};

export default MobileCategories;
