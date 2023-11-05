import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {

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
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar  bg-[#F4F9FD]">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-2xl font-bold text-[#010101]">Learn Together</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {links}
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
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;