"use client";
import { motion } from "framer-motion";
import { Slider } from "./ui/slider";

export const Breathing: React.FC = () => {
	return (
		<>
			<motion.div
				className="w-64 h-64 bg-[hsl(305deg,46%,54%)] rounded-full"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			/>
			<Slider />
		</>
	);
};
