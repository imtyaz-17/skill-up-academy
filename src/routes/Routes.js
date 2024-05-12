import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import TermsAndCondition from "../pages/Shared/TermsAndConditionTermsAndCondition/TermsAndCondition";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
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
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            }
        ]
    }
])