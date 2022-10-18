import styled from "styled-components";
import { Link } from "react-router-dom";

export const PlanetPageContainer = styled.div`
    margin: 3em auto 0;
    width: 90%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PlanetContainer = styled.div`
    width: 90%;
    padding: 3em 1em;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px yellow solid;
    background: rgba(0, 0, 0, 0.63);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.25px);
    -webkit-backdrop-filter: blur(1.25px);
`;

export const InfoContainer = styled.div`
    color: yellow;
    display: flex;
    flex-direction: column;
`;

export const PlanetHeadline = styled.h2`
    margin: 0;
    margin-bottom: 1em;
    border-bottom: 3px solid yellow;
    font-size: 32px;
`;

export const PlanetSubHeadline = styled.h3`
    margin: 0;
    margin-bottom: 1em;
    border-bottom: 1px solid yellow;
    font-size: 22px;
`;

export const PlanetImage = styled.img`
    width: 250px;
    margin-right: 100px;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const BackToHomeLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    font-size: 32px;
    color: yellow;
`;
