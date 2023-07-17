import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontSize: "1rem",
    fontSize:
      "clamp(1rem, 0.8181818181818181rem + 0.9090909090909091vw, 1.5rem)",
  },
  body: {
    fontFamily: '"Cinzel", serif',
    lineHeight: 1.5,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "::-webkit-scrollbar": {
    width: 0,
  },
});

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    radii: {
      round: "9999px",
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    marginY: (value) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
  },
});
