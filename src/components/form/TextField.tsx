import { Typography, useTextStyle } from "components/text";
import { colors } from "constants/color";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SizeType } from "types";
import { convertPixelValue } from "utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  typography?: Typography;
  width?: SizeType;
  height?: SizeType;
  borderColor?: string;
  borderRadius?: SizeType;
  textColor?: string;
  placeholderColor?: string;
}

export function TextField({
  typography = Typography.Text_16,
  width = 520,
  height = 48,
  borderColor = colors.borderGrey,
  textColor = colors.black,
  placeholderColor = colors.borderGrey,
  ...props
}: Props) {
  const textStyle = useTextStyle({ typography: typography, color: textColor });
  return (
    <StyledTextField
      {...props}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={8}
      textColor={textStyle.color}
      placeholderColor={placeholderColor}
    />
  );
}

const StyledTextField = styled.input<{
  width: SizeType;
  height: SizeType;
  borderColor: string;
  borderRadius: SizeType;
  textColor: string;
  placeholderColor: string;
}>`
  ${(p) => `width: ${convertPixelValue(p.width)};`}
  ${(p) => `height: ${convertPixelValue(p.height)};`}
  
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
