import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const CreateAssignment = () => {
    const firebaseAuth = useAuth()
    const { user } = firebaseAuth
    const [startDate, setStartDate] = useState()
    const navigate = useNavigate()

    const handleCreateASsignment = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const marks = form.marks.value
        const image = form.photo.value
        const difficulty = form.difficulty.value
        const dueDate = startDate
        const creatorEmail = user.email
        console.log(title, description, marks, image, difficulty, dueDate)
        const assignmnent = { title, description, marks, image, difficulty, dueDate, creatorEmail }
        console.log(assignmnent)

        axios.post("https://group-study-server-side-sigma.vercel.app/assignments", assignmnent)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId
                    != null) {
                        Swal.fire({
                            title: "Good job!",
                            text: "Your assginment added successfully",
                            icon: "success"
                          });
                    navigate('/assignments')
                }
            })
            .catch(error => {
                console.log(error)
                toast.success(error)
            })

    }
    return (
        <div className="py-8" data-aos="fade-down">
            <h2 className="py-8 text-2xl font-bold text-center">Create Assgnment</h2>
            <form onSubmit={handleCreateASsignment} className="w-[80vw] ">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3">
                            <span>Title</span>
                            <input type="text" name="title" placeholder="Give your assignment title here..." className="input input-bordered  max-w-full" required />
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3 pb-3">
                            <span>Description</span>
                            <input type="text" name="description" placeholder="Give your assignment description here..." className="input input-bordered max-w-full" required />
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3 pb-3">
                            <span>Marks</span>
                            <input type="text" name="marks" placeholder="Give your assignment marks here..." className="input input-bordered max-w-full" required />
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3 pb-3">
                            <span>Image URL</span>
                            <input type="text" name="photo" placeholder="Give your assignment image URL here..." className="input input-bordered max-w-full" required />
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3 pb-3">
                            <span>Assigment Difficulty</span>
                            <select className="input input-bordered max-w-full" name="difficulty" required>
                                <option value=""></option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <label className="flex flex-col gap-3 pb-3">
                            <span>Due Date</span>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/dd/yyyy" className="input input-bordered max-w-full" required />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <input type="submit" name="image" value="Create Assignment" className="text-center input input-bordered max-w-full bg-[#55C360] font-bold text-white " />
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;