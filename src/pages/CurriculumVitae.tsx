export default function CurriculumVitae({ lang }: { lang: string }) {
  return (
    <div className="w-full h-screen">
      <h1>{lang === "es" ? "Curriculum Vitae" : "Curriculum Vitae"}</h1>
      <iframe
        src={`/curriculum-vitae/${lang === "es" ? "es" : "en"}.pdf`}
        className="w-full h-full"
        title="Curriculum Vitae"
      />
    </div>
  )
}