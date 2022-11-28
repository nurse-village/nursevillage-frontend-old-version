/* eslint-disable react/display-name */
import { FlexStyle } from "types/FlexStyle";
import { ReactNode } from "react";
import styled from "styled-components";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction?: FlexStyle["flexDirection"];
  align?: FlexStyle["alignItems"];
  justify?: FlexStyle["justifyContent"];
  children: ReactNode;
}

export function Flex({ direction, align, justify, children, ...props }: Props) {
  return (
    <StyledFlex {...props} style={props.style}>
      {children}
    </StyledFlex>
  );
}

const StyledFlex = styled.div<Partial<Props>>`
  display: "flex";
  ${(p) => `direction: ${p.direction};`}
  ${(p) => `align: ${p.align};`}
  ${(p) => `justify: ${p.justify};`}
`;

Flex.Center = (props: Props) => (
  <Flex align="center" justify="center" {...props}>
    {props.children}
  </Flex>
);

Flex.CenterVertical = (props: Props) => (
  <Flex align="center" {...props}>
    {props.children}
  </Flex>
);

Flex.CenterHorizontal = (props: Props) => (
  <Flex justify="center" {...props}>
    {props.children}
  </Flex>
);
