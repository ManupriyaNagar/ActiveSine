import Banner from "./components/Home/Banner";
import ContactSection from "./components/Home/Card";
import FeatureSection from "./components/Home/FeatureSection";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import HeroSection from "./components/Home/Hero";
import PowerQualitySolutions from "./components/Home/InPhase";
import WhyChooseUs from "./components/Home/WhyToChoose";

export default function Page() {
  return (
    <div>
      <Header/>
      <Banner/>
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      
      <PowerQualitySolutions/>
      <ContactSection/>
      {/* <Footer/> */}
    </div>
  )
}