import React, { useEffect,useRef } from 'react'
import {Outlet, Route, Routes,Link} from "react-router-dom";
import About from "./about";
import Contact from "./contact";

const Test= () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>


            <section>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </section>
        </div>
    );
};

export default Test