"use client";
import { motion } from "framer-motion";

export const Breathing: React.FC = () => {
  return (
    <>
      <motion.div
        className="w-20 h-20 bg-primary rounded-full"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    </>
  );
};
