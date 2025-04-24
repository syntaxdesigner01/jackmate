import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FAQComponent from "../components/FAQComponent";
import Footer from "../components/Footer";
import TrustUs from "../components/TrustUs";
import FeaturesSection from "../components/FeaturedComponent";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustUs/>
      <FAQComponent />
      <FeaturesSection/>
      
      <Footer />
    </main>
  );
}
