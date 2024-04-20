import React from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import Background from "../../Images/MeettheFounder/NeuralNetworkEarth_OurPeople.jpg"; //Neural network background from Figma design

const Header = () => {
  return (
    <header style={{ backgroundColor: "transparent", padding: "8px" }}>
      <Navbar />
    </header>
  );
};

// The HeroSection contains the main tagline or message with a background image.
const HeroSection = ({ title }) => {
  return (
    <div className="hero-section text-center relative" style={{}}>
      <Background />
      <h1
        style={{
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {title}
      </h1>
    </div>
  );
};


// HomePage is the main page component that renders the Header and HeroSection.
const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection title="We unite from across the world to defeat infectious diseases one cough at a time." />
      {/* ... rest of the page content ... */}
    </main>
  );
};

export default HomePage;
