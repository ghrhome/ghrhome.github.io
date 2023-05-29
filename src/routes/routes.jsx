import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Play from "../pages/play";
import MuiPlay from "../pages/mui";
import MyPlay from "../pages/MyPlay";
import DND from "../pages/dnd";
import DND3 from "../pages/dnd3";
import DND4 from "../pages/dnd4";
import Rxjs from "../pages/rxjs"

export const HomeRouter = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/play' element={<Play/>}/>
            <Route path='/mui' element={<MuiPlay/>}/>
            <Route path='/htt' element={<MyPlay/>}/>
            <Route path='/dnd' element={<DND/>}/>
            <Route path='/dnd3' element={<DND3/>}/>
            <Route path='/dnd4' element={<DND4/>}/>
            <Route path="/rxjs" element={<Rxjs/>} />
        </Routes>

    </>
}

