import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Books from "../pages/books/Books";
import RegisterBook from "../pages/books/RegisterBook";
import LoanedBooks from "../pages/books/loanedBooks";
import ImportBook from "../pages/books/ImportBook";
import Students from "../pages/students/Students";
import Fines from "../pages/fines/Fines";
import RegisterFines from "../pages/fines/RegisterFine";
import RegisterWorkers from "../pages/auth/RegisterWorker";
import StudentsOverview from "../pages/students/StudentsOverview";
import RegisterStudents from "../pages/students/RegisterStudents";




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
        path: "/books",
        element: <Books />
    },
    {
        path: "/registerbook",
        element: <RegisterBook />
    },
    {
        path: "/loanedbooks",
        element: <LoanedBooks />
    },
    {
        path: "/importbook",
        element: <ImportBook />

    },
    {
        path: "/students",
        element: <Students />
    },
    {
        path: "/studentsoverview",
        element: <StudentsOverview />
    },
    {
        path: "/registerstudents",
        element: <RegisterStudents />
    },
    {
        path: "/fines",
        element: <Fines />
    },
    {
        path: "/registerfines",
        element: <RegisterFines />
    },
    {
        path: "/registerworker",
        element: <RegisterWorkers />
    },
    
]);
export default router;