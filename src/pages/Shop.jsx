import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import ProductsDetails from "../components/ProductsDetails";
import Headline from './../components/Headline';


const Shop = () => {
    return (
        <div>
            <Navbar/>
            <ProductsDetails/>
            <Headline title={"You may Also Like"}/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Shop;