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
              fresh graduate who wants a career in technology and wants to jump
              into the world of Quality Assurance has bootcamp experience/Full
              stack Quality Assurance Automation Testing training and has worked
              as a Quality Assurance Engineer for 1 year
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
