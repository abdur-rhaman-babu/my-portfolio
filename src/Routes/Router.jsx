import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import About from "../pages/About/About";
import Banner from './../pages/Banner/Banner';
import Skills from './../pages/Skills/Skills';
import Projects from './../pages/Projects/Projects';
import Contact from './../pages/Contact/Contact';
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        // children:[
        //     {
        //         path: '/',
        //         element:<Home/>
        //     },
        //     {
        //         path: '/about',
        //         element:<About/>
        //     },
        //     {
        //         path: '/skills',
        //         element:<Skills/>
        //     },
        //     {
        //         path: '/projects',
        //         element:<Projects/>
        //     },
        //     {
        //         path: '/contact',
        //         element:<Contact/>
        //     },

        // ]
    }
])