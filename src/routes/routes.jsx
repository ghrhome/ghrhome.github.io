import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Play from "../pages/play";
import MuiPlay from "../pages/mui";

export const HomeRouter = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/play' element={<Play/>}/>
            <Route path='/mui' element={<MuiPlay/>}/>
        </Routes>

    </>
}

