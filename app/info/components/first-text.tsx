import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";

export function FirstText() {
   return (
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
         <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <AuroraText className="text-[3.5rem] font-semibold text-blue-500">
               Lorem ipsum dolor sit.<span className="text-[#5046e6]">.</span>
            </AuroraText>
         </BoxReveal>

         <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
               <p>
                  -&gt; Lorem ipsum dolor sit amet.
                  <span className="font-semibold text-[#5046e6]"> Lorem.</span>,
                  <span className="font-semibold text-[#5046e6]"> Lorem.</span> ve
                  <span className="font-semibold text-[#5046e6]"> Lorem.</span>
                  çözümler. <br />
                  -&gt; Lorem ipsum dolor sit amet consectetur adipisicing.<br />
                  -&gt; Lorem ipsum dolor sit amet consectetur adipisicing.<br />
               </p>
            </div>
         </BoxReveal>


      </div>
   );
}
