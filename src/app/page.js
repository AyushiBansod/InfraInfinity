import HeroBackground from "@/components/home/HeroBackground";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ScrollPlane from "@/components/home/ScrollPlane";
import ExpertGuide from "@/components/home/ExpertGuide";
import Services from "@/components/home/Services";
import YourTrust from "@/components/home/YourTrust";
import NewLaunch from "@/components/home/NewLaunch";
import GetinTouch from "@/components/home/GetinTouch";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <main>
        <HeroBackground />
        < ExpertGuide />
        <ScrollPlane />
        <Services />
        < YourTrust />

        <NewLaunch />
        <GetinTouch />
      </main>

      <Footer />
    </div>
  );
}