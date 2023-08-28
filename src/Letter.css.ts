import { style } from "@vanilla-extract/css";

export const letter = style({
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "0.5px dotted black",
  selectors: {
    "&:first-child": {
      borderTop: "0.5px dotted black",
    },
  },
});
