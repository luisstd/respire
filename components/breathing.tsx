"use client";
import { motion } from "framer-motion";
import type React from "react";

interface BreathingProps {
	breathsPerMinute?: number;
}

export const Breathing: React.FC<BreathingProps> = ({
	breathsPerMinute = 6,
}) => {
	const bpm = Math.max(4, Math.min(breathsPerMinute, 10));
	const cycleDuration = 60 / bpm;
	const pattern = [4, 1, 4, 1];
	const totalPattern = pattern.reduce((sum, seg) => sum + seg, 0);

	let accumulated = 0;
	const keyframeTimes = pattern.map((segment) => {
		const fraction = accumulated / totalPattern;
		accumulated += segment;
		return fraction;
	});
	keyframeTimes.push(1);

	const scaleKeyframes = [0.3, 1.3, 1.3, 0.3, 0.3];

	return (
		<div className="flex flex-col items-center gap-4">
			<motion.div
				key={bpm}
				className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[hsl(305deg,46%,54%)]"
				animate={{ scale: scaleKeyframes }}
				style={{ willChange: "transform" }}
				transition={{
					duration: cycleDuration,
					times: keyframeTimes,
					ease: ["easeInOut", "linear", "easeInOut", "linear"],
					repeat: Number.POSITIVE_INFINITY,
				}}
			/>
		</div>
	);
};
