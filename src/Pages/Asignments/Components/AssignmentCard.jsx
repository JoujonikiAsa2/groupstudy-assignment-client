import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AssignmentCard = ({ assignment, handleDelete, user }) => {
    console.log(assignment)

    const handleLocalDelete = (id) => {
        if (user.email == assignment.creatorEmail) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  handleDelete(id)
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                  });
                }
              });
        }
        else {
            Swal.fire({
                title: "Opps",
                text: "You are not valid user to remove this assignment",
                icon: "error"
            });
        }
    }

    return (
        <div className="card w-72 md:w-80 lg:w-96 shadow-lg rounded flex flex-col justify-center items-center" data-aos="zoom-in">
            <div className="card-body">
                <img src={assignment.image} alt="" />
                <h2 className="pt-3 text-xl font-bold">Task Name: {assignment.title}</h2>
                <p>Marks: {assignment.marks}</p>
                <p>Difficulty Level: {assignment.difficulty}</p>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-1 px-2 pb-3">
                <Link to={`/viewDetails/${assignment._id}`}><button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">View Details</button></Link>
                <Link to={`/updateAssignment/${assignment._id}`}><button className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">Update</button></Link>
                <button onClick={() => handleLocalDelete(assignment._id)} className="btn btn-sm hover:bg-transparent bg-[#2BAFFC] capitalize text-white font-bold">Delete</button>
            </div>
        </div>
    );
};

export default AssignmentCard;