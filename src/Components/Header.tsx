import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ScrollProps {
  isScroll: boolean;
}

const Wrapper = styled.div<ScrollProps>`
  padding: 1.5% 16%;
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  background-color: ${(props) => (props.isScroll ? "#151030" : "initial")};
  @media all and (max-width: 630px) {
    justify-content: center;
  }
  &:scroll {
  }
`;
const Title = styled.div<ScrollProps>`
  background-color: inherit;
  color: ${(props) => (props.isScroll ? "#fff" : "#151030")};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  &::after {
    content: " | Software Engineer";
    @media all and (min-width: 630px) and (max-width: 1280px) {
      content: "";
    }
  }
`;

const SectionWrapper = styled.div`
  background-color: inherit;
  display: flex;
  gap: 40px;
  @media all and (max-width: 1280px) {
    gap: 20px;
  }
  @media all and (max-width: 630px) {
    display: none;
  }
`;

const Section = styled.a`
  background-color: inherit;
  --tw-text-opacity: 1;
  color: rgb(170 166 195 / var(--tw-text-opacity));
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #6a6395;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Wrapper isScroll={isScroll}>
      <Title isScroll={isScroll}> Muhammad Ahmed </Title>
      <SectionWrapper>
        <Section href="#introduction">About</Section>
        <Section href="#experience">Work</Section>
        <Section href="#contact">Contact</Section>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
