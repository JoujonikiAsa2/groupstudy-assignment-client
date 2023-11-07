import banner from "../../../assets/photos/banner1.png"
const Banner = () => {
    return (
        <div className="text-left">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-36">
                    <div data-aos="fade-down">
                        <img src={banner} className="max-w-sm rounded-lg" />
                    </div>
                    <div className='max-w-[420px]' data-aos="fade-up">
                        <h1 className="text-4xl font-bold">Meet peoples world wide and  <span className='text-[#2BAFFC]'>learn togher</span></h1>
                        <p className="py-6">Collaborative Learning Hub is an interactive online platform designed to facilitate group study and collaborative learning among friends. Every registered user is automatically connected as a friend with others, fostering a supportive learning community. </p>
                        <button className="btn bg-[#2BAFFC] text-lg font-extrabold text-white capitalize">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;