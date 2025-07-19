import { useState } from "react";
import { Download, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getLanguageContext } from "./LanguageContext";

export default function DownloadPDFPanel() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<"idle" | "width" | "height">("idle");
  const { language } = getLanguageContext();

  const { t } = useTranslation(["settings", "common"]);

  async function downloadCVAsPDF() {
    const fileName = `Santiago-Fuentes-CV.pdf`;
    const fileURL = `/certificates/${language}/${fileName}`;

    // Create an invisible link and trigger download
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleToggle() {
    if (!open) {
      setOpen(true);
      setStage("width");
    } else {
      setStage("idle");
      setOpen(false);
    }
  }

  return (
    <motion.div
      initial={false}
      animate={{
        width: open ? 240 : 30,
        height: open && stage === "height" ? "auto" : 30,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (stage === "width") {
          setStage("height");
        }
      }}
      className="fixed top-12 right-4 z-50 bg-[#d5c7bc] text-[#a13e2d] rounded shadow-lg border border-[#a13e2d] overflow-hidden"
    >
      <button
        onClick={handleToggle}
        className="flex justify-center items-center w-full h-full"
        aria-label="Toggle Language Panel"
      >
        {!open && <Download className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && stage === "height" && (
          <motion.div
            key="panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-2 p-3"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold">{t("settings:title")}</h2>
              <button onClick={handleToggle}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-between items-center ">
              <label className="text-sm font-semibold">
                {t("settings:download")}
              </label>

              <button onClick={downloadCVAsPDF}>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
