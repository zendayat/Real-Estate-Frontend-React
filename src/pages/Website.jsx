import React from 'react'
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import Started from "../components/Started/Started";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

const Website = () => {
  return (
    <div>
      <div className=" relative">
        <div className="white-gradient absolute w-80 h-80 bg-[rgba(255,255,255,0.45)] rounded-[100px] blur-[100px]" />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Started />
    </div>
  );
}

export default Website
