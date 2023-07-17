import { Banner, Title, Text, Section, Heading, Image } from "../components";
import { styled } from "../styles/stitches.config";

const About = () => {
  return (
    <>
      <Banner>
        <Banner.Image>
          <Image
            src="Banner3.jpg"
            alt="Batchawana Bay sandy beach"
            layout="fill"
            objectFit="cover"
            priority
            quality={50}
          />
        </Banner.Image>
        <Banner.Gradient />
        <Banner.Text>
          <Title>About Us</Title>
        </Banner.Text>
      </Banner>
      <Section>
        <Heading>Note From Owners</Heading>
        <Text>
          Great Lake Cabins is hosted by Robert and Dana Long. We have been in
          the carpentry business for a combined 40+ years. We have built all the
          cabins on site by hand, with care, to provide you with a relaxing and
          delightful experience. We are always happy to host and make sure that
          our guests have everything they they need while they are with us.
        </Text>
      </Section>
      <Section>
        <Heading>Location</Heading>
        <Text>
          Situated on Highway 17 N, Batchawana bay, we are right accross the
          street to the best beach of all of Lake Superior. The shallow, sandy
          bay allows the water to warm up during hot days and is perfect for
          families, kayaking or just relaxing on the sand. There are also many
          great spots nearby for exploring and hiking!
        </Text>
        <MapsWrapper>
          <iframe
            title="Map location of Great Lake Cabins"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.8721190718006!2d-84.53593573686473!3d46.935721505866816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d37df31b1c3a59d%3A0x77057769d26c5c6!2s10372%20Trans-Canada%20Hwy%20%2317%2C%20Batchawana%20Bay%2C%20ON%20P0S%201A0!5e0!3m2!1sen!2sca!4v1689618423854!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapsWrapper>
      </Section>
    </>
  );
};

export default About;

const MapsWrapper = styled("div", {
  display: "flex",
  aspectRatio: "4/3",
  width: "100%",
  height: "auto",
  margin: "20px auto",
});
