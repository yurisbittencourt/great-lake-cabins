import {
  Banner,
  Section,
  Title,
  Heading,
  Text,
  ButtonLink,
  Image,
} from "../components";

/* ------------------------------------
TODO:
font family
button styles
content
SEO (meta: currentURL and previewImg)
-------------------------------------*/

export default function Home() {
  return (
    <>
      <Banner hero>
        <Banner.Image hero>
          <Image
            src="HeroBanner.jpg"
            alt="Batchawana Bay beach at sunset"
            layout="fill"
            objectFit="cover"
            priority
            quality={50}
          />
        </Banner.Image>
        <Banner.Gradient />
        <Banner.Text>
          <Title>Great Lake Cabins</Title>
          <Text banner>Cabin and Campsite Rentals</Text>
        </Banner.Text>
      </Banner>
      <Section>
        <Heading>Your Lakeside Getaway</Heading>
        <Text>
          Great Lake Cabins is owned and operated by Rob and Dana Long. We have
          been in the renovation industry for a combined 40 years+.
        </Text>
        <br />
        <Text>
          Get out and enjoy the wilderness, off grid living, peace and quiet by
          a lake. With our many options, we have a something that would suit
          your needs.
        </Text>
        <ButtonLink href="/About" aria-label="about">
          Find out more
        </ButtonLink>
      </Section>
      <Section>
        <Heading>Stay in one of our cabins</Heading>
        <Image
          src="Cabin.jpg"
          alt="Wooden Cabin in the middle of trees"
          width="800"
          height="600"
        />
        <Text>
          Enjoy a peaceful glamping retreat in one of our cabins in Batchawana
          Bay, surrounded by trees and right across from the beautiful sandy
          beach of Lake Superior!
        </Text>
        <ButtonLink href="/Cabins" aria-label="cabins">
          Explore Cabins
        </ButtonLink>
      </Section>
      <Section>
        <Heading>Stay in one of our campsites</Heading>
        <Image
          src="Campsite.jpg"
          alt="Path in the woods leading to the Campsites"
          width="800"
          height="600"
        />
        <Text>
          Enjoy a peaceful camping retreat in one of our campsites in Batchawana
          Bay, surrounded by trees and right across from the beautiful sandy
          beach of Lake Superior!
        </Text>
        <ButtonLink href="/Campsite" aria-label="campsite">
          Explore Campsite
        </ButtonLink>
      </Section>
    </>
  );
}
