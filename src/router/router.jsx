import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Books from "../pages/books/Books";
import Students from "../pages/students/Students";
import Fines from "../pages/fines/Fines";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/books",
        element: <Books />
    },
    {
        path: "/students",
        element: <Students />
    },
    {
        path: "/fines",
        element: <Fines />
    }
]);
export default router;