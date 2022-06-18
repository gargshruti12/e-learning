import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src="data:image/jpeg;base64,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" alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>Our company will provide you with new and innovative ways of learning the difficult concepts</p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={10} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={80} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
