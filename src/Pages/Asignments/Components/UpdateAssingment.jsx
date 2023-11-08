import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const UpdateAssingment = () => {
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()
    const loadedAssignment = useLoaderData()
    const [assignment,setAssignment] = useState([]) 
    const id = useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/assignments/${id}`)
        .then(res=>res.json())
        .then(data=>setAssignment(data))
    },[])


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
        const updatedAssignment = { title, description, marks, image, difficulty, dueDate }
        console.log(updatedAssignment)

        console.log(assignment._id)

        fetch(`http://localhost:5000/assignments/${assignment._id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount
                    > 0) {
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
                        title: 'Assignment updated successfully'
                    })
                    navigate('/assignments')
                }
            })

    }
    return (
        <div className="p-4">
            <h2 className="py-8 text-2xl font-bold text-center">Update Assgnment</h2>
            <form onSubmit={handleUpdateASsignment} className='flex flex-col'>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Title</span>
                    <input type="text" name="title" defaultValue={loadedAssignment.title} className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Description</span>
                    <input type="text" name="description" defaultValue={loadedAssignment.description}  className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Marks</span>
                    <input type="text" name="marks" defaultValue={loadedAssignment.marks} className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Image URL</span>
                    <input type="text" name="photo" defaultValue={loadedAssignment.image} className="input input-bordered w-96" />
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Assigment Difficulty</span>
                    <select className="input input-bordered w-96" name="difficulty" selected={loadedAssignment.difficulty}>
                        <option value={loadedAssignment.difficulty}>{loadedAssignment.difficulty}</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <label className="flex flex-col gap-3 pb-3">
                    <span>Due Date</span>
                    <DatePicker selected={new Date(loadedAssignment.dueDate)} onChange={(date) => setStartDate(date)}  dateFormat="MM/dd/yyyy"/>
                </label>
                <input type="submit" name="image" value="Update Assignment" className="text-center input input-bordered w-96 bg-[#55C360] font-bold text-white " />
            </form>
        </div>
    );
};

export default UpdateAssingment;