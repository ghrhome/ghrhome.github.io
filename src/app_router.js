import React from 'react'
import { BrowserRouter,Route,Link,Routes,Outlet } from 'react-router-dom'
import './App.css';
import SS from "./a"

import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import {HomeRouter} from './pages/pageRouters'
import Test from './pages/test'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h3>SVG TEST</h3>
                </header>
                {/* <div>
                  <SS id={"svg"}></SS>
              </div>*/}
                <Link to={'/about'}>About</Link>

                <Routes>
                    <Route path="/home/*" element={<Home/>} >
                    </Route>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>



            </div>
        </BrowserRouter>

    );
}

export default App;
