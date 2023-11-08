import FeatureCard from "./FeatureCard";

const Features = () => {
    const featureTitles = [{id:1, task: 'Create assignment', description: "Users can create assignments with specific instructions, deadlines, and resources."},{id:2, task: 'Update assignment', description: "Users can update a existing assignment."},{id:3, task: "Take assignent", description: "User can take an assignment and submit their solution"}, {id:4, task: "Assignment Grading", description: "Users can review and grade their friend assignments based on predefined criteria or rubrics Grading system includes options for providing comments, suggestions, and overall feedback"}]
    return (
        <div>
            <div className="lg:pb-20 md:pb-20 pb-6">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#2BAFFC] text-center py-0" data-aos="zoom-in">Features</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 my-8">
                {
                    featureTitles.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;