import { styled } from "../../styles/stitches.config";

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;

const StyledText = styled("p", {
  fontFamily: '"Roboto", sans-serif',
  fontSize: "1rem",
  variants: {
    banner: {
      true: {
        fontFamily: '"Cinzel", serif',
        fontSize: "1.2rem",
        color: "white",
        fontWeight: "500",
        marginTop: "30px",
      },
    },
  },
});
