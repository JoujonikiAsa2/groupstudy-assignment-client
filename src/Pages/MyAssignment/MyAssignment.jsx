import MyAssignmentCard from "./Components/myAssignmentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const MyAssignment = () => {

    const {user} = useAuth()
    const [myAssignments,setMyAssignment] = useState([])
    useEffect(()=>{
        axios.get(`https://group-study-server-side-sigma.vercel.app/submissions/user/${user.email}`)
        .then(res=> setMyAssignment(res.data))
        .catch(error =>console.log(error))
    },[])
    console.log(myAssignments)

    return (
        <div className="grid grid-cols-1">
           {myAssignments.map( assignment => <MyAssignmentCard key={assignment._id} assignment={assignment}></MyAssignmentCard>)}
        </div>
    );
};

export default MyAssignment;