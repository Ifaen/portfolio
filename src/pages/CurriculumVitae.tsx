import { getLanguageContext } from "../components/LanguageContext";

export default function CurriculumVitae() {
  const { language } = getLanguageContext();

  return (
    <div className="w-full h-screen">
      <h1>Curriculum Vitae</h1>
      <iframe
        src={`/curriculum-vitae/${language}.pdf`}
        className="w-full h-full"
        title="Curriculum Vitae"
      />
    </div>
  )
}