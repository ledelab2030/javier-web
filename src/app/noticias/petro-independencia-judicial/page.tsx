import React from "react";
import Link from "next/link";

export default function PetroIndependenciaJudicial() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <Link href="/">
        <span className="text-sm text-blue-600 hover:underline">← Volver al inicio</span>
      </Link>

      <h1 className="text-3xl font-bold">
        Petro defiende independencia judicial; Uribe responde criticando presunta presión
      </h1>
      <p className="text-sm text-gray-500">27 de julio de 2025</p>
      <p className="text-sm text-gray-600 italic">
        Basado en reportes de <strong>El Espectador</strong> y comunicados oficiales. Reacciones complementarias en <em>Semana</em> y <em>La Silla Vacía</em>.
      </p>

      <article className="prose prose-lg max-w-none">
        <p>
          En medio de la atención pública generada por las decisiones judiciales que involucran al expresidente Álvaro Uribe, el presidente Gustavo Petro reiteró su compromiso con el respeto a la independencia de la Rama Judicial.
        </p>

        <p>
          Petro se pronunció tras conocer la decisión de un juez que mantuvo la acusación contra Uribe por presunto soborno a testigos y fraude procesal. A través de su cuenta oficial en redes sociales, afirmó que en Colombia "los jueces deben decidir sin interferencias del Ejecutivo", subrayando que su gobierno no intervendrá en procesos judiciales en curso.
        </p>

        <p>
          Por su parte, Uribe cuestionó el contexto en el que se desarrolla el proceso judicial y advirtió sobre una presunta instrumentalización de la justicia para afectar su imagen pública y política. Según el exmandatario, existe "presión mediática y política" que incide en las decisiones judiciales.
        </p>

        <p>
          El debate se produce en un escenario preelectoral, en el que tanto el Centro Democrático como el Pacto Histórico buscan posicionarse frente a la opinión pública. Sin embargo, hasta ahora, ninguna entidad judicial ha denunciado injerencias del Ejecutivo en este proceso específico.
        </p>

        <p>
          Organizaciones de la sociedad civil han llamado a mantener la autonomía judicial y a evitar que los procesos penales se conviertan en armas políticas. La Fundación para la Democracia Transparente, por ejemplo, recordó que "la fortaleza institucional del país depende de que se respeten las decisiones judiciales, sin importar los nombres involucrados".
        </p>

        <p>
          El caso contra Uribe continúa su curso y se espera que en las próximas semanas se adelanten nuevas audiencias preparatorias. El expresidente ha manifestado su intención de asistir a todas las diligencias judiciales y ha reiterado su inocencia.
        </p>
      </article>
    </main>
  );
}