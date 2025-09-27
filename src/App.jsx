import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./App.css";
import Parnerships from "./components/Parnerships";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/*<Tours />*/}
      {/*<CommunityAchievements />*/}
      <Parnerships />
      <Footer />
    </div>
  );
}

export default App;
