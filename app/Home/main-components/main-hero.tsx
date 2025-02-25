"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MorphingText } from "@/components/magicui/morphing-text";

const MainHero = () => {
  const { theme } = useTheme();
  const maintheme = {
    bgColor: ` bg-gradient-to-r from-blue-950 via-blue-900 to-${theme === 'dark' ? 'slate-950' : 'slate-800'}`,
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
  };

  const texts = [
    "Kalite Yönetim",
    "Güvence",
    "Süreklilik",
    "Güvenlik",
    "Performans",
  ];
  
 
  
  return (
    <div className={`relative overflow-hidden h-screen rounded-b-[30px] ${maintheme.bgColor}`}>
      <div className="absolute inset-0">
        <img
          src={maintheme.image}
          alt="Background"
          className="object-cover  w-full h-full opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className={`text-4xl mt-16 md:text-6xl font-bold mb-6 ${maintheme.textColor}`}>
          <MorphingText texts={texts} />
          </h1>

          <div className="flex justify-center gap-4">
            <Button>Get Started</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "İnovasyon", desc: "Her Zaman Yeni ve İyiler" },
              { title: "Verimlilik", desc: "İşlerinizin Daha Hızlı Çalışması" },
              { title: "Büyüme", desc: "İşlerinizin Daha Hızlı Çalışması" }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-white bg-opacity-10">
                <h3 className={`text-xl font-bold ${maintheme.textColor}`}>
                  {feature.title}
                </h3>
                <p className={`${maintheme.textColor} opacity-80`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainHero;