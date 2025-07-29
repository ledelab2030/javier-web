// 📁 app/javier/noticias/page.tsx
import Link from "next/link";

export default function NoticiasNeutralizadas() {
  const noticias = [
    {
      slug: "petro-lenguaje-politico",
      title: "El lenguaje político contra Petro es inusual",
      date: "26 de julio de 2025",
    },
    {
      slug: "barco-gaza",
      title: "Israel intercepta barco humanitario con pañales y leche",
      date: "26 de julio de 2025",
    },
    {
      slug: "universidades-chinas",
      title: "¿Son realmente las mejores del mundo las universidades chinas?",
      date: "18 de julio de 2025",
    },
  ];

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Noticias Neutralizadas</h1>
      <p className="text-gray-700">
        Una selección de artículos transformados con objetividad, contexto y
        verificación. Sin adornos, sin sesgos.
      </p>

      <ul className="space-y-4">
        {noticias.map((n) => (
          <li key={n.slug} className="border p-4 rounded-xl shadow-sm">
            <Link
              href={`/javier/noticias/${n.slug}`}
              className="text-blue-700 font-semibold hover:underline"
            >
              {n.title}
            </Link>
            <p className="text-sm text-gray-500">{n.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}