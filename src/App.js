import React, { useEffect, useLayoutEffect } from "react";
import Home from "./components/homepage/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/aboutpage/About";
import Contact from "./components/contactpage/Contact";
import  AOS  from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  const ScrollTop = () => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [location.pathname]);
    return null;
  }




  return (
    <BrowserRouter>
      <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}  />
          <Route path="/About" element={<About />}   />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
