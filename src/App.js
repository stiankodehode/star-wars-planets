<<<<<<< HEAD
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/landingPage/HomePage';
import ContactPage from './pages/landingPage/ContactPage';
import PlanetPage from './pages/landingPage/PlanetPage';
import AboutPage from './pages/landingPage/AboutPage';

function App() {
  return (
    <>
      <LandingPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/PlanetPage" element={<PlanetPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </>
  );
=======
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
            const slicedArray = res.data.results.slice(0, 4);
            setStarWarsData(slicedArray);
            setIsLoading(false);
        });
    }, []);

    console.log(starWarsData);
    if (isLoading) {
        return <BackgroundImage></BackgroundImage>;
    }
    return (
        <div>
            <BackgroundImage>
                <LandingPage />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage data={starWarsData} />}
                    />
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
                </Routes>
            </BackgroundImage>
        </div>
    );
>>>>>>> development
}

export default App;
