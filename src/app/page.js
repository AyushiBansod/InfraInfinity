import HeroBackground from "@/components/home/HeroBackground";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ScrollPlane from "@/components/home/ScrollPlane";
import ExpertGuide from "@/components/home/ExpertGuide";
import Services from "@/components/home/Services";
import YourTrust from "@/components/home/YourTrust";
import NewLaunch from "@/components/home/NewLaunch";
import WhatWeDo from "@/components/home/WhatWeDo";
import GetinTouch from "@/components/home/GetinTouch";
import AboutUs from "@/components/home/AboutUs";
import Roadmap from "@/components/home/RoadMap";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <main>
        <HeroBackground />
        < ExpertGuide />
        <ScrollPlane />
        <Services />
        <NewLaunch />
        < YourTrust />

        <WhatWeDo />
        <AboutUs />
        <Roadmap />
        <GetinTouch />
      </main>

      <Footer />
    </div>
  );
}