import { useTranslation } from "react-i18next";

export default function Fallback() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("fallback.title")}</h1>
    </div>
  );
}
