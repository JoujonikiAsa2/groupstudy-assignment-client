import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";
import MyAssignment from "../Pages/MyAssignment/MyAssignment";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateAssingment from "../Pages/Asignments/Components/UpdateAssingment";
import DeleteAssignment from "../Pages/Asignments/Components/DeleteAssignment";
import Assignments from "../Pages/Asignments/Assignments";

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
                element: <Assignments></Assignments>,
                loader: ()=>fetch("http://localhost:5000/assignments")
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
            },
            {
                path: '/updateAssignment/:id',
                element: <PrivateRoutes><UpdateAssingment></UpdateAssingment></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: '/deleteAssignment',
                element: <PrivateRoutes><DeleteAssignment></DeleteAssignment></PrivateRoutes>
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