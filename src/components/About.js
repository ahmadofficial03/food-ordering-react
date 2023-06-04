import React from "react";
import { useState } from "react";
import { aboutData } from "../Data";

function About() {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="about">
      {aboutData.map((data, index) => {
        const title = data.headingTitle;
        const info = data.aboutInfo;
        const imageUrl = data.imageUrl;

        return (
          <div className="about-container" key={index}>
            <div className="content">
              <h3 className="section-heading">{title}</h3>
              <p className="about-info">
                {readMore ? info : `${info.substring(0, 300)}...`}
              </p>
              <button
                className="read-more"
                onClick={() => setReadMore(!readMore)}>
                {readMore ? "Showless" : "ReadMore"}
              </button>
            </div>
            <img src={imageUrl} alt="About our Information" />
          </div>
        );
      })}
    </section>
  );
}

export default About;
