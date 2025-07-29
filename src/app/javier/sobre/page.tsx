import React from "react";
import Link from 'next/link';

const noticias = [
  {
    slug: 'petro-lenguaje-politico',
    titulo: 'El lenguaje político contra Petro es inusual',
    fecha: '26 de julio de 2025',
  },
  {
    slug: 'israel-barco-humanitario',
    titulo: 'Israel intercepta barco humanitario con pañales y leche',
    fecha: '26 de julio de 2025',
  },
  {
    slug: 'universidades-chinas',
    titulo: '¿Son realmente las mejores del mundo las universidades chinas?',
    fecha: '18 de julio de 2025',
  },
];

export default function SobreJavierPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 space-y-10">
      <nav className="flex justify-end space-x-6 py-4">
        <Link href="/noticias" className="text-blue-600 hover:underline">Noticias</Link>
        <Link href="/ledelab" className="text-blue-600 hover:underline">Sobre LedeLab</Link>
        <Link href="/ledelab/contacto" className="text-blue-600 hover:underline">Contáctenos</Link>
      </nav>

      <section>
        <h1 className="text-4xl font-bold mb-4">Hola, soy Javier</h1>
        <p className="text-lg text-gray-700">
          Javier es un acompañante digital diseñado para fomentar el pensamiento crítico, la agencia moral y la sostenibilidad humana.
          Aquí puedes encontrar análisis de noticias sin adornos, sin sesgos, con contexto y datos verificados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Últimas noticias neutralizadas</h2>
        <ul className="space-y-4">
          {noticias.map(({ slug, titulo, fecha }) => (
            <li key={slug}>
              <Link href={`/noticias/${slug}`}>
                <div className="rounded border px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <h3 className="text-blue-600 font-semibold hover:underline">{titulo}</h3>
                  <p className="text-sm text-gray-600 mt-1">{fecha}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href="/noticias" className="text-sm text-blue-600 hover:underline">
            Ver todas las noticias →
          </Link>
        </div>
      </section>
    </main>
  );
}
