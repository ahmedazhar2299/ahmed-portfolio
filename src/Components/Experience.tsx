import React from "react";
import styled from "styled-components";
import Heading from "../Common/Heading.tsx";
import { EXPERIENCE_DATA } from "../constants.tsx";

interface CompanyInterface {
  designation: string;
  company_name: string;
  logo: string;
  description: string[];
  duration: string;
}

interface TimelineInterface {
  reverse: boolean;
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const TimelineWrapper = styled.div`
  margin: 10px 0;
  position: relative;
  padding: 20px;
`;

const Splitter = styled.div`
  position: absolute;
  background-color: #59518b;
  width: 4px;
  height: 110%;
  top: 0;
  left: 50%;
  z-index: 1;
  @media all and (max-width: 1280px) {
    left: 0;
  }
`;
const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  left: -27px;
  top: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 5px;
    background-color: #fff;
  }
`;

const Timeline = styled.div<TimelineInterface>`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  @media all and (max-width: 1280px) {
    flex-direction: row;
  }
`;
const TimelineCard = styled.div`
  min-width: 45%;
  @media all and (max-width: 1280px) {
    min-width: 100%;
    margin-left: 30px;
  }
  * {
    background-color: #ffeccf;
    border-radius: 10px;
  }
  .card-detail {
    padding: 20px 30px;
  }
  .card-designation {
    font-size: 20px;
    font-weight: 700;
    color: rgb(89 81 139);
  }
  .card-company {
    font-size: 1rem;
    font-weight: 700;
    color: rgb(89 81 139);
    opacity: 0.75;
  }
  .card-list {
    letter-spacing: 0.05em;
    font-size: 14px;
    opacity: 0.75px;
    color: rgb(170 166 195);
    padding-left: 20px;
  }
  .card-detail-duration {
    font-size: 13px;
    color: rgb(89 81 139);
    font-weight: 600;
    @media all and (min-width: 1280px) {
      display: none;
    }
  }
`;
const Duration = styled.div<TimelineInterface>`
  min-width: 45%;
  padding-top: 17px;
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  @media all and (max-width: 1280px) {
    display: none;
  }
`;

const Experience = () => {
  return (
    <Wrapper>
      <Heading
        style={{
          textAlign: "center",
        }}
        title="Experience"
        color="#151030"
      />
      {EXPERIENCE_DATA.map((company: CompanyInterface, index: number) => (
        <TimelineWrapper>
          <Splitter>
            <CompanyLogo>
              <img src={company.logo} alt="" />
            </CompanyLogo>
          </Splitter>
          <Timeline reverse={index % 2 === 1}>
            <TimelineCard>
              <div className="card-detail">
                <h5 className="card-designation">{company.designation}</h5>
                <h6 className="card-company">{company.company_name}</h6>
                <ul className="card-list">
                  {company.description.map((desc: string) => (
                    <li>{desc}</li>
                  ))}
                </ul>
                <span className="card-detail-duration">{company.duration}</span>
              </div>
            </TimelineCard>
            <Duration reverse={index % 2 === 1}>{company.duration}</Duration>
          </Timeline>
        </TimelineWrapper>
      ))}
    </Wrapper>
  );
};

export default Experience;
