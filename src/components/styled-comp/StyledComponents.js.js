import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
import Wrapper from "./wrapper/Wrapper";
import Link from "./link/Link";
import ExtendedComp from "./extended-link/ExtendedComp";

const StyledComponents = () => {
  return (
    <Wrapper bgColor="yellow">
      <HeaderText>Clarusway</HeaderText>
      <HeaderText headerColor="red">Styled Components</HeaderText>
      <Link
        target="_blank"
        rel="noopener"
        href="https://www.google.com/"
        secondary
      >
        {" "}
        Learn FS Development
      </Link>
      <ExtendedComp secondary>Extended Link</ExtendedComp>
      <Button primary>Primary</Button>
      <Button>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
