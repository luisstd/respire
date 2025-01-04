"use client";

import { Breathing } from "@/components/breathing";
import { Speed } from "@/components/speed";
import { useState } from "react";

export default function Home() {
	const [speed, setSpeed] = useState(7);

	return (
		<div className="grid place-items-center min-h-screen">
			<main className="flex flex-col items-center gap-32">
				<div className="flex items-center gap-3 text-2xl font-sans font-bold">
					<p>Breathe with the circle</p>
				</div>
				<Breathing breathsPerMinute={speed} />
				<Speed breathsPerMinute={speed} handleSpeedChange={setSpeed} />
				{/* <Menu /> */}
			</main>
		</div>
	);
}
