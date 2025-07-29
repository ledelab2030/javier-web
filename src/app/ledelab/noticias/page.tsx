// 📁 app/ledelab/noticias/page.tsx
import Link from "next/link";

export default function NoticiasLedeLab() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Noticias de LedeLab</h1>
      <p className="text-gray-700">
        Aquí encontrarás actualizaciones sobre nuestras iniciativas, eventos,
        colaboraciones y avances desde el laboratorio vivo de LedeLab.
      </p>

      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        <li>Pronto compartiremos nuestras últimas novedades…</li>
        <li>
          Mientras tanto, conoce más sobre nuestras{' '}
          <Link href="/ledelab" className="text-blue-600 hover:underline">
            iniciativas activas
          </Link>.
        </li>
      </ul>
    </main>
  );
}