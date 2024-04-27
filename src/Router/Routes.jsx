import {
    createBrowserRouter,
  } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CardDetails from "../Pages/CardDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../components/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            loader: () => fetch('/estates.json'),
            element:<Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/cardDetails/:id",
          loader:() => fetch('estates.json'),
          element:   <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
        },
        {
          path:"/profile",
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;