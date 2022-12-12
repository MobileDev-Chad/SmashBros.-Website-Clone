import React from "react";
import { tabs } from "../../data/tabs";
import HeroList from "./HeroList";

const Hero = () => {
  return (
    <section className="section">
      <div className="hero-section">
        <img src={require(`../../images/Ultimate_logo.png`)} alt="" />
        <div className="hero-grid-container">
          {tabs.slice(1, 7).map((t) => (
            <HeroList
              text={t.text}
              path={t.path}
              icon={t.icon}
              theme={t.theme}
            />
          ))}
        </div>
      </div>
      <div className="hero-reveal">
        <img src={require(`../../images/reveal.jpg`)} alt="" />
      </div>
      <div className="blog-section"></div>
    </section>
  );
};

export default Hero;
