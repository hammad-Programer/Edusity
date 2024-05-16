import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Tilte from "./Components/Title/Tilte";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/Videoplayer/Video";
const App = () => {
  const [playState ,setPlayState]= useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Tilte subTitle=" Our Programs" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Tilte subTitle=" Gallery" title="Campus Photos" />
      </div>
      <Campus/>
      <Tilte subTitle=" Testimonials" title="What student says" />
      <Testimonials/>
      <Tilte subTitle=" Contact Us" title="Get in Touch" />
      <Contact/>
      <Footer/>
      <Video playState={playState} setPlayState={setPlayState}/>
      
    </>
  );
};

export default App;
