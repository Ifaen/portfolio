import { useTranslation } from "react-i18next";

export default function Fallback() {
  const { t } = useTranslation("common");

  return (
    <main className="text-white">
      <h1>{t("page_not_found")}</h1>
    </main>
  );
}
