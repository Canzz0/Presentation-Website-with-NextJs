import { FlipText } from "../magicui/flip-text";

function Title({ children }: { children: React.ReactNode }) {
   return (
      <>
         <FlipText className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl font-sans animate-in  slide-in-from-bottom-5">
            {children}
         </FlipText>
      </>
   )
}

export default Title;

