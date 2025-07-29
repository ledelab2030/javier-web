import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 px-6 py-12 max-w-5xl mx-auto">

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Innovación con propósito humano
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Tecnología, sostenibilidad y educación conectadas
        </p>
        <Link
          href="/ledelab"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-2xl text-lg hover:bg-gray-800"
        >
          Explora LedeLab
        </Link>
      </section>

      {/* ¿Qué es LedeLab? */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">¿Qué es LedeLab?</h2>
        <p className="text-gray-700 text-lg">
          LedeLab es un laboratorio vivo donde exploramos el uso ético y regenerativo de la tecnología. Nacimos de la experiencia, no de la teoría. Trabajamos desde casas, talleres y rutas compartidas.
        </p>
        <Link
          href="/ledelab"
          className="text-blue-600 hover:underline"
        >
          Conoce nuestra historia →
        </Link>
      </section>

      {/* Iniciativas activas */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Iniciativas activas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-4 shadow-sm">
            <h3 className="text-xl font-semibold">Noticias Neutrales</h3>
            <p className="text-gray-700 text-sm mt-2">
              Transformamos titulares sensacionalistas en artículos objetivos.
            </p>
            <Link href="/noticias" className="text-blue-600 text-sm hover:underline mt-2 inline-block">Explorar</Link>
          </div>
          <div className="border rounded-2xl p-4 shadow-sm">
            <h3 className="text-xl font-semibold">jAvIer</h3>
            <p className="text-gray-700 text-sm mt-2">
              Nuestro GPT personalizado para pensar y escribir con propósito.
            </p>
            <Link href="/javier" className="text-blue-600 text-sm hover:underline mt-2 inline-block">Conocer a jAvIer</Link>
          </div>
          <div className="border rounded-2xl p-4 shadow-sm">
            <h3 className="text-xl font-semibold">EcoFungal</h3>
            <p className="text-gray-700 text-sm mt-2">
              Innovación sostenible para proteger madera sin tóxicos tradicionales.
            </p>
            <Link href="/ledelab#ecofungal" className="text-blue-600 text-sm hover:underline mt-2 inline-block">Ver más</Link>
          </div>
        </div>
        <Link href="/ledelab#iniciativas" className="text-blue-600 hover:underline">Ver todas las iniciativas →</Link>
      </section>

      {/* Comunidad & Ecosistema */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Comunidad & Ecosistema</h2>
        <p className="text-gray-700 text-lg">
          LedeLab es parte de una red global de personas que construyen desde la acción: makers, educadores, emprendedores, científicos y artistas.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>GEC Indianapolis 2025 🌎</li>
          <li>Uniandinos Caribe</li>
          <li>UnternehmerTUM</li>
          <li>Casa Flex 84, Barranquilla 🏡</li>
        </ul>
      </section>

      {/* CTA Contacto */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">¿Te interesa colaborar o conversar?</h2>
        <p className="text-gray-700 text-lg">
          Escríbenos, únete a una iniciativa o simplemente cuéntanos tu historia.
        </p>
        <Link
          href="/ledelab/contacto"
          className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white rounded-2xl text-lg hover:bg-blue-700"
        >
          Contáctanos
        </Link>
      </section>

    </main>
  );
}
