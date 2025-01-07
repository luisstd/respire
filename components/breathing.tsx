"use client";

import { motion } from "framer-motion";
import type React from "react";

interface BreathingProps {
	breathsPerMinute?: number;
}

export const Breathing: React.FC<BreathingProps> = ({
	breathsPerMinute = 6,
}) => {
	const cycleDuration = 60 / breathsPerMinute;
	const scaleKeyframes = [0.3, 1.3, 1.3, 0.3, 0.3];
	const keyframeTimes = [0, 0.4, 0.5, 0.9, 1];

	return (
		<motion.div
			key={breathsPerMinute}
			className="w-64 h-64 bg-[hsl(305deg,46%,54%)] rounded-full"
			animate={{ scale: scaleKeyframes }}
			style={{ willChange: "transform" }}
			transition={{
				duration: cycleDuration,
				times: keyframeTimes,
				ease: [[0.4, 0, 0.6, 1], "linear", [0.4, 0, 0.6, 1], "linear"],
				repeat: Number.POSITIVE_INFINITY,
			}}
		/>
	);
};
