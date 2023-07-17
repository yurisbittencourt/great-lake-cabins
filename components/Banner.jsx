import { styled } from "../styles/stitches.config";

export default function Banner({ children, ...props }) {
  return <Section {...props}>{children}</Section>;
}

Banner.Image = function BannerImage({ children, ...props }) {
  return <ImageWrapper {...props}>{children}</ImageWrapper>;
};

Banner.Gradient = function BannerGradient({ ...props }) {
  return <GradientOverlay {...props} />;
};

Banner.Text = function BannerText({ children, ...props }) {
  return <TextBox {...props}>{children}</TextBox>;
};

const Section = styled("section", {
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  width: "100%",
  height: "400px",
  variants: {
    hero: {
      true: {
        height: "100vh",
      },
    },
  },
});

const ImageWrapper = styled("div", {
  gridArea: "1/1",
  width: "100%",
  height: "100%",
  "& span": {
    height: "400px !important",
  },
  variants: {
    hero: {
      true: {
        "& span": {
          height: "100vh !important",
        },
      },
    },
  },
});

const GradientOverlay = styled("div", {
  gridArea: "1/1",
  width: "100%",
  height: "100%",
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%)",
  zIndex: "1",
});

const TextBox = styled("div", {
  gridArea: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  zIndex: "2",
});
