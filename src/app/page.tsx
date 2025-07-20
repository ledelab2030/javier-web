"use client";

import Image from "next/image";

export default function JavierPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">jAvIer</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        Un espacio para reflexionar sobre salud, sostenibilidad y familia.
      </p>

      <a
        href="https://chatgpt.com/g/g-67e32e0e5d108191a26d755114ea55f0-javier-acompanante-en-salud-y-sostenibilidad"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md"
      >
        🗨️ Quiero conversar con jAvIer
      </a>
    </div>
  );
}
