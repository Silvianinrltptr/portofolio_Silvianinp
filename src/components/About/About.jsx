import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about section " id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="assets/img/foto.jpg" alt="" />
          </div>

          <div>
            <h2 className="about__subtitle" style={{ fontWeight: "bold" }}>
              Saya Silviani Nurlita Putri
            </h2>
            <p className="about__text">
            I am a person who is interested in the world of technology,
            interested in learning new things. I like to find solutions or solve
            problems in programs, gadgets, or life. who want to have a career in the world
            quality assurance by having a software Quality Assurance skill base
            java, cucumber, selenium, Katalon studio, api automation, etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
