import React from "react";
import FooterList from "./FooterList";
import { tabs } from "../../data/tabs";
import Purchase from "../../home/purchase/Purchase";

const Footer = () => {
  return (
    <>
      <section>
        <div className="footer-heading">
          <div>
            <h3>Share:</h3>
            <img src={require("../../images/twitter.jpg")} alt="" />
            <img src={require("../../images/facebook.png")} alt="" />
          </div>
          <div>
            <i
              className="bi bi-caret-up-fill"
              style={{ fontSize: "3.25rem", color: "red" }}
            ></i>
          </div>
        </div>

        <footer className="footer">
          <Purchase />
          <div className="footer-top">
            {" "}
            <div className="footer-grid-container">
              {tabs.map((t) => (
                <FooterList
                  text={t.text}
                  path={t.path}
                  icon={t.icon}
                  theme={t.theme}
                />
              ))}
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-middle-left">
              <p className="copyright">&copy; 2018 Nintendo</p>
              <p className="copyright">
                Original Game &copy; Nintendo / HAL Laboratory Inc.
              </p>
              <p className="copyright">
                {" "}
                Characters: &copy; Nintendo / HAL Laboratory, Inc. / Pokémon. /
                Creatures Inc. / GAME FREAK inc. / SHIGESATO ITOI / APE inc. /
                INTELLIGENT SYSTEMS / Konami Digital Entertainment / SEGA /
              </p>
              <p className="copyright">
                {" "}
                CAPCOM CO., LTD. / BANDAI NAMCO Entertainment Inc. /
                MONOLITHSOFT / CAPCOM U.S.A., INC. / SQUARE ENIX CO., LTD. /
                ATLUS / Microsoft / SNK CORPORATION. / Mojang AB /{" "}
              </p>
              <p className="copyright"> Disney</p>

              <br />
            </div>

            <div className="footer-middle-right">
              <div>
                <img src={require("../../images/Ratings.jpg")} alt="" />
              </div>
              <div>
                <img src={require("../../images/Seal.jpg")} alt="" />
              </div>
            </div>
          </div>

          <div className="game-text">
            <p className="copyright ">
              {" "}
              Screenshots and footage depict game in development.
            </p>
            <p className="copyright ">
              {" "}
              In-game terms on this website are subject to change.
            </p>
            <p className="copyright ">
              {" "}
              Additional games, systems and/or accessories may be required for
              multiplayer mode. Games, systems, amiibo and some accessories sold
              separately.
            </p>
          </div>

          <div className="footer-bottom">
            <ul className="footer-list">
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a href="#none">Nintendo.com</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a href="#none">Privacy Policy</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a href="#none">Cookies & Internet-Based Ads</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a href="#none">Terms of Use</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a href="#none">Cookie Settings</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a href="#none">Super Smash Bros. for Nintendo 3DS / Wii U</a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
      ;
    </>
  );
};

export default Footer;
