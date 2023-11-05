import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Asignments from "../Pages/Asignments/Asignments";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Routes = createBrowserRouter([{
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
    ]
},
{
    path: '/login',
    element: <Login></Login>
},
{
    path: '/register',
    element: <Register></Register>
}])

export default Routes