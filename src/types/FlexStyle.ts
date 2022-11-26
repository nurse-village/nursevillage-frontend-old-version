export type FlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

export interface FlexStyle {
  display?: "none" | "flex" | undefined;
  flexDirection?:
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | undefined;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  alignItems?: FlexAlignType | undefined;
}
