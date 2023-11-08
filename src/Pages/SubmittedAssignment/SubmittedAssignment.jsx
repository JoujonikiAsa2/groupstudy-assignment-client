import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import SubmissionCard from "./Components/SubmissionCard";

const SubmittedAssignment = () => {

    const loadedSubmission = useLoaderData()
    const {user} = useAuth()

    return (
        <div>
            <h2>Submitted Assignment</h2>
            {
                loadedSubmission.map(submission=> <SubmissionCard key={submission._id} submission={submission} userEmail={user.email}></SubmissionCard>)
            }
        </div>
    );
};

export default SubmittedAssignment;