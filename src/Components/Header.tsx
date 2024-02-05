import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.5% 16%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  @media all and (max-width: 630px) {
    justify-content: center;
  }
`;
const Title = styled.div`
  background-color: inherit;
  color: #151030;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  &::after {
    content: " | Software Engineer";
    @media all and (min-width: 660px) and (max-width: 1280px) {
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
  &:hover {
    color: #6a6395;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Title> Muhammad Ahmed </Title>
      <SectionWrapper>
        <Section>About</Section>
        <Section>Work</Section>
        <Section>Contact</Section>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
