import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HomeBooks from "../components/HomeBooks";
import Testimonials from "../components/Testimonials";
import LatestAdditions from "../components/LatestAdditions";

function Home() {
  return (
    <>
      <Hero />
      <Features />    
      <HomeBooks />
      <Testimonials />
      <LatestAdditions />
    </>
  );
}

export default Home;
