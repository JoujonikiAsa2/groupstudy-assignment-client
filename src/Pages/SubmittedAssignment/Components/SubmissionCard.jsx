import { Link } from "react-router-dom";

const SubmissionCard = ({ userEmail, submission}) => {
    console.log(submission)
    

    return (
        <div className="card border-2 border-black p-6 m-6">
            <div className="flex justify-center items-center gap-3">
                <div>
                    <img src="https://i.ibb.co/LhXrKtH/tree-736885-1280-1.jpg" alt="" className="w-32" />
                </div>
                <div>
                    <h2 className="pt-3 text-xl font-bold">Task Name: {submission.submittedAssignment.title}</h2>
                    <p>Marks: {submission.submittedAssignment.marks}</p>
                    <p>Difficulty Level: {submission.submittedAssignment.difficulty}</p>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row gap-1 px-2 pb-3">
                    <Link ><button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">Preview</button></Link>
                    <Link><button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">Status</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SubmissionCard;