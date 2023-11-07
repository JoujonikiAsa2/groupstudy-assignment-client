const AssignmentCard = ({ assignment }) => {
    console.log(assignment)
    return (
        <div className="card w-72 md:w-80 lg:w-96 shadow-lg rounded flex flex-col justify-center items-center">
            <div className="card-body">
                <img src={assignment.image} alt="" />
                <h2 className="pt-3 text-xl font-bold">Task Name: {assignment.title}</h2>
                <p>Marks: {assignment.marks}</p>
                <p>Difficulty Level: {assignment.difficulty}</p>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-1 px-2 pb-3">
                <button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">View Assignment</button>
                <button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">Update Assignment</button>
            </div>
        </div>
    );
};

export default AssignmentCard;