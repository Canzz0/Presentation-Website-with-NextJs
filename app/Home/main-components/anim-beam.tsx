"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AxeIcon, Brain, DatabaseZap, HomeIcon, MessageCircle, Phone, Zap } from "lucide-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimBeam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex h-full w-full items-center justify-center  p-10"
            ref={containerRef}
        >
            <div className="flex size-full  max-w-lg flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle className="size-16" ref={div1Ref}>
                        <HomeIcon className="text-blue-500" />
                    </Circle>
                    <Circle className="size-16" ref={div5Ref}>
                        <AxeIcon className="text-blue-500" />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle className="size-16" ref={div2Ref}>
                        <DatabaseZap className="text-blue-500" />
                    </Circle>
                    <Circle className="size-16" ref={div4Ref}>
                        <Brain className="text-blue-500" />
                    </Circle>
                    <Circle className="size-16" ref={div6Ref}>
                        <Zap className="text-blue-500" />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle className="size-16" ref={div3Ref}>
                        <Phone className="text-blue-500" />
                    </Circle>
                    <Circle className="size-16" ref={div7Ref}>
                        <MessageCircle className="text-blue-500" />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                pathWidth={6}

            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
                pathWidth={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                pathWidth={6}

            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
                pathWidth={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
                pathWidth={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
                pathWidth={6}
            />
        </div>
    );
}

