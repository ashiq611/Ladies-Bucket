
import CompanyHead from "../components/CompanyHead";
import Footer from "../components/Footer";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import RateModal from "../components/RateModal";
import Feedback from "../components/Feedback";
import OursShow from "../components/OursShow";


const Home = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <Feedback/>
      <Navbar />
      <CompanyHead />
      <Hero />
      <Headline title={"Top Rated"} />
      <Card />
      <Headline title={"Flash Sale"} />
      <Card />
      <Headline title={"New Arrivals"} />
      <Card />
      <OursShow/>
      <Footer />
    </div>
  );
};

export default Home;
