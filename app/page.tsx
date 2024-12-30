import { Breathing } from "@/components/breathing";
import { Slider } from "@/components/ui/slider";

export default function Home() {
	return (
		<div className="grid place-items-center min-h-screen">
			<main className="flex flex-col items-center gap-32">
				<div className="flex items-center gap-3 text-2xl font-sans font-bold">
					<p>Breathe with the circle</p>
				</div>
				<Breathing />
			</main>
		</div>
	);
}
