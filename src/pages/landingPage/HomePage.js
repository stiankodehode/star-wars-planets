import {
    FlexRow,
    Sun,
    PlanetBoxLink,
    PlanetName,
    Tatooine,
    Alderaan,
    YavinIV,
    Hoth,
    HomeContainer,
    AmongUsLink,
    AmongUs,
} from "./homePage/styled";
import TatooineImg from "../../img/tatooine.png";
import AlderaanImg from "../../img/alderaan.png";
import YavinIVImg from "../../img/yavin-iv.png";
import HothImg from "../../img/hoth.png";
import SunImg from "../../img/sun.png";
import AmongUsImg from "../../img/amongus.png";

const HomePage = (props) => {
    return (
        <HomeContainer>
            <FlexRow>
                <Sun src={SunImg} alt="the sun" />

                <PlanetBoxLink to="/PlanetPage/Tatooine">
                    <Tatooine src={TatooineImg} />
                    <PlanetName>{props.data[0].name}</PlanetName>
                </PlanetBoxLink>

                <PlanetBoxLink to="/PlanetPage/Alderaan">
                    <Alderaan src={AlderaanImg} />
                    <PlanetName>{props.data[1].name}</PlanetName>
                </PlanetBoxLink>

                <PlanetBoxLink to="/PlanetPage/YavinIV">
                    <YavinIV src={YavinIVImg} />
                    <PlanetName>{props.data[2].name}</PlanetName>
                </PlanetBoxLink>

                <PlanetBoxLink to="/PlanetPage/Hoth">
                    <Hoth src={HothImg} />
                    <PlanetName>{props.data[3].name}</PlanetName>
                </PlanetBoxLink>
                <AmongUsLink to="/AmongUsPage">
                    <AmongUs src={AmongUsImg} />
                </AmongUsLink>
            </FlexRow>
        </HomeContainer>
    );
};

export default HomePage;
