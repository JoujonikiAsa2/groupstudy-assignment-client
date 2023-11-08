import { Link } from "react-router-dom";

const MyAssignmentCard = ({assignment}) => {
    console.log(assignment)
    

    return (
        <div className="card border-2 border-[#2BAFFC] p-6 my-3" data-aos="zoom-in">
            <div className="flex justify-center items-center gap-3">
                <div>
                    <img src="https://i.ibb.co/LhXrKtH/tree-736885-1280-1.jpg" alt="" className="w-60" />
                </div>
                <div>
                    <h2 className="text-xl"> <span className="pt-3 text-xl font-bold">Assignment:</span> {assignment.submittedAssignment.title}</h2>
                    <p><span className="text-sx font-bold">Assignment Marks</span>: {assignment.submittedAssignment.marks}</p>
                    <p><span className="text-sx font-bold">Obtain Marks:</span>  {assignment.marks || "Not Given"}</p>
                    <p className="w-96"><span className="text-sx font-bold">Feedback:</span> {assignment.feedback ||"Not Given "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non magnam rerum repellat sunt quos mollitia vel esse vitae odio!</p>
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