import React from "react";

const Header = () => {
  return (
    <>
      <section className="navbar center">
        <div className="navbar-logo">
          <img
            className="pointer"
            src={require(`../../images/Nintendo.png`)}
            alt=""
          />
        </div>

        <div className="navbar-logo center">
          <div className="parallelogram center">
            
              <h3><i className="bi bi-globe"></i>Select Language</h3>
            
            <p>|</p>
            <div><i className="bi bi-person"></i>
              <h3>Log in</h3>
            </div>
          </div>
          <img
            className="pointer"
            src={require(`../../images/NintendoSwitchLogo.png`)}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Header;
