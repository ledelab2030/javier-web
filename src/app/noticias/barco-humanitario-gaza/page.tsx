import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Israel intercepta barco humanitario con pañales y leche
      </h1>
      <p className="text-gray-600 mb-2">26 de julio de 2025</p>

      <p className="mb-4 text-lg">
        La marina israelí detuvo el barco <strong>Mandala</strong>, cuyo destino era Gaza, con una carga de ayuda humanitaria.
      </p>
      <p className="mb-4 text-lg">
        Las autoridades israelíes justificaron la interceptación señalando preocupaciones de seguridad, aunque los organizadores del envío alegan que era claramente humanitario.
      </p>
      <p className="mb-4 text-lg">
        Javier pone la lupa sobre este tipo de eventos que suelen ser abordados con sesgos ideológicos. Aquí se destacan las implicaciones comunicativas y diplomáticas del acto.
      </p>

      <Link href="/" className="text-blue-600 hover:underline text-sm">
        Volver al inicio
      </Link>
    </main>
  );
}
