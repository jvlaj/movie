import React from "react";
import Link from "next/link";
import {siteNav} from "@/config/siteConfig";
import SearchBar from "@/components/SearchBar";
import clsx from "clsx";
import Image from "next/image";

const NavBar: React.FC = () => {
    return (
        <nav className={clsx("flex justify-between items-center")}>
            <div className="mr-auto">
                <Link
                    className={clsx("ease-in-out transition-all px-4 py-2")}
                    href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                             stroke="currentColor" strokeWidth={2} strokeLinecap="square"
                             className={clsx("lucide lucide-clapperboard", "ease-in-out transition-all", "w-8 h-8", "text-transparent stroke-white hover:text-red-500")}>
                            <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z"/>
                            <path d="m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z"/>
                            <path d="m6.6 4.99 3.38 4.2"/>
                            <path d="m11.86 3.38 3.38 4.2"/>
                        </svg>
                </Link>
            </div>
            <ul className="flex space-x-4">
                {Object.entries(siteNav.routes).map(([name, route]) => (
                    <li key={name}>
                        <Link
                            className={clsx("hover:bg-slate-200 hover:text-slate-800 ease-in-out transition-all px-4 py-2 rounded-xl shadow-xl")}
                            href={route}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="ml-auto">
                <SearchBar/>
            </div>
        </nav>)
}

export default NavBar