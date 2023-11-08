import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const UpdateAssingment = () => {

    const firebaseAuth = useAuth()
    const { user } = firebaseAuth
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()
    const loadedAssignment = useLoaderData()
    const id = useParams()
    const updaterEmail = user?.email

    const handleUpdateASsignment = (e) => {
        e.preventDefault()

        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const marks = form.marks.value
        const image = form.photo.value
        const difficulty = form.difficulty.value
        const dueDate = startDate

        console.log(title, description, marks, image, difficulty, dueDate)
        const updatedAssignment = { title, description, marks, image, difficulty, dueDate, updaterEmail }
        console.log(updatedAssignment)

        console.log(loadedAssignment._id)

        fetch(`http://localhost:5000/assignments/${loadedAssignment._id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedAssignment)
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
                navigate('/assignments')
            })

}
return (
    <div className="py-8" data-aos="fade-down">
        <h2 className="py-8 text-2xl font-bold text-center">Create Assgnment</h2>
        <form onSubmit={handleUpdateASsignment} className="w-[80vw] ">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center">
                    <label className="flex flex-col gap-3">
                        <span>Title</span>
                        <input type="text" name="title" defaultValue={loadedAssignment.title} className="input input-bordered  max-w-full" required />
                    </label>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label className="flex flex-col gap-3 pb-3">
                        <span>Description</span>
                        <input type="text" name="description" defaultValue={loadedAssignment.description} className="input input-bordered max-w-full" required />
                    </label>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label className="flex flex-col gap-3 pb-3">
                        <span>Marks</span>
                        <input type="text" name="marks" defaultValue={loadedAssignment.marks} className="input input-bordered max-w-full" required />
                    </label>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label className="flex flex-col gap-3 pb-3">
                        <span>Image URL</span>
                        <input type="text" name="photo" defaultValue={loadedAssignment.image} className="input input-bordered max-w-full" required />
                    </label>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label className="flex flex-col gap-3 pb-3">
                        <span>Assigment Difficulty</span>
                        <select className="input input-bordered max-w-full" name="difficulty" required>
                            <option value={loadedAssignment.difficulty}>{loadedAssignment.difficulty}</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label className="flex flex-col gap-3 pb-3">
                        <span>Due Date</span>
                        <DatePicker selected={new Date(loadedAssignment.dueDate)} onChange={(date) => setStartDate(date)} dateFormat="MM/dd/yyyy" className="input input-bordered max-w-full" required />
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

export default UpdateAssingment;