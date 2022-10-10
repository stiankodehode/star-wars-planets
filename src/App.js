import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/landingPage/HomePage";
import ContactPage from "./pages/landingPage/ContactPage";
import PlanetPage from "./pages/landingPage/PlanetPage";
import AboutPage from "./pages/landingPage/AboutPage";

function App() {

  
    return (
        <div>
            <LandingPage />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AboutPage" element={<AboutPage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/PlanetPage" element={<PlanetPage />} />
            </Routes>
        </div>
    );
}

export default App;
