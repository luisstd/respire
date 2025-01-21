import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Respire - Breathing App",
    short_name: "Respire",
    description:
      "Respire is a tool for breathing exercises. Simply breathe with the circle.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#BF52B6",
    icons: [
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
