"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { DnaIcon, HomeIcon, PhoneIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className=" relative w-full h-full p-15">
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <HomeIcon className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <ModeToggle />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <DnaIcon className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <PhoneIcon className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}


