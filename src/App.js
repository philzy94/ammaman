import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
// import Preloader from './components/preloader';
import About from './pages/about';
import BlogsInfo from './pages/blogsInfo';
import Experience from './pages/experience';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home></Home>
              <About></About>
              <Experience></Experience>
              <Projects></Projects>
              <Skills></Skills>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route path="/blogs-info/:name" element={<BlogsInfo></BlogsInfo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
