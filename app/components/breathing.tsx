"use client";
import { motion } from "framer-motion";

export const Breathing: React.FC = () => {
  return (
    <motion.div
      className="w-64 h-64 bg-primary rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};
