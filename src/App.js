//import logo from './logo.svg';
//import './App.css';
//import Header from './component/Header/Header';
// import Header from './component/Header';

//import Header from "./component/Header/Header";
//import Hero from "./component/Hero/Hero";
//import React from "react";

import Navbar from "../src/components/Navbar";
import Hero from "./components/Hero"
import Bodyone from "./components/Bodyone";
import Whychooseus from "./components/Whychoose";
import Footer from "./components/Footer";
import Stayupdate from "./components/Stayupdate";
import Cryptot from "./components/Cryptot";
import Bodytwo from "./components/Bodytwo";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Cryptot />
    <Bodyone />
    <Bodytwo />
    <Whychooseus />
    <Stayupdate />
    <Footer />
    </>
  );
}

export default App;
