import { styled } from "../../styles/stitches.config";

const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

export default Section;

const StyledSection = styled("section", {
  padding: "50px 20px 0 20px",
  marginX: "auto",
  maxWidth: "840px",
  "&:last-child": {
    paddingBottom: "70px",
  },
});
