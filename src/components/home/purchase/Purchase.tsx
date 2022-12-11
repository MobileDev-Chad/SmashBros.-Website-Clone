import React from "react";

const Purchase = () => {
  return (
    <section className="section purchase">
      <h2>Super Smash Bros. Ultimate</h2>
      <div className="purchase-divider"></div>
      <h1 className="purchase-date">12/7/2018</h1>
      <button>Buy Now</button>
      <div className="purchase-online">
        <img src={require("../../images/online.png")} alt="" />

        <p>
          Nintendo Switch Online membership (sold separately) and Nintendo
          Account required for online play. Not available in all countries. For{" "}
          <br /> the latest list of countries, please visit Customer Support.
          Internet access required for online features. The Nintendo Account
          User
          <br />
          Agreement, including the Purchase and Subscription terms, apply.
        </p>
      </div>
      <img src={require("../../images/amiibo_logo.webp")} id="amiibo" alt="" />
    </section>
  );
};

export default Purchase;
