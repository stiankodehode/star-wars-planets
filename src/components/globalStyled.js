import styled from "styled-components";
import BackgroundImg from "../img/galaxy-background.jpg";

export const BackgroundImage = styled.div`
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
`;
