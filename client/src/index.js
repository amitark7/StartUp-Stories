import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/style/Responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './Component/Admin';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Blogs from './Component/Blogs';
import ServicePage from './Component/ServicePage';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import About from './Component/About';
import ScrollToTop from './Component/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar/>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
      <Routes>
          <Route exact path="/about" element={<About/>} />
        </Routes>
      <Routes>
          <Route exact path="/admin" element={<Admin/>} />
        </Routes>
      <Routes>
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      <Routes>
          <Route exact path="/blog" element={<Blogs/>} />
        </Routes>
      <Routes>
          <Route exact path="/service" element={<ServicePage/>} />
        </Routes>
      <Routes>
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
