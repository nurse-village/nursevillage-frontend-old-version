import { HTMLAttributes, ReactNode, useMemo } from "react";
import { TextStyleProps, Typography, useTextStyle } from "./useTextStyle";
import styled from "styled-components";
import { colors } from "constants/color";

export interface TextProps extends TextStyleProps {
  maxLength?: number;
  style?: HTMLAttributes<HTMLSpanElement>;
  children: ReactNode;
}

export function Text({
  typography = Typography.Text_20,
  color = colors.green,
  center,
  maxLength,
  ...props
}: TextProps) {
  const textStyle = useTextStyle({ typography, color, center });
  const children = useMemo(() => {
    if (
      typeof props.children !== "string" ||
      !maxLength ||
      props.children.length < maxLength
    ) {
      return props.children;
    }
    return `${props.children.substring(0, maxLength)}...`;
  }, [props.children, maxLength]);

  return (
    <span {...props} style={textStyle}>
      {children}
    </span>
  );
}
