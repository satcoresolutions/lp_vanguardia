![SatCore Solutions](public/images/logos/01_Logo_Principal.png)

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
├── .next/                    # Archivos de compilación de Next.js (generados automáticamente)
├── app/                      # Directorio de la aplicación (App Router)
│   ├── globals.css           # Estilos CSS globales
│   ├── icon.ico              # Icono de la pestaña del navegador (favicon)
│   ├── layout.tsx            # Diseño raíz de la aplicación
│   └── page.tsx              # Página principal (Home)
├── node_modules/             # Dependencias del proyecto (generadas automáticamente)
├── public/                   # Archivos estáticos accesibles públicamente
│   └── images/               # Directorio para imágenes
│       ├── badges/           # Subdirectorio para imágenes de insignias/badges
│       ├── hero/             # Subdirectorio para imágenes de la sección Hero
│       ├── logos/            # Subdirectorio para logotipos
│       ├── products/         # Subdirectorio para imágenes de productos
│       └── social/           # Subdirectorio para iconos/imágenes de redes sociales
├── src/                      # Código fuente principal de la aplicación
│   ├── components/           # Componentes de React reutilizables
│   │   ├── sections/         # Componentes grandes que representan secciones enteras de la página
│   │   │   ├── Cta.tsx           # Sección de Llamada a la Acción (Call To Action)
│   │   │   ├── Features.tsx      # Sección de características o beneficios
│   │   │   ├── Footer.tsx        # Sección de pie de página
│   │   │   ├── Hero.tsx          # Sección principal de bienvenida (Hero section)
│   │   │   ├── Navbar.tsx        # Barra de navegación superior
│   │   │   ├── ProductCatalog.tsx # Sección del catálogo de productos
│   │   │   ├── SocialProof.tsx    # Sección de prueba social (logos de clientes, etc.)
│   │   │   └── Testimonials.tsx   # Sección de testimonios de clientes
│   │   └── ui/               # Componentes de interfaz de usuario más pequeños y atómicos
│   │       ├── Badge.tsx         # Componente de insignia o etiqueta
│   │       ├── Button.tsx        # Componente de botón estándar
│   │       ├── ProductCard.tsx   # Componente de tarjeta para mostrar un producto
│   │       ├── SectionLabel.tsx  # Componente para etiquetas de título de sección
│   │       └── WhatsAppButton.tsx # Componente específico para un botón de contacto por WhatsApp
│   └── lib/                  # Funciones de utilidad, lógica de negocio reutilizable, configuraciones
│       └── utils.ts          # Funciones de utilidad generales
├── .env                      # Archivo de variables de entorno (configuraciones sensibles)
├── .gitignore                # Archivos y directorios a ignorar por Git
├── AGENTS.md                 # Documentación relacionada con agentes (si aplica)
├── CLAUDE.md                 # Documentación o configuración específica relacionada con Claude (si aplica)
├── eslint.config.mjs         # Configuración de ESLint para el linting de código
├── LICENSE                   # Archivo de licencia del proyecto
├── LICENSE-AGREEMENT.md      # Acuerdo de licencia detallado (si aplica)
├── NDA.md                    # Acuerdo de no divulgación (Non-Disclosure Agreement) (si aplica)
├── next-env.d.ts             # Tipos de TypeScript para Next.js (generado automáticamente)
├── next.config.ts            # Configuración personalizada para Next.js
├── NOTICE.md                 # Avisos legales o de atribución
├── package-lock.json         # Registro exacto de las versiones de dependencias instaladas
├── package.json              # Configuración del proyecto, scripts y dependencias
├── postcss.config.mjs        # Configuración de PostCSS (usado frecuentemente con Tailwind CSS)
├── PRIVACY.md                # Política de privacidad
├── README.md                 # Documentación principal del proyecto
├── SECURITY.md               # Política de seguridad del proyecto
├── TERMS.md                  # Términos y condiciones de uso
└── tsconfig.json             # Configuración de TypeScript para el proyecto

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

![SatCore Solutions](public/images/logos/Logo_Principal_positivo.jpg)