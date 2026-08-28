"use client";

import{useState} from "react"; 
import Link from "next/link" //Client side navigation
import { usePathname } from "next/navigation"; //Hook to get current route

const navLinks = [
    { name: "Home", href: "/"},
    { name: "Resume", href: "/resume"},
    { name: "Project", href: "/project"}

]

export default function NavBar(){
    const pathname = usePathname();
    const[isOpen, setIsOpen] = useState(false);

    return(
    <nav className = "w-full bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
            <Link href= '/' className="text-2xl font-bold text-gray-900">
            Lin Lin
            </Link>

             <Link href= '/resume' className="text-2xl font-bold text-gray-900">
            Resume
            </Link>

             <Link href= '/project' className="text-2xl font-bold text-gray-900">
            Projects
            </Link>

             
        </div>
    </nav>
    )

}
