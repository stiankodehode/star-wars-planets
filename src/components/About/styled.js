import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 700px;
`;

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 500px;
`;

export const Heading = styled.h1`
  color: yellow;
  font-size: 32px;
`;

export const Text = styled.text`
  color: white;
  font-size: 18px;
  border: 1px yellow solid;
  background: rgba(0, 0, 0, 0.63);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.25px);
  -webkit-backdrop-filter: blur(1.25px);
`;
