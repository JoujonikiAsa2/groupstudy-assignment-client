import AboutUs from "./HomeComponents/AboutUs";
import Banner from "./HomeComponents/Banner";
import FAQ from "./HomeComponents/FAQ";
import Features from "./HomeComponents/Features";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Features></Features>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;