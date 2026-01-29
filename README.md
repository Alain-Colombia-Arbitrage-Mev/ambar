# Studio Ambar - Estudio Webcam Profesional en Soacha

Sitio web profesional para Studio Ambar, el estudio webcam líder en Soacha, Cundinamarca.

## 🚀 Tecnologías

- **Framework:** [Astro](https://astro.build/) v4
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) v3
- **Lenguaje:** TypeScript
- **Despliegue:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 📁 Estructura del Proyecto

```
/
├── public/              # Assets estáticos
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── sections/    # Hero, Benefits, FAQ, etc.
│   │   └── ui/          # Button, Card, Badge, etc.
│   ├── pages/           # Páginas del sitio
│   ├── styles/          # CSS global
│   └── utils/           # Utilidades SEO
├── astro.config.mjs     # Configuración Astro
├── tailwind.config.mjs  # Configuración Tailwind
├── wrangler.toml        # Configuración Cloudflare
└── package.json
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## ☁️ Despliegue en Cloudflare Pages

### Opción 1: Desde el Dashboard de Cloudflare

1. Ve a [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. Crea un nuevo proyecto
3. Conecta tu repositorio de GitHub
4. Configura el build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy!

### Opción 2: Usando Wrangler CLI

```bash
# Login a Cloudflare
npx wrangler login

# Deploy
npm run deploy
```

## 🔧 Variables de Entorno (Opcional)

Crea un archivo `.env` para desarrollo local:

```env
PUBLIC_SITE_URL=https://studioambar.com
```

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal |
| `/privacidad` | Política de Privacidad |
| `/terminos` | Términos y Condiciones |
| `/datos` | Tratamiento de Datos |

## 🎨 Características

- ✅ SEO optimizado para "estudio webcam soacha"
- ✅ Schema.org (LocalBusiness, FAQPage)
- ✅ OpenGraph y Twitter Cards
- ✅ Diseño responsive (mobile-first)
- ✅ Glassmorphism UI
- ✅ Animaciones y transiciones
- ✅ Botones flotantes WhatsApp/Signal
- ✅ Geobloqueo para privacidad

## 📝 Licencia

Todos los derechos reservados © 2026 Studio Ambar S.A.S.
