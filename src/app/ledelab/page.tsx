import React from "react";
import Link from "next/link";
import Layout from "@/components/layout";

export default function LedeLabHomePage() {
  return (
    <Layout>
      <section>
        <h1 className="text-4xl font-bold mb-4">LedeLab Group</h1>
        <p className="text-lg text-gray-700">
          LedeLab es un laboratorio de ideas y proyectos dedicados a la sostenibilidad humana, la innovación educativa y el pensamiento crítico.
          Conectamos ciencia, tecnología, humanidades y acción comunitaria para construir futuros posibles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Iniciativas destacadas</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/javier" className="text-blue-600 hover:underline">
              Javier - tu GPS cognitivo
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Un asistente conversacional basado en AI para el pensamiento reflexivo y la toma de decisiones responsables.
            </p>
          </li>
          <li>
            <Link href="/noticias" className="text-blue-600 hover:underline">
              Noticias Neutral
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Una sección que transforma titulares sensacionalistas en análisis objetivos, verificados y comprensibles.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Colabora con nosotros</h2>
        <p className="text-gray-700">
          Estamos abiertos a alianzas, ideas, aportes y co-creaciones. Escríbenos o explora nuestras otras líneas de acción.
        </p>
        <Link href="/ledelab/contacto" className="text-blue-600 hover:underline mt-2 inline-block">
          Ir al formulario de contacto →
        </Link>
      </section>
    </Layout>
  );
}