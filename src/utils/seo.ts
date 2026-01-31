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
  title: "Estudio Webcam Soacha | Studio Ambar - Mejor Agencia Modelos 2026",
  description: "Estudio webcam Soacha líder en Cundinamarca. Gana hasta $8.000.000/mes con tecnología 4K, pagos en dólares, internet 900MB y privacidad total. El mejor estudio webcam en Soacha te espera.",
  keywords: [
    // Keyword FOCUS principal
    "estudio webcam soacha",
    
    // Keywords principales alta búsqueda
    "estudio webcam en soacha",
    "estudio de webcam soacha",
    "estudios webcam soacha cundinamarca",
    "trabajo webcam soacha",
    "modelaje webcam soacha",
    "agencia webcam soacha",
    "empleo webcam soacha",
    "studio webcam cundinamarca",
    
    // Keywords secundarias
    "estudio de modelos soacha",
    "trabajo para mujeres soacha bien pago",
    "empleo bien pago soacha 2026",
    "trabajo independiente soacha flexible",
    "modelos cam soacha profesional",
    
    // Keywords de ubicación expandidas
    "estudio webcam cundinamarca bogota",
    "agencia webcam bogota sur soacha",
    "trabajo webcam cerca de bogota",
    "estudio modelos soacha centro mercurio",
    "webcam ciudad verde soacha",
    "webcam san mateo compartir",
    
    // Keywords de beneficios
    "trabajo webcam pagos en dolares colombia",
    "estudio webcam internet 900mb fibra",
    "trabajo webcam privacidad geobloqueo",
    "empleo webcam horarios flexibles 24h",
    "trabajo modelos sin experiencia capacitacion",
    "webcam pago quincenal bancolombia nequi",
    
    // Keywords long-tail informacionales
    "mejor estudio webcam soacha 2026",
    "donde trabajar como modelo webcam soacha",
    "requisitos trabajo webcam soacha colombia",
    "cuanto gana modelo webcam soacha mensual",
    "es seguro trabajar webcam colombia",
    "como empezar carrera webcam soacha"
  ],
  ogImage: "/og-image.jpg",
  ogType: "website",
  twitterCard: "summary_large_image"
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Studio Ambar - Estudio Webcam Soacha",
  "description": "Estudio webcam Soacha líder en Cundinamarca. El mejor estudio webcam en Soacha con tecnología 4K, pagos en dólares y capacitación completa.",
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
