"use client";

import { Breathing } from "@/components/breathing";
import { Speed } from "@/components/speed";
import { useState } from "react";

export default function Home() {
	const [speed, setSpeed] = useState(7);

	return (
		<div className="h-screen w-screen overflow-hidden grid place-items-center p-5">
			<main className="flex flex-col items-center gap-24 md:gap-36">
				<div className="flex items-center gap-3 text-2xl font-sans font-bold">
					<p>Breathe with the circle</p>
				</div>
				<Breathing breathsPerMinute={speed} />
				<div className="flex justify-between w-full">
					<Speed breathsPerMinute={speed} handleSpeedChange={setSpeed} />
					<Speed breathsPerMinute={speed} handleSpeedChange={setSpeed} />
				</div>
			</main>
		</div>
	);
}
