import { style } from "@vanilla-extract/css";

export const page = style({
  pageBreakAfter: "always",
  position: "relative",
  border: "0.5px dotted black",
  margin: "-0.5px",
  padding: "0.5px",
  display: "none",
  "@media": {
    print: {
      display: "block",
    },
  },
});
