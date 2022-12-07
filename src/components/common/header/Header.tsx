import React from "react";

const Header = () => {
  return (
    <>
      <section className="navbar center pointer">
        <div className="navbar-logo">
          <img src={require(`../../images/Nintendo.png`)} alt="" />
        </div>

        <div className="navbar-logo pointer">
          <img src={require(`../../images/NintendoSwitchLogo.png`)} alt="" />
        </div>
      </section>
    </>
  );
};

export default Header;
