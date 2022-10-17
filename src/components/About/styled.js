import styled, { keyframes } from 'styled-components';

export const Body = styled.body`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Fade = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(0deg, transparent, black 90%);

  min-height: 60vh;
  top: -25px;
  z-index: 1;
`;

export const StarWars = styled.main`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100px;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
`;

const CrawlAnimation = keyframes`
0% {
    top: -100px;
    transform: rotateX(20deg)  translateZ(0);
  }
	100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

export const Crawl = styled.section`
  animation: ${CrawlAnimation} 60s linear;
  position: relative;
  top: 99px;
  transform-origin: 50% 100%;
`;

export const Title = styled.header`
  font-size: 90%;
  text-align: center;
`;

export const Paragraph = styled.p``;

export const HeadingOne = styled.h1`
  margin: 0 0 100px;
  text-transform: uppercase;
`;
