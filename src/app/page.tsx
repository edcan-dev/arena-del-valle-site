// app/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";

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
    <div className="bg-black text-white min-h-screen flex flex-col">
      
      {/* NAVBAR */}
      <Header />

      {/* HERO */}
      <main className="flex-grow container mx-auto text-center py-6 px-6">
        
        <section className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-sky-400 font-bebas">
            Arena del Valle
          </h1>
          <h3 className="mb-6">De Penta el Cero Miedo</h3>
          <Image
            src={"/arena.jpg"}
            alt="Vista interior de la Arena del Valle"
            width={1000}
            height={800}
            className="w-full max-w-[800px] m-auto mb-6"
          />
          <p className="mx-auto text-lg leading-relaxed text-justify w-full max-w-[800px]">
            Vive la emoción de la lucha libre como nunca antes. Rivalidades
            épicas, movimientos espectaculares y la pasión del público hacen de
            nuestra arena el lugar donde nacen las leyendas.
          </p>
          <div className="mt-8">
            <Link
              href={"/events"}
              aria-label="Ver próximos eventos de lucha libre en la Arena del Valle"
              className="bg-sky-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-colors"
            >
              Ver próximos eventos
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-sky-400 font-bebas mb-6">
            Historia
          </h2>
          <Image
            src={"/pentagon.webp"}
            alt="Penta el Cero Miedo, fundador de la Arena del Valle"
            width={1000}
            height={800}
            className="w-full max-w-[800px] m-auto mb-6"
          />
          <p className="mx-auto text-lg leading-relaxed text-justify w-full max-w-[800px] mb-4">La Arena del Valle nació como un espacio dedicado a la pasión y al arte de la lucha libre mexicana. Desde sus primeros eventos, se convirtió en el punto de encuentro de familias, aficionados y grandes gladiadores que marcaron época con sus combates.
          </p>
          <p className="mx-auto text-lg leading-relaxed text-justify w-full max-w-[800px]">Con el paso de los años, nuestra arena ha sido testigo de rivalidades legendarias, debuts inolvidables y el surgimiento de ídolos que hoy son reconocidos en todo México. Más que un recinto, la Arena del Valle es un símbolo de tradición, entrega y espectáculo.
          </p>

        </section>
      </main>

      {/* FOOTER */}
      <Footer/>      
    </div>
  );
}
