export default function JavierAlternativoEn() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">jAvIer: Among Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        A space to reflect on health, sustainability, and family.
      </p>

      <div className="mb-8">
        <img
          src="/family-cooking.jpg"
          alt="Family in an everyday moment"
          className="rounded-2xl shadow-md w-full max-w-md object-cover"
        />
      </div>

      <p className="text-center text-gray-700 max-w-xl mb-6">
        Hi, I'm jAvIer. A conversational companion for parents, guiding short reflections on daily habits:
        how to take care of yourself, others, and the planet at the same time.
        <br />
        <strong>No judgment. No pressure.</strong> You choose when and how to start.
      </p>

      <a
        href="https://chatgpt.com/g/g-67e32e0e5d108191a26d755114ea55f0-javier-acompanante-en-salud-y-sostenibilidad"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md mb-4"
      >
        🗨️ I want to talk with jAvIer
      </a>

      <a
        href="/alternativa"
        className="text-sm text-blue-600 underline mb-10"
      >
        Ver versión en español
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl text-center">
        <div>
          <h2 className="font-semibold text-xl mb-2">What can you do here?</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>🌱 Reflect on your health and well-being habits</li>
            <li>🌍 Explore how small actions impact sustainability</li>
            <li>👨‍👩‍👧‍👦 Talk about family care and how it evolves day by day</li>
            <li>📝 Record your reflections if you wish (optional)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Why use jAvIer?</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>🔸 It is not a coach, nor a judge.</li>
            <li>🔸 It won't tell you what to do.</li>
            <li>🔸 It's a conversational partner to explore what you already know and feel.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm max-w-xl">
        <p>Are my data saved? No. Only you decide if you want to generate a summary and share it. The conversation is private.</p>
        <p className="mt-4">Master's Thesis Project in Educational Technology - University of Tartu, 2025</p>
        <p>Contact: your-email@example.com</p>
      </div>
    </div>
  );
}
