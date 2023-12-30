import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import PatientProfile from "../pages/PatientProfile/PatientProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/patient-profile',
                element: <PatientProfile></PatientProfile>
            },
        ]
    },



]);