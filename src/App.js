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
}

export default App;
