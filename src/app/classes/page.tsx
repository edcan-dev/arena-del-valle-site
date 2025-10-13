export default function ClassesPage() {

  const classes = [
    {
      name: "Lucha Libre Inicial",
      desc: "Aprende las bases, caídas y llaves fundamentales.",
    },
    {
      name: "Entrenamiento Avanzado",
      desc: "Perfecciona tu técnica, timing y psicología en el ring.",
    },
    {
      name: "Fuerza y Resistencia",
      desc: "Rutinas físicas para potenciar tu rendimiento en el cuadrilátero.",
    },
  ];

  return (
    <main>
      <section className="max-w-6xl mx-auto p-10">

        <h2 className="text-5xl font-text font-bold text-sky-400 uppercase mb-8">
          Clases
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((c, i) => (
            <article
              key={i}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-sky-500 transition"
            >
              <h3 className="text-2xl font-bebas text-sky-400 mb-2 uppercase tracking-wide">
                {c.name}
              </h3>
              <p className="text-gray-300 font-inter">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
