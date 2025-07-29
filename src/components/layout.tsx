import '@/app/globals.css'
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'LedeLab Group',
  description: 'Inspirando futuros sostenibles con ciencia, tecnología y humanismo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <header className="border-b py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">LedeLab</Link>
          </h1>
          <nav className="space-x-6 text-sm flex items-center gap-6">
            {/* Menú desplegable Noticias */}
            <div className="relative group">
              <span className="text-blue-600 hover:underline cursor-pointer">Noticias</span>
              <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 z-50 w-48">
                <Link href="/noticias" className="block px-4 py-2 hover:bg-gray-100">Neutralizadas</Link>
                <Link href="/ledelab/noticias" className="block px-4 py-2 hover:bg-gray-100">LedeLab</Link>
                <Link href="/javier/noticias" className="block px-4 py-2 hover:bg-gray-100">jAvIer</Link>
              </div>
            </div>

            {/* Otros enlaces */}
            <Link href="/ledelab/sobre-nosotros" className="text-blue-600 hover:underline">Sobre nosotros</Link>
            <Link href="/ledelab/contacto" className="text-blue-600 hover:underline">Contáctenos</Link>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto p-6 space-y-10">
          {children}
        </main>

        <footer className="border-t py-6 px-6 text-sm text-gray-500 text-center">
          © 2025 LedeLab Group · Inspirando futuros sostenibles.
        </footer>
      </body>
    </html>
  );
}
