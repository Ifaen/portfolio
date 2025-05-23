export default function Fallback({ lang }: { lang: string }) {
  return (
    <div>
      <h1>{lang === "es" ? "404 - Página no encontrada" : "404 - Page Not Found"}</h1>
    </div>
  );
}