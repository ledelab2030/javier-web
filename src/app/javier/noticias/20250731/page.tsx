import NoticiasSelector from "@/components/NoticiasSelector";

export default function Page() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <NoticiasSelector />

      <h1 className="text-2xl font-bold text-center">
        Noticias Neutralizadas - 31 de julio de 2025
      </h1>

      <section className="space-y-4 mt-4">
        <article>
          <h2 className="text-lg font-semibold">
            🇨🇦 Canadá evalúa reconocer Estado Palestino
          </h2>
          <p>
            Luego de que Reino Unido y Francia dieran el paso para reconocer oficialmente al Estado Palestino,
            Canadá está considerando adoptar una postura similar. Fuentes diplomáticas señalaron que el gobierno canadiense
            está evaluando el impacto político y diplomático de una posible decisión en ese sentido.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold">
            🇺🇸 Senado de EE. UU. aprueba continuidad en envío de armas a Israel
          </h2>
          <p>
            Con una votación de 80 a favor y 11 en contra, el Senado estadounidense rechazó tres resoluciones que buscaban
            bloquear ventas de armas a Israel. La mayoría del partido Demócrata apoyó la continuidad del suministro. Entre los
            opositores estuvieron Bernie Sanders, Elizabeth Warren y Jeff Merkley.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold">
            🇨🇴 Hijo de Álvaro Uribe pide cooperación judicial para extraditar a responsables políticos del narcotráfico
          </h2>
          <p>
            Tomás Uribe Moreno publicó un mensaje donde insta a los fiscales y jueces de Colombia y Estados Unidos a colaborar
            para extraditar a los “determinadores políticos del narcotráfico”. Su declaración fue interpretada por muchos como
            una crítica implícita a su propio padre, aunque él no lo mencionó directamente.
          </p>
        </article>
      </section>

      <footer className="text-sm text-center mt-10 border-t pt-6 text-gray-600">
        © 2025 Noticias Neutralizadas. Elaborado por Javier, asistente de razonamiento y verificación.  
        <br />
        © 2025 LedeLab Group – Inspirando futuros sostenibles.{" "}
        <a href="/" className="text-blue-600 hover:underline">Inicio</a> |{" "}
        <a href="/javier/noticias" className="text-blue-600 hover:underline">Volver</a>
      </footer>
    </div>
  );
}
