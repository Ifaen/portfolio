import { useEffect, useRef, useState } from "react";
import { Info, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguagePanel() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<"idle" | "width" | "height">("idle");

  const { t } = useTranslation("portfolio");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const heroSection = document.getElementById("hero"); // The first section’s ID
    if (!heroSection) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && open) {
          setStage("idle");
          setOpen(false);
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(heroSection);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [open]);

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
        if (stage === "width") setStage("height");
      }}
      className="fixed top-12 right-4 z-50 bg-[#d5c7bc] text-[#a13e2d] rounded shadow-lg border border-[#a13e2d] overflow-hidden"
    >
      <button
        onClick={handleToggle}
        className="flex justify-center items-center w-full h-full"
        aria-label="Toggle Credits Panel"
      >
        {!open && <Info className="w-4 h-4" />}
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
              <h2 className="text-sm font-bold">{t("credits.title")}</h2>
              <button onClick={handleToggle}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-sm">
              <h3 className="font-semibold">
                {t("credits.sunset_background")}
              </h3>
              <p>
                <span>{t("credits.name")}: </span>
                <a
                  href="https://unsplash.com/@jeisblack?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  onClick={handleToggle}
                  onAuxClick={handleToggle}
                >
                  Jason Mavrommatis
                </a>
              </p>
              <p>
                <span>{t("credits.url")}: </span>
                <a
                  href="https://unsplash.com/photos/sunset-GPPAjJicemU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  onClick={handleToggle}
                  onAuxClick={handleToggle}
                >
                  Unsplash
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
