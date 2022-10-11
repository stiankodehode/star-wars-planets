import { FlexRow, Planet, FirstPlanet } from "./homePage/styled";

const HomePage = () => {
    return (
        <>
            <FlexRow>
                <FirstPlanet />
                <Planet />
                <Planet />
                <Planet />
                <Planet />
            </FlexRow>
        </>
    );
};

export default HomePage;
