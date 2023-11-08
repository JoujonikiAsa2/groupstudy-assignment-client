// import axios from "axios";
// import { useParams } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Marking = () => {

    const { id } = useParams()
    const { user } = useAuth()
    const assignment = useLoaderData()
    const status = "done"

    console.log(id, assignment)
    const handleMarking = (e) => {
        e.preventDefault()
        const form = e.target
        const marks = form.marks.value
        const feedback = form.feedback.value
        console.log(assignment.link)

        const MarkingInfo = { marks, feedback, status:"done" }
        // console.log(title)

        fetch(`http://localhost:5000/submissions/${assignment._id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(MarkingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount
                    > 0) {
                    Swal.fire({
                        text: "The assginment modified successfully",
                        icon: "success"
                    });
                    navigate('/assignments')
                }
            })
    }

    return (
        <div className="py-8">
            <h2 className="py-8 text-2xl font-bold text-center">Assgnment Grading</h2>
            <form className="w-[80vw] " onSubmit={handleMarking}>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3">
                            <span>Sumbission Link</span>
                            <input type="text" name="link" defaultValue={assignment.link} className="input input-bordered  max-w-full" required />
                            <textarea type="text" name="marks" placeholder="Enter assignment marks here" className="input input-bordered  max-w-full" required />
                            <textarea type="text" name="feedback" placeholder="Enter feedback here" className="input input-bordered  max-w-full" required />
                            <input type="submit" value="submit" className="input input-bordered  max-w-full bg-[#55C360]" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Marking;