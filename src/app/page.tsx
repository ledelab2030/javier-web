"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, TrendingUp, Handshake, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "jAvIer – Acompañante en Salud y Sostenibilidad",
  description: "Un compañero digital para decisiones guiadas por pasión, salud y crecimiento.",
};
export default function JavierPage() {
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      if (scrollPosition >= totalHeight * 0.5) {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "scroll_50", {
            event_category: "Scroll",
            event_label: "Scroll al 50%",
          });
        }
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "tiempo_30s", {
          event_category: "Tiempo",
          event_label: "30 segundos activos",
        });
      }
    }, 30000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleInfoClick = (message: string) => {
    setInfo(prev => (prev === message ? null : message));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        <a
          href="https://chatgpt.com/g/g-67e32e0e5d108191a26d755114ea55f0-javier-acompanante-en-salud-y-sostenibilidad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          jAvIer
        </a>
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Un compañero digital para decisiones guiadas por pasión, salud y crecimiento.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center">
        Te escucho. ¿Qué crees que puedo hacer por ti?
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-lg">
        jAvIer no es un asistente técnico, es un compañero de conversación diseñado para apoyar a Leonardo y a otros con curiosidad, ética y propósito.
      </p>

      <div className="mb-12 flex gap-4">
        <Button
          asChild
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "click_prueba_javier", {
                event_category: "Botón",
                event_label: "Prueba jAvIer",
              });
            }
          }}
        >
          <a
            href="https://chatgpt.com/g/g-67e32e0e5d108191a26d755114ea55f0-javier-acompanante-en-salud-y-sostenibilidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prueba jAvIer
          </a>
        </Button>

        <Button asChild>
          <Link href="/leonardo">Sobre Leonardo</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card
          onClick={() => handleInfoClick("Creer en un futuro mejor impulsa acciones positivas hoy.")}
          className="flex flex-col items-center p-4 cursor-pointer"
        >
          <Smile className="w-8 h-8 mb-2" />
          <CardContent className="p-0 text-center">Optimismo</CardContent>
          {info === "Creer en un futuro mejor impulsa acciones positivas hoy." && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              Creer en un futuro mejor impulsa acciones positivas hoy.
            </p>
          )}
        </Card>

        <Card
          onClick={() => handleInfoClick("El aprendizaje y la curiosidad nos mantienen en evolución.")}
          className="flex flex-col items-center p-4 cursor-pointer"
        >
          <TrendingUp className="w-8 h-8 mb-2" />
          <CardContent className="p-0 text-center">Crecimiento constante</CardContent>
          {info === "El aprendizaje y la curiosidad nos mantienen en evolución." && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              El aprendizaje y la curiosidad nos mantienen en evolución.
            </p>
          )}
        </Card>

        <Card
          onClick={() => handleInfoClick("Colaborar sin perder autonomía es clave para construir juntos.")}
          className="flex flex-col items-center p-4 cursor-pointer"
        >
          <Handshake className="w-8 h-8 mb-2" />
          <CardContent className="p-0 text-center">Independencia colaborativa</CardContent>
          {info === "Colaborar sin perder autonomía es clave para construir juntos." && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              Colaborar sin perder autonomía es clave para construir juntos.
            </p>
          )}
        </Card>

        <Card
          onClick={() => handleInfoClick("Cuidar hoy lo que importa evita riesgos mañana.")}
          className="flex flex-col items-center p-4 cursor-pointer"
        >
          <Heart className="w-8 h-8 mb-2" />
          <CardContent className="p-0 text-center">Prevención en salud</CardContent>
          {info === "Cuidar hoy lo que importa evita riesgos mañana." && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              Cuidar hoy lo que importa evita riesgos mañana.
            </p>
          )}
        </Card>
      </div>

      <footer className="mt-12 text-gray-400 text-sm">
        ¿Te gustaría colaborar con jAvIer? Escribe a Leonardo.
      </footer>
    </div>
  );
}
