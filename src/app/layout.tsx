import { Bebas_Neue, Lato } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: "--font-text",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Arena del Valle: Noche de Lucha Libre",
    "startDate": "2025-09-20T20:00",
    "location": {
      "@type": "Place",
      "name": "Arena del Valle",
      "address": "Ecatepec, México",
    },
    "performer": {
      "@type": "Person",
      "name": "Penta El Cero Miedo",
    },
    "url": "https://arena-del-valle-site.vercel.app",
  };

  return (
    <html lang="es" className={`${bebasNeue.variable} ${lato.variable}`}>
      <Head>
        <meta
          name="google-site-verification"
          content="jKfupuO5iLvmHnRr2M1_cimO3l_qgR4baHyALDohNmc"
        />
      </Head>
      <body className="bg-gray-950 text-white flex flex-col min-h-screen font-text relative">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </body>
    </html>
  );
}
