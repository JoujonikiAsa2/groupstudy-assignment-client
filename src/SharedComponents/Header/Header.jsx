import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
    const firebaseAuth = useAuth()
    const { user } = firebaseAuth
    console.log(user)

    const handleLogOut = () => {
        signOut(auth)
            .then(() => { console.log("Successfull") })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center px-4 gap-3 py-3">
            <div className="text-2xl font-bold text-[#55c360]">Learn Together</div>
            {
                user && <div className="lg:flex lg:flex-row justify-center items-center gap-2 md:hidden hidden">
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="" />
                    </div>
                </div>
                <h4>Name</h4>
                <div className="lg:flex md:flex hidden"><NavLink to="/" className="bg-transparent border-2 border-[#55C360] p-2 rounded hover:bg-[#55C360]" onClick={handleLogOut}>LogOut</NavLink>
                </div>
            </div>
            }
        </div>
    );
};

export default Header;