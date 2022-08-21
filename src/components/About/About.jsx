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
            an IT freshgraduates who are interested and want to learn about testing 
            applications or websites. skilled as Manual API and automationfor 
            web and mobile have experience as developer with basic javascript language.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
