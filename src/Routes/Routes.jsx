import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Asignments from "../Pages/Asignments/Asignments";
import Error from "../Pages/Error/Error";

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
        }
    ]
}])

export default Routes