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
        <header className="border-b py-4 px-6 flex flex-wrap justify-between items-center gap-4 sm:gap-6">
          <h1 className="text-xl font-bold">
            <Link href="/">LedeLab</Link>
          </h1>
          <nav className="text-sm flex items-center gap-6 relative">
            {/* Menú desplegable Noticias con zona extendida para mantener hover */}
           <div className="relative group">
  <span className="text-blue-600 hover:underline cursor-pointer">Noticias</span>
  <div className="absolute left-0 top-full pt-2 bg-white border rounded shadow-md z-50 w-48 hidden group-hover:block">
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