import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/InfoSection/HeroPage";
import Sidebar from "../components/Sidebar";
// import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  // homeObj,
  homeObjThree,
} from "../components/InfoSection/Data";
import Service from "../components/Service";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} togle={togle} />
      <Navbar togle={togle} />
      {/* <HeroSection /> */}
      <HeroPage />
      {/* <InfoSection {...homeObj} /> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Service />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
