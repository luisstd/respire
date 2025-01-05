import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Circle, Info } from "lucide-react";
import Link from "next/link";

export const Menu: React.FC = () => {
	const year = new Date().getFullYear();
	return (
		<Sheet>
			<SheetTrigger>
				<Info />
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col items-start h-full">
				<SheetHeader>
					<SheetTitle>
						<div className="flex items-center gap-2">
							<Circle color="hsl(305deg,46%,54%)" fill="hsl(305deg,46%,54%)" />
							Respire
						</div>
					</SheetTitle>
					<SheetDescription className="text-left">
						Respire is a simple app for breathing exercises
					</SheetDescription>
				</SheetHeader>
				<SheetFooter className="text-secondary-foreground text-sm mt-auto">
					<Link href="https://noisia.co" target="_blank">
						&#169; {year} Noisia Labs
					</Link>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
