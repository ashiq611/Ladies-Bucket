import p1 from "../assets/product details & Design/LBBDMKF5021.03.jpeg";
import { FaStar } from "react-icons/fa";

const SingleCard = () => {
  return (
    <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
      <img className="w-full h-40 object-cover" src={p1} alt="p1" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2  flex justify-between">
          <h3 className="text-[#C50076]">Panjabi</h3>
          <p className="text-xs flex gap-2 items-center">
            <span className="text-[#FFC226]">
              <FaStar />
            </span>
            4.5 (25)
          </p>
        </div>
        <p className="text-gray-700 text-base mb-2">Price: $30</p>

        <p className="text-slate-500 text-base mb-2">
          $<span className="line-through">20</span> <span>-30%</span>
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
