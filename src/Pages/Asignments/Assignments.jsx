import { useLoaderData } from "react-router-dom";
import AssignmentCard from '../Asignments/Components/AssignmentCard'
import { useState } from "react";
import axios from "axios";

const Assignments = () => {

    const assignments = useLoaderData()
    console.log(assignments)
    const [filteredAssignment, setFilteredAssignment] = useState(assignments)
    const [level, setLavel] = useState(null)
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(0)
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const handleClick = (e) => {
        e.preventDefault()
        setLavel(e.target.value)
        fetch(`https://group-study-server-side-sigma.vercel.app/assignments/level/${e.target.value}`, {
            method: "GET",
            headers: { "content-type": "application/json" },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setFilteredAssignment(data))

    }
    console.log(level)

    const handleDelete = (id) => {
        axios.delete(`https://group-study-server-side-sigma.vercel.app/assignments/${id}`)
            .then((res) => {
                const remaining = assignments.filter(assign => assign._id != id)
                setFilteredAssignment(remaining)
        })
            .then(error => console.log(error))
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-2 justify-between items-center py-4">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold">Assignments</h1>
                </div>
                <div className="w-1/2">
                    <select name="" id="" className='input input-bordered rounded w-full' onChange={handleClick}>
                        <option value="" selected></option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-8">
                {
                    filteredAssignment.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;