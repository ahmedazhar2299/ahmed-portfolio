import React from "react";
import Header from "../Components/Header.tsx";
import Introduction from "../Components/Introduction.tsx";
import styled from "styled-components";
import Interest from "../Components/Particulars.tsx";
import Experience from "../Components/Experience.tsx";

const Container = styled.div`
  padding: 5% 17%;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Introduction />
        <Interest />
        <Experience />
      </Container>
    </>
  );
};

export default Home;
