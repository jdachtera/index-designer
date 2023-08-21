import { style } from "@vanilla-extract/css";

export const container = style({});

export const previewWrapper = style({
  display: "flex",
  margin: "16px",
  height: "calc(100vh - 32px)",
  overflow: "hidden",

  "@media": {
    print: {
      display: "none",
    },
  },
});
