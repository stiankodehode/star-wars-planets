import {
    FlexRow,
    Sun,
    PlanetBoxLink,
    PlanetName,
    Tatooine,
    Alderaan,
    YavinIV,
    Hoth,
} from "./homePage/styled";
import TatooineImg from "../../img/tatooine.png";
import AlderaanImg from "../../img/alderaan.png";
import YavinIVImg from "../../img/yavin-iv.png";
import HothImg from "../../img/hoth.png";
import SunImg from "../../img/sun.png";

const HomePage = (props) => {
    return (
        <>
            <FlexRow>
                <Sun src={SunImg} />
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
            </FlexRow>
        </>
    );
};

export default HomePage;
