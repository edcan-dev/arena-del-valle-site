"use client";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white border-b border-gray-800 shadow-md w-full sticky top-0 left-0 z-50 flex items-center justify-between items-center px-4 h-[80px]">

          <Image  
            src="/arena-logo.png"
            alt="Arena del Valle Logo"
            width={60}
            height={60}
            priority
          />
          <h1 className="text-4xl font-title text-sky-400 flex">
              ARENA DEL VALLE
          </h1>

        {/* <ul className="flex space-x-6 font-text text-lg font-medium">
          <li>            <Link href="/" className="hover:text-sky-400 transition">Inicio</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-sky-400 transition">Nosotros</Link>
          </li>
          <li>
            <Link href="/classes" className="hover:text-sky-400 transition">Clases</Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-sky-400 transition">Eventos</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-sky-400 transition">Contacto</Link>
          </li>
        </ul> */}
    </nav>
  );
};