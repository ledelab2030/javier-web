export default function JavierAlternativo() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">jAvIer: Entre Nosotros</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        Un espacio para reflexionar sobre salud, sostenibilidad y familia.
      </p>

      <div className="mb-8">
        <img
          src="/family-cooking.jpg"
          alt="Familia en un momento cotidiano"
          className="rounded-2xl shadow-md w-full max-w-md object-cover"
        />
      </div>

      <p className="text-center text-gray-700 max-w-xl mb-6">
        Hola, soy jAvIer. Un asistente conversacional que acompaña a madres y padres en breves reflexiones sobre sus hábitos cotidianos:
        cómo cuidarse, cuidar a los demás y al planeta al mismo tiempo.
        <br />
        <strong>Sin juicios. Sin presión.</strong> Tú eliges cuándo y cómo empezar.
      </p>

      <a
        href="https://chatgpt.com/g/g-67e32e0e5d108191a26d755114ea55f0-javier-acompanante-en-salud-y-sostenibilidad"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md mb-4"
      >
        🗨️ Quiero conversar con jAvIer
      </a>

      <a
        href="/alternativa-en"
        className="text-sm text-blue-600 underline mb-10"
      >
        Ver versión en inglés
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl text-center">
        <div>
          <h2 className="font-semibold text-xl mb-2">¿Qué puedes hacer aquí?</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>🌱 Reflexionar sobre tus hábitos de salud y bienestar</li>
            <li>🌍 Explorar cómo pequeñas acciones impactan en la sostenibilidad</li>
            <li>👨‍👩‍👧‍👦 Hablar sobre el cuidado familiar y cómo se transforma día a día</li>
            <li>📝 Registrar tus reflexiones si así lo deseas (opcional)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">¿Por qué usar jAvIer?</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>🔸 No es un coach, ni un juez.</li>
            <li>🔸 No te dirá qué hacer.</li>
            <li>🔸 Es un compañero de conversación para que explores lo que ya sabes y sientes.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm max-w-xl">
        <p>¿Se guardan mis datos? No. Solo tú decides si quieres generar un resumen y compartirlo. La conversación es privada.</p>
        <p className="mt-4">Proyecto de Tesis de Maestría en Tecnología Educativa - Universidad de Tartu, 2025</p>
        <p>Contacto: tu-email@example.com</p>
      </div>
    </div>
  );
}
