import { useState } from "react";
import { styled } from "../styles/stitches.config";
import Link from "next/link";
import { Image } from "./";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav open={open}>
      <Link href="/" passHref aria-label="home">
        <Logo onClick={() => setOpen(false)}>
          <Image
            src="GreatLakeCabinsLogo.png"
            alt="company logo"
            width="137"
            height="60"
          />
        </Logo>
      </Link>

      <List open={open}>
        <Item>
          <Link href="/Cabins" passHref aria-label="cabins">
            <A onClick={() => setOpen(false)}>Cabins</A>
          </Link>
        </Item>
        <Item>
          <Link href="/Campsite" passHref aria-label="campsite">
            <A onClick={() => setOpen(false)}>Campsite</A>
          </Link>
        </Item>
        <Item>
          <Link href="/About" passHref aria-label="about">
            <A onClick={() => setOpen(false)}>About Us</A>
          </Link>
        </Item>
      </List>

      <Menu
        onClick={() => setOpen((open) => !open)}
        open={open}
        aria-label="menu"
      >
        <Burger />
      </Menu>
    </Nav>
  );
};
export default Navbar;

const Nav = styled("nav", {
  position: "absolute",
  display: "flex",
  width: "100%",
  height: "80px",
  background:
    "linear-gradient(rgba(222, 222, 222, 1) 0%, rgba(222, 222, 222, 0.7) 70%, transparent 100%)",
  zIndex: "9",
  transition: "all .5s ease-out",
  "&[open]": {
    height: "100vh",
    background: "rgba(222, 222, 222)",
  },
});

const Logo = styled("a", {
  height: "60px",
  margin: "10px 10px",
  cursor: "pointer",
});

const List = styled("ul", {
  all: "unset",
  display: "none",
  "&[open]": {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    left: "0",
    top: "80px",
    width: "100%",
    height: "80%",
  },
  "@md": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "800px",
    width: "100%",
    height: "100%",
    marginLeft: "auto",
  },
});

const Menu = styled("button", {
  all: "unset",
  background: "transparent",
  padding: "0",
  margin: "10px 10px 10px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  cursor: "pointer",
  transition: "all .5s ease-in-out",
  "@md": {
    display: "none",
  },
  "&[open]": {
    "& div": {
      transform: "translateX(-50px)",
      background: "transparent",
      "&::before": {
        transform: "rotate(45deg) translate(35px, -35px)",
      },
      "&::after": {
        transform: "rotate(-45deg) translate(35px, 35px)",
      },
    },
  },
});

const Item = styled("li", {
  all: "unset",
  width: "100%",
  height: "80px",
  "@md": {
    height: "100%",
  },
});

const A = styled("a", {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  fontSize: "1.5rem",
  fontWeight: "500",
  "&:hover": {
    "@md": {
      fontWeight: "600",
    },
  },
});

const Burger = styled("div", {
  width: "50px",
  height: "4px",
  background: "black",
  borderRadius: "5px",
  transition: "all .5s ease-in-out",
  "&::before": {
    content: `''`,
    position: "absolute",
    width: "50px",
    height: "4px",
    background: "black",
    borderRadius: "5px",
    transition: "all .5s ease-in-out",
    transform: "translateY(-16px)",
  },
  "&::after": {
    content: `''`,
    position: "absolute",
    width: "50px",
    height: "4px",
    background: "black",
    borderRadius: "5px",
    transition: "all .5s ease-in-out",
    transform: "translateY(16px)",
  },
});
