import styled from "styled-components";
import { Flex } from "components/layout";
import { Text, Typography } from "components/text";
import { colors } from "constants/color";
import { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { SizeType } from "types/SizeType";
import { convertPixelValue } from "utils";
import { useTextStyle, TextStyleType } from "../text/useTextStyle";

type ButtonType = "green" | "gray";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: SizeType;
  height?: SizeType;
  borderRadius?: SizeType;
  buttonType?: ButtonType;
  disabled?: boolean;
}

export function Button({
  width = 111,
  height = 42,
  borderRadius = 10,
  buttonType = "green",
  disabled = false,
  children,
  ...props
}: Props) {
  const {
    textColor,
    textHoverColor,
    backgroundColor,
    backgroundHoverColor,
    borderColor,
    borderHoverColor,
    disabledColor,
  } = STYLE_BY_TYPE[buttonType];

  const textStyle = useTextStyle({
    typography: Typography.Text_16,
    color: textColor,
    center: true,
  });

  return (
    <StyledButton
      {...props}
      width={width}
      height={height}
      borderRadius={borderRadius}
      textStyle={textStyle}
      textHoverColor={textHoverColor}
      backgroundColor={disabled ? disabledColor : backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      borderColor={disabled ? disabledColor : borderColor}
      borderHoverColor={borderHoverColor}
      onClick={disabled ? undefined : props.onClick}
    >
      {children}
    </StyledButton>
  );
}

const STYLE_BY_TYPE = {
  green: {
    textColor: colors.green,
    textHoverColor: colors.white,
    backgroundColor: colors.slightGrey,
    backgroundHoverColor: colors.green,
    borderColor: colors.slightGrey,
    borderHoverColor: colors.green,
    disabledColor: colors.slightGrey,
  },
  gray: {
    textColor: colors.black,
    textHoverColor: colors.white,
    backgroundColor: colors.white,
    backgroundHoverColor: colors.green,
    borderColor: colors.black,
    borderHoverColor: colors.green,
    disabledColor: colors.justGrey,
  },
};

const StyledButton = styled.button<{
  width: SizeType;
  height: SizeType;
  borderRadius: SizeType;
  textStyle: TextStyleType;
  textHoverColor: string;
  backgroundColor: string;
  backgroundHoverColor: string;
  borderColor: string;
  borderHoverColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(p) => `width: ${convertPixelValue(p.width)};`}
  ${(p) => `height: ${convertPixelValue(p.height)};`}
  ${(p) => `border-radius: ${convertPixelValue(p.borderRadius)};`}

  ${(p) => `background-color: ${p.backgroundColor};`}
  ${(p) => `border: solid 2px ${p.borderColor};`}

  ${(p) => `color: ${p.textStyle.color};`}
  ${(p) => `font-family: ${p.textStyle.styles.fontFamily};`}
  ${(p) => `font-size: ${p.textStyle.styles.fontSize};`}
  ${(p) => `font-weight: ${p.textStyle.styles.fontWeight};`}
  ${(p) => `line-height: ${p.textStyle.styles.lineHeight};`}

  :hover {
    ${(p) => `color: ${p.textHoverColor};`}
    ${(p) => `background-color: ${p.backgroundHoverColor};`}
    ${(p) => `border-color: ${p.borderHoverColor};`}
  }
`;
