import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";

const UpdateSubmission = () => {

    const { id } = useParams()
    const { user } = useAuth()
    console.log(id, user)
    const [submittedAssignment, setSubmittedAssignment] = useState(null)
    const email = user.email


    useEffect(() => {
        axios.get(`https://group-study-server-side-sigma.vercel.app/assignments/${id}`)
            .then(res => setSubmittedAssignment(res.data))
            .catch(error => console.log(error))
    }, [])

    const handleUpdateSubmission = (e) => {
        e.preventDefault()
        const form = e.target
        const link = form.link.value
        console.log(link)

        const submissionInfo = { id, link, email, submittedAssignment }
        // console.log(title)

        axios.post("https://group-study-server-side-sigma.vercel.app/submissions", submissionInfo)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
            console.log(submittedAssignment)
    }

    return (
        <div className="py-8" data-aos="fade-down">
            <h2 className="py-8 text-2xl font-bold text-center">Assgnment Submission</h2>
            <form className="w-[80vw] " onSubmit={handleSubmission}>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3">
                            <span>Sumbission Link</span>
                            <input type="text" name="link" placeholder="Enter your assignment pdf link here" className="input input-bordered  max-w-full" required />
                            <input type="submit" value="submit" className="input input-bordered  max-w-full bg-[#55C360]" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateSubmission;