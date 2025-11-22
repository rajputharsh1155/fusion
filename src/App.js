import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Course from './Components/Course';
import Service from './Components/Service';
import Consultancy from './Components/Consultancy';
import Placement from './Components/Placement';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/course" element={<Course />} />
          <Route path="/service" element={<Service />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/placement" element={<Placement />} />
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
