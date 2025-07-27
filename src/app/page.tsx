// Archivo: /app/page.tsx

import React from "react";
import Link from "next/link";

const noticias = [
  {
    slug: "juicio-uribe-petro",
    titulo: "Petro defiende independencia judicial; Uribe responde criticando presunta presión",
    fecha: "27 de julio de 2025",
  },
  {
    slug: "el-lenguaje-politico-contra-petro",
    titulo: "El lenguaje político contra Petro es inusual",
    fecha: "26 de julio de 2025",
  },
  {
    slug: "universidades-chinas",
    titulo: "¿Son realmente las mejores del mundo las universidades chinas?",
    fecha: "18 de julio de 2025",
  },
];

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-8 px-6 space-y-10">

      {/* Bloque 1: Bienvenida e introducción */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Hola, soy Javier</h1>
        <p className="text-lg text-gray-700">
          Javier es un acompañante digital diseñado para fomentar el pensamiento crítico,
          la agencia moral y la sostenibilidad humana. Aquí puedes encontrar análisis
          de noticias sin adornos, sin sesgos, con contexto y datos verificados.
        </p>
      </section>

      {/* Bloque 2: Noticias destacadas */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Últimas noticias neutralizadas</h2>
        <ul className="space-y-4">
          {noticias.map(({ slug, titulo, fecha }) => (
            <li key={slug}>
              <Link href={`/noticias/${slug}`}>
                <div className="hover:bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline">{titulo}</h3>
                  <p className="text-sm text-gray-500 mt-1">{fecha}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/noticias">
            <span className="text-blue-600 hover:underline text-sm">Ver todas las noticias →</span>
          </Link>
        </div>
      </section>

      {/* Bloque 3: Chatear con Javier */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-medium mb-2">¿Tienes dudas o quieres conversar?</h2>
        <p className="mb-4 text-gray-600">
          Javier también está disponible para ayudarte a razonar, escribir o explorar temas complejos.
        </p>
        <Link href="/chatear">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Chatear con Javier
          </button>
        </Link>
      </section>

    </main>
  );
}
