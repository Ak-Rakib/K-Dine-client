import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/Blog/Blog";
import Register from "../Components/Register/Register";
import ChefRecipes from "../Components/ChefRecipes/ChefRecipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://k-dine-server-ak-rakib.vercel.app/chefs'),
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
            {
                path: '/recipes/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://k-dine-server-ak-rakib.vercel.app/chefs/${params.id}`)
            }
        ]
    }
]);


