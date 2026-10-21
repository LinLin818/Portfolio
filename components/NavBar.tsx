"use client";

import Link from "next/link" //Client side navigation
import Image from "next/image";
import homeIcon from "./home-icon-silhouette.png"

/*<a href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by Magnific - Flaticon</a>*/
const navLinks = [
    { name: "Home", href: "/"},
    { name: "Resume", href: "/resume"},
    { name: "Project", href: "/project"}

]

export default function NavBar(){


    return(
    <nav className = "w-full bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
            <Link href= '/' className="text-2xl font-bold text-gray-900">
            <Image src = {homeIcon} alt = "Home Icon" className = "w-10"/>
            
            </Link>

             <Link href= '/Resume' className="text-2xl font-bold text-gray-900">
            Resume
            </Link>

             <Link href= '/Project' className="text-2xl font-bold text-gray-900">
            Projects
            </Link>

             
        </div>
    </nav>
    )

}
