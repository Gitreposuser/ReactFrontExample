import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Error from './../pages/Error';
import Reader from './../pages/Reader';

export const defaultRoutes = [
    {name: "home", exact: true, path: "/", element: <Home/>}, 
    {name: "error", exact: true, path: "/error", element: <Error/>},
    {name: "reader", exact: true, path: "/reader/:id", element: <Reader/>},
    {name: "undefined", exact: true, path: "*", element: <Navigate to="/error"/>}
];