import { Theme } from "@/components/theme";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Circle,
	Info,
	PanelRight,
	PanelRightOpen,
	Sidebar,
} from "lucide-react";
export const Menu: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					style={{ scale: 1.3 }}
					aria-label="Info menu"
				>
					<PanelRightOpen />
				</Button>
			</SheetTrigger>

			<SheetContent side="left" className="flex flex-col items-start h-full">
				<SheetHeader>
					<SheetTitle>
						<div className="flex items-center gap-2">
							<Circle color="hsl(305deg,46%,54%)" fill="hsl(305deg,46%,54%)" />
							<span className="scroll-m-20 text-xl font-semibold tracking-tight">
								Respire
							</span>
						</div>
					</SheetTitle>
					<SheetDescription className="text-left">
						Respire is a simple app for breathing exercises
					</SheetDescription>
				</SheetHeader>

				<Separator className="w-full" />

				<span className="scroll-m-20 text-md font-semibold tracking-tight">
					Theme settings
				</span>
				<Theme />
			</SheetContent>
		</Sheet>
	);
};
