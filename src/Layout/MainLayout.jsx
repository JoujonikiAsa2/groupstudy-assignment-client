import { useEffect } from "react";
import Footer from "../SharedComponents/Footer/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    return (
        <div className="">
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;