import React from "react";
import HeroSection from "../../componets/home/HeroSection";
import ServicesRow from "../../componets/home/ServicesRow";
import OurWork from "../../componets/home/OurWork";
import AboutUs from "../../componets/home/AboutUs";
import UpButton from "../../componets/common/UpButton";

function Home() {
  return (
    <div>
      <HeroSection />
      <UpButton />
      <ServicesRow />
      <OurWork />
      <AboutUs />
    </div>
  );
}

export default Home;
