import type { Metadata } from "next";
import { font } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Respire",
  description: "Breathing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
