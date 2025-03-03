"use client";

import Link from "next/link";
import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { DnaIcon, HomeIcon, PackageIcon, PhoneIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className=" relative w-full h-full p-15">
      <Dock iconMagnification={60} iconDistance={100}>

        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href="/products">
            <PackageIcon className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href="/info">
            <DnaIcon className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href="/">
            <HomeIcon className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href="/contact">
            <PhoneIcon className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
}


