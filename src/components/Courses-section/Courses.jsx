import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 3.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design,Figma",
    lesson: 12,
    students: 12.5,
    rating: 4.1,
    imgUrl: "data:image/jpeg;base64,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",
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 4.3,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
