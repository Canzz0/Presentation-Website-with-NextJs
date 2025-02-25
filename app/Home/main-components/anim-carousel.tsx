import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Ahmet Yılmaz",
    username: "@kalite_muduru",
    body: "Yeni kalite yönetim sistemimiz sayesinde süreç verimliliğimiz %25 arttı.",
    img: "https://avatar.vercel.sh/ahmet",
  },
  {
    name: "Ayşe Demir",
    username: "@denetci",
    body: "ISO 9001:2015 denetimini başarıyla tamamladık. Ekip performansı muhteşemdi.",
    img: "https://avatar.vercel.sh/ayse",
  },
  {
    name: "Mehmet Kaya",
    username: "@proje_lideri",
    body: "Süreç iyileştirme çalışmalarımız sayesinde müşteri memnuniyetimiz %30 yükseldi.",
    img: "https://avatar.vercel.sh/mehmet",
  },
  {
    name: "Zeynep Şahin",
    username: "@kalite_uzman",
    body: "Risk bazlı düşünme yaklaşımımız ile potansiyel sorunları önceden belirliyoruz.",
    img: "https://avatar.vercel.sh/zeynep",
  },
  {
    name: "Can Öztürk",
    username: "@egitim_sorumlusu",
    body: "Çalışanlarımızın kalite bilinci eğitimleri ile yetkinlikleri sürekli artıyor.",
    img: "https://avatar.vercel.sh/can",
  },
  {
    name: "Elif Yıldız",
    username: "@surec_analisti",
    body: "PUKÖ (Planla-Uygula-Kontrol Et-Önlem Al) döngüsü ile sürekli iyileşiyoruz.",
    img: "https://avatar.vercel.sh/elif",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
     
    className="relative h-full w-64 cursor-pointer  
    overflow-hidden rounded-xl border p-4  bg-white
    border-white-950/[.1] bg-white-950 hover:bg-white-950/[.05] 
    dark:border-white-50/[.1] dark:bg-blue-50/[.10] dark:hover:bg-white-50/[.15]"

    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function AnimCarousel() {
  return (
    <div className="relative mb-10  container flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    
       </div>
  );
}
