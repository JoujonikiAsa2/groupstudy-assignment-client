import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
    const assignment = useLoaderData()
    const [hidden, setHidden] = useState(['hidden', 'block'])

    const handleView = () => {
        setHidden(['block', 'hidden'])
    }
    const handleCancel = () => {
        setHidden(['hidden', 'block'])
    }

    return (
        <div>
            <div className={`${hidden[1]} flex flex-col justify-center items-center gap-2 py-4`} >
                <img src={assignment.image} alt="" />
                <button onClick={handleView} className="btn btn-sm  bg-[#2BAFFC] capitalize text-sx">View Full image</button>
            </div>
            <div className={`${hidden[0]} flex flex-col justify-center items-center gap-2 py-4`}>
                <div><img src={assignment.image} alt="" className="w-[100vw] h-[100vw]" /></div>
                <button onClick={handleCancel} className="btn btn-sm  bg-[#2BAFFC] capitalize text-sx">Cancel Full image</button>
            </div>
            <div>
                <h2>Task: {assignment.title}</h2>
                <p>{assignment.description}</p>
                <p>Marks: {assignment.marks}</p>
                <p>Difficulty Level: {assignment.difficulty}</p>
                {/* <p>{new Date(assignment.dueDate)}</p> */}
            </div>
            <div className="py-3">
                <Link to={`/submission/${assignment._id}`}><button className="btn btn-sm  bg-[#55C360] capitalize text-sx">Take Assignment</button></Link>
            </div>
        </div>
    );
};

export default AssignmentDetails;