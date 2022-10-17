import React from 'react';
import {
  Body,
  Title,
  HeadingOne,
  Paragraph,
  StarWars,
  Fade,
  Crawl,
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
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire.
            </Paragraph>
            <Paragraph>
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire.
            </Paragraph>
          </Crawl>
        </StarWars>
      </Body>
    </>
  );
};

export default AboutUs;
