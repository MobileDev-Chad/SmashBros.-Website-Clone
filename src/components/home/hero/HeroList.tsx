import React from "react";
import { Link } from "react-router-dom";

type TabProps = {
  text: string;
  path: string;
  icon: string;
  theme: string;
};

const HeroList = ({ text, path, icon, theme }: TabProps) => {
  return (
    <>
      <Link to={path} id="hero-link" key={text}>
        <i className={icon}  id="icon-link" style={{ color: theme }}></i> {text}
      </Link>
    </>
  );
};

export default HeroList;
