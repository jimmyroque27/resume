import React from 'react';
import Navbar2 from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  

import './App.css';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JobHistory from './components/pages/JobHistory';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import Contactus from './components/pages/Contactus';
import ScrollToTop from './components/ScrollToTop';
import Profile from './components/pages/Profile';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <>
      <Router>
            <ScrollToTop />
            <Navbar2 />
              <Routes>
               <Route path='/resume' element={<Home/>} />
               <Route path='/profile' element={<Profile/>} />
                <Route path='/education' element={<Education/>} />
                    
                <Route path='/jobhistory' element={<JobHistory/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contactus' element={<Contactus/>} />
                <Route path='/sign-up' element={<SignUp/>} />
            </Routes>
            <Footer />
      </Router>
      
    </>
  );
}

export default App;
