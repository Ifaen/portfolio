import type { Certificate, Language } from "./types";

export const CERTIFICATES_BY_CATEGORY: Record<Language, Record<string, Certificate[]>> = {
  en: {
    "English Level": [
      {
        title: "TOEIC Bridge Certificate",
        name: "toeic-bridge",
        original: "en"
      },
      {
        title: "EF SET Certificate",
        name: "ef-set",
      }
    ],
    "University": [
      {
        title: "Professional Degree",
        name: "professional-degree",
        original: "es"
      }
    ],
  },
  es: {
    "Nivel Ingles": [
      {
        title: "Certificado TOEIC Bridge",
        name: "toeic-bridge",
        original: "en"
      }, {
        title: "Certificado EF SET",
        name: "ef-set",
      }
    ],
    "Universidad": [
      {
        title: "Titulo Profesional",
        name: "titulo-profesional",
        original: "es"
      }, {
        title: "Bachiller",
        name: "bachiller",
        original: "es"
      }, {
        title: "Licenciatura UNAB",
        name: "licenciatura",
        original: "es"
      }
    ]
  }
} as const;

// Needed when changing language via settings
export const PATH_TRANSLATIONS = [
  ["portfolio", "portafolio"],
  ["certificates", "certificados"],
  ["certificate", "certificado"],
  ["professional-degree", "titulo-profesional"],
];