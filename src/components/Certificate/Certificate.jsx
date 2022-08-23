import { Card, Image } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div>
      <section className="certificate section" id="certificate">
        <h2 className="section-title">Certificate</h2>

        <div className="certificate__container bd-grid">
          
          {/* <Card
            hoverable
            className="certificate__img"
            style={{ width: 300 }}
            cover={
              <Image
                width={300}
                height={200}
                style={{
                  objectFit: "contain",
                  padding: 8,
                }}
                src="/assets/certificate/codinginterview.jpg"
              />
            }
          >
            <Meta title="Mastering Coding Interview" description={false} />
          </Card>
          <Card
            hoverable
            className="certificate__img"
            style={{ width: 300 }}
            cover={
              <Image
                width={300}
                height={200}
                style={{
                  objectFit: "contain",
                  padding: 8,
                }}
                src="/assets/certificate/mysqldesign.jpg"
              />
            }
          >
            <Meta title="MYSQL & Database Design" description={false} />
          </Card>
          <Card
            hoverable
            className="certificate__img"
            style={{ width: 300 }}
            cover={
              <Image
                width={300}
                height={200}
                style={{
                  objectFit: "contain",
                  padding: 8,
                }}
                src="/assets/certificate/golangnuxtjs.jpg"
              />
            }
          >
            <Meta title="Full-Stack Golang & Vue JS" description={false} />
          </Card> */}
          <Card
            hoverable
            className="certificate__img"
            style={{ width: 310 }}
            cover={
              <Image
                width={310}
                height={200}
                style={{
                  objectFit: "contain",
                  padding: 8,
                }}
                src="/assets/certificate/Silviani Nurlita Putri qa.png"
              />
            }
          >
            <Meta
              title=" Full Stack Quality Assurance Automation Testing"
              description={false}
            />
          </Card>

          <Card
            hoverable
            className="certificate__img"
            style={{ width: 310 }}
            cover={
              <Image
                width={310}
                height={200}
                style={{
                  objectFit: "contain",
                  padding: 8,
                }}
                src="/assets/certificate/Silviani Nurlita Putri.png"
              />
            }
          >
            <Meta
              title=" Transcript Full Stack Quality Assurance Automation Testing"
              description={false}
            />
          </Card>

          <Card
            hoverable
            className="certificate__img"
            style={{ width: 310 }}
            cover={
              <Image
                width={310}
                height={200}
                style={{
                  objectFit: "contain",
                  padding: 8,
                }}
                src="/assets/certificate/cypress.png"
              />
            }
          >
            <Meta
              title={"Quality Assurance Engineer Testing with cypress"}
              description={false}
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
