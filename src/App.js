import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import About from './pages/about';
import Experience from './pages/experience';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    function disablePreloader() {
      const loader = document.getElementsByClassName('preloader')[0];
      loader.style.display = 'none';
    }
    setTimeout(() => {
      disablePreloader();
    }, 3000);
  }, []);

  return (
    <div className="">
      {/* <Preloader></Preloader> */}
      <Navbar />
      <div className=" mt-7 flex min-h-[95vh] flex-col justify-between">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/experience" element={<Experience></Experience>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
