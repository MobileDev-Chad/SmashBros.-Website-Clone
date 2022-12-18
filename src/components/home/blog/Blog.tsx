import React from "react";

const Blog = () => {
  return (
    <div className="section blog">
      <div className="section-blog-wrapper">
        <div className="blog-left">
          <h1>
            SUPER
            <br />
            SMASH
            <br />
            BLOG
            <br />
          </h1>
          <div className="divider"></div>
          <p>You can see updates on:</p>
          <div className="social-links">
            <div className="row">
              <img src={require("../../images/twitter.jpg")} alt="" />

              <p>
                Official Twitter Account{" "}
                <i className="bi bi-arrow-right-short me-1"></i>
              </p>
            </div>
          </div>
        </div>
            <div className="blog-right">
                right
            </div>
      </div>
    </div>
  );
};

export default Blog;
