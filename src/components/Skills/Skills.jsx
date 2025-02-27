import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            {/* <h2 className="skills__subtitle">Profesional Skills</h2> */}
            {/* <p className="skills__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque
              sit.
            </p> */}

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT basic</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/java.svg" alt="" />
                <i className="skills__icon"></i>
                <span className="skills__name">JAVA basic </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/selenium.svg" alt="" />
                <i className="skills__icon"></i>
                <span className="skills__name">PUPPETEER MOCHA</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/katalon.svg" alt="" />
                <i class="skills__icon"></i>
                <span className="skills__name">KATALON STUDIO</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/katalon.svg" alt="" />
                <i class="skills__icon"></i>
                <span className="skills__name">TEST PROJECT</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/katalon.svg" alt="" />
                <i class="skills__icon"></i>
                <span className="skills__name">CUCUMBER</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/selenium.svg" alt="" />
                <i className="skills__icon"></i>
                <span className="skills__name">SELENIUM IDE</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/katalon.svg" alt="" />
                <i class="skills__icon"></i>
                <span className="skills__name">POSTMAN</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/rest-api.svg" alt="" />
                <i className="skills__icon"></i>
                <span className="skills__name">API AUTOMATION</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-git skills__icon"></i>
                <span className="skills__name">GIT</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/cypress.svg" alt="" />
                <i class="skills__icon"></i>
                <span className="skills__name">CYPRESS</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <img src="/assets/img/office_icon.svg" alt="" />
                <i class="skills__icon"></i>
                <span className="skills__name" style={{ marginTop: 5 }}>
                  MICROSOFTOFFICE
                </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-paint skills__icon"></i>
                <span className="skills__name">FIGMA</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
