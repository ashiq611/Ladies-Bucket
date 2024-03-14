import c1 from "../assets/image 4.png";
import c2 from "../assets/image 5.png";
import c3 from "../assets/image 6.png";
import Description from "./Description";

const ProductsDetails = () => {
  return (
    <>
      <div className="container mx-auto lg:flex justify-between mt-5">
        <div>
        <div className="w-full lg:w-2/3 lg:flex gap-5">
          <div className="">
            <img className="w-30 h-60" src={c1} alt="productsimages" />
          </div>
          <div>
            <h3>PQNJQBI</h3>
            <p>$300</p>
            <p>Shipping calculated at checkout</p>
            <div className="flex gap-5">
              {/* create dropdown size  */}
              <select
                name="size"
                id="size"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select Size
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              {/* create dropdown color  */}
              <select
                name="color"
                id="color"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select Color
                </option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
              </select>
              {/* create quantity increase decrease */}
              <div className="flex gap-2">
                <button className="btn btn-primary">-</button>
                <button className="btn btn-primary">1</button>
                <button className="btn btn-primary">+</button>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-4">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      <Description />
      </div>
        <div className="w-full lg:w-1/3 h-full sticky top-20 z-40">
          <img className="w-full h-full" src={c2} alt="add1" />
          <img className="w-full h-full" src={c3} alt="add2" />
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
