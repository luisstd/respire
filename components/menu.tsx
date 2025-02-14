import { Theme } from "@/components/theme";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
			<SheetTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					style={{ scale: 1.3 }}
					aria-label="Info menu"
				>
					<Info />
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

				<SheetFooter className="text-secondary-foreground text-sm mt-auto">
					<Link
						href="https://noisia.co"
						target="_blank"
						className="hover:underline"
					>
						&#169; {year} Noisia Labs
					</Link>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
