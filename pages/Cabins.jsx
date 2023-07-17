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

const Cabins = () => {
  return (
    <>
      <Banner>
        <Banner.Image>
          <Image
            src="Banner1.jpg"
            alt="Batchawana Bay sandy beach"
            layout="fill"
            objectFit="cover"
            priority
            quality={50}
          />
        </Banner.Image>
        <Banner.Gradient />
        <Banner.Text>
          <Title>Cabins</Title>
        </Banner.Text>
      </Banner>
      <Section>
        <Heading>Cabins</Heading>
        <Text>
          We currently have 3 cabins available for your choosing, varying in
          size. All cabins have parking space, access to the shower house and
          WiFi.
        </Text>
      </Section>
      <Section>
        <Heading>Huron</Heading>
        <Carousel>
          <Image
            src="Huron1.jpg"
            alt="The Huron Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Huron2.jpg"
            alt="The Huron Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Huron3.jpg"
            alt="The Huron Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Huron4.jpg"
            alt="The Huron Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Huron5.jpg"
            alt="The Huron Cabin"
            width="800"
            height="600"
          />
        </Carousel>
        <Text>
          The Lake Huron Cabin is our largest with a queen bed, a set of bunk
          beds and a pullout couch, able to sleep 6. The cabin includes a
          private deck, barbecue, fire pit and picnic table.
        </Text>
        <ButtonLink
          external
          href="https://www.airbnb.ca/rooms/50831332?source_impression_id=p3_1657734986_sR8ZgkPCLhcY9zgZ}>Book on Airbnb</ButtonLink"
          aria-label="airbnb"
        >
          Book on Airbnb
        </ButtonLink>
      </Section>
      <Section>
        <Heading>Ontario</Heading>
        <Carousel>
          <Image
            src="Ontario1.jpg"
            alt="The Ontario Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Ontario2.jpg"
            alt="The Ontario Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Ontario3.jpg"
            alt="The Ontario Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Ontario4.jpg"
            alt="The Ontario Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Ontario5.jpg"
            alt="The Ontario Cabin"
            width="800"
            height="600"
          />
        </Carousel>
        <Text>
          The Lake Ontario Cabin is our smallest with a queen bed, table and
          chairs, suitable for 2. The cabin includes a private deck, barbecue,
          fire pit and picnic table.
        </Text>
        <ButtonLink
          external
          href="https://www.airbnb.ca/rooms/50832141?source_impression_id=p3_1657735100_k3SV8qO2T7fsd4ph"
          aria-label="airbnb"
        >
          Book on Airbnb
        </ButtonLink>
      </Section>
      <Section>
        <Heading>Erie</Heading>
        <Carousel>
          <Image
            src="Erie1.jpg"
            alt="The Erie Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Erie2.jpg"
            alt="The Erie Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Erie3.jpg"
            alt="The Erie Cabin"
            width="800"
            height="600"
          />
          <Image
            src="Erie4.jpg"
            alt="The Erie Cabin"
            width="800"
            height="600"
          />
        </Carousel>
        <Text>
          The Lake Erie Cabin has a king bed, table and chairs, suitable for 2.
          The cabin includes a private deck, barbecue, fire pit and picnic
          table.
        </Text>
        <ButtonLink
          external
          href="https://www.airbnb.ca/rooms/50832653?locale=en&_set_bev_on_new_domain=1657730838_Nzc1N2ZiNmE2M2Zh&source_impression_id=p3_1657735225_podihdVBhda%2FNwBe"
          aria-label="airbnb"
        >
          Book on Airbnb
        </ButtonLink>
      </Section>
      <Section>
        <Heading>Amenities</Heading>
        <Carousel>
          <Image
            src="Amenities1.jpg"
            alt="Shower house for the cabins"
            width="800"
            height="600"
          />
          <Image
            src="Amenities2.jpg"
            alt="Shower house for the cabins"
            width="800"
            height="600"
          />
          <Image
            src="Amenities3.jpg"
            alt="Shower house for the cabins"
            width="800"
            height="600"
          />
        </Carousel>
        <Text>
          Each cabin has their own shower with hot water. There are power
          outlets available inside. Outside there is a wash tank and the
          Outhouse.
        </Text>
      </Section>
    </>
  );
};

export default Cabins;
