import { Typography, useTextStyle } from "components/text";
import { colors } from "constants/color";
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import styled from "styled-components";
import { SizeType } from "types";
import { convertPixelValue } from "utils";
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: SizeType;
  height?: SizeType;
  borderColor?: string;
  borderRadius?: SizeType;
  textColor?: string;
  placeholderColor?: string;
  typography?: Typography;
}

export function TextArea({
  width = 400,
  height = 300,
  borderColor = colors.borderGrey,
  borderRadius = 8,
  textColor = colors.black,
  placeholderColor = colors.borderGrey,
  typography = Typography.Text_16,
  ...props
}: Props) {
  const textStyle = useTextStyle({ typography: typography, color: textColor });
  return (
    <StyledTextArea
      {...props}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      textColor={textStyle.color}
      placeholderColor={placeholderColor}
      fontFamily={textStyle.styles.fontFamily}
    />
  );
}

const StyledTextArea = styled.textarea<{
  width: SizeType;
  height: SizeType;
  borderColor: string;
  borderRadius: SizeType;
  textColor: string;
  placeholderColor: string;
  fontFamily: string;
}>`
  ${(p) => `width: ${convertPixelValue(p.width)};`}
  ${(p) => `height: ${convertPixelValue(p.height)};`}
  ${(p) => `font-family: ${p.fontFamily};`}

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 12px;

  ${(p) => `color: ${p.textColor};`}

  ${(p) => `border: 1px solid ${p.borderColor};`}
  ${(p) => `border-radius: ${convertPixelValue(p.borderRadius)};`}

  ::placeholder {
    ${(p) => `color: ${p.placeholderColor};`}/* font-size: 0.8rem; */
  }

  :focus {
    outline: none !important;
    border-color: ${colors.green};
    box-shadow: 0 0 10px ${colors.green};
  }
`;
