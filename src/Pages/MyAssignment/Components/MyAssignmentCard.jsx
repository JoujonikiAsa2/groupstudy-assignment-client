import { Link } from "react-router-dom";

const MyAssignmentCard = ({assignment}) => {
    console.log(assignment)
    

    return (
        <div className="card border-2 border-[#2BAFFC] p-6 my-3" data-aos="zoom-in">
            <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center gap-3">
                <div>
                    <img src={assignment.submittedAssignment.image} alt="" className="w-48" />
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <h2 className="text-sm"> <span className="pt-3 text-sm font-bold">Assignment:</span> {assignment.submittedAssignment.title}</h2>
                    <p><span className="text-sm font-bold">Assignment Marks</span>: {assignment.submittedAssignment.marks}</p>
                    <p><span className="text-sm font-bold">Obtain Marks:</span>  {assignment.marks || "Not Given"}</p>
                    <p className="text-sm"><span className="text-sm font-bold">Feedback:</span> {assignment.feedback ||"Not Given "}</p>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row gap-1 px-2 pb-3">
                    {
                        assignment.status == "done" ? <Link><button className="btn btn-sm hover:bg-transparent bg-[#55C360] text-white font-bold capitalize">{assignment.status}</button></Link> :
                        <Link><button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] text-white font-bold capitalize">{assignment.status}</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAssignmentCard;