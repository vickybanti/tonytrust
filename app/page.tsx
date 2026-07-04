import {Socials} from "./components/Socials"
import Work from "./components/Work"
import {HeroCarousel} from "@/app/components/HeroCarousel";
import Ceo from "@/app/components/Ceo";

export default function Home() {
  return (
    
            <main>

    <HeroCarousel />
      <Socials />
      <Ceo />
      <Work />
      </main>


  );
}
