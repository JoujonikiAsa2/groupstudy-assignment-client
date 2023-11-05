import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
    const firebaseAuth = useContext(AuthContext)
    return firebaseAuth
};

export default useAuth;