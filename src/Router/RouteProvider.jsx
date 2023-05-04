import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";
import Register from "../Components/Register/Register";
import Chef from "../Components/Home/Chef/Chef";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
]);


