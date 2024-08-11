import React, { useEffect } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

import Library from "./Library/Librarys";
import Contacts from "./contact/Contacts";
import Abouts from "./about/Abouts";
import SignUp from "./components/SignUp";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "cupcake"); // Set default theme
  }, []);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/signup" element={<SignUp />} />



        
      </Routes>
      </div>
      
    </>
  );
};

export default App;
