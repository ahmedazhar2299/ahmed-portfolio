import React from "react";
import styled from "styled-components";
import Animate from "./Animate.tsx";

interface WrapperProps {
  color?: string;
}

interface HeadingProps extends WrapperProps {
  title: string;
  style?: object;
}

const Wrapper = styled.h2<WrapperProps>`
  font-size: 60px;
  color: ${(props) => props.color || "#fff"};
  @media all and (max-width: 1280px) {
    text-align: center;
    font-size: 50px;
  }
  @media all and (max-width: 630px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Heading = (props: HeadingProps) => {
  const { title, color, style } = props;
  return (
    <Animate
      type="bottom"
      children={
        <Wrapper style={style} color={color}>
          {title}
        </Wrapper>
      }
    />
  );
};

export default Heading;
