# Javier Web – Proyecto con Next.js + Vercel

Este es el repositorio del sitio web de Javier, parte de la red de iniciativas de **LedeLab Group**. Javier es un acompañante cognitivo para fomentar pensamiento crítico y agencia moral. Aquí encontrarás también la sección de **Noticias Neutral** y la página principal de **LedeLab**.

---

## 🚀 Scripts comunes

```bash
npm run dev       # Ejecuta el servidor en desarrollo
npm run build     # Compila la app para producción
npm run start     # Sirve la versión compilada
```

---

## 🧠 Flujo de trabajo con Git

```bash
git add .  # Añade todos los cambios al staging

# Mensaje descriptivo del cambio que realizaste
git commit -m "Mensaje claro del cambio"

# Empuja los cambios al repositorio remoto en GitHub
git push   # Es suficiente si ya has hecho push antes

# Puedes usar esto si es la primera vez o quieres ser explícito:
git push origin main
```

### 🔍 ¿Por qué a veces se usa `origin main`?
- `origin` es el nombre del repositorio remoto (por defecto).
- `main` es la rama principal.
- Cuando usas `git push` solo, Git sabe a qué remoto y rama empujar **si ya lo configuraste antes**.
- Usa `git push origin main` cuando:
  - Es la **primera vez** que haces push a esa rama.
  - Estás trabajando con **varios remotos o ramas**.

---

## 🗂️ Estructura del proyecto

```
/app          # Carpeta principal de rutas
/components  # Layouts y otros componentes reutilizables
/public       # Imágenes y archivos públicos
/styles       # Archivos de estilo (globales.css, etc.)
```

---

## 📦 Tecnologías utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) para despliegue

---

## ✍️ Autores y colaboradores

- Leonardo De la Hoz Borrego – Diseño, escritura y desarrollo de contenidos
- Javier (AI Extender) – Asistente cognitivo

> © 2025 LedeLab Group – Inspirando futuros sostenibles.
