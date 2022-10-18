import React from 'react';
import {
  Body,
  Title,
  HeadingOne,
  Paragraph,
  StarWars,
  Fade,
  Crawl,
  Intro,
} from './styled';

const AboutUs = () => {
  return (
    <>
      <Body>
        <Fade></Fade>

        <StarWars>
          <Crawl>
            <Title>
              <Paragraph>Episode IV</Paragraph>
              <HeadingOne>A New Hope</HeadingOne>
            </Title>
            <Paragraph>
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire.
            </Paragraph>
            <Paragraph>
              During the battle, Rebel spies managed to steal secret plans to
              the Empire’s ultimate weapon, the DEATH STAR, an armored space
              station with enough power to destroy an entire planet.
            </Paragraph>
            <Paragraph>
              Pursued by the Empire’s sinister agents, Princess Leia races home
              aboard her starship, custodian of the stolen plans that can save
              her people and restore freedom to the galaxy…
            </Paragraph>
          </Crawl>
        </StarWars>
      </Body>
    </>
  );
};

export default AboutUs;
