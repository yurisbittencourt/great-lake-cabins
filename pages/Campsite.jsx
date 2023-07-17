import {
  Banner,
  Title,
  Text,
  Section,
  Heading,
  Carousel,
  ButtonLink,
  Image,
} from "../components";

const Campsite = () => {
  return (
    <>
      <Banner>
        <Banner.Image>
          <Image
            src="Banner2.jpg"
            alt="Batchawana Bay sandy beach"
            layout="fill"
            objectFit="cover"
            priority
            quality={50}
          />
        </Banner.Image>
        <Banner.Gradient />
        <Banner.Text>
          <Title>Campsite</Title>
        </Banner.Text>
      </Banner>
      <Section>
        <Heading>Campsite</Heading>
        <Text>
          Get away from it all when you stay under the stars. Very quiet
          campground with 8 sites. Under a beautiful canopy of trees, lots of
          singing birds to wake up to. Beautiful Batchawana beach just across
          the road, fantastic swimming and beautiful sunsets.
        </Text>
        <br />
        <Carousel>
          <Image
            src="Campsite1.jpg"
            alt="Great Lake Cabins campsite"
            width="800"
            height="600"
          />
          <Image
            src="Campsite2.jpg"
            alt="Great Lake Cabins campsite"
            width="800"
            height="600"
          />
          <Image
            src="Campsite3.jpg"
            alt="Great Lake Cabins campsite"
            width="800"
            height="600"
          />
          <Image
            src="Campsite4.jpg"
            alt="Great Lake Cabins campsite"
            width="800"
            height="600"
          />
          <Image
            src="Campsite5.jpg"
            alt="Great Lake Cabins campsite"
            width="800"
            height="600"
          />
        </Carousel>
        <ButtonLink
          external
          href="https://www.airbnb.ca/rooms/654357955717522647?adults=1&children=0&infants=0&check_in=2023-05-19&check_out=2023-05-26&federated_search_id=83e9a2a3-5567-421a-91e5-a52cfb68705f&source_impression_id=p3_1657732285_nvTR%2FLhSEz6freiR"
          aria-label="airbnb"
        >
          Book on Airbnb
        </ButtonLink>
      </Section>
    </>
  );
};

export default Campsite;
