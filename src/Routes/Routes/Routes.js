import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home/Home";
import Reviews from "../../Pages/Home/Reviews/Reviews";
import Login from "../../Pages/login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])
export default router;