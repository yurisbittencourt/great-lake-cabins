import { styled } from "../../styles/stitches.config";

const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default Heading;

const StyledHeading = styled("h2", {
  fontSize: "1.5rem",
  marginBottom: "10px",
});
