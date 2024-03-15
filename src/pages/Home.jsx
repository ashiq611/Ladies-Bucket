
import CompanyHead from "../components/CompanyHead";
import Footer from "../components/Footer";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Card from "../components/Card";


const Home = () => {
  return (
    <div>
      <Navbar />
      <CompanyHead />
      <Hero />
      <Headline title={"Top Rated"} />
      <Card />
      <Headline title={"Flash Sale"} />
      <Card />
      <Headline title={"New Arrivals"} />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
