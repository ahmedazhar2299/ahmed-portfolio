import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { PROFILE } from "../constants.tsx";
import Heading from "../Common/Heading.tsx";

const Wrapper = styled.div``;
const Profile = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media all and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;
const Image = styled.div`
  .profile-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    @media all and (max-width: 1280px) {
      width: 250px;
      height: 250px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Description = styled.div`
  text-align: justify;
  color: rgb(100 91 147);
  font-size: 17px;
`;

const Introduction = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Wrapper>
      <Heading title="Introduction" color="#151030" />
      <Profile>
        <Image>
          <Tilt options={defaultOptions} className="profile-img">
            <img src={PROFILE.IMAGE} alt="profile" />
          </Tilt>
        </Image>

        <Description>
          A Front-End Engineer with ten years’ experience of working on
          designing, developing, and engineering enterprise applications
          Typescript, ES 6+, React, Next.js, Node.js, PostgreSQL in Fin- Tech
          and Banking industries. Familiar with C#, .NET, Python, Java and
          MongoDB
        </Description>
      </Profile>
    </Wrapper>
  );
};

export default Introduction;
