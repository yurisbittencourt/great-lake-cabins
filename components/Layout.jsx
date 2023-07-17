import Head from "next/head";
import { styled } from "../styles/stitches.config";
import { Navbar, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Great Lake Cabins</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/GreatLakeCabinsLogo.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled("main", {
  background: "rgb(222,222,222)",
});
