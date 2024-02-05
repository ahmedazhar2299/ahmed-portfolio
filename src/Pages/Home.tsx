import React from "react";
import Header from "../Components/Header.tsx";
import Introduction from "../Components/Introduction.tsx";
import styled from "styled-components";
import Interest from "../Components/Particulars.tsx";

const Container = styled.div`
  padding: 0 17%;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Introduction />
        <Interest />
      </Container>
    </>
  );
};

export default Home;
