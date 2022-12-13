import React from "react";
import Carousel from "./carousel/Carousel";
import VideoCarousel from "./carousel/VideoCarousel";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Carousel />
      <Hero />
      <VideoCarousel />
    </>
  );
};

export default Home;
