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
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ToyEdit from "../pages/ToyEdit/ToyEdit";

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
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:'/all-toy',
            element:<AllToy></AllToy>
            
        },
        {
            path:'/toy/:id',
            element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://my-avenger-server.vercel.app/toy/${params.id}`)
            
        },
        {
            path:'/toy-edit/:id',
            element:<PrivateRoute><ToyEdit></ToyEdit></PrivateRoute>,
            loader:({params})=>fetch(`https://my-avenger-server.vercel.app/toy-edit/${params.id}`)
            
        },
        {
            path:'/my-toy',
            element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
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