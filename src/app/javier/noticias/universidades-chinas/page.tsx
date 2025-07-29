import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-6">
        ¿Son realmente las mejores del mundo las universidades chinas?
      </h1>
      <p className="text-sm text-gray-500 mb-6">18 de julio de 2025</p>
      <p className="mb-4 text-lg">
        El prestigioso semanario británico <em>The Economist</em> publicó un artículo en el que
        analiza el vertiginoso ascenso de las universidades chinas en rankings
        académicos globales. Entre los factores destacados se encuentran la
        inversión sostenida en investigación, la mejora en infraestructura
        educativa y la política de atracción de talento internacional.
      </p>
      <p className="mb-4 text-lg">
        Si bien el avance es notable, expertos citados por el medio advierten
        que los rankings a menudo reflejan criterios cuantitativos, como
        publicaciones y citaciones, que no siempre capturan la calidad
        pedagógica o la libertad académica. Algunos críticos señalan que
        restricciones políticas y control estatal pueden limitar el pensamiento
        crítico en ciertas instituciones.
      </p>
      <p className="mb-4 text-lg">
        The Economist concluye que China está ganando influencia académica, pero
        que la excelencia universitaria también depende de factores
        intangibles, como el libre intercambio de ideas. La pregunta sigue
        abierta: ¿es suficiente liderar rankings para ser considerado el mejor?
      </p>
      <div className="mt-6">
        <Link href="/">
          <span className="text-blue-600 hover:underline">Volver al inicio</span>
        </Link>
      </div>
    </main>
  );
}