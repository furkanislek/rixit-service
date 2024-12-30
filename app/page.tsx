import Menu from "./components/menu/menu";
import Header from "./components/header/header";
import Strategies from "./components/strategies/Strategies";
import Diagnosing from "./components/strategies/Diagnosing";
import GamingConsoles from "./components/strategies/GamingConsoles";
import Contact from "./components/footer/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="padding  bg-background">
      <Menu />
      <Header />
      <Strategies />
      <Diagnosing />
      <GamingConsoles />
      <Contact />
      <Footer />
    </div>
  );
}
