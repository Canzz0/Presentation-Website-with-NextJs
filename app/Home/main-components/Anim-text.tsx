import { AuroraText } from "@/components/magicui/aurora-text";

export function BeautifulText() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        Dijital <AuroraText className="text-blue-500">Kalite Yönetim</AuroraText>Sistemi
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
       Firmalarınıza, <AuroraText color="text-blue-500" className="text-blue-500">Kalite ve Güvenlik</AuroraText> çözümleri sunuyoruz. 
        Müşteri memnuniyeti ve mükemmellik bizim önceliğimiz.
      </p>
    </div>
  );
}
