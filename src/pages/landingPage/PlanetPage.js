import {
    BackToHomeLink,
    InfoContainer,
    PlanetContainer,
    PlanetHeadline,
    PlanetImage,
    PlanetPageContainer,
    PlanetSubHeadline,
} from "./planetPage/styled";

const PlanetPage = (props) => {
    const planet = props.data;

    return (
        <PlanetPageContainer>
            <BackToHomeLink to="/">← BACK</BackToHomeLink>
            <PlanetContainer>
                <PlanetImage
                    src={
                        planet.name === "Yavin IV"
                            ? require("../../img/yavin-iv.png")
                            : require(`../../img/${planet.name.toLowerCase()}.png`)
                    }
                />
                <InfoContainer>
                    <PlanetHeadline>{planet.name}</PlanetHeadline>
                    <PlanetSubHeadline>
                        Terrain: {planet.terrain}
                    </PlanetSubHeadline>

                    <PlanetSubHeadline>
                        Population: {planet.population}
                    </PlanetSubHeadline>

                    <PlanetSubHeadline>
                        Climate: {planet.climate}
                    </PlanetSubHeadline>

                    <PlanetSubHeadline>
                        Diameter: {planet.diameter}km
                    </PlanetSubHeadline>

                    <PlanetSubHeadline>
                        Gravity: {planet.gravity}
                    </PlanetSubHeadline>
                    <PlanetSubHeadline>
                        Orbital period: {planet.orbital_period}
                    </PlanetSubHeadline>
                </InfoContainer>
            </PlanetContainer>
        </PlanetPageContainer>
    );
};

export default PlanetPage;
