"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import React from "react";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Kalite Güvence Denetimi",
    description: "ISO 9001 Denetimi Tamamlandı",
    time: "15d önce",
    icon: "✓",
    color: "#00C9A7",
  },
  {
    name: "Performans Değerlendirmesi",
    description: "Q3 KPI Hedefleri Aşıldı",
    time: "10d önce",
    icon: "📈",
    color: "#FFB800",
  },
  {
    name: "Süreç İyileştirme",
    description: "Yeni İş Akışı Uygulandı",
    time: "5d önce",
    icon: "🔄",
    color: "#FF3D71",
  },
  {
    name: "Risk Analizi",
    description: "Önleyici Faaliyetler Belirlendi",
    time: "2d önce",
    icon: "⚠️",
    color: "#1E86FF",
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            {/* <span className="text-xs text-gray-500">{time}</span> */}
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimList({
  className,
}: {
  className?: string;
}) {
  const [items, setItems] = React.useState(notifications);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setItems(prevItems => {
        if (prevItems.length >= 400) { // 10 döngüden sonra sıfırla
          return notifications;
        }
        return [...prevItems, ...notifications];
      });
    }, 3000); // Her 3 saniyede bir yeni öğeler ekle

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden p-2 h-[400px]",
        className,
      )}
    >
      <AnimatedList>
        {items.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
