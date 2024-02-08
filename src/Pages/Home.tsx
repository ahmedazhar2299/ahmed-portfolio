import React from "react";
import Header from "../Components/Header.tsx";
import Introduction from "../Components/Introduction.tsx";
import styled from "styled-components";
import Interest from "../Components/Particulars.tsx";
import Experience from "../Components/Experience.tsx";
import Projects from "../Components/Projects.tsx";

const Container = styled.div`
  padding: 70px 17%;
  @media all and (max-width: 630px) {
    padding-top: 50px;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container id="introduction">
        <Introduction />
        <Interest />
        <Experience />
        <Projects />
      </Container>
    </>
  );
};

export default Home;
