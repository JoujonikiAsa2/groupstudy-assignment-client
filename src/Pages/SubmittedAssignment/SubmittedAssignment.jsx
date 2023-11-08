import SubmissionCard from "./Components/SubmissionCard";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const SubmittedAssignment = () => {
    const {user} = useAuth()

    const [pendingAssign, setPendingAssign] = useState([])

    const status = "pending"

    useEffect(()=>{
        axios.get(`http://localhost:5000/submissions/statusCode/${status}`)
        .then(res=> setPendingAssign(res.data))
        .catch(error =>console.log(error))
    },[])

    console.log(pendingAssign)

    return (
        <div className="grid grid-cols-1">
            {
                pendingAssign.map(submission=> <SubmissionCard key={submission._id} submission={submission} userEmail={user.email}></SubmissionCard>)
            }
        </div>
    );
};

export default SubmittedAssignment;