import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ProductsDetails from "../components/ProductsDetails";
import Card from "../components/card";

import Headline from './../components/Headline';


const Shop = () => {
    return (
        <div>
            <Navbar/>
            <ProductsDetails/>
            <Headline title={"You may Also Like"}/>
            <Card/>
            <Footer/>
        </div>
    );
};

export default Shop;