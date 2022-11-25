import { colors } from "constants/color";
import { ComponentProps, HTMLAttributes, useMemo } from "react";

export const DEFAULT_TEXT_WEIGHT = "regular";
export const DEFAULT_TEXT_COLOR = colors.black;

export enum Typography {
  Title_light = "Title/light",
  Title_bold = "Title/bold",
  Text_24 = "Text/24",
  Text_20 = "Text/20",
  Text_16 = "Text/16",
  Text_14 = "Text/14",
  Text_12 = "Text/12",
  Sub_14 = "Sub/14",
  Bold_14 = "Bold/14",
}

export interface TextStyleProps {
  typography?: Typography;
  color?: string;
  center?: boolean;
}

const STYLE_BY_TYPOGRAPHY: Record<Typography, TextStyle> = {
  [Typography.Title_light]: {
    fontFamily: "Pretendard-Medium",
    fontWeight: "500",
    fontSize: 40,
    lineHeight: 46,
  },
  [Typography.Title_bold]: {
    fontFamily: "Pretendard-Bold",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 46,
  },
  [Typography.Text_24]: {
    fontFamily: "Pretendard-Medium",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 27.6,
  },
  [Typography.Text_20]: {
    fontFamily: "Pretendard-Medium",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 23,
  },
  [Typography.Text_16]: {
    fontFamily: "Pretendard-Medium",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 18.4,
  },
  [Typography.Text_14]: {
    fontFamily: "Pretendard-Medium",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16.1,
  },
  [Typography.Text_12]: {
    fontFamily: "Pretendard-Medium",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 13.8,
  },
  [Typography.Sub_14]: {
    fontFamily: "Pretendard-Light",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 16.1,
  },
  [Typography.Bold_14]: {
    fontFamily: "Pretendard-Bold",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 16.1,
  },
};

export function useTextStyle(
  props: TextStyleProps
): ComponentProps<HTMLAttributes<HTMLSpanElement>> {
  return useMemo(() => {
    const styles = STYLE_BY_TYPOGRAPHY[props.typography];
    const color = props.color ?? DEFAULT_TEXT_COLOR;
    const textAlign = props.center ? "center" : undefined;
    return {
      ...styles,
      color,
      textAlign,
    };
  }, [props.color, props.center, props.typography]);
}
