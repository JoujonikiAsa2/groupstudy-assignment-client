import { Link } from "react-router-dom";

const SubmissionCard = ({submission}) => {
    console.log("sub", submission)
    
    

    return (
        <div className="card border-2 border-[#2BAFFC] p-6 m-6" data-aos="zoom-in">
            <div className="flex justify-center items-center gap-3">
                <div className="text-sm">
                    <h2 className="pt-3 font-bold">Task Name: {submission.submittedAssignment.title}</h2>
                    <p>Marks: {submission.submittedAssignment.marks}</p>
                    <p>Examinee Name:  {submission.examneeName}</p>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row gap-1 px-2 pb-3">
                    <Link ><button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold text-xs ">Preview</button></Link>
                    <Link to={`/marking/${submission._id}`}><button className="btn btn-sm hover:bg-transparent bg-[#55C360] capitalize  text-xs text-white font-bold w-24">Give Marks</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SubmissionCard;