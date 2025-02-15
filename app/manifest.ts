import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Respire - Breathing App",
    id: "respire",
    short_name: "Respire",
    description:
      "Respire is a tool for breathing exercises. Simply breathe with the circle.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    screenshots: [
      {
        src: "/screenshot.png",
        sizes: "1170x2532",
        type: "image/png",
        form_factor: "narrow",
      },
      {
        src: "/screenshot-wide.png",
        sizes: "2048x1808",
        type: "image/png",
        form_factor: "wide",
      },
    ],
    icons: [
      {
        src: "/maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
