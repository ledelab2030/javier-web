import React from "react";
import Link from "next/link";

export default function PetroLenguajePoliticoPage() {
  return (
    <main className="max-w-3xl mx-auto py-8 px-6 space-y-6">
      <article>
        <h1 className="text-3xl font-bold mb-4">
          El lenguaje político contra Petro es inusual
        </h1>
        <p className="text-sm text-gray-500">Publicado el 26 de julio de 2025</p>

        <p className="mt-6 text-lg text-gray-800">
          En una entrevista con El Espectador, la académica estadounidense Jennifer McCoy —experta en polarización y democracia en América Latina— calificó como inusual la forma en que ciertos sectores opositores se refieren al presidente Gustavo Petro.
        </p>

        <p className="text-lg text-gray-800">
          McCoy indicó que es normal que en contextos polarizados haya crítica, pero resaltó que ha visto un tono particularmente fuerte y una narrativa de deslegitimación muy marcada, como si la figura del presidente fuese, desde ciertos sectores, vista como enemiga de la democracia.
        </p>

        <p className="text-lg text-gray-800">
          La experta explicó que este fenómeno ha ocurrido en otros países, tanto desde la derecha como desde la izquierda, y que contribuye a profundizar la desconfianza en las instituciones. McCoy aclaró que su análisis no toma partido, sino que se basa en patrones observables en distintos sistemas políticos.
        </p>

        <p className="text-lg text-gray-800">
          El medio también contextualizó el análisis dentro del ambiente actual en Colombia, marcado por tensiones entre las reformas propuestas por el Gobierno y la oposición, en especial dentro del Congreso, el poder judicial y algunos sectores mediáticos.
        </p>

        <p className="text-lg text-gray-800">
          El artículo original contenía opiniones editoriales adicionales que no fueron incluidas aquí para mantener un enfoque informativo y neutral.
        </p>
      </article>

      <div>
        <Link href="/noticias">
          <span className="text-blue-600 hover:underline">← Volver al feed</span>
        </Link>
      </div>
    </main>
  );
}
