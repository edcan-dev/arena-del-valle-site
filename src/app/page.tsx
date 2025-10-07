// app/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";

export const metadata: Metadata = {
  title: "Arena del Valle | De Penta El Cero Miedo",
  description:
    "Arena del Valle: el corazón de la lucha libre en México. Vive la emoción, las rivalidades y la pasión de los gladiadores del ring.",
  keywords: [
    "lucha libre",
    "penta",
    "cero",
    "miedo",
    "arena",
    "ecatepec",
    "eventos",
    "luchadores",
    "México",
    "Arena del Valle",
  ],
  openGraph: {
    title: "Arena del Valle | De Penta El Cero Miedo",
    description:
      "Vive la emoción de la lucha libre como nunca antes en la Arena del Valle.",
    url: "https://www.arenadelvalle.mx",
    siteName: "Arena del Valle",
    images: [
      {
        url: "/arena-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Arena del Valle Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 font-text">
        <section
          className="relative flex flex-col items-center justify-center text-center py-8 px-8 h-[calc(100svh-80px)]"
        >

          <div 
            className="absolute -z-10 inset-0 bg-cover bg-center opacity-10 bg-[url('/arena.jpg')]"
          ></div>

          <Image
            src="/arena-logo.png"
            alt="Logo Arena del Valle"
            width={250}
            height={250}
            className="mb-8"
            priority
          />          

          <p className="text-xl text-gray-300 max-w-2xl mb-4 text-center">
            Entrena, pelea y vive la pasión de la lucha libre junto a
            <span className="text-sky-400 font-bold"> Penta El Zero Miedo</span>.
          </p>

          <p className="text-xl text-gray-300 max-w-2xl mb-8 text-center">
            Vive la emoción de la lucha libre como nunca antes. Rivalidades
            épicas, movimientos espectaculares y la pasión del público hacen de
            nuestra arena el lugar donde nacen las leyendas.
          </p>

          <Link
            href="/classes"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white text-2xl font-title rounded-xl uppercase tracking-wider transition"
          >
            Conoce nuestras clases
          </Link>
        </section>


        <section
          className="bg-gray-800 flex h-[calc(100svh-80px)] p-6"
        >
          HOLA HOLA HOLA
        </section>
        
      </main>

      <Footer />
    </>
  );
}
