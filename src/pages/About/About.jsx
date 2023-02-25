import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h3>This is an anime to watch list</h3>
      <p>It utilises the Jikan API to retrieve data, and mongoDB</p>
      <p>made by leoni!</p>
      <a href="https://github.com/lktay/second-fullstack-frontend">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default About;
