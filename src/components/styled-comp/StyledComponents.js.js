import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  return (
    <Wrapper bgColor="yellow">
      <HeaderText>Clarusway</HeaderText>
      <HeaderText headerColor="red">Styled Components</HeaderText>
      <Button primary>Primary</Button>
      <Button>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
