import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexRow = styled.div`
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 95vh;
    align-items: center;
    overflow: hidden;
    @media (max-width: 700px) {
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

export const PlanetBoxLink = styled(Link)`
    text-decoration: none;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    @media (max-width: 700px) {
        height: 20%;
    }

    &:hover {
        transform: scale(1.2);
    }
`;

export const PlanetName = styled.h2`
    color: yellow;
    font-size: 30px;
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
    margin-top: -75px;
    max-width: 20%;
    @media (max-width: 700px) {
        transform: rotate(90deg);
    }
`;
