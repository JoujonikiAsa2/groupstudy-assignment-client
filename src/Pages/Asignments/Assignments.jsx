import { useLoaderData } from "react-router-dom";
import AssignmentCard from '../Asignments/Components/AssignmentCard'
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../SharedComponents/Loading/Loading";

const Assignments = () => {

    const [filteredAssignment, setFilteredAssignment] = useState([])
    const [level, setLavel] = useState(null)
    // const [itemsPerPage, setItemsPerPage] = useState(12);
    // const [count, setCount] = useState(0)
    // const numberOfPages = Math.ceil(count / itemsPerPage);
    const { count } = useLoaderData()
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(0);
    const { isLoading } = useAuth()

    const numberOfPages = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPages).keys()]

    useEffect(() => {
        fetch(`https://group-study-server-side-sigma.vercel.app/assignments?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setFilteredAssignment(data))
    }, [currentPage,itemsPerPage])

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

    const handleItemsPerPage = (e) => {
        console.log(e.target.value)
        const intPage = parseInt(e.target.value)
        setItemsPerPage(intPage)
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    if (isLoading) {
        return <Loading></Loading>
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
            <div className="pagination">
                <div><button className="btn" onClick={handlePrev}>Prev</button></div>
                {
                    pages.map(page => <button className={currentPage===page && "selected"} key={page} onClick={()=>setCurrentPage(page)}>{page}</button>)
                }
                <div><button className="btn" onClick={handleNext}>Next</button></div>
                <select name="" id="" className="input input-bordered" onChange={handleItemsPerPage}>
                    <option value="">12</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
            </div>
        </div>
    );
};

export default Assignments;