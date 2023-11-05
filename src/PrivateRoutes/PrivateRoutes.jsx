import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../SharedComponents/Loading/Loading";

const PrivateRoutes = ({children}) => {
    const firebaseAuth = useAuth()
    const { user, isLoading} = firebaseAuth

    if(user){
        return children;
    }

    if(isLoading){
        return <Loading></Loading>
    }
    
    return <Navigate to='/'></Navigate>
};

export default PrivateRoutes;