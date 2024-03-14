import CompanyHead from "../components/CompanyHead";
import Footer from "../components/Footer";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";


const Home = () => {
    return (
      <div>
        <Navbar />
        <CompanyHead />
        <Hero />
        <Headline title={"Top Rated"} />
        <Products />
        <Headline title={"Flash Sale"} />
        <Products />
        <Headline title={"New Arrivals"} />
        <Products/>
        <Footer/>
      </div>
    );
};

export default Home;