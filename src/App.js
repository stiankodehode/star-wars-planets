import LandingPage from "./pages/LandingPage";
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
