import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import { SizeType } from "types/SizeType";
import { convertPixelValue } from "utils/convertPixelValue";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: SizeType;
  height?: SizeType;
  rotate?: number;
  hover?: boolean;
  onClick?: () => void;
  style?: any;
}

export function Img({
  src,
  width = 50,
  height = 30,
  hover = true,
  onClick = () => {},
  style,
}: Props) {
  return (
    <>
      <StyledImage
        src={src}
        alt=""
        width={width}
        height={height}
        hover={hover}
        onClick={onClick}
        style={style}
      />
    </>
  );
}

const StyledImage = styled.img<{
  width?: SizeType;
  height?: SizeType;
  hover?: boolean;
  rotate?: 0;
}>`
  ${(props) => `width: ${convertPixelValue(props.width)};`}
  ${(props) => `height: ${convertPixelValue(props.height)};`}
  ${(props) => props.hover && `cursor: pointer;`}
  ${(props) => `transform: rotate(${props.rotate}turn);`}
  &&& {
    object-fit: contain;
  }
`;
