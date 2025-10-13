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
          className="flex w-3/4 h-full bg-gray-900 border-r border-gray-800"
          onClick={(e) => e.stopPropagation()}
        >

          <ul className="flex flex-col font-text text-xl w-full cursor-pointer">
            <li className="flex">
              <Link 
                href="/" 
                className="hover:text-sky-400 transition p-6 w-full border-b border-gray-800"
                onClick={() => setisSidebarOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li className="flex">
              <Link 
                href="/classes" 
                className="hover:text-sky-400 transition p-6 w-full border-b border-gray-800"
                onClick={() => setisSidebarOpen(false)}
              >
                Clases
              </Link>
            </li>
            <li className="flex">
              <Link 
                href="/events" 
                className="hover:text-sky-400 transition p-6 w-full border-b border-gray-800"
                onClick={() => setisSidebarOpen(false)}
              >
                Eventos
              </Link>
            </li>
            <li className="flex">
              <Link 
                href="/contact" 
                className="hover:text-sky-400 transition p-6 w-full border-b border-gray-800"
                onClick={() => setisSidebarOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

      </section>
    </>
  );
};
