import "./index.css";

import Navbar from "./Components/Navbar/TheNavbar";
import TheHero from "./Components/TheHero/HeroSection";
import TheSpecials from "./Components/Specials/TheSpecials";
import About from "./Components/OurStory/About";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <TheHero />
      <TheSpecials />
      <About />
    </div>
  );
}

export default App;
