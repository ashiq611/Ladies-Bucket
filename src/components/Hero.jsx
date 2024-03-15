import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import c1 from "../assets/image 4.png";
import c2 from "../assets/image 5.png";
import c3 from "../assets/image 6.png";
import catagory1 from "../assets/Dress Front View.png";

const Hero = () => {
  return (
    <div className="w-full bg-slate-200 flex flex-col lg:flex-row mt-2">
      <div className="w-full h-full lg:w-1/4 flex-col p-10 ">
        <div className="flex gap-2">
          <img src={catagory1} alt="c1" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="flex gap-2">
          <img src={catagory1} alt="" />
          <p className="font-semibold">Accessories</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          className="w-full h-full"
        >
          <div>
            <img
              src={c1}
              alt="carousel-item-1"
              className="w-full h-auto lg:h-full"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src={c2}
              alt="carousel-item-2"
              className="w-full h-auto lg:h-full"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src={c3}
              alt="carousel-item-3"
              className="w-full h-auto lg:h-full"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="w-full lg:w-1/4 h-full sticky top-20 z-40">
        <img className="w-full h-full" src={c2} alt="add1" />
        <img className="w-full h-full" src={c3} alt="add2" />
      </div>
    </div>
  );
};

export default Hero;
