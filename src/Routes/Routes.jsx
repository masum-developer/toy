import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import AllToy from "../pages/AllToy/AllToy";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyToy from "../pages/MyToy/MyToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/add-toy',
            element:<AddToy></AddToy>
        },
        {
            path:'/all-toy',
            element:<AllToy></AllToy>,
            loader:()=>fetch('http://localhost:5000/all-toy')
        },
        {
            path:'/my-toy',
            element:<MyToy></MyToy>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);


  export default router;