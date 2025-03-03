import { AnimCarousel } from "../Home/main-components/anim-carousel";
import DetailText from "./components/detail-text";
import { FirstText } from "./components/first-text";

function Info() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl py-16 md:py-24">

      <div className="flex flex-col items-center space-y-8">
        <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
          <FirstText />
          <div className="w-full overflow-hidden mx-auto mt-8">
            <DetailText />
          </div>
        </div>


        <div className="w-full overflow-hidden mx-auto mt-8">
          <AnimCarousel />

        </div>
      </div>
    </div>
  );
}

export default Info;