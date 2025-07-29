import React from "react";

export default function JavierPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Interfaz de jAvIer</h1>
        <p className="text-lg text-gray-700">
          Aquí podrás conversar con jAvIer, tu copiloto digital. Esta herramienta está diseñada para ayudarte a pensar, escribir y decidir con claridad, propósito y autonomía.
        </p>
      </section>

      <section className="border rounded-xl p-6 text-center bg-gray-50">
        <p className="text-gray-500 italic">
          (Aquí irá el componente interactivo de jAvIer próximamente)
        </p>
      </section>

      <section className="text-center">
        <p className="text-sm text-gray-500">
          ¿Quieres saber quién es jAvIer y cómo fue creado?
        </p>
        <a
          href="/javier/sobre"
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm"
        >
          Conocer a jAvIer
        </a>
      </section>
    </main>
  );
}
