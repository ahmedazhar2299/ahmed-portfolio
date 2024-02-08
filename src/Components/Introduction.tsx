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
    @media all and (max-width: 630px) {
      width: 180px;
      height: 180px;
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
          Hello there! I'm Ahmed, a dynamic software developer with a passion
          for embracing the latest advancements in technology. With a strong
          foundation in React, Django, TypeScript, and Node.js, I am adept at
          crafting innovative solutions to complex problems. My journey through
          diverse projects has honed my skills in building robust web
          applications and leveraging emerging technologies like blockchain and
          AI. I thrive in collaborative environments where I can contribute to
          team success. With a commitment to excellence and a drive to stay at
          the forefront of technological evolution, I am eager to tackle new
          challenges and make a lasting impact in the ever-evolving world of
          software development.
        </Description>
      </Profile>
    </Wrapper>
  );
};

export default Introduction;
