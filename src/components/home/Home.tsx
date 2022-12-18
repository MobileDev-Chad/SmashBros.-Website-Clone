import React from "react";
import Carousel from "./carousel/Carousel";
import VideoCarousel from "./carousel/VideoCarousel";
import Hero from "./hero/Hero";
import Blog from "./blog/Blog";

const Home = () => {
  return (
    <>
      <Carousel />
      <Hero />
      <VideoCarousel />
      <Blog />
    </>
  );
};

export default Home;
