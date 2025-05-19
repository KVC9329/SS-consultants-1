"use client"
// components/Sidebar.tsx
import { useState } from "react";
import { Home, Film, Tv, Search, Star, Phone, Ruler } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About", icon: Film, href: "/about" },
  { label: "Projects", icon: Tv, href: "/projects" },
  { label: "Certificates", icon: Search, href: "/certifications" },
  { label: "Badges", icon: Star, href: "/badges" },
  { label: "Contact", icon: Phone, href: "/contact" },
  { label: "Skills", icon: Ruler, href: "/skills" },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed content-center top-0 left-0 h-full bg-black/20 text-white p-4 transition-all duration-500 ease-in-out ${isHovered ? "w-48" : "w-16"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-6 mt-4 duration-300 ease-in-out">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={index} href={item.href} className="flex items-center gap-4 cursor-pointer duration-300 ease-in-out">
                <span className="text-2xl py-2" ><Icon size={24}/></span>
                {isHovered && <span className="whitespace-nowrap text-2xl duration-300 ease-in-out hover:font-bold">{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
