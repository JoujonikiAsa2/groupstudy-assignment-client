import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Asignments from "../Pages/Asignments/Asignments";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/assignments',
                element: <Asignments></Asignments>
            },
            {
                path: '/createAssignment',
                element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path: '/myAssignments',
                element: <PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>
            },
            {
                path: '/submittedAssignments',
                element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>
            }
        ]
    } ,
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }])

export default Routes