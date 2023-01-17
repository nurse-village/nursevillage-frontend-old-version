import { Img } from "components/img";
import { Flex } from "components/layout";
import { colors } from "constants/color";
import { InputHTMLAttributes, useMemo, HTMLAttributes } from "react";
import styled from "styled-components";
import { SizeType } from "types/SizeType";
import { convertPixelValue } from "utils/convertPixelValue";

type CheckType = "square" | "circle";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: CheckType;
  checked?: boolean;
  width?: SizeType;
  height?: SizeType;
  borderRadius?: SizeType;
  backgroundColor?: string;
}

export function CheckBox({
  type = "circle",
  checked = false,
  ...props
}: Props) {
  const style = useMemo(() => {
    switch (type) {
      case "circle":
        return {
          backgroundColor: checked ? colors.black : colors.white,
          borderRadius: 24,
        };
      case "square":
        return {
          backgroundColor: checked ? colors.black : colors.white,
          borderRadius: 6,
        };
    }
  }, [checked, type]);
  return (
    <StyledCheckBox {...props} checked={checked} style={style}>
      {checked ? (
        <Img src={`/assets/icons/ic_check_green.png`} width={24} height={24} />
      ) : (
        <Img src={`/assets/icons/ic_check_grey.png`} width={24} height={24} />
      )}
    </StyledCheckBox>
  );
}

const StyledCheckBox = styled(Flex.Center)<{
  checked: boolean;
  borderRadius: SizeType;
  backgroundColor: string;
}>`
  width: 50px;
  height: 50px;
  ${(p) => `border: 5px solid ${p.checked ? colors.green : colors.lightGrey};`}
  transition: all 0.3s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) => `border-radius: ${convertPixelValue(p.borderRadius)};`}
  ${(p) => `background-color: ${p.backgroundColor};`}
  cursor: pointer;

  :hover {
  }
`;
