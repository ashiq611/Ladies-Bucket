import p1 from "../assets/product details & Design/LBBDMKF5012.03.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const Card = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // When window width is >= 768px (lg devices)
          620: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={p1} alt="p1" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#C50076]">
                Panjabi
              </div>
              <p className="text-gray-700 text-base mb-2">Price: $30</p>

              <p className="text-slate-500 text-base mb-2">
                $<span className="line-through">20</span> <span>-30%</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card;
