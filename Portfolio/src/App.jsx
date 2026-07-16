import React from "react";
import Home from "./components/Home";
import Aboutme from "./components/AboutMe";
import Project from "./components/Projects";
import Contact from "./components/Contacts";
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <>

      <div className="flex flex-col w-full min-h-screen">
        <Home />
        <Aboutme />
         <Project />
        <Contact /> 
        </div>
    </>
  )
}

export default App;
