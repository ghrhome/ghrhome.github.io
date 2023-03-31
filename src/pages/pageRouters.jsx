import {Route, Routes} from "react-router-dom";
import About from "./about";
import React from "react";
import Contact from "./contact";

export const HomeRouter = () => {
    return <>
        <Routes>
            <Route path="/about" element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

    </>
}

