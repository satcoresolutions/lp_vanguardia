![SatCore Solutions](/images/logos/01_Logo_Principal.png)

# 🚀 Landing Page Vanguardia

**SatCore Solutions**

Proyecto de Landing Page moderna desarrollado con Next.js, TypeScript y Tailwind CSS, siguiendo un estándar modular, escalable y orientado a rendimiento.

---

## 🏢 Información corporativa

### SatCore Solutions

| Medio | Información | 
|------|------------|-----|
| 📧 Correo | satcoresolutions@gmail.com | 
| 📱 WhatsApp | +57 302 201 60 72 | 
| 🌐 Sitio Web | https://satcore.solutions | 
| 📸 Instagram | https://www.instagram.com/satcore_solutions | 
| 🎥 YouTube | @SatCore_Solutions | 
| 💻 GitHub | https://github.com/satcoresolutions |
| 📘 Facebook | Página: SatCore Solutions | 


---

## 📌 Descripción

Este proyecto corresponde a la **Landing Page Vanguardia**, una plantilla base optimizada para conversión, captación de leads y presentación de producto o marca.

Está construido bajo una arquitectura limpia basada en componentes reutilizables, con separación clara entre UI, secciones y lógica de negocio.

---

## ⚙️ Tecnologías utilizadas

- Next.js 16+
- TypeScript
- Tailwind CSS
- ESLint

---

## 📁 Estructura del proyecto


lp_vanguardia/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
└── src/
    ├── components/
    │
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Badge.tsx
    │   │   ├── ProductCard.tsx
    │   │   └── SectionLabel.tsx
    │
    │   └── sections/
    │       ├── Navbar.tsx
    │       ├── Hero.tsx
    │       ├── FeaturedCollection.tsx
    │       ├── SocialProof.tsx
    │       ├── Testimonials.tsx
    │       └── Footer.tsx
    │
    └── lib/
        ├── constants.ts
        └── utils.ts

---

## 🚀 Instalación del proyecto

Clona el repositorio e instala dependencias:

npx create-next-app@latest . --typescript --tailwind --eslint

▶️ Ejecución en desarrollo

Para iniciar el servidor local:

npm run dev
La aplicación estará disponible en:

http://localhost:3000


---

## 🎨 Configuración de estilos

El sistema de estilos está centralizado en:

app/globals.css
Desde este archivo se gestiona:

Identidad visual del proyecto

Colores globales

Tipografía

Variables de diseño

---

## 🔐 Variables de entorno

Se utiliza un archivo .env.local para gestionar información sensible.

Crear el archivo:

touch .env.local
Buenas prácticas:
No subir .env.local al repositorio

Mantenerlo en .gitignore

Usar variables descriptivas

Prefijo NEXT_PUBLIC_ solo para variables expuestas al cliente

Ejemplo:

NEXT_PUBLIC_API_URL=https://api.example.com
STRIPE_SECRET_KEY=your_secret_key

---

## 🧱 Arquitectura del proyecto

El proyecto sigue una arquitectura modular dividida en tres capas:

UI Layer: componentes reutilizables (design system)

Sections Layer: bloques principales de la landing page

Lib Layer: utilidades y constantes globales

Este enfoque garantiza:

Escalabilidad

Mantenibilidad

Reutilización de componentes

Orden estructural del código

---

## 🧪 Buenas prácticas

Código tipado con TypeScript

Componentes reutilizables

Separación de responsabilidades

Estilos centralizados

Seguridad mediante variables de entorno

📦 Estado del proyecto
🔧 En desarrollo inicial
📐 Estructura base definida
🚀 Listo para implementación de UI

---

## 🏢 Autor

**SatCore Solutions**  
Desarrollo de software y automatización de sistemas

---

![SatCore Solutions](/images/logos/Logo_Principal_positivo.jpg)