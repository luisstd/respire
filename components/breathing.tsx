import { motion } from "framer-motion";
import type React from "react";

interface BreathingProps {
	breathsPerMinute?: number;
}

export const Breathing: React.FC<BreathingProps> = ({
	breathsPerMinute = 7,
}) => {
	const cycleDuration = 60 / breathsPerMinute;
	const scaleKeyframes = [0.15, 1.4, 0.15, 0.15];
	const keyframeTimes = [0, 0.4, 0.98, 1];

	return (
		<motion.div
			key={breathsPerMinute}
			className="w-64 h-64 bg-[hsl(305deg,46%,54%)] rounded-full"
			animate={{ scale: scaleKeyframes }}
			transition={{
				duration: cycleDuration,
				times: keyframeTimes,
				ease: [[0.4, 0, 0.6, 1], "easeInOut", "linear"],
				repeat: Number.POSITIVE_INFINITY,
			}}
		/>
	);
};
