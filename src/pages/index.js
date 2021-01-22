import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar/index";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar/idex";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <Services />
      <InfoSection {...homeObjectThree} />
    </div>
  );
};

export default Home;
