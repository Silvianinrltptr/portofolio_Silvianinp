import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <section className="work section" id="work">
        <h2 className="section-title">Experience</h2>

        <div className="work__container bd-grid">
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/telkom.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="Proker Telkom"
              description={
                <>
                  <p>
                    The Internship Program at STO Telkom Witel Gambir makes a ui/ux Website
                    Telkom project management sto gambir arnet using figma
                    to create a website using react.js and express.js.
                  </p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/yopmail.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="yopmail.com"
              description={
                <>
                  <p>
                  Bootcamp in <b>jakartalas</b> Created test automation on login using Selenium on Yop Mail website and added
                  scenario when enter test automation as email then click arrow button,
                  Use iframe switch to get inbox content, after that Syso content from inbox.
                  </p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/soucedemo.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                  height: "150px",
                }}
              />
            }
          >
            <Meta
              title="saucedemo.com"
              description={
                <>
                  <p>
                  Bootcamp in <b>jakartalas</b> Open website saucedemo.com and build automation until
                  finish with method POM or method page factory
                  </p>
                  <a
                    href="https://online.pasarmusibaru.co.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/statingengineer.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="statingengineer"
              description={
                <>
                  <p> Bootcamp in <b>jakartalas</b> Create automation using rest assured and selenium in API engineer.ai, 
                    where the scenario is when at https://api-production-builder.engineer.ai/users 
                    User faker to create a dummy email, dummy name, and dummy phone number, Assert to get 200OK.</p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/BWA.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <Meta
              title="React-Gallery with Cypress"
              description={
                <>
                  <p>online resource at Build with Angga Make a QA Engineer with cypress</p>
                </>
              }
            />
          </Card>
          <Card
            hoverable
            className="work__img"
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="assets/projek/BWA.png"
                style={{
                  width: "300px",
                  objectFit: "contain",
                  height: "150px",
                }}
              />
            }
          >
            <Meta
              title="PT Rindang Pari Cahaya Buana"
              description={
                <>
                  <p>
                    Membuat Company Profile PT Rindang Pari Cahaya Buana Next.js
                  </p>
                  <a
                    href="https://rindangparicb.co.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat lebih lanjut
                  </a>
                </>
              }
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Experience;
