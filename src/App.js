import React from 'react'
import Navbar from './project/Navbar';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Home from './project/Home';
import Courses from './project/Courses';
import Services from './project/Services';
import Contact from './project/Contact';
import Notfound from './project/Notfound';


function App () {
        return(
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component ={Home} />
                    <Route path='/courses' component ={Courses} />
                    <Route path='/services' component ={Services} />
                    <Route path='/contact' component ={Contact} />
                    <Route component ={Notfound} />
                </Switch>
            </Router>
        )
}



export default App;