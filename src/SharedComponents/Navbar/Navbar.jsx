import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../../Firebase/firebase.config";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const Navbar = () => {

    const { user, isLoading } = useContext(AuthContext)
    const status = "pending"

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(user)
    const handleLogOut = () => {
        signOut(auth)
            .then(() => { console.log("Successfull") })
            .catch((error) => { console.log(error) })
    }

    const links = <>
        <li><NavLink to="/" className="bg-transparent" style={({ isActive }) => {
            return {
                backgroundColor: isActive ? "#55c360" : "",
                color: isActive ? "white" : "#010101",
                fontSize: '1rem',
                fontWeight: isActive ? "bold" : "medium",
            }
        }}>Home</NavLink></li>
        <li><NavLink to="/assignments" className="bg-transparent" style={({ isActive }) => {
            return {
                backgroundColor: isActive ? "#55c360" : "",
                color: isActive ? "white" : "#010101",
                fontSize: '1rem',
                fontWeight: isActive ? "bold" : "medium",
            }
        }}>Assignments</NavLink></li>
    </>
    return (
        <div>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center px-4 gap-4 py-3">
                <div className="text-2xl font-bold text-[#55c360]">Learn Together</div>
                {
                    user && <div className="lg:flex lg:flex-row justify-center items-center gap-2 md:hidden hidden">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <h4 className="px-2">{user.displayName}</h4>
                        <div className="lg:flex md:flex hidden"><NavLink to="/" className="bg-transparent border-2 border-[#55C360] p-2 rounded hover:bg-[#55C360]" onClick={handleLogOut}>LogOut</NavLink>
                        </div>
                    </div>
                }
            </div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full  bg-[#F4F9FD]">
                        <div className=" lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="hidden lg:flex justify-between py-3">
                        <div></div>
                            <ul className="menu menu-horizontal">
                                {links}
                                {
                                    user
                                        ?
                                        <div className="flex">
                                            <li><NavLink to="/createAssignment" className="bg-transparent" style={({ isActive }) => {
                                                return {
                                                    backgroundColor: isActive ? "#55c360" : "",
                                                    color: isActive ? "white" : "#010101",
                                                    fontSize: '1rem',
                                                    fontWeight: isActive ? "bold" : "medium",
                                                }
                                            }}>Create Assignment</NavLink></li>
                                            <li><NavLink to="/myAssignments" onClick={()=>console.log("i am clicked")} className="bg-transparent" style={({ isActive }) => {
                                                return {
                                                    backgroundColor: isActive ? "#55c360" : "",
                                                    color: isActive ? "white" : "#010101",
                                                    fontSize: '1rem',
                                                    fontWeight: isActive ? "bold" : "medium",
                                                }
                                            }}>My Assignment</NavLink></li>
                                            <li><NavLink to="/submittedAssignments" className="bg-transparent" style={({ isActive }) => {
                                                return {
                                                    backgroundColor: isActive ? "#55c360" : "",
                                                    color: isActive ? "white" : "#010101",
                                                    fontSize: '1rem',
                                                    fontWeight: isActive ? "bold" : "medium",
                                                }
                                            }}>Submitted Assignments</NavLink></li>
                                        </div>
                                        :
                                        <div className="flex">
                                            <li><NavLink to="/login" className="bg-transparent" style={({ isActive }) => {
                                                return {
                                                    backgroundColor: isActive ? "#55c360" : "",
                                                    color: isActive ? "white" : "#010101",
                                                    fontSize: '1rem',
                                                    fontWeight: isActive ? "bold" : "medium",
                                                }
                                            }}>Login</NavLink></li>
                                            <li><NavLink to="/register" className="bg-transparent" style={({ isActive }) => {
                                                return {
                                                    backgroundColor: isActive ? "#55c360" : "",
                                                    color: isActive ? "white" : "#010101",
                                                    fontSize: '1rem',
                                                    fontWeight: isActive ? "bold" : "medium",
                                                }
                                            }}>Register</NavLink></li>
                                        </div>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='max-w-[90vw] mx-auto'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <li>
                            <div className="lg:hidden md:hidden flex flex-col">
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <h4>{user?.displayName}</h4>
                            </div>
                        </li>
                        {links}
                        {
                            user
                                ?
                                <div className="flex flex-col">

                                    <li>
                                        <NavLink to="/createAssignment" className="bg-transparent" style={({ isActive }) => {
                                            return {
                                                backgroundColor: isActive ? "#55c360" : "",
                                                color: isActive ? "white" : "#010101",
                                                fontSize: '1rem',
                                                fontWeight: isActive ? "bold" : "medium",
                                            }
                                        }}>Create Assignment</NavLink></li>
                                    <li><NavLink to="/myAssignments" className="bg-transparent" style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#55c360" : "",
                                            color: isActive ? "white" : "#010101",
                                            fontSize: '1rem',
                                            fontWeight: isActive ? "bold" : "medium",
                                        }
                                    }}>My Assignment</NavLink></li>
                                    <li><NavLink to="/submittedAssignments"
                                    className="bg-transparent" style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#55c360" : "",
                                            color: isActive ? "white" : "#010101",
                                            fontSize: '1rem',
                                            fontWeight: isActive ? "bold" : "medium",
                                        }
                                    }}>Submitted Assignments</NavLink></li>
                                    <li><NavLink to="/" className="bg-transparent" style={({ isActive }) => {
                                        return {
                                            backgroundColor: "transparent",
                                            fontSize: '1rem',
                                            color: "#010101",
                                            fontWeight: "medium",
                                        }
                                    }} onClick={handleLogOut}>LogOut</NavLink></li>
                                </div>
                                :
                                <div>
                                    <li><NavLink to="/login" className="bg-transparent" style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#55c360" : "",
                                            color: isActive ? "white" : "#010101",
                                            fontSize: '1rem',
                                            fontWeight: isActive ? "bold" : "medium",
                                        }
                                    }}>Login</NavLink></li>
                                    <li><NavLink to="/register" className="bg-transparent" style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#55c360" : "",
                                            color: isActive ? "white" : "#010101",
                                            fontSize: '1rem',
                                            fontWeight: isActive ? "bold" : "medium",
                                        }
                                    }}>Register</NavLink></li>
                                </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;