"use client";

import { Breathing } from "@/components/breathing";
import { Menu } from "@/components/menu";
import { Speed } from "@/components/speed";
import { useLocalStorage } from "usehooks-ts";

export default function Home() {
	const [speed, setSpeed] = useLocalStorage("speed", 5);

	return (
		<div className="h-dvh w-dvw overflow-hidden grid place-items-center">
			<main className="flex flex-col items-center gap-24 md:gap-48">
				<div className="flex items-center text-2xl md:text-3xl font-sans font-bold p-2">
					<p>Breathe with the circle</p>
				</div>
				<Breathing breathsPerMinute={speed} />
				<div className="flex justify-between w-full">
					<Menu />
					<Speed breathsPerMinute={speed} handleSpeedChange={setSpeed} />
				</div>
			</main>
		</div>
	);
}
