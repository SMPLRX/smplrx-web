"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "Classifier",
    type: "Core Tool",
    description:
      "Instantly classify your audio samples as loops or one-shots using AI.",
  },
  {
    name: "Tagger",
    type: "Core Tool",
    description:
      "Enrich your sample metadata with tempo, pitch, mood, and more.",
  },
  {
    name: "Generator",
    type: "Core Tool",
    description: "Create variations and new sounds based on existing samples.",
  },
  {
    name: "SAMPLX (Desktop)",
    type: "Application",
    description:
      "A standalone app to manage, preview, and process your entire sample library.",
  },
  {
    name: "SAMPLX (VST Plugin)",
    type: "Application",
    description:
      "A plugin version of the sample manager for use inside your DAW.",
  },
  {
    name: "Mobile Companion App",
    type: "Application",
    description:
      "Manage cloud-stored samples on the go and record ideas from your phone.",
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Explore the Tools
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map(({ name, type, description }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 border border-border rounded-xl bg-muted/40 shadow-sm"
          >
            <div className="text-sm font-medium text-muted-foreground mb-1">
              {type}
            </div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
