// app/layout.tsx
import './globals.css' // importa tus estilos globales si usas Tailwind
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
          <nav className="space-x-6 text-sm">
            <Link href="/noticias" className="text-blue-600 hover:underline">Noticias</Link>
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
