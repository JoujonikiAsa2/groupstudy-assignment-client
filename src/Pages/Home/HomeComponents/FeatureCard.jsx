const FeatureCard = ({ feature }) => {
    return (
        <div className="card w-full shadow-lg rounded-lg flex" data-aos={feature.id%2 != 0 ? "fade-up" : "fade-down"}>
            <div className="p-4">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-bold w-1/2">{feature.task}</h1>
                <p className=" w-full">{feature.description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;