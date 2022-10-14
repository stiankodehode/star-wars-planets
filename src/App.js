import LandingPage from "./pages/LandingPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { BackgroundImage } from "./components/globalStyled";

function App() {
    return (
        <div>
            <BackgroundImage>
                <LandingPage />
            </BackgroundImage>
        </div>
    );
}

export default App;
