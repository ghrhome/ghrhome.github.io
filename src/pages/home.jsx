import React, { useEffect,useRef } from 'react'
import {Outlet, Route, Routes} from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import {HomeRouter} from './pageRouters'

const page = () =>{
    return <>
        <h1>Home</h1>
        <Outlet />
       {/* <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>*/}
        <HomeRouter></HomeRouter>

    </>
}

export default page;