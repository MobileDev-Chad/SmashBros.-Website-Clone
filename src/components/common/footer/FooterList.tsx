import React from "react";
import { Link } from "react-router-dom";

type TabProps = {
  text: string;
  path: string;
  icon: string;
  theme: string;
};

const FooterList = ({ text, path, icon, theme }: TabProps) => {
  return (
    <>
      <Link to={path} className="class-link" id="hero-link" key={text}>
        <i className={icon} id="icon-link" ></i> {text}
      </Link>
    </>
  );
};

export default FooterList;
