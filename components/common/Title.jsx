import { styled } from "../../styles/stitches.config";

const Title = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled("h1", {
  color: "white",
  fontSize: "2rem",
  fontWeight: "500",
  marginTop: "30px",
});
