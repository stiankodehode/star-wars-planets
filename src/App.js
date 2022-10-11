import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/landingPage/HomePage";
import ContactPage from "./pages/landingPage/ContactPage";
import PlanetPage from "./pages/landingPage/PlanetPage";
import AboutPage from "./pages/landingPage/AboutPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { BackgroundImage } from "./components/globalStyled";

function App() {
    const [starWarsData, setStarWarsData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/").then((res) => {
            setStarWarsData(res.data.results);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <BackgroundImage></BackgroundImage>;
    }
    return (
        <div>
            <BackgroundImage>
                <LandingPage />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/AboutPage" element={<AboutPage />} />
                    <Route path="/ContactPage" element={<ContactPage />} />
                    <Route path="/PlanetPage" element={<PlanetPage />} />
                </Routes>
            </BackgroundImage>
        </div>
    );
}

export default App;
