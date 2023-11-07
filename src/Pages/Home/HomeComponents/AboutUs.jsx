import Lottie from "lottie-react";
import aboutImage from '../../../LottieResources/exam2.json'
const AboutUs = () => {
    return (
        <div className="">
            <div className="flex flex-row-reverse justify-center items-center gap-2 py-8">
                <h1 className="text-2xl font-bold text-[#2BAFFC] text-center py-0" data-aos="zoom-in">About Us</h1>
            </div>

            <div className="text-right bg-[#F4F9FD] mb-8">
                <div className="">
                    <div className="hero-content flex-col lg:flex-row justify-between gap-36">
                        <div data-aos="fade-left">
                            <Lottie animationData={aboutImage} className="max-w-sm rounded-lg"></Lottie>
                        </div>
                        <div className='max-w-[420px]' data-aos="fade-right">
                            <p>Welcome to Collaborative Learning Hub, your go-to destination for collaborative and interactive learning experiences! Founded with a passion for education and community, Collaborative Learning Hub is more than just an online platform – it's a vibrant learning community where friends come together to share knowledge, collaborate on assignments, and support each other's academic endeavors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;