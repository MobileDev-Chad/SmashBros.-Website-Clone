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
            <h3>
              <i className="bi bi-globe2" style={{fontSize:"1.45rem"}}></i>&nbsp;&nbsp;&nbsp;Select Language
            </h3>

            <p>|</p>
            <div className="login pointer">
              <i
                className="bi bi-person-fill"
                style={{ fontSize: "1.5rem" }}
              ></i>
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
