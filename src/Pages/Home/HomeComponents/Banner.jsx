import banner from "../../../assets/photos/banner1.png"
const Banner = () => {
    return (
        <div className="text-left">
            <div className="">
                <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse justify-between md:justify-between lg:justify-center items-center md:items-center lg:items-center lg:gap-36 gap-4 h-[80vh] pb-6">
                    <div data-aos="fade-down">
                        <img src={banner} className="max-w-sm rounded-lg  p-4" />
                    </div>
                    <div className='max-w-[420px]' data-aos="fade-up">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Meet peoples world wide and  <span className='text-[#2BAFFC]'>learn togher</span></h1>
                        <p className="py-6">Collaborative Learning Hub is an interactive online platform designed to facilitate group study and collaborative learning among friends. Every registered user is automatically connected as a friend with others, fostering a supportive learning community. </p>
                        <button className="btn lg:btn-md md:btn-md btn-sm bg-[#2BAFFC] text-xs md:text-lg lg:text-lg font-extrabold text-white capitalize">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;