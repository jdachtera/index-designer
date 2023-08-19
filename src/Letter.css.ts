import { style } from "@vanilla-extract/css";

export const letter = style({
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-0.5px",
  marginBottom: "-0.5px",
  paddingTop: "0.5px",
  paddingBottom: "0.5px",
  borderBottom: "0.5px dotted black",
  borderTop: "0.5px dotted black",
});
