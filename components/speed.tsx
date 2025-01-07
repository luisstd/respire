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

interface SpeedProps {
	breathsPerMinute?: number;
	handleSpeedChange?: (speed: number) => void;
}

export const Speed: React.FC<SpeedProps> = ({ handleSpeedChange }) => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button size="icon" variant="ghost" style={{ scale: 1.3 }}>
					<CircleEllipsis />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Adjust your breathing speed</DrawerTitle>
					<DrawerDescription>Select breaths per minute</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<div className="flex gap-2 pb-10 mx-auto">
						<Button
							size="icon"
							variant="outline"
							onClick={() => handleSpeedChange?.(4)}
						>
							4
						</Button>
						<Button
							size="icon"
							variant="outline"
							onClick={() => handleSpeedChange?.(5)}
						>
							5
						</Button>
						<Button
							size="icon"
							variant="outline"
							className=""
							onClick={() => handleSpeedChange?.(6)}
						>
							6
						</Button>
						<Button
							size="icon"
							variant="outline"
							onClick={() => handleSpeedChange?.(7)}
						>
							7
						</Button>
						<Button
							size="icon"
							variant="outline"
							onClick={() => handleSpeedChange?.(8)}
						>
							8
						</Button>
						<Button
							size="icon"
							variant="outline"
							onClick={() => handleSpeedChange?.(9)}
						>
							9
						</Button>
						<Button
							size="icon"
							variant="outline"
							onClick={() => handleSpeedChange?.(10)}
						>
							10
						</Button>
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
