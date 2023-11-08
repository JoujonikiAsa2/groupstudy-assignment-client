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
import Assignments from "../Pages/Asignments/Assignments";
import AssignmentDetails from "../Pages/Asignments/Components/AssignmentDetails";
import Submission from "../Pages/Asignments/Components/Submission";
import Marking from "../Pages/Asignments/Components/Marking";

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
                loader: ()=>fetch("https://group-study-server-side-sigma.vercel.app/assignments")
            },
            {
                path: '/createAssignment',
                element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path: '/myAssignments',
                element: <PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>,
                loader: ()=> fetch("https://group-study-server-side-sigma.vercel.app/submissions")
            },
            {
                path: '/submittedAssignments',
                element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes>,
                loader: ({params})=>fetch(`https://group-study-server-side-sigma.vercel.app/assignments/${params.id}`)
                
            },
            {
                path: '/updateAssignment/:id',
                element: <PrivateRoutes><UpdateAssingment></UpdateAssingment></PrivateRoutes>,
                loader: ({params})=>fetch(`https://group-study-server-side-sigma.vercel.app/assignments/${params.id}`)
            },
            {
                path: '/deleteAssignment/:id',
                loader: ({params})=>fetch(`https://group-study-server-side-sigma.vercel.app/assignments/${params.id}`)
            },
            {
                path: '/submission/:id',
                element: <PrivateRoutes><Submission></Submission></PrivateRoutes>
            },
            {
                path: '/marking/:id',
                element: <PrivateRoutes><Marking></Marking></PrivateRoutes>,
                loader: ({params})=>fetch(`https://group-study-server-side-sigma.vercel.app/submissions/${params.id}`)
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