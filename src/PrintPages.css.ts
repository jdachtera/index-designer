import { style } from "@vanilla-extract/css";

export const page = style({
  pageBreakInside: "avoid",
  position: "relative",
  border: "0.5px dotted black",
  margin: "20px",
  display: "none",
  "@media": {
    print: {
      display: "block",
    },
  },
});
