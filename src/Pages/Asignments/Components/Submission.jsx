import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Submission = () => {

    const { id } = useParams()
    console.log("id",id)
    const { user } = useAuth()
    const navigate= useNavigate()
    console.log(id, user)
    const [submittedAssignment, setSubmittedAssignment] = useState(null)
    const email = user.email
    const examneeName = user.displayName
    const status = "pending"


    useEffect(() => {
        axios.get(`https://group-study-server-side-sigma.vercel.app/assignments/${id}`)
            .then(res => setSubmittedAssignment(res.data))
            .catch(error => console.log(error))
    }, [submittedAssignment])

    console.log("my submission", submittedAssignment)

    const handleSubmission = (e) => {
        e.preventDefault()
        const form = e.target
        const link = form.link.value
        const text = form.text.value
        console.log(link,text)

        const submissionInfo = { id, link,text, email,examneeName,status, submittedAssignment }
        // console.log(title)

        axios.post("https://group-study-server-side-sigma.vercel.app/submissions", submissionInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                        Swal.fire({
                            title: "Sunmitted Assignment",
                            text: "Your assginment link submitted successfully",
                            icon: "success"
                          });
                          navigate("/")
                }
            })
            .catch(error => console.log(error))
            console.log(submittedAssignment)
    }

    return (
        <div className="py-8">
            <h2 className="py-8 text-2xl font-bold text-center">Assgnment Submission</h2>
            <form className="w-[80vw] " onSubmit={handleSubmission}>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3">
                            <span>Sumbission Link</span>
                            <input type="text" name="link" placeholder="Enter your assignment pdf link here" className="input input-bordered  max-w-full" required />
                            <textarea type="text" name="text" placeholder="Enter quick text here" className="input input-bordered  max-w-full" required />
                            <input type="submit" value="submit" className="input input-bordered  max-w-full bg-[#55C360]" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Submission;