import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./App.css";
import Parnerships from "./components/Parnerships";
import CommunitiesPage from "./components/CommunitiesPage";
import Mission from "./components/Mission";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Parnerships />
      <Services />
      {/*<Tours />*/}
      {/*<CommunityAchievements />*/}
      <CommunitiesPage />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
