import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { PropsWithChildren } from "react";

export function RevealUp({
  children,
  className,
  delay,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, // how much needs to be visible to trigger
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealDown({
  children,
  className,
  delay,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, // how much needs to be visible to trigger
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
