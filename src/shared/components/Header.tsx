import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="bg-gray-900">
        <nav
          aria-label="Menú principal"
          className="container mx-auto flex justify-between items-center py-4 px-6"
        >
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src="/arena-logo.png"
              alt="Arena del Valle Logo"
              width={100}
              height={100}
            />
            {/* <span className="text-xl font-bold">Arena del Valle</span> */}
          </Link>
          <ul role="list" className="flex gap-6">
            <li>
              <Link
                href={"/classes"}
                aria-label="Ver los horarios de las clases en la Arena"
                className="hover:text-sky-400 transition-colors font-semibold"
              >
                Clases
              </Link>
            </li>
            <li>
              <Link
                href={"/events"}
                aria-label="Ver próximos eventos de lucha libre en la Arena del Valle"
                className="hover:text-sky-400 transition-colors font-semibold"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href={"/wrestlers"}
                aria-label="Ver los luchadores más famosos de la Arena"
                className="hover:text-sky-400 transition-colors font-semibold"
              >
                Luchadores
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:text-sky-400 transition-colors font-semibold"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
