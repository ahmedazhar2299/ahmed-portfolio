import React from "react";
import styled from "styled-components";

interface WrapperProps {
  color?: string;
}

interface HeadingProps extends WrapperProps {
  title: string;
}

const Wrapper = styled.h2<WrapperProps>`
  font-size: 60px;
  color: ${(props) => props.color || "#fff"};
  @media all and (max-width: 1280px) {
    text-align: center;
    font-size: 50px;
  }
`;

const Heading = (props: HeadingProps) => {
  const { title, color } = props;
  return <Wrapper color={color}>{title}</Wrapper>;
};

export default Heading;
