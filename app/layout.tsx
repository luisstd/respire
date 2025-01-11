import type { Metadata, Viewport } from "next";
import { font } from "./fonts";
import "./globals.css";
import PlausibleProvider from "next-plausible";

export const viewport: Viewport = {
	themeColor: "hsl(305deg 46% 54%)",
};

export const metadata: Metadata = {
	title: "Respire - Breathing App",
	description:
		"Respire is a tool for breathing exercises. Simply adjust your breath to the circle.",
	applicationName: "Respire",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Next.js",
		"React",
		"TypeScript",
		"Respire",
		"Breathing",
		"App",
		"Mediation",
		"Mindfulness",
		"Relaxation",
	],
	authors: [{ name: "Luis", url: "https://lstd.dev" }],
	creator: "Luis Steidle",
	publisher: "Noisia Labs",
	category: "",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Respire - Breathing App",
		description:
			"Respire is a tool for breathing exercises. Simply adjust your breath to the circle.",
		url: "https://respire.site",
		siteName: "Respire",
		locale: "en_US",
		type: "website",
		// images: [
		// 	{
		// 		url: "https://nextjs.org/og.png",
		// 		width: 800,
		// 		height: 600,
		// 		alt: "Respire - Breathing App",
		// 	},
		// 	{
		// 		url: "https://nextjs.org/og-alt.png",
		// 		width: 1800,
		// 		height: 1600,
		// 		alt: "Respire - Breathing App",
		// 	},
		// ],
	},
	twitter: {
		card: "summary_large_image",
		title: "Respire - Breathing App",
		description:
			"Respire is a tool for breathing exercises. Simply adjust your breath to the circle.",
		// images: ["https://nextjs.org/og.png"],
	},
	appLinks: {
		web: {
			url: "https://respire.site",
			should_fallback: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<PlausibleProvider domain="respire.site" />
			</head>
			<body className={font.className}>{children}</body>
		</html>
	);
}
