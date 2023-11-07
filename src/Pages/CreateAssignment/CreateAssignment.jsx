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
    const {user} = firebaseAuth
    const [startDate, setStartDate] = useState(new Date())
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
        const assignmnent = { title, description, marks, image, difficulty, dueDate,creatorEmail }
        console.log(assignmnent)

        axios.post("http://localhost:5000/assignments", assignmnent)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId
                    != null) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
    
                    Toast.fire({
                        icon: 'success',
                        title: 'Assignment added successfully'
                    })
                    navigate('/assignments')
                }
            })
            .catch(error => {
                console.log(error)
                toast.success("Assignment added successfully")
            })

    }
    return (
        <div className="py-8">
            <h2 className="py-8 text-2xl font-bold text-center">Create Assgnment</h2>
            <form onSubmit={handleCreateASsignment}>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Title</span>
                    <input type="text" name="title" placeholder="Give your assignment title here..." className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Description</span>
                    <input type="text" name="description" placeholder="Give your assignment description here..." className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Marks</span>
                    <input type="text" name="marks" placeholder="Give your assignment marks here..." className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Image URL</span>
                    <input type="text" name="photo" placeholder="Give your assignment image URL here..." className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Assigment Difficulty</span>
                    <select className="input input-bordered w-96" name="difficulty">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Due Date</span>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="MM/dd/yyyy"/>
                </label>
                <input type="submit" name="image" value="Create Assignment" className="text-center input input-bordered w-96 bg-[#55C360] font-bold text-white " />
            </form>
        </div>
    );
};

export default CreateAssignment;