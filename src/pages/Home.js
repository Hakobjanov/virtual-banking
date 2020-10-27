import React, { useState } from "react";

import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/Hero";
import InfoSection from "../Components/InfoSection/Info";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";

import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../Components/InfoSection/infoData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <Services />
      <InfoSection {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
