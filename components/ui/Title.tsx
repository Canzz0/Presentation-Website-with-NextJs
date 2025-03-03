import { FlipText } from "../magicui/flip-text";

function Title({ children }: { children: React.ReactNode }) {
   return (
      <>
         <FlipText className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            {children}
         </FlipText>
      </>
   )
}

export default Title;

