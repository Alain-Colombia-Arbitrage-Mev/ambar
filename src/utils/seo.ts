// SEO Configuration for Studio Ambar - Estudio Webcam Soacha

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Studio Ambar | Mejor Estudio Webcam en Soacha, Cundinamarca",
  description: "Únete al estudio webcam líder en Soacha. Gana hasta $8.000.000/mes con tecnología 4K, pagos en dólares, internet fibra óptica 900MB y privacidad total. Trabajo flexible para modelos webcam.",
  keywords: [
    // Keywords principales
    "estudio webcam soacha",
    "trabajo webcam soacha",
    "modelaje webcam soacha",
    "agencia webcam soacha",
    "empleo webcam soacha",
    
    // Keywords secundarias
    "estudio de modelos soacha",
    "trabajo para mujeres soacha",
    "empleo bien pago soacha",
    "trabajo independiente soacha",
    "modelos cam soacha",
    
    // Keywords de ubicación
    "estudio webcam cundinamarca",
    "agencia webcam bogota sur",
    "trabajo webcam cerca de bogota",
    "estudio modelos soacha centro",
    
    // Keywords de beneficios
    "trabajo webcam pagos en dolares",
    "estudio webcam con internet rapido",
    "trabajo webcam privacidad garantizada",
    "empleo webcam horarios flexibles",
    "trabajo modelos sin experiencia",
    
    // Keywords long-tail
    "mejor estudio webcam soacha 2026",
    "donde trabajar como modelo webcam soacha",
    "requisitos trabajo webcam soacha",
    "cuanto gana modelo webcam soacha"
  ],
  ogImage: "/og-image.jpg",
  ogType: "website",
  twitterCard: "summary_large_image"
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Studio Ambar",
  "description": "Estudio webcam profesional en Soacha, Cundinamarca. Tecnología 4K, pagos en dólares y capacitación completa.",
  "image": "/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Centro Comercial Mercurio, Local 401",
    "addressLocality": "Soacha",
    "addressRegion": "Cundinamarca",
    "postalCode": "250051",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 4.5833,
    "longitude": -74.2167
  },
  "areaServed": [
    "Soacha",
    "Bogotá",
    "Cundinamarca",
    "Ciudad Verde",
    "San Mateo",
    "Compartir"
  ],
  "priceRange": "$$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "23:59"
    }
  ],
  "url": "https://studioambar.com",
  "sameAs": [
    "https://wa.me/message/XXXX"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Necesito experiencia para trabajar como modelo webcam en Studio Ambar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, no necesitas experiencia previa. En Studio Ambar ofrecemos capacitación completa que incluye clases de inglés, técnicas de chat, maquillaje para cámara y estrategias de monetización. Nuestro equipo te acompaña en todo el proceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto puede ganar una modelo webcam en Soacha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las ganancias varían según dedicación y habilidades. Nuestras modelos top ganan entre $4.000.000 y $8.000.000 COP mensuales. Los pagos se realizan quincenalmente en Bancolombia, Nequi o criptomonedas (USDT)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo garantizan mi privacidad como modelo webcam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implementamos geobloqueo total para Colombia, lo que significa que nadie en el país puede ver tus transmisiones. Además, ofrecemos uso de nombres artísticos y protección total de tu identidad personal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué equipo tecnológico tiene el estudio webcam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contamos con cámaras Logitech Brio 4K, computadores gaming con procesadores i7 y tarjetas RTX, internet fibra óptica de 900MB dedicados, iluminación LED profesional y habitaciones insonorizadas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son los requisitos para trabajar en Studio Ambar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Debes ser mayor de 18 años y contar con documento de identidad válido (cédula colombiana o PEP). No pedimos experiencia previa ni fotografías desnuda para la postulación."
      }
    }
  ]
};
