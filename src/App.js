import React from 'react'
import { BrowserRouter,Route,Link,Routes,Outlet } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import {HomeRouter} from './routes/routes'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>APP test</h1>
                {/*<ThemeProvider>
                     CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
                    <CssBaseline />
                    <Outlet />
                </ThemeProvider>*/}
                <Outlet />
                <HomeRouter></HomeRouter>
                {/*<header className="App-header">
                    <h3>SVG TEST</h3>
                </header>
                <Link to={'/about'}>About</Link>

                <Routes>
                    <Route path="/home/*" element={<Home/>} >
                    </Route>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>*/}
            </div>
        </BrowserRouter>

    );
}

export default App;
