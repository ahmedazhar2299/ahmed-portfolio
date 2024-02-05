import React from "react";
import styled from "styled-components";
import { EDUCATION } from "../constants.tsx";

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;
const Education = styled.div`
  .education-container {
    display: flex;
    gap: 20px;
    img {
      width: 30px;
      height: 30px;
    }
    .education-description {
      font-size: 14px;
      color: rgb(100 91 147);
      font-weight: 700;
    }
    .education-addition-info {
      font-size: 13px;
      font-weight: normal;
      span {
        font-weight: 700;
      }
    }
  }
`;
const Skills = styled.div`
  .skills-list {
    font-size: 14px;
    color: rgb(100 91 147);
  }
`;

const Title = styled.h5`
  font-size: 35px;
  color: #151030;
`;

const Particulars = () => {
  return (
    <Wrapper>
      <Education>
        <Title>Education</Title>
        <div className="education-container">
          <img src={EDUCATION.UNIVERSITY_IMAGE} alt="education" />
          <div className="education-description">
            <p>National University of Computer and Emerging Sciences</p>
            <ul className="education-addition-info">
              <p>Bachelor of Science in Computer Science (2019-2023)</p>
              <li>
                CGPA <span>3.45</span>{" "}
              </li>
              <li>
                <span>Silver</span> Medalist
              </li>
              <li>
                <span>5x</span> on Dean’s List of Honors
              </li>
            </ul>
          </div>
        </div>
      </Education>
      <Skills>
        <Title>Skills</Title>
        <ul className="skills-list">
          <li>REACT JS</li>
          <li>DJANGO</li>
          <li>TYPESCRIPT</li>
          <li>NODE JS</li>
          <li>MYSQL</li>
          <li>EXASOL</li>
          <li>MONGODB</li>
          <li>AWS</li>
        </ul>
      </Skills>
      <Skills>
        <Title>Interests</Title>
        <ul className="skills-list">
          <li>Open-Source</li>
          <li>Blockchain & AI Technology</li>
          <li>Fitness</li>
          <li>Travelling</li>
          <li>E-Sports</li>
          <li>Badminton</li>
        </ul>
      </Skills>
    </Wrapper>
  );
};

export default Particulars;
