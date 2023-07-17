import { styled } from "../../styles/stitches.config";
import Link from "next/link";

const ButtonLink = ({ children, href, external, ...props }, ref) => {
  const component = external ? (
    <A href={href} target="_blank" {...props}>
      {children}
    </A>
  ) : (
    <Link href={href} passHref>
      <A {...props}>{children}</A>
    </Link>
  );
  return component;
};

export default ButtonLink;

const A = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "360px",
  marginX: "auto",
  border: "none",
  borderRadius: "5px",
  background: "#444",
  color: "white",
  padding: "10px",
  cursor: "pointer",
  fontFamily: '"Cinzel", serif',
  marginTop: "20px",
  "&:hover": {
    background: "#555",
  },
});
