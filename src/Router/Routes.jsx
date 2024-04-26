import {
    createBrowserRouter,
  } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);


  export default router;