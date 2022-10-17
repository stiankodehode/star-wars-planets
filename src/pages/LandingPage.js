import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/landingPage/HomePage";
import ContactPage from "../pages/landingPage/ContactPage";
import PlanetPage from "../pages/landingPage/PlanetPage";
import AboutPage from "../pages/landingPage/AboutPage";
import AmongUsPage from "./landingPage/AmongUsPage";
import { BackgroundImage } from "../components/globalStyled";

export const LandingPage = () => {
    const [starWarsData, setStarWarsData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // API call from the Star Wars api, and saving the first 4 planets to a state
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/").then((res) => {
            const slicedArray = res.data.results.slice(0, 4);
            setStarWarsData(slicedArray);
            setIsLoading(false);
        });
    }, []);

    // If loading is true, we render just the background image till the API call is done.
    if (isLoading) {
        return <BackgroundImage></BackgroundImage>;
    }
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage data={starWarsData} />} />
                <Route path="/AboutPage" element={<AboutPage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route
                    path="/PlanetPage/Tatooine"
                    element={<PlanetPage data={starWarsData[0]} />}
                />
                <Route
                    path="/PlanetPage/Alderaan"
                    element={<PlanetPage data={starWarsData[1]} />}
                />
                <Route
                    path="/PlanetPage/YavinIV"
                    element={<PlanetPage data={starWarsData[2]} />}
                />
                <Route
                    path="/PlanetPage/Hoth"
                    element={<PlanetPage data={starWarsData[3]} />}
                />
                <Route path="/AmongUsPage" element={<AmongUsPage />} />
            </Routes>
        </>
    );
};

export default LandingPage;
