import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleEllipsis } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

interface SpeedProps {
	breathsPerMinute?: number;
	handleSpeedChange?: (speed: number) => void;
}

export const Speed: React.FC<SpeedProps> = ({ handleSpeedChange }) => {
	const [activeSpeed, setActiveSpeed] = useLocalStorage("speed", 7);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const speeds = [4, 5, 6, 7, 8, 9, 10];

	const handleButtonClick = (speed: number) => {
		setActiveSpeed(speed);
		handleSpeedChange?.(speed);
		setIsDrawerOpen(false);
	};

	return (
		<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
			<DrawerTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					style={{ scale: 1.3 }}
					onClick={() => setIsDrawerOpen(true)}
					aria-label="Speed settings"
				>
					<CircleEllipsis />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Adjust your breathing speed</DrawerTitle>
					<DrawerDescription>Select breaths per minute</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<div className="flex flex-wrap gap-2 pb-10 mx-auto">
						{speeds.map((speed) => (
							<Button
								key={speed}
								size="icon"
								variant={activeSpeed === speed ? "secondary" : "outline"}
								onClick={() => handleButtonClick(speed)}
							>
								{speed}
							</Button>
						))}
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
