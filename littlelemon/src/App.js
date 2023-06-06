import "./index.css";

import Navbar from "./Components/Navbar/TheNavbar";
import TheHero from "./Components/TheHero/HeroSection";
import TheSpecials from "./Components/Specials/TheSpecials";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <TheHero />
      <TheSpecials />
    </div>
  );
}

export default App;
