import "./index.css";

import Navbar from "./Components/Navbar/TheNavbar";
import TheHero from "./Components/TheHero/HeroSection";
import TheSpecials from "./Components/Specials/TheSpecials";
import TheTestimonials from "./Components/Testimonials/TheTestimonials";
import About from "./Components/OurStory/About";
import TheFooter from "./Components/Footer/TheFooter";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <TheHero />
      <TheSpecials />
      <TheTestimonials />
      <About />
      <TheFooter />
    </div>
  );
}

export default App;
