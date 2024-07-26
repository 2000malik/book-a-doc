import About from "./components/About";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <About/>
      <Footer/>
    </main>
  );
}
