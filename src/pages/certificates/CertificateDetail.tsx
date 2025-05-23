import { Link, useParams } from "react-router-dom";

export default function CertificateDetail({ lang }: { lang: "es" | "en" }) {
  const { id } = useParams();

  // Map language + id to entries
  const CERTIFICATE_MAP: Record<
    string,
    { file: string; title: string; translatedFrom?: string }
  > = {
    "en:toeic-bridge": {
      file: "toeic-bridge.pdf",
      title: "TOEIC Bridge Certificate",
    },
    "es:toeic-bridge": {
      file: "toeic-bridge-es.pdf",
      title: "Certificado TOEIC Bridge",
      translatedFrom: "toeic-bridge",
    },
    "es:titulo-profesional": {
      file: "titulo-profesional.pdf",
      title: "Título Profesional",
    },
    "en:professional-degree": {
      file: "titulo-profesional-en.pdf",
      title: "Professional Degree",
      translatedFrom: "titulo-profesional",
    },
    "en:ef-set": {
      file: "ef-set-en.pdf",
      title: "EF SET Certificate",
    },
    "es:ef-set": {
      file: "ef-set-es.pdf",
      title: "Certificado EF SET",
    }
  };

  const key = `${lang}:${id}`;
  const entry = id ? CERTIFICATE_MAP[key] : null;

  if (!entry) {
    return <h1>{lang === "es" ? "Certificado no encontrado" : "Certificate not found"}</h1>;
  }

  return (
    <div className="w-full h-screen">
      <h1 className="text-xl mb-4">{entry.title}</h1>
      {entry.translatedFrom && (
        <>
          <h2>{lang === "es" ? "Este documento ha sido traducido por mí" : "This document has been translated by me"}</h2>
          <Link
            to={`/${lang === "es" ? "certificates" : "certificados"}/${entry.translatedFrom}`}
          >
            {lang === "es" ? "Ver original" : "See original"}
          </Link>
        </>
      )}
      <iframe
        src={`/certificates/${entry.file}`}
        className="w-full h-full"
        title={entry.title}
      />
    </div>
  );
}
