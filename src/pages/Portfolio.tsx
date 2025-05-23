export default function Portfolio({ lang }: { lang: string }) {
  return (
    <>
      <h1 className="text-2xl font-bold">{lang === "es" ? "Portafolio" : "Portfolio"}</h1>
    </>
  )
}