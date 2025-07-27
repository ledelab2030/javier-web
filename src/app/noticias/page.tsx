import Link from 'next/link';

export default function NoticiasFeed() {
  const articulos = [
    {
      slug: 'universidades-chinas',
      titulo: 'Universidades chinas lideran rankings globales',
      resumen: 'The Economist analiza el ascenso de las universidades chinas en rankings académicos.',
      fecha: '18 de junio de 2025',
    },
    {
      slug: 'petro-lenguaje-politico',
      titulo: 'El lenguaje político contra Petro es inusual',
      resumen: 'Expertos analizan la carga retórica sin precedentes usada contra el presidente colombiano.',
      fecha: '26 de julio de 2025',
    },
    {
      slug: 'barco-humanitario-gaza',
      titulo: 'Israel intercepta barco humanitario con pañales y leche',
      resumen: 'La marina israelí detiene al Handala, barco con destino a Gaza con ayuda civil.',
      fecha: '26 de julio de 2025',
    },
  ];

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📰 Noticias Neutral</h1>
      <p className="text-sm text-gray-500 mb-8">Periodismo claro y sin adornos. Basado en hechos verificables.</p>
      
      <ul className="space-y-6">
        {articulos.map(({ slug, titulo, resumen, fecha }) => (
          <li key={slug} className="border-b pb-4">
            <Link href={`/src/app/${slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{titulo}</h2>
            </Link>
            <p className="text-sm text-gray-600">{fecha}</p>
            <p className="mt-1">{resumen}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
