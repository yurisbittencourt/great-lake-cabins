import { styled } from "../styles/stitches.config";
import { Text, Image } from "./";
import Link from "next/link";
import { FaInstagram, FaAirbnb, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Link href="/" passHref aria-label="home">
          <A>
            <Image
              src="GreatLakeCabinsLogo.png"
              alt="Great Lake Cabins Logo"
              width="137"
              height="60"
            />
          </A>
        </Link>
        <Group>
          <A
            href="https://www.airbnb.ca/users/show/410907778"
            target="_blank"
            aria-label="airbnb"
          >
            <AirbnbIcon />
          </A>
          <A
            href="https://www.instagram.com/greatlakecabins/"
            target="_blank"
            aria-label="instagram"
          >
            <InstagramIcon />
          </A>
          <A
            href="https://www.facebook.com/greatlakecabins/"
            target="_blank"
            aria-label="facebook"
          >
            <FacebookIcon />
          </A>
        </Group>
      </Row>
      <Group>
        <Text>10372 Trans-Canada Hwy #17, Batchawa Onatrio, Canada.</Text>
        <Text>greatlakecabins@outlook.com</Text>
      </Group>
    </Container>
  );
};

export default Footer;

const Container = styled("footer", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgb(222, 222, 222)",
  padding: "20px 20px",
  borderTop: "1px solid #555555",
});

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "800px",
  marginBottom: "15px",
});

const Group = styled("div", {});

const A = styled("a", {
  marginRight: "10px",
  cursor: "pointer",
  "&:last-child": {
    marginRight: "0",
  },
});

const InstagramIcon = styled(FaInstagram, {
  width: "40px",
  height: "40px",
  color: "white",
  borderRadius: "5px",
  background:
    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const AirbnbIcon = styled(FaAirbnb, {
  width: "40px",
  height: "40px",
  color: "#FF5A5F",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const FacebookIcon = styled(FaFacebookSquare, {
  width: "40px",
  height: "40px",
  color: "#4267B2",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
