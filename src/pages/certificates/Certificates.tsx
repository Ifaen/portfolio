export default function Certificates({ lang }: { lang: string }) {
  return (
    <>
      <h1 className="text-2xl font-bold">{lang === "es" ? "Certificados" : "Certificates"}</h1>
    </>
  )
}