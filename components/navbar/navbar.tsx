"use client";

import { ModeToggle } from "@/components/theme/theme-toggle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DockDemo } from "./dock";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-2 w-full z-50 p-2  transition-all rounded-3xl duration-300 ${scrolled
                    ? "bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg"
                    : "bg-white/70 dark:bg-gray-900/70"
                    } md:block hidden`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Masaüstü Menü */}
                    <div className="hidden md:flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-start space-x-8">
                            <Link href="/info" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                Hakkımızda
                            </Link>
                            <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                Hizmetler
                            </Link>
                        </div>

                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                                Logo
                            </Link>
                        </div>

                        <div className="flex-1 flex items-center justify-end space-x-8">
                            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                                İletişim
                            </Link>

                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dock menüsü - mobil görünüm */}
            <div className="md:hidden fixed bottom-0 w-full z-50 p-4 ">
                <DockDemo />

            </div>
        </>
    );
};

export default Navbar;
