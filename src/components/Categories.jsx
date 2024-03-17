import catagory1 from "../assets/Dress Front View.png";
import catagory2 from "../assets/T-Shirt.png";
import catagory3 from "../assets/ComputerSupport.png";
import { Link } from "react-router-dom";

const Categories = ({ title }) => {
  return (
    <>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="lg:flex flex-wrap gap-2 p-2 bg-[#FFFBFB] border bottom-2 border-[#FF44CB] ">
        <Link to="/clothing">
          <div className="w-full  flex flex-col lg:flex-row gap-2">
            <img src={catagory1} alt="" className="w-10" />
            <p className="font-semibold">Accessories</p>
          </div>
        </Link>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory1} alt="" className="w-10" />
          <p className="font-semibold">Baby Items</p>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory3} alt="" className="w-10" />
          <p className="font-semibold">Bags</p>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory1} alt="" className="w-10" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-2">
          <img src={catagory2} alt="" className="w-10" />
          <p className="font-semibold">Baby Items</p>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory3} alt="" className="w-10" />
          <p className="font-semibold">Bags</p>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory1} alt="" className="w-10" />
          <p className="font-semibold">Accessories</p>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory2} alt="" className="w-10" />
          <p className="font-semibold">Baby Items</p>
        </div>
        <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory3} alt="" className="w-10" />
          <p className="font-semibold">Bags</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
