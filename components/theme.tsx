import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { JSX } from "react";

export const Theme: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const icons: { [key: string]: JSX.Element } = {
		light: <Sun size={16} />,
		dark: <Moon size={16} />,
		system: <Laptop size={16} />,
	};

	const capitalize = (str: string) =>
		str.charAt(0).toUpperCase() + str.slice(1);

	return (
		<Select
			value={theme || "system"}
			onValueChange={(value) => setTheme(value)}
		>
			<SelectTrigger>
				<SelectValue placeholder="Select Theme">
					<div className="flex items-center gap-2">
						{icons[theme || "system"]}
						{capitalize(theme || "system")}
					</div>
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Select Theme</SelectLabel>
					<SelectItem value="light">
						<div className="flex items-center gap-2">
							<Sun size={16} />
							Light
						</div>
					</SelectItem>
					<SelectItem value="dark">
						<div className="flex items-center gap-2">
							<Moon size={16} />
							Dark
						</div>
					</SelectItem>
					<SelectItem value="system">
						<div className="flex items-center gap-2">
							<Laptop size={16} />
							System
						</div>
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
