"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setisSidebarOpen(!isSidebarOpen)}
      >
        <FaBars
          className="text-gray-300 hover:bg-gray-950 p-2 rounded-md transition-all cursor-pointer"
          size={60}
        />
      </button>

      {/* Sidebar */}

      <section 
        className={`flex w-full h-screen absolute top-0 left-0 backdrop-blur-md transition-all
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        onClick={() => setisSidebarOpen(!isSidebarOpen)}
      >

        <nav 
          className="flex w-3/4 h-full bg-gray-900 border-r border-gray-800 p-6"
          onClick={(e) => e.stopPropagation()}
        >

          <ul className="flex flex-col font-text text-xl font-bold">
            <li>
              {" "}
              <Link href="/" className="hover:text-sky-400 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-400 transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/classes" className="hover:text-sky-400 transition">
                Clases
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-sky-400 transition">
                Funciones
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-400 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

      </section>
    </>
  );
};
