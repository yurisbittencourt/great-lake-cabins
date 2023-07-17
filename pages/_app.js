import { globalStyles } from "../styles/stitches.config";
import { Layout } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Rent a cabin or campsite by the Batchawana Bay beach"
        ></meta>
        <meta
          property="og:url"
          content="https://greatlakecabins.netlify.app"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://greatlakecabins.netlify.app/images/Cabin.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="GreatLakeCabins"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Great Lake Cabins: Cabin and Campsite rentals"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Rent a cabin or campsite by the Batchawana Bay beach"
          key="ogdesc"
        />
        <title>Great Lake Cabins: Cabin and Campsite rentals</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
