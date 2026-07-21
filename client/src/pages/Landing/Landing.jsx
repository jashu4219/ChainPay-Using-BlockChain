import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/landing/Hero";
import TrustedTech from "../../components/sections/landing/TrustedTech";
import Features from "../../components/sections/landing/Features";
import DashboardPreview from "../../components/sections/landing/DashboardPreview";
import MarketplacePreview from "../../components/sections/landing/MarketplacePreview";
import Footer from "../../components/sections/landing/Footer";
import WhyChainPay from "../../components/sections/landing/WhyChainPay";
import Technology from "../../components/sections/landing/Technology";
import About from "../../components/sections/landing/About";
const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />

<TrustedTech />

<Features />

<MarketplacePreview />

<WhyChainPay />

<Technology />

<About />

<Footer />
    </>
  );
};

export default Landing;