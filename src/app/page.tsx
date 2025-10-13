// app/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";
import BlinkingDownArrow from "@/shared/components/BlinkingDownArrow";

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

      <main className="flex-1 font-text">
        <section className="relative flex flex-col items-center justify-between text-center py-8 px-8 h-[calc(100svh-80px)]">
          <div
            className="absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat opacity-10"
            style={{
              backgroundImage: "url('/arena.jpg')",
              backgroundAttachment: "fixed", // efecto sutil tipo parallax
            }}
            aria-hidden="true"
          />

          <Image
            src="/arena-logo.png"
            alt="Logo Arena del Valle"
            width={250}
            height={250}
            className=""
            priority
          />

          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Entrena, pelea y vive la pasión de la lucha libre en la arena de
            <span className="text-sky-400 font-bold"> Penta El Zero Miedo</span>
            .
          </p>

          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Vive la emoción de la lucha libre como nunca antes. Rivalidades
            épicas, movimientos espectaculares y la pasión del público hacen de
            nuestra arena el lugar donde nacen las leyendas.
          </p>

          <Link
            href="/classes"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white text-2xl  rounded-xl uppercase tracking-wider transition"
          >
            Conoce nuestras clases
          </Link>

          <BlinkingDownArrow
            blink={true}
            bounce={true}
            size={100}
            className="text-gray-300 animate-bounce"
          />
        </section>

        <section className="bg-gray-950 flex flex-col max-w-4xl mx-auto p-8 space-y-6">
          
          <h2 className="text-5xl font-bold text-sky-400 uppercase mb-8">
            Nuestra Historia
          </h2>

          <p className="text-lg font-inter text-gray-300 leading-relaxed">
            Fundada por el legendario luchador{" "}
            <strong>Penta El Zero Miedo</strong>, la Arena del Valle es más que
            un gimnasio: es un templo del esfuerzo, la disciplina y el honor del
            ring.
          </p>
          <p className="text-lg font-inter text-gray-300 leading-relaxed">
            Aquí se forman luchadores desde cero hasta el nivel profesional,
            combinando técnica, fortaleza física y mentalidad de acero. ¡El
            miedo no tiene cabida en este ring!
          </p>

          <Image src={'/unnamed.webp'}
          alt="Logotipo de la Arena del Valle"
          width={600}
          height={400}
          />

        </section>
      </main>

      <Footer />
    </>
  );
}
