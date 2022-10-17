import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    @media (max-width: 700px) {
        margin-top: 0px;
        flex-direction: column;
    }
`;

export const FirstPlanet = styled.div`
    width: 300px;
    height: 300px;
    margin-right: 100px;
    border-radius: 50%;
    background-color: #1c70a4;
`;

export const AmongUsLink = styled(Link)`
    text-decoration: none;
    position: absolute;
`;

export const PlanetBoxLink = styled(Link)`
    margin-top: 75px;
    text-decoration: none;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    @media (max-width: 700px) {
        height: 20%;
        margin-top: 25px;
    }

    &:hover {
        transform: scale(1.2);
    }
`;

export const PlanetName = styled.h2`
    text-align: center;
    min-width: 150px;
    color: yellow;
    font-size: 30px;
    @media (max-width: 700px) {
        margin-top: 0;
    }
`;

export const Tatooine = styled.img`
    width: 75%;
`;

export const Alderaan = styled.img`
    width: 90%;
`;

export const YavinIV = styled.img`
    width: 85%;
`;

export const Hoth = styled.img`
    width: 60%;
`;
export const Sun = styled.img`
    max-width: 20%;
    @media (max-width: 700px) {
        margin-top: -75px;
        transform: rotate(90deg);
    }
`;

export const AmongUs = styled.img`
    width: 100px;
    opacity: 0.5;
`;
