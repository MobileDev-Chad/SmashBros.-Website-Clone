import React from "react";

const Header = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        <img
          src={require(`../../images/Nintendo.png`)}
          style={{ height: "3rem", width: "7.68rem" }}
          alt=""
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
        }}
      >
        <img
          src={require(`../../images/NintendoSwitchLogo.png`)}
          style={{ height: "5.2rem", width: "4.68rem" }}
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
