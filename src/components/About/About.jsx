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
            I am a fresh graduate who is interested in the world of technology, 
            interested in learning new things. I like to find solutions or solve 
            problems in programs, gadgets, or life. who want a career in the world of 
            quality assurance by having Software Quality Assurance skills basic 
            java, selenium, testNg, api automation, etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
