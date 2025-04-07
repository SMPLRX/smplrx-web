"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cases = [
  {
    title: "Producers",
    description: "Quickly find the perfect loop or one-shot without digging.",
    emoji: "🎧",
  },
  {
    title: "Sound Designers",
    description: "Organize huge sample libraries by shape and texture.",
    emoji: "🎛️",
  },
  {
    title: "AI/ML Developers",
    description: "Experiment with sample labeling and classification models.",
    emoji: "🧠",
  },
];

export default function UseCases() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="use-cases" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Who is SMPLRX for?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map(({ title, description, emoji }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="p-6 border border-border rounded-xl bg-muted/70 shadow-sm text-center hover:bg-white/60 hover:dark:bg-zinc-900/60"
          >
            <div className="text-3xl mb-2">{emoji}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
