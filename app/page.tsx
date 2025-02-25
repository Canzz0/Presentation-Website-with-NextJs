import { ModeToggle } from "@/components/theme/theme-toggle";
import MainHero from "./Home/main-components/main-hero";
import { AnimBeam } from "./Home/main-components/anim-beam";
import { AnimList } from "./Home/main-components/anim-check-list";
import { BeautifulText } from "./Home/main-components/Anim-text";
import { AnimCarousel } from "./Home/main-components/anim-carousel";

export default function Home() {
  return (
    <div className="bg-gradient-to-r w-screen h-full from-slate-200/80 via-slate-200/80 to-slate-200/100 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-slate-750/90">
      <MainHero/>
      
      <div className="flex justify-center items-center">
        <BeautifulText/>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full h-full">
          <AnimBeam/>
        </div>
        <div className="w-full m-10 h-full"> 
          <AnimList className=""/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <AnimCarousel/>
      </div>
    </div>
  );
}
