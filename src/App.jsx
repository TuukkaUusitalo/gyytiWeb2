import { Routes, Route } from "react-router-dom";

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
import LegalPage from "./components/LegalPage";

import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Parnerships />
      <Services />
      <CommunitiesPage />
      <Mission />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/terms"
        element={
          <>
            <Navbar />
            <LegalPage type="terms" />
            <Footer />
          </>
        }
      />

      <Route
        path="/privacy"
        element={
          <>
            <Navbar />
            <LegalPage type="privacy" />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
