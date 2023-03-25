import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import Books from '../pages/books/Books';
import RegisterBook from '../pages/books/RegisterBook';
import LoanedBooks from '../pages/books/LoanedBooks';
import ImportBook from '../pages/books/ImportBook';
import Students from '../pages/students/Students';
import Fines from '../pages/fines/Fines';
import RegisterFines from '../pages/fines/RegisterFine';
import RegisterWorkers from '../pages/workers/RegisterWorker';
import StudentsOverview from '../pages/students/StudentsOverview';
import RegisterStudents from '../pages/students/RegisterStudents';
import Books1 from '../pages/Test/BooksTest';
import HomeTest from '../pages/Test/HomeTest';
import TestWorker from '../pages/Test/RegisterWorkerForm';
import Search from '../pages/home/SearchBooks';

export const unprotectedRoutes = [
  {
    path: '/login',
    element: <Login />
  }
];

export const protectedRoutes = [
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/books',
    element: <Books />
  },
  {
    path: '/registerbook',
    element: <RegisterBook />
  },
  {
    path: '/loanedbooks',
    element: <LoanedBooks />
  },
  {
    path: '/importbook',
    element: <ImportBook />
  },
  {
    path: '/students',
    element: <Students />
  },
  {
    path: '/studentsoverview',
    element: <StudentsOverview />
  },
  {
    path: '/registerstudents',
    element: <RegisterStudents />
  },
  {
    path: '/fines',
    element: <Fines />
  },
  {
    path: '/registerfines',
    element: <RegisterFines />
  },
  {
    path: '/registerworker',
    element: <RegisterWorkers />
  },
  {
    path: '/searchbook',
    element: <Search />
  },
  {
    path: '/BookTest',
    element: <Books1 />
  },
  {
    path: '/homeTest',
    element: <HomeTest />
  },
  {
    path: '/workerTest',
    element: <TestWorker />
  }
];
