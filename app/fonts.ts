import { Karla } from "next/font/google";

export const font = Karla({
	subsets: ["latin", "latin-ext"],
	display: "swap",
	preload: true,
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal"],
	variable: "--font-sans",
	fallback: ["system-ui", "Inter"],
});
